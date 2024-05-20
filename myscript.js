function validateForm(){
    const name=document.getElementById("name").value;
    const address=document.getElementById("address").value;
    const email=document.getElementBYId("email").value;
    const nameError=document.getElementById("name-error");
    const addressError=document.getElementById("address-error");
    const passwordError=document.getElementById("password-error");
    nameError.textContent="";
    addressError.textContent= " ";
    emailError.textContent= " ";
    let isValid=true;
    if(name===" "){
      nameError.textContent= "please enter your name properly";
      isValid=false;
    }
    if(address===" ")
    {
      addressError.textContent="please enter your address";
      isValid=false;
    }
    if(email===" "||!email.includes("@")){
      emailError.textContent="please enter valid email address";
      isValid=false;
    }
    return isValid;
  }