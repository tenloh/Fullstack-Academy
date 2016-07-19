## Rename Filenames

You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (n), where "n" is the smallest positive integer such that the obtained name is not used yet.

Return an array of names that will be given to the files.

#### Examples:

```
renameFiles(["hello", 'properties', 'calculator', 'rpn_calculator', 'properties', 'calculator']);

// RETURN: ['hello', 'properties', 'calculator', 'rpn_calculator', 'properties(1)', 'calculator(1)'];

```


```
renameFiles(["a(1)","a(6)","a","a","a","a","a","a","a","a","a","a"]);

// RETURN: ["a(1)","a(6)","a","a(2)","a(3)","a(4)","a(5)","a(7)","a(8)","a(9)","a(10)","a(11)"]

```
