

var fruits = ['banana','mango','apple','graphes'];

// you can make an array like this 
var array = new Array('banana','mango','apple','graphes');

// Here you can change actual value || simple mean is muitable

array[0] = "pear";

console.log(array);


// Forloop in an array

for (let i=0; i<array.length; i++){
    console.log(array[i]);
}


// Common method which we can use with an array

// toString : // this fucntion convert the array in string

console.log(array.toString());

// join :  // You can also use join method work like same python

console.log(array.join(' * '));

// pop : // pop method default remove the last item of list or array

console.log('poped item : ', array.pop(),'now items : ',array)

// push : // you can append an item at the last index

console.log(array.push('tear'),array);

// shift : // this will remove the first item form array

console.log(array.shift(),array);    

// unshift : // This will add the first item in array

console.log(array.unshift("kiwi"),array);    

// concat : // this will concat two array

// let's check

let array2 = ['tamato','chilli','patato'];
console.log(array.concat(array2));  // done

// slice : // This will retrun a sub array

// reverse :  // This will reverse an array

console.log(array.reverse());

// sort : // sort method is work only for string arrays

console.log(array.sort());







// SOME METHODS TRY WITH INTEGER ARRAY



let someNumber = [4,3,2,6,8,8,9,7,7,453,756,78,69,5,35,36,4,5];
console.log(someNumber.sort(function (a,b){return a-b;})); //ascending order
console.log(someNumber.sort(function (a,b){return b-a;})); //desanding order

// Make an array using Forloop

let emptyArray = new Array();
for (let i = 0; i<=10; i++){
    console.log(emptyArray.push(i));
    console.log(emptyArray);
}













