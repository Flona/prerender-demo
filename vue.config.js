const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
    devServer: {
        proxy: {
            '/api/': {
                target: 'http://10.20.2.57:8080',
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
                    routes: ['/', '/about/intro', '/contact', '/integrators'],
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
            // gzip
            config.plugin('compressionPlugin').use(CompressionPlugin, [
                {
                    test: /\.(js|css|json|txt|html|ico|svg|ttf|woff|png)(\?.*)?$/i, // 匹配文件名
                    threshold: 10240, // 对超过10k的数据压缩
                    deleteOriginalAssets: false // 不删除源文件
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
