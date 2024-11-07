---
title: "Must know JavaScript Array Methods"
description: ""
date: "2024-10-17"
image: "/images/posts/020-must-know-javascript-array-methods/cover.png"
slug: must-know-javascript-array-methods
tags: ["javascript", "typescript"]
---

Here’s a list of some of the most commonly used JavaScript array methods, each explained in one sentence with a code example:

## `Array.push`

```typescript
let arr = [1, 2];
arr.push(3);
// arr = [1, 2, 3]
```

Add one or more elements to the end of an array.

## `Array.pop`

```typescript
let arr = [1, 2, 3];
let popped = arr.pop();
// popped = 3
// arr =[1, 2]
```

Removes the last element from an array and returns it.

## `Array.shift`

```typescript
let arr = [1, 2, 3];
let shifted = arr.shift();
// shifted = 1
// arr = [2, 3]
```

Removes the first element from an array and returns it.

## `Array.unshift`

```typescript
let arr = [2, 3];
arr.unshift(1);
// arr = [1, 2, 3]
```

Adds one or more elements to the beginning of an array.

## `Array.map`

```typescript
let arr = [1, 2, 3];
let doubled = arr.map((num) => num * 2);
// doubled = [2, 4, 6]
```

Creates a new array by applying the provided function to each element.

## `Array.filter`

```typescript
let arr = [1, 2, 3];
let even = arr.filter((num) => num >= 2);
// even = [1, 2]
```

Creates a new array with all elements that return truw for the given function.

## `Array.reduce`

```typescript
let arr = [1, 2, 3];
let sum = arr.reduce((total, num) => total + num, 0);
// sum = 6
```

Applies a function against all numbers with an accumulator, for example to calculate the sum of numbers.

## `Array.forEach`

```typescript
let arr = [1, 2, 3];
arr.forEach((num) => console.log(num));
// Output:
// 1
// 2
// 3
```

Runs function on each element of the array.

## `Array.find`

```typescript
let arr = [1, 2, 3];
let found = arr.find((num) => num > 1);
// found = 2
```

Returns the value of the first element that satisfies the provided function.

## `Array.findIndex`

```typescript
let arr = [1, 2, 3];
let index = arr.findIndex((num) => num > 2);
// index = 1
```

Returns the index of the first element that satisfies the provided function.

## `Array.slice`

```typescript
let arr = [1, 2, 3];
let sliced = arr.slice(1, 2);
// sliced = [2, 3]
```

Creates a shallow copy of a portion of an array into a new array givena start index and an elements count.

## `Array.splice`

```typescript
let arr = [1, 2, 3, 4];
let removed = arr.splice(1, 2);
// removed = [2, 3]
// arr = [1, 4]
```

The same as slice, but also removes the elemets from the original array.

## `Array.concat`

```typescript
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = arr1.concat(arr2);
// merged = [1, 2, 3, 4]
```

Merges two or more arrays into a new array.

## `Array.includes`

```typescript
let arr = [1, 2, 3];
// arr.includes(2) = true
// arr.includes(4) = false
```

Determines if an array contains a certain element.

## `Array.sort`

```typescript
let arr = [3, 1, 2];
arr.sort();
// arr = [1, 2, 3]
```

Sorts the elements of an array.

## `Array.toSorted`

```typescript
let arr = [3, 1, 2];
let sorted = arr.toSorted();
// sorted = [1, 2, 3]
```

Creates a new array with the sorted elements.

## `Array.reverse`

```typescript
let arr = [1, 2, 3];
arr.reverse();
// arr = [3, 2, 1]
```

Reverses the order of elements in an array in place.

## `Array.join`

```typescript
let arr = [1, 2, 3];
let str = arr.join("-");
// str = "1-2-3"
```

Joins all elements of an array into a string, separated by the given string.

## `Array.every`

```typescript
let arr = [2, 4, 6];
let allEven = arr.every((num) => num % 2 === 0);
// allEven = true
```

Checks if all elements of the array returns for the given test function.

## `Array.some`

```typescript
let arr = [1, 2, 3];
let hasEven = arr.some((num) => num % 2 === 0);
// hasEven = true
```

Checks whether at least one element in the array returns for the given test function.

## `Array.flat`

```typescript
let arr = [1, [2, [3]]];
let flatArr = arr.flat(2);
// flatArr = [1, 2, 3]
```

Flattens an array of array into a simple array.
