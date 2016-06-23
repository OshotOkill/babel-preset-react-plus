# babel-preset-react-plus

> Babel preset for react development with some additional ECMAScript propersal based on babel-preset-es2015/react.

```NOTE
NOTE: This preset is based on Babel v6 and is not compitable with Babel v5.
```
## Install

```sh
$ npm install --save-dev babel-preset-react-plus

//or

$ npm i -D babel-preset-react-plus
```

## Introdcution

This preset includes the following ECMAScript propersals:

* [`Class and Property Decorators`](https://github.com/wycats/javascript-decorators/blob/master/README.md)
* [`Class Property Declarations`](https://github.com/jeffmo/es-class-fields-and-static-properties)
* [`Rest/Spread Properties`](https://github.com/sebmarkbage/ecmascript-rest-spread) 

Since above three are becoming the most frequently used propersals in react apps I decide to intergrate them
into one preset which also includes the basic `babel-preset-es2015` and `babel-preset-react` so that We no longer
need to download them separately and enable these propersals by downloading corresponding syntax-parsing plugins manually.
Except this you can also download babel-preset-stage-* together with those syntax-parsing plugins but it is unconvenient and
include some other transform modules you'll probably never use.

## Internal presets and plugins

* babel-preset-es2015
* babel-preset-react
* babel-plugin-syntax-class-properties
* babel-plugin-transform-class-properties
* babel-plugin-transform-object-rest-spread
* babel-plugin-transform-decorators-legacy