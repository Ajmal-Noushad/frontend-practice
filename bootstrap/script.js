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