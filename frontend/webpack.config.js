const path = require('path');

module.exports = {
    mode: 'development',
    entry: [
        "./src"
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
        
    },
    devServer: {
        compress: true,
        port: 9000
    }
}
