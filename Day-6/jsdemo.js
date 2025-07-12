//let x= "this is prema";
//console.log(x)
//let y = ["prema", "renu", "siva"];
//console.log(y)
//let person = {name:"john", age:30, city: "India"}
//console.log(typeof person);

//alert()//gives  kind of output
//prompt()//takes the input in box
//confirm()//confirm dialogue box
//alert("Welcome to SRIT")
//let name=prompt("Enter A name: ");
//alert(name);
//confirm("are a human?") ? alert("welcome") : alert("access denied");
//let age = prompt("Enter your age : ");
//if (age >=18){
    //alert("you are eligible for vote!");
//}else{
   // alert("you are not eligible to vote!");
//}
//age>=18 ? alert("your are eligible") : alert("you are not eligible");//ternary operator
// let num=prompt("Enter a number : ");
// if(num > 100){
//     alert("this is a greater than 100");
// }else if(num > 50){
//     alert("The number is greater than 50 but less than or equal to 100");
// }else if(num >0){
//     alert("The number is greater than 0 but less than or equal to 50")
// }else {
//     alert("The number is less than or equal to 0")
//}
// syntax
// if(condition1) {
//     if(condition2){
//         //c t b e i b c a c2 a t
//     }else{
//         // c t b e i c1 i t a  c2 i f
//     }
// }
// else{
//         //c t bb e i c1 i f
//  
//}


//MY CODE
// let age =prompt("Enter age a person: ");
// let count=prompt("Enter count of a person: ");
// let hemoglobin=prompt("Enter hemo of a person: ");
// let bloodsugar=prompt("Enter a levels of a sugar: ");
// if(age >17){
//     alert("Persons blood is good");
// }else if(count >=10000){
//     alert("the count is good");
// }else if(hemoglobin > 65){
//     alert("good levels of hemoglobin");
// }else if(bloodsugar >=80 && bloodsugar <=120){
//     alert("good levels of blood sugar")
// }else{
//     alert("The age of is restricted")
// }


// const age=prompt("Enter your age: ");//CORRECT CODE
// if (age >=18){
//     const count=prompt("Enter your blood count: ");
//     if(count >=100000){
//         const hemo = prompt("Enter your hemoglobin in %: ");
//         if(hemo >= 12) {
//             const sugar = prompt("Enter your blood sugar levels: ");
//             if(sugar >=80 && sugar <=120){
//                 alert("you are eligible to donate blood");
//             }else{
//                 alert("Your not eligible to donate blood");
//             }
//             }
//             else{
//                 alert("Your are not eligibe duw to low hemo");
//             }
//         }
//         else{
//             alert("not eligible due to low blood count");
//         }
//     }else{
//         alert("not eligibe to age restrictiin");
// }

// for(initialization;Condition;increment/decrement){
//     //code
// }
let n = prompt("Enter a number: ");
if (n>0){
    for(let i=0;i<=n;i++){
        console.log(i);
    }
}else{
    alert("please enter a positive number")
}


