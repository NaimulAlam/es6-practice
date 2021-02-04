const person = { name: 'jack william', age: 17, jod: 'facebooker', gfName: 'Ema Watson', address: 'kochukhet', phone: '0170101001', friends: ['tom hanks', 'tom cruise', 'tom yarn'] };

// const { phone } = person;

const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger Leader'
    }
}

const { leader } = complexObject.info;
console.log(leader);

const {phone, gfName, address, salary} = person; // to calling a property of the object.
// const gfName = person.gfName;
// const phone = person.phone;

console.log(phone, gfName, salary, address);
// console.log(phone);
// console.log(gfName);
// console.log(address);
// console.log(salary);

const friends = ['sakib khan', 'amir khan', 'arman khan', 'salman khan', 'shahruk khan'];
const [chotoFriend, nextFriend, ...restFriend] = friends;
console.log(chotoFriend, restFriend)