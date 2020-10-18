module.exports = {
    plugins: {
        '@fullhuman/postcss-purgecss': {
            content: [
                './layouts/**/*.html', 
                './assets/js/*.js',
                './static/js/*.js'
              ],
            whitelist: [
                'highlight',
                'language-bash',
                'pre',
                'video',
                'code',
                'content',
                'h3',
                'h4',
                'ul',
                'li'
            ]
        },
        autoprefixer: {},
        cssnano: {preset: 'default'}
    }
  };