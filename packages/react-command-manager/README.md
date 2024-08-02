# react-command-manager
> React command manager.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-command-manager
```

## usage
import js
  ```js
  import React from 'react';
  import { scanVite } from '@jswork/scan-modules';
  import nx from '@jswork/next';
  import ReactCommandManager from '@jswork/react-command-manager';

  const moduleFiles = import.meta.glob('./shared/commands/**/*.ts', { eager: true });
  const modules = scanVite(moduleFiles, { modules: '/commands/' });

  export default () => {
    return (
      <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
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
  };

  ```

## preview
- https://afeiship.github.io/react-component-mono-lib/

## license
Code released under [the MIT license](https://github.com/afeiship/react-component-mono-lib/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-component-mono-lib
[version-url]: https://npmjs.org/package/@jswork/react-component-mono-lib

[license-image]: https://img.shields.io/npm/l/@jswork/react-component-mono-lib
[license-url]: https://github.com/afeiship/react-component-mono-lib/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-component-mono-lib
[size-url]: https://github.com/afeiship/react-component-mono-lib/blob/master/dist/react-component-mono-lib.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-component-mono-lib
[download-url]: https://www.npmjs.com/package/@jswork/react-component-mono-lib
