# configureStore
- https://redux-toolkit.js.org/introduction/quick-start
- https://redux-toolkit.js.org/api/configureStore


- wraps createStore to provide simplified configuration options and good defaults. 
- It can automatically combine your slice reducers, adds whatever Redux middleware you supply, 
- includes redux-thunk by default, 
- and enables use of the Redux DevTools Extension.

## human
1. 简单的 configuration 还有一些默认的配置
2. auto combile slice reduces
3. 添加 redux-thunk
4. 自带 redux devtools


## full example
```js
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

// We'll use redux-logger just as an example of adding another middleware
import logger from 'redux-logger'

// And use redux-batch as an example of adding enhancers
import { reduxBatch } from '@manaflair/redux-batch'

import todosReducer from './todos/todosReducer'
import visibilityReducer from './visibility/visibilityReducer'

const reducer = {
  todos: todosReducer,
  visibility: visibilityReducer
}

const middleware = [...getDefaultMiddleware(), logger]

const preloadedState = {
  todos: [
    {
      text: 'Eat food',
      completed: true
    },
    {
      text: 'Exercise',
      completed: false
    }
  ],
  visibilityFilter: 'SHOW_COMPLETED'
}

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
  enhancers: [reduxBatch]
})

// The store has been created with these options:
// - The slice reducers were automatically passed to combineReducers()
// - redux-thunk and redux-logger were added as middleware
// - The Redux DevTools Extension is disabled for production
// - The middleware, batch, and devtools enhancers were composed together
```
