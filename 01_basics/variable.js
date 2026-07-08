const accountId = 144
let accountemail = "lalit"
var accountPassword = "123"
account_city = "Jaipur"
let accountstate;
// accountId=34 not allowed
console.log(accountId);
accountemail = "keshav"
account_city = "kanpur"
accountPassword = "321"
/*
prefer not to use var becoz of issue in block and functional scope 
*/ 
console.table([accountPassword,accountemail,account_city,accountId,accountstate])
