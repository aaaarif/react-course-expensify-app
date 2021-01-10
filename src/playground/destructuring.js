// // Object destrucing.
// const person = {
//     name: 'Arif',
//     age: 28,
//     location: {
//         city: 'Edinburgh',
//         temp: -3
//     }    
// };

// const {name: firstName = 'Anonymus', age} = person;
// console.log(`${firstName} is ${age}`);

// const {temp: temperature, city} = person.location;
// console.log(`It's ${temperature} in ${city}`);

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//        // name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-published'} = book.publisher;
// console.log(publisherName); 

// Array destrucing.

const address = ['Iona street', 'Edinburgh', 'Midlothian', 'EH6 8SW'];
const [,city, county] = address;
console.log(` you are in ${city} ${county}`);

const item = ['Coffee (hot)' , '£2.00' , '£2.50' , '£2.75'];

const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);