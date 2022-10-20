// let form = document.getElementById('registration-form');

// form.addEventListener('submit', function(event){
//     event.preventDefault();
//     let errors = {};
//     console.log(event.target);

//     let formElement = event.target;


//     //name

//     let nameValue = document.getElementById('firstname').value;
//     if (nameValue = " "){
//         errors.username = 'Name field cannot be empty!'
//     }

//     if (nameValue.length < 6) {
//         errors.username = "Username must be more then 6 characters";
//       }

//     //surname

//     let surnameValue = document.getElementById('surname').value;
//     if (surnameValue == " ") {
//         errors.surname = "Surname must be filled";
//       }



//       //email

//       let emailField = document.getElementById("myEmail");
//       // let emailField = document.querySelector('name = ["emailField"]');
      
//       emailField.addEventListener("keydown", function () {
//         let emailValue = document.getElementById("myEmail").value;
//         let text = document.getElementById("text");
//         let pattern =
//           /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
//         if (emailValue.match(pattern)) {
//           emailField.style.border = "2px solid green";
//           text.innerText = "Your email is valid!";
//           text.style.color = "green";
//         } else {
//           emailField.style.border = "2px solid red";
//           text.innerText = "Your email is NOT valid!";
//           text.style.color = "red";
//         }
//     });



// //password

// let mypassword1 = document.getElementById('password');
// let mypassword2 = document.getElementById('password2');
 

// if (mypassword1== " ") {
//     errors.password = 'Your password cannot be empty!'
// }

// if(mypassword1 != mypassword2) {
//     errors.mypassword2 = 'You passwords should match!'
// }


// //age

// let age = false;  
// formElement.querySelectorAll('[name = "age"]').forEach((element) => {
//     if (element.checked){
//         age=true;
//     }
//     if (!age) {
//         errors.age = "Please select your age!";
//       }
//  });

//  //checkbox

//  let terms = document.getElementById('terms').checked;
//  if (!terms){
//     errors.terms = 'You must agree to our terms and conditions!'
//  }

//  formElement.querySelectorAll('.error').forEach(element => {
//     element.textContent = ' ';
//   })

  
//   for (let element in errors){
//     // console.log(item);
//     let spanError = document.getElementById('error_' + element);
//     if (spanError){
//         spanError.textContent = errors[element];
//     }
//   }

//   if (Object.keys(errors).length== 0) {
//     formElement.submit();
//   }




// })




let form = document.getElementById("registration-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = {};

  
  let formElement = event.target;

  //name
  let nameValue = document.getElementById("firstname").value;
  // let usernameValue = document.querySelector('[name = "myusername"]').value;

  if (nameValue == " ") {
    errors.firstname = "name field can not be empty";
  }
  if (nameValue.length < 5) {
    errors.firstname = "name must be more then 5 characters";
  }


  //surname 
  let surnameValue = document.getElementById("surname").value;
  // let usernameValue = document.querySelector('[name = "myusername"]').value;

  if (surnameValue == " ") {
    errors.surname = "surname field can not be empty";
  }
  if (surnameValue.length < 5) {
    errors.surname = "surname must be more then 5 characters";
  }

  //password
  let password1 = document.getElementById("password").value;
  let password2 = document.getElementById("password2").value;

  if (password1 == "") {
    errors.password = "Password field can not be empty!";
  }

  if (password1 != password2) {
    errors.password2 = "Passwords do not match!";
  }

  //radio button
  let age = false;
  formElement.querySelectorAll('[name = "age"]').forEach((item) => {
    if (item.checked) {
      age = true;
    }
  });
  if (!age) {
    errors.age = "Please select your age!";
  }

  //checkbox

  let terms = document.getElementById("terms").checked;
  if (!terms) {
    errors.terms = "You must accept our terms and conditions!";
  }

  console.log(errors);

  formElement.querySelectorAll('.error-text').forEach(item => {
    item.textContent = ' ';
  })


  for (let item in errors){
    // console.log(item);
    let spanError = document.getElementById('error_' + item);
    if (spanError){
        spanError.textContent = errors[item];
    }
  }

  if (Object.keys(errors).length== 0) {
    formElement.submit();
  }


});





// let errors = {
//   age: "Please select your age!",
//   agree: "You must accept our terms and conditions!",
//   mypassword: "Password field can not be empty",
//   myusername: "Username must be more then 5 characters",
// };

// console.log(Object.keys(errors));



//show-hide password

// let passwordField = document.getElementById('showHide');
// let toggleIcon = document.getElementById('toggle-icon');
// toggleIcon.addEventListener('click', function(){
//     if(passwordField.type == 'password'){
//         passwordField.setAttribute('type', 'text');
//         toggleIcon.classList.remove('fa-eye');
//         toggleIcon.classList.add('fa-eye-slash');
//     } else{
//         passwordField.setAttribute('type', 'password');
//         toggleIcon.classList.remove('fa-eye-slash');
//         toggleIcon.classList.add('fa-eye')
//     }




//emailRejex


// let emailField = document.getElementById('myemail');

// emailField.addEventListener("keydown", function(){
// let emailValue =  document.getElementById("myemail").value;
// let text = document.getElementById("text");
// let pattern = 
// /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


// if (emailValue.match(pattern)){
//     emailField.style.border = ' 2px solid green';
//     text.innerText = 'Your email is valid!';
// } else {
//     emailField.style.border = ' 2px solid red';
//     text.innerText = 'Your email is NOT valid!';
// }
// })


let emailField = document.getElementById("myEmail");
// let emailField = document.querySelector('name = ["emailField"]');

emailField.addEventListener("keydown", function () {
  let emailValue = document.getElementById("myEmail").value;
  let text = document.getElementById("text");
  let pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailValue.match(pattern)) {
    emailField.style.border = "2px solid green";
    text.innerText = "Your email is valid!";
    text.style.color = "green";
  } else {
    emailField.style.border = "2px solid red";
    text.innerText = "Your email is NOT valid!";
    text.style.color = "red";
  }
});