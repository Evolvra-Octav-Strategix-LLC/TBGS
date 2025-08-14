import React from 'react';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'WordPress Sync Admin - TBGS',
  description: 'Admin panel for syncing content with WordPress',
  robots: 'noindex, nofollow',
};

export default function AdminSyncPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            WordPress Content Sync Admin
          </h1>

          <div className="grid gap-6">
            {/* Connection Status */}
            <Card>
              <CardHeader>
                <CardTitle>WordPress Connection Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-green-800">WordPress API</h3>
                      <p className="text-sm text-green-600">Connected to: {process.env.WORDPRESS_API_URL}</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Connected
                    </span>
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    Test Connection
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Content Sync Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Content Synchronization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button className="h-20 flex flex-col items-center justify-center">
                      <span className="font-semibold">Sync All Locations</span>
                      <span className="text-sm opacity-75">NL + BE Cities</span>
                    </Button>
                    
                    <Button className="h-20 flex flex-col items-center justify-center" variant="outline">
                      <span className="font-semibold">Sync Specialists</span>
                      <span className="text-sm opacity-75">All Specialist Pages</span>
                    </Button>
                    
                    <Button className="h-20 flex flex-col items-center justify-center" variant="outline">
                      <span className="font-semibold">Sync Knowledge Base</span>
                      <span className="text-sm opacity-75">Articles & FAQs</span>
                    </Button>
                    
                    <Button className="h-20 flex flex-col items-center justify-center" variant="outline">
                      <span className="font-semibold">Full Sync</span>
                      <span className="text-sm opacity-75">All Content Types</span>
                    </Button>
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Sync Status</h4>
                    <div className="space-y-2 text-sm text-blue-700">
                      <div className="flex justify-between">
                        <span>NL Location Pages</span>
                        <span className="font-semibold">7/7 Synced</span>
                      </div>
                      <div className="flex justify-between">
                        <span>BE Location Pages</span>
                        <span className="font-semibold">4/4 Synced</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Specialist Pages</span>
                        <span className="font-semibold">44/44 Synced</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Knowledge Base</span>
                        <span className="font-semibold">0/12 Synced</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WordPress Admin */}
            <Card>
              <CardHeader>
                <CardTitle>WordPress Admin Access</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Manage content directly in WordPress admin panel:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <a 
                      href={`${process.env.WORDPRESS_API_URL?.replace('/graphql', '')}/wp-admin/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full h-16 flex flex-col items-center justify-center">
                        <span className="font-semibold">WordPress Admin</span>
                        <span className="text-sm opacity-75">Content Management</span>
                      </Button>
                    </a>
                    
                    <a 
                      href={`${process.env.WORDPRESS_API_URL?.replace('/graphql', '')}/wp-admin/admin.php?page=graphiql-ide`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button variant="outline" className="w-full h-16 flex flex-col items-center justify-center">
                        <span className="font-semibold">GraphQL IDE</span>
                        <span className="text-sm opacity-75">API Testing</span>
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Content Migration Guide */}
            <Card>
              <CardHeader>
                <CardTitle>Migration Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-semibold">Steps to Complete Migration:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                    <li>Install WordPress with required plugins (WPGraphQL, ACF)</li>
                    <li>Import ACF field configurations</li>
                    <li>Add custom post types (locations, diensten)</li>
                    <li>Run content sync to migrate existing pages</li>
                    <li>Upload images to WordPress Media Library</li>
                    <li>Configure SEO settings and meta descriptions</li>
                    <li>Set up revalidation webhooks</li>
                    <li>Test all pages load from WordPress</li>
                  </ol>
                  
                  <Button variant="outline" className="w-full mt-4">
                    Download Setup Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}