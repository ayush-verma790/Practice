let a=5;
 a=6;
 var c=88;
console.log(a)
function ab(){
    a=9;
    c=90;
}
console.log(a)
console.log(c)
let z='2'+3;
let y=7+ +'2';
console.log(z);
console.log(y);
// block scope
{
    var d=0;
}
console.log(d)
// data type 
/* 
Primitive data type - String
2. Number,bigint,boolean,undefined,null,symbol,object

*/
// function : A code of block     
 function check(p1,p2)
 {
    return p1*p2;
 }
 console.log(check(2,3))
 // JS object
 const person ={
    firstName:"Ayush",
    lastName:"Verma",
    age:22,
    Add:"Vill-Raskoopa bahadur Pur"

 }
 console.log(this.firstName)