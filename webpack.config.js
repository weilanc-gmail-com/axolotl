const path = require("path");
const { webpack } = require("webpack");
//import css from 'file.css';
//new webpack.EnvironmentPlugin(["NODE_ENV", "DEBUG"]);
module.exports = () => {
  //console.log("process.env: ", process.env);

  console.log("process.env.node_env: ", process.env.NODE_ENV);

  return {
    entry: "./client/index.js",
    devServer: {
      publicPath: "/build/",
      historyApiFallback: true,
      contentBase: './client',
      proxy: {
        '/login': 'http://localhost:3000',
        '/login/home': 'http://localhost:3000',
        '/users/login': 'http://localhost:3000',
        '/users/profile': 'http://localhost:3000',
        '/users/new-profile': 'http://localhost:3000',
        '/users/users': 'http://localhost:3000',
        '/users/potential-matches': 'http://localhost:3000',
        '/users/matches': 'http://localhost:3000',
      }
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js",
    },
    mode: process.env.NODE_ENV,
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
  };
};
