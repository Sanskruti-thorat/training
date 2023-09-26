const hexcode = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn = document.getElementById("btn-hex");
const colorbg = document.getElementById("color-id2");


btn.addEventListener("click" , function(){

   
  let  hexpre = "#"
//    console.log(randomNumb); 
for( let i = 0; i < 6 ; i++ ){
    const randomNumb = getRandomNumber();
    hexpre += hexcode[randomNumb];
    // console.log(hexpre);
}

colorbg.style.backgroundColor = hexpre;
document.getElementById("color-name").textContent = hexpre;

});


function getRandomNumber(){
    return Math.floor(Math.random() * hexcode.length );
}