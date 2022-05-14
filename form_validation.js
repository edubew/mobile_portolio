// Gain access to the form and email
const form = document.querySelector('#form');
const error = document.querySelector('#error');

// Listen for a submit event
form.addEventListener('submit', (e) => {
    let valid =true;
    const email = document.querySelector('#email').value;
     const emailArray=email.split(''); //split the email into an array of letters
   
    //  Define the validity to check for
     for(let i=0; i<emailArray.length; i+=1){
         if(
             email !== email.toLowerCase()
             &&emailArray[i]!== '@' &&emailArray[i]!== '.'
         ){
             valid= false;
         }
     }

    //  Set the custom validity message
     if(valid){
         error.innerHTML= '';
     }
     else{
         e.preventDefault();
         error.innerHTML = 'Please enter your email in lower case only';
         error.style.color = 'white';
     }
});