/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/
const Area = function(l1,l2){
    let newArea = l1 * l2 ;
    return newArea ;
}
console.log(Area(2,3));
/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/
 const crazySum = function(a,b)
 {
     let sum = a + b ;
     let Val = a === b ? tripleSum = sum * sum * sum : tripleSum = sum 
     return tripleSum;
 }
 console.log(crazySum(1,1))
/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/
 const crazyDiff = function(e)
 {
    let AbsDiff = e - 19 ;
    let val1 = e > 19 ? AbsDiff = AbsDiff * AbsDiff * AbsDiff : AbsDiff = AbsDiff;
    return AbsDiff; 
 }
 console.log(crazyDiff(21))
 /* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/
 const boundary = function(n)
 {
     let val2 = (n > 20 && n < 100 || n === 400 )? true : false 
    return val2;
 } 
 console.log(boundary(43));

 /* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front
 of a given string, if the given string begins with "Strive" then return the original string.
*/
 const strivify = function(S)
 {
     let str = "Strive leggo";
    // let StrConcat = str + S;
     let val3 = str === "strive" ? str = "leggo" : str = StrConcat
     return val3 ;
 } 
 console.log(strivify("strive"))
 /* EXERCISE 6
Write a function "check3and7" which accepts a positive number 
and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
 const check3and7 = function(x)
 {
     let val4 = x % 3 || x % 7 ? true : false 
     return val4;
 }
 console.log(check3and7(3))
 /* WRITE YOUR CODE HERE */
​
/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/
const reverseString = function(strr)
{
    let revStr = strr.split("").reverse().join("")
    return revStr;
}
console.log(reverseString('quadri'));
/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/
const upperFirst = function(upfir)
{
  let upFirst = upfir.charAt(0).toUpperCase() + upfir.slice(1);
  return upFirst;
}
console.log(upperFirst("sadiq"))
/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
let cutString = function(cStr){
    return cStr.substr(1).slice(0,-1);
}
console.log(cutString("think"))

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/
let giveMeRandom = function(n)
{
    let randomArray=[]
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;  
      }
      let randomCalc = n.getRandomArbitrary(0,10)
      return randomCalc.push(randomArray)   
}
console.log(giveMeRandom(3))












 


