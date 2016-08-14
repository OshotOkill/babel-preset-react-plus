# babel-preset-react-plus

[![npm version](https://img.shields.io/npm/v/babel-preset-react-plus.svg?style=flat-square)](https://www.npmjs.com/package/babel-preset-react-plus)
[![npm downloads](https://img.shields.io/npm/dm/babel-preset-react-plus.svg?style=flat-square)](https://www.npmjs.com/package/babel-preset-react-plus)
[![dependencies](https://img.shields.io/david/strongloop/express.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/babel-preset-react-plus)

<br />

> Babel preset for react development with some additional ECMAScript propersal based on babel-preset-react.

```NOTE
NOTE:

- Requires Babel v6+.
- babel-preset-es2015/es2016 are excluded. You need to download them manually.
```

## Install

```sh
$ npm install --save-dev babel-preset-react-plus
```

## Introdcution

This preset includes the following ECMAScript propersals:

* [`Class and Property Decorators`](https://github.com/wycats/javascript-decorators/blob/master/README.md)
* [`Class Property Declarations`](https://github.com/jeffmo/es-class-fields-and-static-properties)
* [`Rest/Spread Properties`](https://github.com/sebmarkbage/ecmascript-rest-spread)
* [`export * as ns from "mod";  statements`](https://github.com/leebyron/ecmascript-export-ns-from)
* [`export v from "mod";  statements`](https://github.com/leebyron/ecmascript-export-default-from)
* [`Async Functions`](https://github.com/tc39/ecmascript-asyncawait)

Since above six are becoming the most frequently used propersals in react apps and async functions eventually moved into 
ES8 (ES2017) I decide to intergrate them into one preset which also includes the basic `babel-preset-react`. ~~so that we no longer
need to download them separately and enable these propersals by downloading corresponding **syntax-parsing plugins** manually.
Except this you can also download `babel-preset-stage-*` together with those syntax-parsing plugins but it is unconvenient and
includes some other transform modules you'll probably never use~~. Recently babel finally integrated their transform plugins with 
the corresponding syntax-parsing plugins thus we no longer need to download them separately. However I still think this preset useful
since the stage of propersals always change frequently which means it's hard to decide which preset-stage plugin should choose.

## Internal presets and plugins

* [babel-preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react)
* [babel-plugin-transform-class-properties](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-class-properties)
* [babel-plugin-transform-object-rest-spread](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-object-rest-spread)
* [babel-plugin-transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy)
* [babel-plugin-transform-export-extensions](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-export-extensions)
* [babel-plugin-transform-async-to-generator](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-async-to-generator)

<br />

## Boilerplate

<br />

> decorators

**react-redux**
```react-redux
import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(
  state => ({ todos: state.todos }),
  actionCreators
)
class App extends Component {
  ...
}

export default App;
```

**react-router**
```react-router
import React, { Component } from 'react';
import { withRouter } from 'react-router';

@withRouter
class App extends Component {
  ...
}

export default App;
```

**core-decorators**
```core-decorators
import React, { Component } from 'react';
import { autobind } from 'core-decorators';

@autobind
class App extends Component {
  // You don't have to set this.handleClick.bind(this) in
  // constructor or the place where it's being called
  handleClick() {...}
  ...
}

export default App;
```

<br />

> class-properties

```class-properties
import React, { Component } from 'react';

class App extends Component {
  state = {}

  handleClick = (e) => {
    
  }
  ...
}

export default App;
```

<br />

> object-spread-rest

```object-spread-rest
// Sometimes useful in redux

// reducer
const users = (state = {}, action) => {
  switch(action.type) {
    case "ADD_USER": {
      return {
        ...state,
        [action.id] = action.info
      }
    }
    ...
  }
}
```
<br />

> export-extensions

```export-extension
// It's a common pattern which separates React components into corresponding files 
// And we need to create a index.js to export all imported components

// Before
import A from './a';
import B from './b';
import C from './c';
import { foo, bar } from './utils';

export { A, B, C, foo, bar };
//or
export { default as A } from './a';
export { default as B } from './b';
export { default as C } from './c';
export { foo, bar } from './utils';

// After
export A from './a';
export B from './b';
export C from './c';
export * as utils from './utils';

```

<br />

> async-functions

```async-functions

(async function() {
  await loadStory();
  console.log("Yey, story successfully loaded!");
}());

```

<br />

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["react-plus"]
}
```

### Via CLI

```sh
$ babel script.js --presets react-plus
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["react-plus"]
});
```
