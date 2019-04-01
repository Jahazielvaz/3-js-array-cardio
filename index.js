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
