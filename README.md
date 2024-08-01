# command-manager
> React command manager.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation

```shell
yarn add @jswork/command-manager
```

## usage

> 1. Add provider to root.
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { scanVite } from '@jswork/scan-modules';
import ReactCommandManager from '@jswork/command-manager';

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
import { defineCommand } from '@jswork/command-manager';

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

> 3. execute a command
```jsx
<button onClick={() => nx.$exec('posts.create')}>Create</button>
```


## example
  ```js
  import { scanVite } from '@jswork/scan-modules';
  import nx from '@jswork/next';
  import { ReactCommandManager } from '@jswork/command-manager/main';

  const moduleFiles = import.meta.glob('./shared/commands/**/*.ts', { eager: true });
  const modules = scanVite(moduleFiles, { modules: '/commands/' });


  function App() {
    return (
      <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
        <div className="badge badge-warning absolute right-0 top-0 m-4">
          Build Time: {BUILD_TIME}
        </div>
        <button onClick={() => nx.$exec('user.login')} className="btn btn-primary">User Login</button>
        <div className="y-2">
          <h3>Posts</h3>
          <nav className="x-2">
            <button className="btn btn-sm btn-secondary" onClick={() => nx.$exec('post.create')}>New Post</button>
            <button className="btn btn-sm btn-secondary"
                    onClick={() => nx.$exec('post.update', { title: 'New Title' })}>Update Post
            </button>
          </nav>
        </div>
        <div className="y-2">
          <h3>Products</h3>
          <nav className="x-2">
            <button className="btn btn-sm btn-secondary" onClick={() => nx.$exec('productCompare.add')}>Add to compare
            </button>
            <button className="btn btn-sm btn-secondary" onClick={() => nx.$exec('productCompare.remove')}>Remove from
              compare
            </button>
          </nav>
        </div>
        <ReactCommandManager modules={modules} />
      </div>
    );
  }

  export default App;
  ```

## preview
- https://afeiship.github.io/command-manager/

## license
Code released under [the MIT license](https://github.com/afeiship/command-manager/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/command-manager
[version-url]: https://npmjs.org/package/@jswork/command-manager

[license-image]: https://img.shields.io/npm/l/@jswork/command-manager
[license-url]: https://github.com/afeiship/command-manager/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/command-manager
[size-url]: https://github.com/afeiship/command-manager/blob/master/dist/command-manager.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/command-manager
[download-url]: https://www.npmjs.com/package/@jswork/command-manager
