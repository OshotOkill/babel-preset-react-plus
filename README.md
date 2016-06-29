# babel-preset-react-plus

> Babel preset for react development with some additional ECMAScript propersal based on babel-preset-react.

```NOTE
NOTE: This preset requires Babel v6+.
```
## Install

```sh
$ npm install --save-dev babel-preset-react-plus

// or

$ npm i -D babel-preset-react-plus
```

## Introdcution

This preset includes the following ECMAScript propersals:

* [`Class and Property Decorators`](https://github.com/wycats/javascript-decorators/blob/master/README.md)
* [`Class Property Declarations`](https://github.com/jeffmo/es-class-fields-and-static-properties)
* [`Rest/Spread Properties`](https://github.com/sebmarkbage/ecmascript-rest-spread)
* [`export * as ns from "mod";  statements`](https://github.com/leebyron/ecmascript-export-ns-from)
* [`export v from "mod";  statements`](https://github.com/leebyron/ecmascript-export-default-from)

Since above five are becoming the most frequently used propersals in react apps I decide to intergrate them
into one preset which also includes the basic `babel-preset-react` so that we no longer
need to download them separately and enable these propersals by downloading corresponding **syntax-parsing plugins** manually.
Except this you can also download `babel-preset-stage-*` together with those syntax-parsing plugins but it is unconvenient and
includes some other transform modules you'll probably never use.

## Internal presets and plugins

* [babel-preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react)
* [babel-plugin-syntax-class-properties](https://github.com/babel/babel/tree/master/packages/babel-plugin-syntax-class-properties)
* [babel-plugin-transform-class-properties](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-class-properties)
* [babel-plugin-syntax-object-rest-spread](https://github.com/babel/babel/tree/master/packages/babel-plugin-syntax-object-rest-spread)
* [babel-plugin-transform-object-rest-spread](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-object-rest-spread)
* [babel-plugin-transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy)
* [babel-plugin-syntax-export-extensions](https://github.com/babel/babel/tree/master/packages/babel-plugin-syntax-export-extensions)
* [babel-plugin-transform-export-extensions](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-export-extensions)

## Boilerplate

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

> export-extensions

```export-extension
// It's a common pattern that Separating React components into corresponding files 
// And we need to create a index.js to export all imported components

// Before
import A from './a';
import B from './b';
import C from './c';
import { doSomeThing } from './D';

export { A, B, C, doSomeThing };

// After
export A from './a';
export B from './b';
export C from './c';
export { doSomeThing } from './D';
```

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
