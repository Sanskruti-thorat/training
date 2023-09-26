
const btn = document.getElementById('btn');


btn.addEventListener("click", function(){
    const colorbtn = document.getElementById('color').value;
const widthbtn = document.getElementById('width').value;
const heightbtn = document.getElementById('height').value;
const div = document.getElementById('resizer');
// console.log("works");
// set();
div.style.backgroundColor = colorbtn;
div.style.width = widthbtn;
div.style.height = heightbtn;

});

