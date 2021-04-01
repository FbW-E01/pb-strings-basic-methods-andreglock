const qOne = "I can walk in the park all day!";

console.log(`Q1: ${qOne.slice(18,23)}`);

const qTwo = "Hello World";

console.log(`Q2: ${qTwo.toUpperCase()}`);

const qThree = "Hello Earthling";

console.log(`Q3: ${qThree.toLowerCase()}`);

const qFour = "JavaScript";

console.log(`Q4: ${qFour.slice(3,6)}`);

console.log(`Q5: ${"nice shoes".includes('l') || "nice shoes".includes('n')}`);

const qSix = 'Bananas';

console.log(`Q6: ${qSix.slice(0,1) + qSix + qSix.slice(0,1)}`);

console.log(`Q7: ${qSix.slice(4) + qSix + qSix.slice(4)}`);

console.log(`Q8: ${qSix.slice(1) + qSix.slice(0,1)}`);

let firstName = 'Linda';
let city = 'Leipzig';
let hair = 'long';

console.log(`Q9: My name is ${firstName}. I live in ${city} and my hair is ${hair}.`);

const variable = "the quick brown fox";

console.log(`Q10: ${variable.slice(0,1).toUpperCase() + variable.slice(1)}`);