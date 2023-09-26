const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click" , function(e){
const id = e.target.dataset.id;
if(id){
    // remove activ e class from all btns 

    btns.forEach(function(btn){
        btn.classList.remove("active");
        e.target.classList.add("active");
    });
    // hide all article and only display one article 

    articles.forEach(function(article){
        article.classList.remove('active');
    });
    const element = document.getElementById(id);
    element.classList.add('active');
}
});
  
