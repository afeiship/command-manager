# immutabilityMiddleware
- https://redux-toolkit.js.org/api/immutabilityMiddleware

> A port of the redux-immutable-state-invariant middleware, customized for use with Redux Toolkit. Any detected mutations will be thrown as errors.

> You can customize the behavior of this middleware by passing any of the supported options as the immutableCheck value for getDefaultMiddleware.


```js
import {
  createSlice,
  configureStore,
  createImmutableStateInvariantMiddleware
} from '@reduxjs/toolkit'

const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    user: 'will track changes',
    ignoredPath: 'single level',
    ignoredNested: {
      one: 'one',
      two: 'two'
    }
  },
  reducers: {}
})

const immutableInvariantMiddleware = createImmutableStateInvariantMiddleware({
  ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two']
})

const store = configureStore({
  reducer: exampleSlice.reducer,
  // Note that this will replace all default middleware
  middleware: [immutableInvariantMiddleware]
})
```
