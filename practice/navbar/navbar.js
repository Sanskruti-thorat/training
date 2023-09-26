const navtogglebtn = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');


navtogglebtn.addEventListener("click" , function() {
// console.log(links.classList);
// console.log(links.classList.contains('random'));

// console.log(links.classList.contains('links'));
//  method 1

// if(links.classList.contains('show-links')){
//     links.classList.remove('show-links');

// }
// else{
//     links.classList.add('show-links');
// }


// method 2

links.classList.toggle('show-links');
});
