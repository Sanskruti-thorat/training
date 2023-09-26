const modebtn = document.querySelector('.theme-toggle');
const themetype = localStorage.getItem('theme');
// console.log(themetype);

if(themetype){
document.body.classList.add(themetype);
}

modebtn.addEventListener("click" , function(){
    document.body.classList.toggle("dark-mode");
    
    // how to make website remember what was the mode
    if(document.body.classList.contains('dark-mode')){

        localStorage.setItem('theme' , 'dark-mode');
    }
    else{
        localStorage.removeItem('theme');
    }
    

});