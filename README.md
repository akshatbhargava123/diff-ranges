# diff-ranges

JavaScript function that return index ranges of different objects in an array of objects.

## How to use?

`
import getDiffIndexRanges from 'diff-ranges';
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

getDiffIndexRanges(a, b, (ai, bi) => ai.name === bi.name);

// [{ startRow: 2, endRow: 4 }]

`