# createReducer
- https://redux-toolkit.js.org/api/createReducer


## 原来的
> This approach works well, but is a bit boilerplate-y and error-prone. For instance, it is easy to forget the default case or setting the initial state.The createReducer helper streamlines the implementation of such reducers. (缺点)

```js
function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'increment':
      return state + action.payload
    case 'decrement':
      return state - action.payload
    default:
      return state
  }
}
```

## countReducer
```js
const counterReducer = createReducer(0, {
  increment: (state, action) => state + action.payload,
  decrement: (state, action) => state - action.payload
})
```


```js
// 感觉这个就是创建了一个 symbol
const increment = createAction('increment')
const decrement = createAction('decrement')

const counterReducer = createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement.type]: (state, action) => state - action.payload
})
```



```js
const initialState = {
  counter: 0,
  rejectedActions: 0,
  unhandledActions: 0
}

const exampleReducer = createReducer(initialState, builder => {
  builder
    .addCase('counter', state => {
      state.counter++
    })
    .addMatcher(
      action => action.type.endsWith('/rejected'),
      (state, action) => {
        state.rejectedActions++
      }
    )
    .addDefaultCase((state, action) => {
      state.unhandledActions++
    })
})
```
