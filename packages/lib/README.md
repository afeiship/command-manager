# command-manager
> React command manager.

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
import ReactCommandManager from '@jswork/command-manager/src/main';

const moduleFiles = import.meta.glob('./shared/commands/**/*.ts', { eager: true });
const modules = scanVite(moduleFiles, { modules: '/commands/', });

import App from './app';
import './index.scss';


function App(){
  return (
    <div>
      <button onClick={() => nx.$exec('posts.create')}>Create</button>
      <button onClick={() => nx.$exec('posts.update', { title: 'new title' })}>Update</button>
      <ReactCommandManager modules={modules} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
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

## 3. execute a command
```jsx
<button onClick={() => nx.$exec('posts.create')}>Create</button>
```
