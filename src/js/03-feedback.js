const form = document.querySelector('.feedback-form');
const userName = document.querySelector('input[type="email"]')
const userMessage = document.querySelector('textarea[name="message"]');
const buttonSubmit = document.querySelector('button[type="submit"]');

form.addEventListener('input', _.throttle(onInputFormEvent, 500));
form.addEventListener('submit', onBtnSubmitClick);


const savedFeedBackForm = localStorage.getItem("feedback-form-state");
const parsedFeedBackForm = JSON.parse(savedFeedBackForm);

if(savedFeedBackForm === null){
    userName.value = "";
    userMessage.value = "";    
}else{
    userName.value = parsedFeedBackForm.email;
    userMessage.value = parsedFeedBackForm.message;   
}


function onInputFormEvent(e){
    e.preventDefault();

const feedBack = {
    email: userName.value,
    message: userMessage.value,
  };     

    localStorage.setItem("feedback-form-state", JSON.stringify(feedBack));
}

function onBtnSubmitClick(e){
    e.preventDefault(); 
    console.log(localStorage.getItem("feedback-form-state"));
    userName.value = "";
    userMessage.value = "";
    localStorage.removeItem("feedback-form-state");
}

