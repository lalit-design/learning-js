const tinderuser = new Object()
// console.log(tinderuser);

const regularuser = {
    email : 'kesav@gmail.com',
    flipkartuser: {
        first_name: "kesav",
        last_name: "jha",
        amazonuser: {
            phone: 2334
        }
    }
}
// console.log(regularuser.flipkartuser.last_name);
// console.log(regularuser.flipkartuser.amazonuser.phone);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",3: "d"}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);
// console.log(Object.keys(regularuser));
// console.log(Object.values(regularuser));
// console.log(Object.entries(regularuser));

// console.log(regularuser.hasOwnProperty('isloggedIn'))


const course = {
    name : "lalit",
    price: 299,
    instructor: "lalit"

}

const {instructor} = course
console.log(instructor);

// {
//     name: "lalit"
//     cousename: "js in hindi"
// }
