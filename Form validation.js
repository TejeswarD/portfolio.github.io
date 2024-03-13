var getId = (id) => {
    return document.getElementById(id);
}


var getClasses = (classes) => {
    return document.getElementsByClassName(classes);
}

var firstName =  getId('firstName'),
 lastName = getId('lastName'),
 email = getId('email'),
 password = getId('password'),
 gender = getId('gender'),
 form = getId('myForm'),
 btn = getId("btn"),
 dob = getId("dob"),
 sts = getId("sts"),
 errMsg = getClasses('error');


 form.addEventListener('submit',(event) => {
    event.preventDefault();
      var fNameValid = customValidator(firstName , 0 , 'First name is Mandatory..');
     var lNameValid = customValidator(lastName , 1 , 'Last name is Mandatory..');
     var emailValid= customValidator(email , 2 , 'Email is Mandatory..');
     var passwordValid= customValidator(password , 3 , 'Password is Mandatory..');


if(fNameValid == true && lNameValid == true && emailValid == true && passwordValid == true){
  var finalObject = {}
  finalObject['firstName'] = firstName.value;
  finalObject['lastName'] = lastName.value;
  finalObject['email'] = email.value;
  finalObject['passsword'] = password.value;
 console.log(finalObject);
 localStorage.setItem('userinfo', JSON.stringify(finalObject));


 sts.textContent = "Submitting the Form Please wait!!";
 setTimeout(() => {
  sts.textContent = "Enjoy Pandagaww!!";
 },3000);

}
     })
 
   function customValidator(documentRef , classId ,  errorMessage ){

      if(documentRef.value.trim() == ''){
        documentRef.style.border = '2px solid red';
        errMsg[classId].textContent = errorMessage;
        return false;
      } else{
        documentRef.style.border = '2px solid green';
        errMsg[classId].textContent = '';
        return true;
        
      }
   }
