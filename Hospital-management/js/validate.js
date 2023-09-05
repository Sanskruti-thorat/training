function validate() {
    var user = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;
    var number = document.getElementById('num').value;
    // just of fullNAme
    if(user ===''){
        document.getElementById('Name').innerHTML="Please Fill The full name";
        return false;
    }
     if((user.length <= 2) || (user.length > 30)){
        document.getElementById('Name').innerHTML=" NAme should between 2 and 30  characters";
        return false;
    } 
      if(!isNaN(user)){
        document.getElementById('Name').innerHTML="Please enter Characters only";
        return false;
    } 
    // email 
    if(email ===''){
        document.getElementById('Email').innerHTML="Please Fill The email";
        return false;
    }
    if(email.indexOf('@') <= 0){
        document.getElementById('Email').innerHTML="InVAlid email";
        return false;
    }
    if((email.charAt(email.length-4)!= '.' ) && (email.charAt(email.length-3)!= '.' ))  {
        document.getElementById('Email').innerHTML="InVAlid email";
        return false;
    } 
    
     // password
    if(password ===''){
        document.getElementById('Pass').innerHTML="Please Fill The full name";
        return false;
    } 
     if((password.length <= 2) || (password.length > 30)){
        document.getElementById('Pame').innerHTML=" Password should between 2 and 20  characters";
        return false;
    } 
    // number 
    if( number ===''){
        document.getElementById('Num').innerHTML="Please Fill The full name";
        return false;
    } 
      if( isNaN(number)){
        document.getElementById('Num').innerHTML="Please Fill Digits only";
        return false;
    } 
    if( number.length != 10 ){
        document.getElementById('Num').innerHTML="10 Digits only";
        return false;
    } 
  alert('registered successfully!');

} 