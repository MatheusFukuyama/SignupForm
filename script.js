function ValidateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }
    return (false)
}

function verifyEmpaty(email) {
    if(email.trim() === "") {
       return 0
    }
    return 1
}

appended = [0, 0, 0, 0];
function verifyInput(e) {
    e.preventDefault();
    
    const inputs = document.getElementsByTagName("input");
    const errorsMessages = document.getElementsByClassName("error-message");
    const errorsIcons = document.getElementsByClassName("error-icon");
  
    let message

    for(let i = 0; i < inputs.length; i++){

      if(appended[i]) {
        message = document.getElementsByTagName("span")[1]
      }
      else {
        message = document.createElement("span")
        errorsMessages[i].classList.add("error-format")
        message.classList.add("msg-err")
      }

      if(!verifyEmpaty(inputs[i].value)) {
        inputs[i].classList.add("error")
        message.innerHTML = inputs[i].placeholder + " cannot be empty"
        if(!appended[i]){
          errorsIcons[i].style.display = "block"
          errorsMessages[i].appendChild(message)
          inputs[i].style.border = "2px solid var(--clr-primary-700)"
        }
        appended[i] = 1
      }
      else if(!ValidateEmail(inputs[i].value) && inputs[i].getAttribute('field') == "Email Address") {
        inputs[i].classList.add("error")
        message.innerHTML = "Looks like this is not an email"
        if(!appended[i]){
          errorsIcons[i].style.display = "block"
          errorsMessages[i].appendChild(message)
          inputs[i].style.border = "2px solid var(--clr-primary-700)"
        }
          appended[i] = 1
      }
      else{
          inputs[i].classList.remove("error")
          errorsMessages[i].innerHTML = ""
          errorsIcons[i].style.display = "none"
          inputs[i].style.border = "1px solid var(--clr-neutral-600)"
          appended[i] = 0
      }
    }
}