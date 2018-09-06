const path = require('path');

module.exports = {
    entry: {
        main: ["./src/extra.js", "./src/main.js"]
    },
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    mode: "development",
    devServer: {
        contentBase: "dist"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, 
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    }
}