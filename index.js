module.exports = {
  presets: [
    require("babel-preset-react")
  ],
  plugins: [
    require("babel-plugin-transform-decorators-legacy").default,
    require("babel-plugin-syntax-class-properties"),
    require("babel-plugin-transform-class-properties"),
    require("babel-plugin-syntax-object-rest-spread"),
    require("babel-plugin-transform-object-rest-spread"),
    require("babel-plugin-syntax-export-extensions"),
    require("babel-plugin-transform-export-extensions")
  ]
};