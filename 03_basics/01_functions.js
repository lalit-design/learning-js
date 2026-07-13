// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

const result = addTwoNumbers(5,6)

function addTwoNumbers(number1,number2){
        // let result = number1 + number2;
        // return result
        return number1+number2
}
// console.log(result);

function LoginUserMessage(username){
    if(!username){
        return `please enter username`
    }else{
    return `${username} just logged in`
    }
}
// console.log(LoginUserMessage(""));

function calculateCart(...num1){
    return num1
}
// console.log(calculateCart(200,300,400));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "sam"
//     price: 399
// })

const myNewArray = [200,400,500,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));


