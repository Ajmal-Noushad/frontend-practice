let globalName = "John";

function showName() {
    let localName = "Doe";

    console.log(globalName);
    console.log(localName);
}

showName();

let sum = 10 + 5;
console.log(10>sum);
let access = isAdult && hasLicense;
let x = 10; x += 5;

let time = 20;

if (time<12) {
    console.log("Good Morning");
}

else if (time<18) {
    console.log("Good Afternoon");
}

else {
    console.log("Good Evening");
}