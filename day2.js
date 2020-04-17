/* EXERCISE 1
Create and array with the first 5 positive numbers
*/
const myArray = [1,2,3,4,5];
/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/
console.log(myArray);
const myObject = {
    name : "Quadri",
    surname: "Akande",
    email: "quadriomofolarinakande@gmail.com",
    age: 23,
};
/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/
myObject.License = false  ;
/* EXERCISE 4
Remove from the previously created object the age
*/
delete myObject.age;
/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/
const secondObject = {
    name :"Malik",
    surname :"Akande",
    email : "malikeakande@hotmail.com",
    age : 20,
};
const val =  myObject.email === secondObject.email ? true : false ;
console.log(val);
/* EXERCISE 6
You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/
const totalShoppingCart = ['totalCost' , 'totalShoppingCost' , 10];
console.log(totalShoppingCart.length);
let total_cost = totalShoppingCart[0] ;
let total_shop_cost = totalShoppingCart[1];
const ship_value = totalShoppingCart[2];
const new_total_cost = total_shop_cost === 50 ? total_cost = total_shop_cost : total_cost = total_shop_cost + ship_value;
console.log(new_total_cost);

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/
const blackFridayTotalCost = new_total_cost * 0.2;
console.log(blackFridayTotalCost);
/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/
const car1 = {
    brand: "toyota" ,
    model : 2000 ,
    licensePlate : 12345,
};
const car2 = {};
const car3 = {};
const car4 = {};
const car5 = {};
const car6 = {};
const car7 = {};
Object.assign(car2,car1);
Object.assign(car3,car1);
Object.assign(car4,car1);
Object.assign(car5,car1);
Object.assign(car6,car1);
delete car2.licensePlate;
delete car3.licensePlate;
delete car4.licensePlate;
delete car5.licensePlate;
delete car6.licensePlate;
car2.LicensePlate = 3457;
car3.LicensePlate = 3458;
car4.LicensePlate = 3459;
car5.LicensePlate = 3451;
car6.LicensePlate = 3452;
console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);
console.log(car5);
console.log(car6);
/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/
const carForRent = [{car1} , {car2} , {car3} , {car4} ,{car5} , {car6}];
/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/
carForRent.pop();
carForRent.shift();
console.log(carForRent);
/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/
console.log(car1.brand);
const carr1 = {
    brand: "toyota" ,
    model : 2000 ,
    licensePlate : 12345,
};
const carr2 = {
    brand: "toyota" ,
    model : 2000 ,
    licensePlate : 12345,
};
const carr3 = {
    brand: "toyota" ,
    model : 2000 ,
    licensePlate : 12345,
};
/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/
const carForSale = [{carr1} , {carr2} , {carr3}];
console.log(carForSale);
const totalCars = carForRent.length + carForSale.length;
console.log(totalCars);
/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/
console.log(carr1);
console.log(carr2);
console.log(carr3);
console.log(kjdsh);



