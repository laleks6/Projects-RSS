const { resolve } = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: resolve(__dirname, './dist'),
        port: 8080,
    },
};
