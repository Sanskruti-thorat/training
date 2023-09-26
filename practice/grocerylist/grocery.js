// selected all items
const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const btn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const deleteall = document.querySelector(".clear-btn");
const place = document.querySelector('#grocery');


// initialize edit btns and give it a flag 
let editbtn;
let editflag  = false;
let editId = "";

// add event listener to form when it gets submitted


form.addEventListener("submit" , additem );

// event lister to clear all button
deleteall.addEventListener("click",deleteAll)
//make funtion of additem 

function additem(e){
    e.preventDefault();
   const value = place.value; 
   const id = new Date().getTime().toString();

   if( value && !editflag){ 
    const  element = document.createElement('article');
     // add class
     element.classList.add('grocery-item');
     // add id using data-id
     const attr = document.createAttribute('data-id');
     attr.value = id;
     element.setAttributeNode(attr);

    // adding html 
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
      <!-- edit btn -->
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <!-- delete btn -->
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  `;
         // after this templete only delete and edit button are avaible so they are accessed after this 
        const deletebtn = document.querySelector('.delete-btn');
        const editbtn = document.querySelector('.edit-btn');

        deletebtn.addEventListener("click", deleteitem);
        editbtn.addEventListener("click", edititem);


      // append child 
      list.appendChild(element);

        // display alert
      displayalert('item is added to list ', "success");

      // show conatiner 
      container.classList.add('show-container');
      // add to local storage 
      addToLocalStorage(id , value );
       //set back to default  
       setBackTodefault()


     }
   else if ( value && editflag){
    console.log("editing");
   }
   else{

    displayalert(`Please enter some value ` , "danger");
   }
 }


 // display function of alert text 

 function displayalert (text , action ){
    alert.textContent = text ;
    alert.classList.add(`alert-${action}`);
    // removed alert in 1 sec using settimeout 
    setTimeout (function(){
        alert.textContent = '' ;
        alert.classList.remove(`alert-${action}`);  
    } , 1000)

 }

 // clear all function
   function deleteAll(){
    const items = document.querySelectorAll('.grocery-item');
    if(items.length > 0){
        items.forEach(function(item){
          list.removeChild(item);
        });
    }
    container.classList.remove('show-container');
    displayalert('empty list' ,'danger' );
    setBackTodefault();
    // localStorage.removeItem('list');
   }
  // delete function
        function deleteitem(e){
          const ele = e.currentTarget.parentElement.parentElement;
          list.removeChild(ele);

        }
  // edit function 
         function edititem(){
            
            }
      
 // set back to default 

     function setBackTodefault (){
      place.value = '';
      editflag = false;
      editId = '';
      btn.textContent = ' submit';
   }

 // local storage function 
  function addToLocalStorage(id , value){

  }