# Merge Three Collections - TypeScript

Implements:

`merge(collection_1, collection_2, collection_3): int[]`

The result is sorted ascending **without using `sort()`**.

## Input assumptions

- `collection_1`: ascending, minimum -> maximum
- `collection_2`: ascending, minimum -> maximum
- `collection_3`: descending, maximum -> minimum

## Algorithm

Read `collection_1` and `collection_2` from left to right.
Read `collection_3` from right to left because it is descending.
At each step, compare the three current values and append the smallest one.

Time: **O(n + m + p)**

Space: **O(n + m + p)** for the returned array.

## Setup

Requirements: Node.js 18+ and npm.

```bash
npm install
```

## Unit tests

```bash
npm test
```

Watch mode:

```bash
npm run test:watch
```

## Build and execute

```bash
npm run build
npm start
```

Expected output:

```text
[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```

## Structure

```text
merge-typescript-project/
├── src/
│   ├── index.ts
│   └── merge.ts
├── test/
│   └── merge.test.ts
├── package.json
├── tsconfig.json
└── README.md
```
