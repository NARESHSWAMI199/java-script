let age = parseInt(prompt('Enter the your age : '));

if(age >=18 && age <=35){
    status = "try demo";
}
else {
    status = "Sorry you are not my aduience";
}

console.log(status)


// Swith and case in javascript

// when i use this with switch case then we need to change i integer value
// let age = parseInt(prompt('Enter the your age : '));


// switch (age) {
//     case 0 : 
//         status = "Frist Bron bro";
//         break;
//     case 18 : 
//         status =  "try demo";
//         break;
//     default: 
//         status =  "ok don't like that";
//         break;
// }

// console.log(status)
 


let num1 = prompt('Enter a Number : ');
let num2 = prompt('Enter the second value : ');

console.log(num1*num2);