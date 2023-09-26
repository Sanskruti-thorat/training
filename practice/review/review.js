// local reviews data
const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];
// selecting items 
  const img = document.getElementById("img-main");
  const author = document.getElementById("author");
  const job = document.getElementById("job-id");
  const info = document.getElementById("info");

  //selecting buttons

  const prevbtn = document.getElementById("prev-btn");
  const nextbtn = document.getElementById("next-btn");
  const randombtn = document.getElementById("random-btn");


  // initial file onload

  let currentfile = 0;


window.addEventListener('DOMContentLoaded', function(){
    // console.log("works");
   
   updateperson(currentfile);
});


function updateperson(){
    const item = reviews[currentfile];
    img.src = item.img; 
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;

}
// add event listener to next button 

nextbtn.addEventListener("click" , function(){
    currentfile++;
    if(currentfile > reviews.length - 1){
        currentfile = 0;

    }
    updateperson(currentfile);
    // console.log("works");
});

// add event listener to prev button 

prevbtn.addEventListener("click" , function(){
    currentfile--;
    if(currentfile < 0 ){
        currentfile = reviews.length - 1;

    }
    updateperson(currentfile);
    // console.log("works");
    // its okay to not mention 
    // current file in the function because current item is 
    // not passed as a parameter and it is global so from anywhere we can access it .
});

// random btn addevent listener

randombtn.addEventListener("click", function(){
    currentfile = Math.floor(Math.random()* reviews.length);

  updateperson();

});