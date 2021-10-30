"use strick";

const person = {
    name: "Davron", // data-type string
    lastname: "Ergashev", 
    age: 19, //data-type number
    wishes: [], // array 
    language: function() {}, // funksiya 
    mother: {
        nama: "Name"
    },
};
console.log(person);

const obj = {
    name: "div",
    width: 400, 
    height: 400, 
    colors: {
        border: "crimson",
        bg: "coral",
    },
};

console.log(Object.keys(obj).length);

// console.log(obj);

// delete obj.name;
// console.log(obj);

// of

let counter = 0 ;


for(let key in obj)  {
    if(typeof obj[key] == "object") {
        for(let i in obj[key]) {
            console.log(`property ${key} value ${obj[key][i]}`);
            counter++;
        }
    } else {
        console.log(`property ${key} value ${obj[key]}`);
        counter++;
    }
}
console.log(counter);



const newMethod = {
    makeExample: function() {
        console.log("Your first method");
    }
}
newMethod.makeExample();

const options = {
    colors: {
        bg: "crimson",
        border: "coral"
    }, 
};

// console.log(options["colors"]["bg"]);

const {bg, border} = options.colors;

console.log(bg);
