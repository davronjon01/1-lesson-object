"use strick";


const obj = {
    name: "div",
    height: 400,
    width: 400,
    colors: {
        border: "black",
        bg: "crimson",
    },
};

console.log(Object.keys(obj).length);

let counter = 0;

for(let key in obj) {
    if(typeof obj[key] == "object") {
        for(let i in obj[key]) {
            console.log(`Property ${key} value ${obj[key][i]}`)
            counter++;
        }
    } else{
        console.log(`Property ${key} value ${obj[key]}`)
        counter++;
    }   
}
console.log(counter);



const messi = {
    ranaldo: function() {
        console.log("Bar messi kuchli");
    }
}

messi.ranaldo();