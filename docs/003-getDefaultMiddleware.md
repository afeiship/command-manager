# getDefaultMiddleware
- https://redux-toolkit.js.org/api/getDefaultMiddleware


```js
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});
```

## defaults
```js
// beta
const middleware = [
  thunk, 
  immutableStateInvariant, 
  serializableStateInvariant
];

// production
const middleware = [thunk]
```


## API Reference
```js
interface ThunkOptions<E = any> {
  extraArgument: E
}

interface ImmutableStateInvariantMiddlewareOptions {
  // See "Immutability Middleware" page for definition
}

interface SerializableStateInvariantMiddlewareOptions {
  // See "Serializability Middleware" page for definition
}

interface GetDefaultMiddlewareOptions {
  thunk?: boolean | ThunkOptions
  immutableCheck?: boolean | ImmutableStateInvariantMiddlewareOptions
  serializableCheck?: boolean | SerializableStateInvariantMiddlewareOptions
}

function getDefaultMiddleware<S = any>(
  options: GetDefaultMiddlewareOptions = {}
): Middleware<{}, S>[]
```
