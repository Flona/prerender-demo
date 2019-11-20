const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
    devServer: {
        proxy: {
            '/api/': {
                target: 'http://00.00.00.000:8080/isclink/',
                changeOrigin: true
            }
        }
    },
    chainWebpack: config => {
        config.module
            .rule('svg-sprite')
            .use('svgo-loader')
            .loader('svgo-loader');

        config.resolve.alias.set('@', path.join(__dirname, 'src'));

        config.when(process.env.NODE_ENV === 'production', config => {
            config.plugin('prerenderSPAPlugin').use(PrerenderSPAPlugin, [
                {
                    staticDir: path.join(__dirname, 'dist'),
                    routes: ['/', '/theme', '/usage', '/videoPlay'],
                    renderer: new Renderer({
                        inject: {
                            foo: 'bar'
                        },
                        renderAfterTime: 5000,
                        headless: true
                        // renderAfterDocumentEvent: 'render-event'
                    })
                }
            ]);
        });
    },
    pluginOptions: {
        svgSprite: {
            /*
             * The directory containing your SVG files.
             */
            dir: 'src/assets/svg',
            /*
             * The reqex that will be used for the Webpack rule.
             */
            test: /\.(svg)(\?.*)?$/,
            /*
             * @see https://github.com/kisenka/svg-sprite-loader#configuration
             */
            loaderOptions: {
                extract: true,
                spriteFilename: 'img/icons.[hash:8].svg' // or 'img/icons.svg' if filenameHashing == false
            },
            /*
             * @see https://github.com/kisenka/svg-sprite-loader#configuration
             */
            pluginOptions: {
                plainSprite: true
            }
        }
    },
    css: {
        loaderOptions: {
            // pass options to sass-loader
            sass: {
                // @/ is an alias to src/
                // so this assumes you have a file named `src/variables.scss`
                data: `
                   @import "@/styles/_variables.scss";
                `
            }
        }
    }
};
