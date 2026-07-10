// dates
// let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString());
// console.log(typeof mydate);

// let mycreatedDate = new Date("01-14-2023")
// console.log(mycreatedDate.toLocaleDateString());
let newdate = new Date()
console.log(newdate.getMonth()+1);

newdate.toLocaleString('default',{
    weekday: "long",
})
