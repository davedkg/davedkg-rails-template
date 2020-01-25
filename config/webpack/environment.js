const { environment } = require('@rails/webpacker')
const webpack = require("webpack")

environment.plugins.prepend("Provide",
  new webpack.ProvidePlugin({
    jQuery: "jquery",
    jquery: "jquery",
    "window.jQuery": "jquery",
    "window.$": "jquery",
    Popper: ["popper.js", "default"],
    Rails: ["@rails/ujs"]
  })
)

environment.loaders.append("expose", {
  test: require.resolve("jquery"),
  use: [{
    loader: "expose-loader",
    options: "$"
  }, {
    loader: "expose-loader",
    options: "jQuery"
  }]
})

module.exports = environment
