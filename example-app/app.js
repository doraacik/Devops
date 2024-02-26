console.log("hello world!");

//var değişkenler programda akışında değişmezler, let değişkenleri ise program akışında değişebilir.
const my_name = "Dora";
const age = 22;
let isMarried = false;

console.log(my_name);
console.log(age);
console.log(isMarried);

isMarried = true;
console.log(isMarried);

const number1 = 10;
const number2 = 20;

console.log(number1 + number2);

if(age >= 18){
    console.log("You are an adult.");
}
else{
    console.log("You are a child");
}

//object
const person = {
    my_name :"Dora",
    age : 22,
    isMarried : false
};

console.log(person);
console.log(person.age);
console.log(person.my_name);
console.log(person.isMarried);

//void function
function sayHello(){
    console.log("Hello world!!");
}

function computeSum(number1,number2){
    return number1 + number2;
}

sayHello();

const total = computeSum(20,20);
console.log(total);
