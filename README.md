# diff-ranges

JavaScript function that return index ranges of new objects in an array of objects and also return newly added objects.

## How to use?

### Import

```javascript
const { getDiffIndexRanges } = require('./diff-ranges');

// OR

import { getDiffIndexRanges } from './diff-ranges';
```

### Define your arrays (Example)

```javascript
const a = [
    {
		name: 'val1',
        age: 20
    },
    {
        name: 'val2',
        age: 21
    }
];

const b = [
    {
		name: 'val1',
        age: 20
    },
    {
        name: 'val2',
        age: 19
    },
    {
        name: 'val3',
        age: 21
    },
    {
        name: 'val4',
        age: 20
    }
];
```


### Use it

```javascript
const result = getDiffIndexRanges(a, b, (ai, bi) => ai.name === bi.name);
const indicesRanges = result.rangeIndices;
// [{ startRow: 2, endRow: 4 }]

const newElements = result.newElements;
/*
    [{
        name: 'val3',
        age: 21
    },
    {
        name: 'val4',
        age: 20
    }]
*/
```

### API

```javascript
getDiffIndexRanges(oldArray, newArray, comparatorFunction);
```