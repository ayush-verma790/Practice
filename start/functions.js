
function sum(a,b){
    return a*b;
}
console.log(sum(3,3))
// function expression 
const z=function (a,b) {return a+b}
console.log(z(2,2))
console.log(typeof(z))

const d=(x,y) =>{
    if(y==undefined) y=2;

}
console.log(d(1))

function rest(...args)
{
let sum=0;
for( arg of args) sum+=arg;
return sum;
}
console.log(rest(1,2,3,4,5))