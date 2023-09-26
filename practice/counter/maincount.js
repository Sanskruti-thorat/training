// intialize count 
let count = 0;

const value = document.getElementById('value');
const buttons = document.querySelectorAll(".btn");


buttons.forEach(function(btn){
 btn.addEventListener("click", function(e){
 const listofbuttons = e.currentTarget.classList;
//  console.log(listofbuttons);
if( listofbuttons.contains("decrease")){
    count--;
   

}
else if(listofbuttons.contains("increase")){
    count++;
   
}
else {
    count = 0;
    
}
if(count > 0 ){
    value.style.color = "green";
}
else if(count < 0){
    value.style.color = "red";
} else{
    value.style.color = "black";
}

value.textContent = count ;

 });
});