module.exports = {
  presets: [
    require("babel-preset-react")
  ],
  plugins: [
    require("babel-plugin-transform-decorators-legacy").default,
    require("babel-plugin-transform-class-properties"),
    require("babel-plugin-transform-object-rest-spread"),
    require("babel-plugin-transform-export-extensions"),
    require("babel-plugin-transform-async-to-generator")
  ]
};