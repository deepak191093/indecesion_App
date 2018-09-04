const path = require('path');

console.log();
module.exports = {

    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, 'public'), //this is the absolute path where you want to output the file
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_module/
        }]


    }
};