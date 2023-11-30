
let phrase="Learning to code is";
let word="worthwhile";

console.log(phrase.concat(" ",word));

let array1=["HTML","CSS","JS"];
let array2=["Bootstrap","React","Tailwind","Typescript"];
console.log(array1.concat(array2));

let array3=[1,2,3];
let array4=[4,5,6];
let array5=[7,,9];
console.log(array3.concat(array4,array5));

const escapeStr = `"FirstLine"\n\t\\SecondLine\n'ThirdLine' \n${array1}`;
console.log(escapeStr);//typeof = string
/*It is better to use backticks for string and concatenation, 
in order to use single or double quotation inside the string without escaping it.
escape characters aside single or double quote still works inside backticks*/

function fibonacciSeries(numberOfTerms){
    let fibonacciNum=[];
    let firstNum=0, secondNum=1, nextTerm;
    for(let i=1;i<=numberOfTerms;i++){
        fibonacciNum.push(firstNum);
        nextTerm=firstNum+secondNum;
        firstNum=secondNum;
        secondNum=nextTerm;
    }
    return fibonacciNum;
}
console.log(fibonacciSeries(20));

const array=["HTML", "CSS", "JS", "PHP", "MySQL"];
//console.log(array.copyWithin(1,0));

//Good for array traversing
//.entries() puts key value pairs for array manipulation
const inte=array.entries();//when used it automatically becomes object
//console.log(inte)
for(let x of inte){//this how to loop an object
    console.log(x);
}
/* outputs 
[keyValuePair,Data]
[0,'HTML']
[1,'CSS']
[2,'JS']
[3,'PHP']
[4,'MySQL']
 */
console.log(typeof inte)//object

const numbers=[22,26,17,19,18]

const checkValue=(value)=> {
    return value<20;
}//const checkValue=(value)=> value<20; same but less code
const lessThan20=numbers.every(checkValue);
console.log(lessThan20);//returns false
//if [2,16,17,19,18] returns true

array.fill("WEB",0,1); //.fill("string want to insert, startingIndex, indexToEnd")
console.log(array)

const integers=[3,23,9,17,22,32,7,8,15,52];
const lessThanTen=(value)=>value<10;
const filteredInt=integers.filter(lessThanTen);
console.table(filteredInt);//returns [3,9,7,8]

const checkingValue=(value)=>value>10;
console.log(integers.find(checkingValue));
//returns 23 because it is the first value > 10

console.log(integers.findIndex(checkingValue));
//returns index 1 which the value is 23

array.forEach((item, index)=>{
    console.log(`item: ${item} index:${index}`);
});

const text='Javascript';
const char=Array.from(text);
console.log(char.reverse());
//console.log(Array.from(text).reverse());

console.log(array.includes("JS"));//returns true
console.log(array.includes("js"));//returns false which indicates case sensitivity

console.log(array.indexOf('JS'));//returns index 2
console.log(array.indexOf('js'));//returns -1 means not inside the array
console.log(array.indexOf('JS',3));
//returns index -1 because JS can be found from index 0-2

