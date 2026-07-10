const arr1 = [0,1,2,3,4,5,6]
// console.log(arr1);

// // array methods

// arr1.push(8)
// arr1.pop()
// console.log(arr1);
// arr1.unshift(9)
// console.log(arr1);
// arr1.shift();
// console.log(arr1);
// console.log(arr1.includes(9));
// console.log(arr1.indexOf(9));
// const arr2 = arr1.join()
// console.log(arr2);
// console.log(typeof arr2);

//slice,splice

console.log("A",arr1);
const arr3 = arr1.slice(1,3)
console.log(arr3);
console.log(arr1);
const arr4 = arr1.splice(1,3)
console.log(arr4);
console.log(arr1);


// slice print 12 if range 1 to 3 doesn't change the original arry
// splice prints 123 if range 1 to 3 changes the original array remains
// remainin 0,4,5,6




