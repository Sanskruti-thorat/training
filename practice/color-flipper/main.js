const colorArray = ['red' , 'pink', 'teal', 'yellow', 'violet'];
const btn = document.getElementById("btn");
const color = document.getElementById("color-id");


btn.addEventListener("click" , function(){
    const randomNum =  getrandomnum();
    // console.log(randomNum);
     color.style.backgroundColor = colorArray[randomNum];
     document.getElementById("color-name").textContent = colorArray[randomNum];
    });

function  getrandomnum(){
    return Math.floor(Math.random() * colorArray.length);
}


