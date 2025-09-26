module.exports = {
  apps: [{
    name: 'tbgs-website',
    script: './dist/production.js',
    instances: 'max', // Use all available CPU cores
    exec_mode: 'cluster',
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    
    // Auto-restart on crash
    autorestart: true,
    restart_delay: 4000,
    
    // Kill timeout
    kill_timeout: 3000,
    
    // Environment file
    env_file: '.env'
  }],

  deploy: {
    production: {
      user: 'your_username',
      host: 'your_vps_ip', 
      ref: 'origin/main',
      repo: 'git@github.com:yourusername/your-repo.git',
      path: '/var/www/tbgs',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};