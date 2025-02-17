const accountId = 12345
let accountEmail = "abhishek123@gmail.com"
var accountPassword = "09876" 

/* Prefer not to use var because of the block scope and fuctional scope */

accountCity = "Varanasi" //Possible but highly not recommended
let accountState;

// accountId = 23123 //not allowed

let accountId1 = 123321
let accountEmail1 = "abh@abh.com"
let accountPassword1 = "78568"
let accountCity1 = "Lucknow"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState ])
console.table([accountId1, accountEmail1, accountPassword1, accountCity1])