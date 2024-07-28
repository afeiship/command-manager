# react-command-manager
> React command manager.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation

```shell
yarn add @jswork/react-command-manager
```

## usage

> 1. Add provider to root.
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { scanVite } from '@jswork/scan-modules';
import ReactCommandManager from '@jswork/react-command-manager';

const moduleFiles = import.meta.glob('./shared/commands/**/*.ts', { eager: true });
const modules = scanVite(moduleFiles, {
  modules: '/commands/',
});

import App from './app';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ReactCommandManager modules={modules} debug>
    <App />
  </ReactCommandManager>,
);
```

> 2. define a command
```jsx
import { defineCommand } from '@jswork/react-command-manager';

export default defineCommand({
  methods: {
    init(){
      console.log('init posts will execute at first time');
    },
    create() {
      console.log('create posts');
    },
    update({ title }) {
      console.log('update post', title);
    },
  },
});
```

## 3. execute a command
```jsx
<button onClick={() => nx.$exec('posts.create')}>Create</button>
```


## example
  ```js
__GENERATE_DAPP__
  ```

## preview
- https://afeiship.github.io/react-command-manager/

## license
Code released under [the MIT license](https://github.com/afeiship/react-command-manager/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-command-manager
[version-url]: https://npmjs.org/package/@jswork/react-command-manager

[license-image]: https://img.shields.io/npm/l/@jswork/react-command-manager
[license-url]: https://github.com/afeiship/react-command-manager/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-command-manager
[size-url]: https://github.com/afeiship/react-command-manager/blob/master/dist/react-command-manager.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-command-manager
[download-url]: https://www.npmjs.com/package/@jswork/react-command-manager
