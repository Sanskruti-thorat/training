var num1 = prompt("enter 1st positive number:");
var num2 = prompt("enter 2nd positive number:");
var num3 = prompt("enter 3rd positive number:");

if(num1 >=0 && num2 >= 0 && num3 >= 0){
    var maxNum = Math.max(num1,num2,num3);
    console.log("largest Number is: " + maxNum );
    
}
else{
    console.log("Only fill positive values!");
}