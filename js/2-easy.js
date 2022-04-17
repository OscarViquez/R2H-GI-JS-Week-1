// EASY: Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer, and by how many characters.
// Example output: “The name Thomas is longer than John by 2 characters”

const personOne = "Spongebob";
const personTwo = "Will";

console.log(`The name ${personOne} is longer than ${personTwo} by ${personOne.length - personTwo.length}`)


const personEquation = personOne.length - personTwo.length;
console.log('the name' + " " +  personOne  + " " + "is longer than"  + " " + personTwo  + " " + "by"  + " " + personEquation)

