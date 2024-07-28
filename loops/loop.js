// Use a for loop to calculate the sum of all numbers from 1 to 100. Print the
// result. With the help of compound operators
let sum=0;
for(let i =0 ; i<=100;i++){
    sum += i
}
console.log(sum);
// Use a for loop to calculate the factorial of a given number n. Print the result
let fact =1
let n = 5;
for(let i =1;i<=n;i++){
    fact *= i
}
console.log(fact);
// Use a for loop to print the multiplication table of a given number n up to 10.
let n2 =10;

for(let i =1 ;i<=10;i++){
    index = n2*i
    console.log(index);
}
// Given an array arr, use a for loop to iterate through the array and print each
// element.
let arr = [1,2,3,4,5]
for(let i =0 ;i<=arr[i]-1;i++){
    console.log(arr[i]);
}
// ● Use a for loop to print all even numbers between 1 and 50.
for(let i =1 ;i<=50;i++){
    if( i % 2 == 0)
        console.log(i);
}
// ● Use a for loop to print the following pattern:
// *
// * *
// * * *
// * * * *
// * * * * *
let rows = 5;
for(let i =1;i<=rows;i++){
    let pattern = '';
    for(let j = 1; j<= i; j++){
        pattern += '* '
    }
    console.log(pattern);
}
// Given a string str, use a for loop to count the number of vowels in the string.
// Print the count.
let str = "Raju raju"
let count = 0;
 for(let i = 0;i<str.length;i++){
   
    if(str[i] == 'a' || str[i] == 'i' || str[i] == 'o'||str[i] == 'e' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U'){
        count++; 
    }
    
 }
 console.log(count);

//  Pandrolime string
let string = "Raju"
if( string === string.split('').reverse().join('')){
    console.log("Pandrolime");
}
else{
    console.log("Not");
}
//  Pandrolime Number
let num = 121;
let original = num;
let reverse =0 
while(n>0){
let digit = num % 10;
reverse = (reverse*10)+ digit;
num = Math.floor(num/10)
}
if(original == reverse){
    console.log("Pandromime");
}