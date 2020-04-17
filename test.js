/* EXERCISE 1
Write the code to execute a SUM between the number 12 and 20
*/
function sum(arr){
let fnum = arr[0]
let lnum = arr[1] 
count = Math.abs(lnum-fnum) +1 ;
sum = ((fnum + lnum) * count) / 2
return sum;
}
sum([12,20]);
console.log(sum);

/*Create a variable named X containing the number 12 */
let  x = 12 ;

/* EXERCISE 3
Create a variable named name containing the string John Doe
*/
let name = "John Doe";
/* EXERCISE 4
Execute a DIFFERENCE between the number 12 and the variable X, which stores the value 12
*/
console.log(Math.abs(12-x));
/* EXERCISE 5
Create two variables: name1 and name 2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2)
*/
name1 = "john"
name2 = "John";
if (name1 == name2){
    console.log("equal");   
}
else {
    console.log("not equal");
}
if (name1 == name2.toLowerCase() )
{
    console.log("equal");
}
else {
    console.log("false");
}
/* EXERCISE 6
Create the variable X (value less than 10). Write the code to print the literal value of the given number (ex.: 1 => one, 5 => five)
*/
let q= 6;
if (q==1)
{
    console.log("one"); 
}
if (q==2)
{
    console.log("two"); 
}
if (q==3)
{
    console.log("three"); 
}
if (q==4)
{
    console.log("four"); 
}
if (q==5)
{
    console.log("five"); 
}
if (q==6)
{
    console.log("six"); 
}

/* EXERCISE 7
Insert a value in a variable based on the resut of a ternary if
*/
let n = 4;
if (n>2)
{
    let n = 2;
    console.log(n);
}