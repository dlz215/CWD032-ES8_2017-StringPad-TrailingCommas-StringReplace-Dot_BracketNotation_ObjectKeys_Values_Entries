// STRING PADDING: padStart() and padEnd()

// string is padded with specified number of spaces
let animal = 'turtle';
console.log(animal.padStart(10));
console.log(animal.padEnd(10) + animal);

// TRAILING COMMAS: don't cause an error. Can be useful for generating long parameter lists.
const fn1 = (a, b, c, d,) => {
    console.log(a);
}
fn1(1,2,3,4);

// ENTRIES, VALUES, AND KEYS METHODS
let obj1 = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr. Grinch'
}

// PROPERTY ACCESSORS: Dot Notation vs. Bracket Notation
// with bracket notation, property is a string or symbol
console.log('bracket notation: ', obj1['username0']);

// KEYS METHOD
// Object.keys() returns array of object's property names
console.log(Object.keys(obj1));

// now can use array methods on object properties such as forEach()
// iterate through each key-value pair
Object.keys(obj1).forEach((key, index) => {
    console.log(key, obj1[key]);
})

// VALUES METHOD
// Object.values() returns array of object's property values
console.log(Object.values(obj1));

// iterate through object values
Object.values(obj1).forEach(value => {
    console.log(value);
})

// VALUES AND ENTRIES METHOD
// Object.values() returns array of key-pair values
console.log(Object.entries(obj1));

// iterate through each key-value pair
Object.entries(obj1).forEach(value => {
    console.log(value);
})

// STRING REPLACE
// easier to manipulate key-value pairs using Object.entries
Object.entries(obj1).map(value => {
    return value[1] + value[0].replace('username', '');
})




