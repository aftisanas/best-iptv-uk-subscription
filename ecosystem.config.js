module.exports = {   apps: [{     name: 'best-iptv-uk-subscription',     script: 'node_modules/next/dist/bin/next',     args: 'start -p 3011',     cwd: '/home/best-iptv-uk-subscription/htdocs/best-iptv-uk-subscription.com',     instances: 1,     autorestart: true,     watch: false,     env: {       NODE_ENV: 'production',       PORT: 3011     }   }] };


