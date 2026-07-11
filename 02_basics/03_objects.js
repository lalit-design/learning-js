// singleton

// object literals

const mySym = Symbol("key1")

const jsuser = {
    name: "kaushik",
    [mySym]: "mykey1",
    age: 18,
    location: "gujrat",
    email: "kaushik@gmail.com",
    isLoggedin: false,
    last_connection: ["staurday","sunday"]
}

// console.log(jsuser[mySym]);
jsuser.email = "kaushik@goggle.com"
// Object.freeze(jsuser)
jsuser.email = "kaushikkalo@gamil.com"
// console.log(jsuser.email);

jsuser.greeting = function(){
    console.log(`hello js user,${this.name}`);
}
console.log(jsuser.greeting());
