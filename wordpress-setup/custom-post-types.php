<?php
/**
 * Custom Post Types for TBGS Headless WordPress
 * Add this to your theme's functions.php or create as a plugin
 */

// Register Locations Custom Post Type
function create_locations_post_type() {
    register_post_type('locations',
        array(
            'labels' => array(
                'name' => __('Locations'),
                'singular_name' => __('Location'),
                'add_new' => __('Add New Location'),
                'add_new_item' => __('Add New Location'),
                'edit_item' => __('Edit Location'),
                'new_item' => __('New Location'),
                'view_item' => __('View Location'),
                'search_items' => __('Search Locations'),
                'not_found' => __('No locations found'),
                'not_found_in_trash' => __('No locations found in Trash'),
            ),
            'public' => true,
            'has_archive' => true,
            'show_in_graphql' => true,
            'graphql_single_name' => 'location',
            'graphql_plural_name' => 'locations',
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
            'menu_icon' => 'dashicons-location-alt',
            'rewrite' => array('slug' => 'locations'),
        )
    );
}
add_action('init', 'create_locations_post_type');

// Register Services Custom Post Type
function create_services_post_type() {
    register_post_type('diensten',
        array(
            'labels' => array(
                'name' => __('Services'),
                'singular_name' => __('Service'),
                'add_new' => __('Add New Service'),
                'add_new_item' => __('Add New Service'),
                'edit_item' => __('Edit Service'),
                'new_item' => __('New Service'),
                'view_item' => __('View Service'),
                'search_items' => __('Search Services'),
                'not_found' => __('No services found'),
                'not_found_in_trash' => __('No services found in Trash'),
            ),
            'public' => true,
            'has_archive' => true,
            'show_in_graphql' => true,
            'graphql_single_name' => 'dienst',
            'graphql_plural_name' => 'diensten',
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
            'menu_icon' => 'dashicons-hammer',
            'rewrite' => array('slug' => 'diensten'),
        )
    );
}
add_action('init', 'create_services_post_type');

// Add GraphQL support for regular posts (Knowledge Base)
function add_graphql_to_posts() {
    register_graphql_field('Post', 'acf', [
        'type' => 'String',
        'description' => 'ACF fields for posts',
        'resolve' => function($post) {
            return get_fields($post->ID);
        }
    ]);
}
add_action('graphql_register_types', 'add_graphql_to_posts');

// Webhook for Next.js revalidation
function trigger_nextjs_revalidation($post_id) {
    $post = get_post($post_id);
    
    if (!$post || $post->post_status !== 'publish') {
        return;
    }
    
    $revalidate_url = 'https://www.tbgs.nl/api/revalidate';
    $secret = get_option('nextjs_revalidate_secret', '');
    
    if (empty($secret)) {
        return;
    }
    
    $paths = [];
    
    // Determine paths to revalidate based on post type
    if ($post->post_type === 'locations') {
        $country = get_field('country', $post_id);
        $city = get_field('city', $post_id);
        $specialist = get_field('specialist', $post_id);
        
        if ($country && $city) {
            $city_slug = sanitize_title($city);
            
            if ($country === 'nl') {
                $paths[] = "/nl/{$city_slug}";
                $paths[] = "/nl/locaties/{$city_slug}";
                
                if ($specialist) {
                    $paths[] = "/nl/{$specialist}/{$city_slug}";
                }
            } else {
                $paths[] = "/be/locaties/{$city_slug}";
                
                if ($specialist) {
                    $paths[] = "/be/{$specialist}/{$city_slug}";
                }
            }
        }
    } elseif ($post->post_type === 'post') {
        $paths[] = "/kennisbank/{$post->post_name}";
        $paths[] = "/kennisbank";
    } elseif ($post->post_type === 'diensten') {
        $paths[] = "/diensten/{$post->post_name}";
    }
    
    if (!empty($paths)) {
        $response = wp_remote_post($revalidate_url, [
            'headers' => [
                'Content-Type' => 'application/json',
                'x-webhook-secret' => $secret,
            ],
            'body' => json_encode(['paths' => $paths]),
            'timeout' => 10,
        ]);
        
        if (is_wp_error($response)) {
            error_log('Next.js revalidation failed: ' . $response->get_error_message());
        }
    }
}

// Hook into post save/update
add_action('save_post', 'trigger_nextjs_revalidation');
add_action('wp_trash_post', 'trigger_nextjs_revalidation');

// Add settings page for revalidation secret
function nextjs_revalidation_settings() {
    add_options_page(
        'Next.js Settings',
        'Next.js Settings', 
        'manage_options',
        'nextjs-settings',
        'nextjs_settings_page'
    );
}
add_action('admin_menu', 'nextjs_revalidation_settings');

function nextjs_settings_page() {
    if (isset($_POST['submit'])) {
        update_option('nextjs_revalidate_secret', sanitize_text_field($_POST['revalidate_secret']));
        echo '<div class="notice notice-success"><p>Settings saved!</p></div>';
    }
    
    $secret = get_option('nextjs_revalidate_secret', '');
    ?>
    <div class="wrap">
        <h1>Next.js Settings</h1>
        <form method="post" action="">
            <table class="form-table">
                <tr>
                    <th scope="row">Revalidation Secret</th>
                    <td>
                        <input type="text" name="revalidate_secret" value="<?php echo esc_attr($secret); ?>" class="regular-text" />
                        <p class="description">Secret key for Next.js ISR revalidation webhook</p>
                    </td>
                </tr>
            </table>
            <?php submit_button(); ?>
        </form>
    </div>
    <?php
}
?>