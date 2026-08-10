
//print even number form 1 to 10

// for (let i=0; i<=100; i++) {
//     if (i%2===0) {
//  console.log(i);
//     }
   
// }

/*Create a game where you start with any random game number. Ask the user to keep
guessing the game number until the user enters correct value.*/

// let gameNumber = 25;
// let guess;

// while (guess != gameNumber) {
//     guess = parseInt(prompt("Guess the number:"));

//     if (guess == gameNumber) {
//         alert("Congratulations! You guessed the correct number.");
//     } else if (guess != gameNumber) {
//         alert("number you entered is incorrect Try again.");
         
//     } 
// }

/*Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.
Start username with @, followed by their full name and ending with the fullname length.*/

// fullname= prompt("enter your fullname:");
// let str ="@";
// join=str.concat(fullname);
// username= join+fullname.length ;
// console.log(username);

/*Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
Find the average marks of the entire class. */

marks =[85, 97, 44, 37 , 76, 60];
let sum=0;
for (let i=0; i<marks.length; i++) {
    sum+=marks[i];
}
avg=sum/marks.length;
console.log("Average marks:", avg);


items =[250, 645, 300, 900, 50];

for (let i=0; i<items.length; i++) {
    if (items[i]>0) {
        dis=items[i]*0.1;
        console.log("Discount for item", i+1, "is:", dis);
    }
}

let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]; 
console.log(companies);
companies.shift();
console.log(companies);
companies.splice(1,1,"ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);