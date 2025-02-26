import index from './index.js'

console.log(index.addAccount(["", "testcase", "sample@gmail.com", 19]));
console.log(index.addAccount(["testcase2", "Surname", "samplegmail.com", 19]));
console.log(index.addAccount(["testcase2", "Surname", "samplegmail.com"]));
console.log(index.addAccount(["testcase2", "Surname", "samplegmail.com", 16]));
console.log(index.addAccount(["testcase2", "Surname", "samplegmail.com", "20"]));
console.log(index.addAccount(["Firstname", "Surname", "sample@gmail.com", 19]));
console.log(index.addAccount(["Firstname2", "Surname2", "sample2@gmail.com", 19]));