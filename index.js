// Import stylesheets
import './style.css';

const users = [
  {
    id: 1,
    name: 'Princess',
    age: 22,
  },
  {
    id: 1,
    name: 'Andrew',
    age: 33,
  },
  {
    id: 2,
    name: 'Steve',
    age: 22,
  },
  {
    id: 2,
    name: 'Justin',
    age: 34,
  },
  {
    id: 1,
    name: 'Andrew',
    age: 33,
  },
];

//Direct comparing the object by making the object JSON
// *****************************************************

const data = Array.from(new Set(users.map(JSON.stringify))).map(JSON.parse);

console.log('JSON Data: ', data);
//JSON Data: [Object, Object, Object, Object]
// Only four objects are listed

// By comparing two objects with the key and values
// **************************************************

let ans = [];

users.forEach((elem, index) => {
  findDuplicate(elem, index);
});

function findDuplicate(data, i) {
  users.forEach((elem, index) => {
    if (i !== index && elem.id === data.id && elem.age === data.age) {
      ans.push(data);
      users.splice(i, 1);
    }
  });
}

console.log("Duplicate: ", ans);
// [Object] 
/*
0: Object
age: 33
id: 1
name: "Andrew"
*/

console.log("Without Duplicates: ", users);
// [Object, Object, Object, Object]
