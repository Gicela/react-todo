//function add(a,b){
//    return a + b;
//}

//console.log(add(3,1));

//USING THE SPREAD OPERATOR
//var toAdd = [9,5];
//using the spread operator to spread the values into the arguments of the function!
//console.log(add(...toAdd));


// Using the spread operator
//var groupA = ['Jean', 'Jo'];
//var groupB = ['Alice', 'Bob'];
//var final = [3,...groupA,...groupB];
//console.log(final);

//CHALLENGE 1
//Greeting function with spread operator
//Print Hello Andrew, you are 25.

//var person = ['Andrew', 25];
//var personTwo = ['Jen', 29];

//var Greeting = function(name, age){
//    return console.log('Hello ' + name + ',' + ' you are ' + age);
//}

//Greeting(...person);
//Greeting(...personTwo);

//CHALLENGE 2
//Combine multiple arrays to print a greeting for each of the names using ForEach
var names = ['Mike', 'Ben'];
var final = ['Gicela', ...names];
//Print Hi Gicela and loop over the names.
console.log(final);

final.forEach(function(name){
        console.log('Hi ' + name);
    });