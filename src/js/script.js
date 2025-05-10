import "purecss/build/grids-min.css"
import "purecss/build/grids-responsive-min.css"

import "/src/sass/style.scss";

let text = "Hello world";
const isOpen = true;
const pi = 3.14;

text = "This is text!"
// pi = 4

console.log(text);
console.log(pi);

const object = {
    name: "Artem",
    age: 15,
};

console.log(object.name);

const titles = [
    "Make your dream come true or decorate your home",
    "create or buy", 
    "our store", 
    "our workshop"
];

function calc(a, b) {
    console.log(a + b);
};

calc(12, 8); //Вызов функции  
calc(20, 79);

if (isOpen) {
    console.log("Shop is open");
} else {
    console.log("Shop is close");
};

const vase = document.querySelector('.touch__decor');
console.log(vase);