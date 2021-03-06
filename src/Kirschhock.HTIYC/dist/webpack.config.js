var path = require("path");
module.exports = {
    entry: "./wwwsrc/index.ts",
    mode: "production",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
        modules: [path.resolve(__dirname, "./node_modules/")],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./wwwroot/js"),
    },
};
//# sourceMappingURL=webpack.config.js.map