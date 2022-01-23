let email1=document.getElementById("email");
let error= document.getElementById("error");

    
 function validate(){
     let Regexp = /^([a-zA-Z0-9\-.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
  if(RegExp.test(email1.value)){
      error.innerhtml="valid";
      error.style.color="green";
      return true;
  }
else{
    error.innerHTML="invalid email";
    error.style.color="red";
}
    
}
