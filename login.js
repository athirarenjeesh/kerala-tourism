var username=document.getElementById("usename").Value;
var errorusr=  document.getElementById("Error");
 var password=document.getElementById("password").Value;
var errorpwd=document.getElementById("errorpwd");
function validate();{
if  ( username.value==""||password.valuess==""){
    alert("Enter  valid username and password");

return false;
}
else{
    alert("validation is proper");
    return true;

    
}

}