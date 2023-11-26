
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
