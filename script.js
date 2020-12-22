console.log('Karikás Gábor');

let myVariable = true;
if (myVariable === true) {
  console.log('The condition has been evaluated to true');
}

let printNumbers = 10;

for (let i = 0; i < printNumbers; i++) {
    console.log(i)
}

for (let i = 0; i < printNumbers; i++) {
    console.log(i+1)
}
for (let i = 1; i < printNumbers; i++) {
    console.log(i*2)
}

let add2 = (a, b) => {
    return a + b;  // the return keyword will give you back the result
  };
    console.log(add2(1, "abc"))

 
 let printNumbersTill = a => {
    for (let i = 0; i < a; i++) {
    console.log(i+1);}
};
    printNumbersTill(20)

    printNumbersTill(15)


let getGreetingTo = a => {
    console.log("Hello " +a + "!");
};
    getGreetingTo('Mark')


let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    }
};
printValues([0, 3, 6, 7, 9]);


let myNumbers = [10, 20, 30, 50, 12];
myNumbers.forEach((number) => {
    console.log(number);
});

let printValuess = ([0, 3, 6, 7, 9])
printValuess.forEach((arrayy) => {
    console.log(arrayy);
});