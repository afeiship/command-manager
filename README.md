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
> Example app
  ```js

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
            <button className="btn btn-sm btn-secondary" onClick={() => nx.$exec('productCompare.add')}>Add to compare</button>
            <button className="btn btn-sm btn-secondary" onClick={() => nx.$exec('productCompare.remove')}>Remove from compare</button>
          </nav>
        </div>
      </div>
    );
  }

  export default App;
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
