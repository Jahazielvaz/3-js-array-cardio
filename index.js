let inventors = [
  {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
  {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
  {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
  {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
  {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
  {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
  {first: 'Max', last: 'Planck', year: 1858, passed: 1947}
]

const people = ['Beck, Glenn', 'Becker, Carl', 'Becket, Samuel', 'Beddoes, Mick', 'Beacher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd',
  'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Miltion', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Anuerin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk',
  'Blair, Robert', 'Blair, Tony', 'Blake, William'];

//filter: Find inventors who lived between 1500 and 1600
const fifteen = inventors.filter((inventor) => (inventor.year > 1500 && inventor.year <= 1600));
const cLast = inventors.filter(lastName => lastName.last[0] === "C");
const secondE = inventors.filter(second => second.last[1] === "e");

//Map: Return the full names of all the inventors
let names = inventors.map(name => `${name.first} ${name.last}`);

//Sort: Sort the inventors from older to younger.
let ageSort = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
let alphabetSort = inventors.sort((a, b) => (a.first > b.first ? 1 : -1));

let totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year)
}, 0)

let newTotalYears = inventors.map(inventor => (inventor.passed - inventor.year))
// console.log(totalYears);
// console.log(newTotalYears);
let lastNames = inventors.reduce((result, lastName) => {
  return result + " " + [lastName.last];

}, "");

let firstNames = inventors.reduce((result, inventorName) => {
  return result + " " + inventorName.first
}, '');


//Sort inventors by years lived
let yearsLivedSort = inventors.sort((a, b) => (a.passed - a.years > b.passed - b.years));
// console.table(yearsLivedSort);






//Filter Test: Get the records of the inventors that have lived between 1700 and 1800
let passedFilter = inventors.filter(criteria => (criteria.year > 1700 || criteria.passed <= 1800));

// console.log(passedFilter);
//PASSED TEST

//Map Test: Dynamically calculate how many years each inventor lived, and dynamically have a message for each of them that tells you how many years they lived;


// let valueAssigner = () => {
//     let years = inventors.map(yearsLived => yearsLived.passed - yearsLived.year);
//     return [...years]
// }
//
// let valuesArray = valueAssigner();
//
//   let yearsCalculator = () => {
//     for(var i; i < valuesArray.length; i++){
//     inventors.yearsLived = inventors.map(values => values.yearsLived = valuesArray[i])
//   }
//   return inventors.yearsLived;
// }
//
// yearsCalculator()



// yearsCalculator()
//NOT YET: The result was. The map feature passed every value to each of the values in the array. I believe I need to create a separate function that takes in the mapped result and spreads the values to each value in the array.
//Need to study further, how to break down and parse mapped info to go into a newly assigned property of the desired

//Sort Test: Sort inventors by who lived first
let livedFirst = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

// console.table(livedFirst);
//PASSED TEST: In the beginning it didn't work, but that's simply because I had a typo, and it wasn't an understanding mistake, or anything of the sort. Great job me.


//Reduce Test: Put all the people into one single string
let allPeople = people.reduce((result, subject) => {
  result + subject;
}, '');

// console.log(allPeople);
//NOT YET: I feel like I could have passed this test if I was working with an array of objects, but i don't fully know how to work with a simple string array.
//Need to find out if I even could use the reduce method on string arrays.


//Sort by years lived
let yearsLived = inventors.sort((a, b) => {
  let lastGuy = a.passed - a.year;
  let firstGuy = b.passed - b.year;

  return lastGuy > firstGuy ? -1 : 1;
})

// console.table(yearsLived);

let age = inventors.map(inventor => inventor.passed - inventor.year);
// console.log(age);

//Find all the people whos's name contains ben somewhere in their name.
let benNames = people.filter(name => name.includes("Ben"));
console.table(benNames);
