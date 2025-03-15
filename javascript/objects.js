const person = {
    "firstName" : "Manish",
    "lastName" : "Siddhantham",
    "age" : "22",
    "hobbies" : ['watching anime', 'listening music', 'watching reels'],
    'address' : {
        'city' : 'Hyderabad',
        'location' : 'Malkajgiri'
    },
    'isMarried' : false,
    'getFullName' : function(){
        return `${this.firstName}  ${this.lastName}`
    },
    'gender' : 'Male',
    'number' : '8328244994'
}
// console.log(person);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.address);
// console.log(person.getFullName());
// console.log(person['hobbies']);
// console.log(person.address.city);
// person.lastName = "Goud"
// console.log(person.lastName);
// person.girlFriends = 0
// console.log(person.girlFriends);
// console.log(person);
// delete person.girlFriends;
// console.log(person);



//object literal
const obj ={'name':'Manish','city':'Hyderabad'};

//new keyword
let obj1 = new Object();
obj1.name = 'Kumar'
// console.log(obj1);

//constructor
function personObj(fname, lname){
    this.fname = fname;
    this.lname = lname;
}

const person1 = new personObj("hari","krishna");
const person2 = new personObj("sai","kumar");
// console.log(person1);
// console.log(person2);

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));
// Object.freeze(person);
// obj.age = 23;
// console.log(obj.age);
// Object.seal(person);
// obj.name = "Manish";
// obj.city = "Hyderabad";
// console.log(obj);

// for (let key in person){
//     console.log(key.toUpperCase());
//     console.log(`${key}=>${person[key]}`);
    
// }
Object.entries(person).forEach(([key,value])=>{console.log(`${key}=>${value}`);
})
Object.entries(person).forEach(([key])=>{console.log(`${key}`);
})













