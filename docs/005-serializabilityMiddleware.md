# serializabilityMiddleware
- https://redux-toolkit.js.org/api/serializabilityMiddleware

```js
import { Iterable } from 'immutable'
import {
  configureStore,
  createSerializableStateInvariantMiddleware,
  isPlain
} from '@reduxjs/toolkit'

// Augment middleware to consider Immutable.JS iterables serializable
const isSerializable = value => Iterable.isIterable(value) || isPlain(value)

const getEntries = value =>
  Iterable.isIterable(value) ? value.entries() : Object.entries(value)

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  isSerializable,
  getEntries
})

const store = configureStore({
  reducer,
  middleware: [serializableMiddleware]
})
```



## isPlain
```js
export function isPlain(val: any) {
  return (
    typeof val === 'undefined' ||
    val === null ||
    typeof val === 'string' ||
    typeof val === 'boolean' ||
    typeof val === 'number' ||
    Array.isArray(val) ||
    isPlainObject(val)
  )
}
```
