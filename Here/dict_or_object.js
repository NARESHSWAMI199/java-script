// This is a dict in python and here in js we call this object

// but the most diffrence is that in python every key is 
// also a string and here a you can write directe like that

// In python we can use forloop with dict but here we can't

// we can say this object oriented programing in javascript


let dict = {name:'naresh',lastName:'swami',age:19};


// you can get value like a object

console.log(dict.name);

// This is muitable beacuse we can change this

dict.name = 'manish';
console.log(dict.name);

// here you can hold a function in a key Example : 

let student = {
    name:'karuna',
    age : 18,
    height : 5.9,
    sec : 'Bca',
    allInfo: function(){
        return this.name + this.age;
        // if you use here  ',' beetween (this.name , this.age) 
        // then this will return only age
        // but when you use '+' then this will return all value
    }
}

// console.log(student.allInfo());

console.log("THis is a separator -------------------------")

// you can like that

for (let i in student){
    console.log(student[i]);
}

// this each forloop in javaScript


