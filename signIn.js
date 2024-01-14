
//   let messageUser = document.getElementById("messageUser");
//   let messagePassword = document.getElementById("messagePassword");
//   let signIn = document.getElementsByClassName("log") 
// $("#fromSignIn").submit(function() {
//         let userInput = $('#username').val();
//         let passwordInput = document.getElementById("password").value;

//         let userReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//         let passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

//         let validationResult = userReg.test(userInput);
//         let passwordValidationResult = passwordReg.test(passwordInput);

//         if (validationResult === false) {
//             messageUser.innerHTML = "must be like this Pattern [Characters@Characters.Characters]"
//             return false;
//         } 
//         if (passwordValidationResult === false) {
//           messagePassword.innerHTML = "must include capital characters and numbers and special characters";
//             return false;
//         }
//         return true;
        
//   });
$(document).ready(function() {
  let messageUser = $("#messageUser");
  let messagePassword = $("#messagePassword");
  let signIn = $(".log");

  $("#fromSignIn").submit(function() {
    let userInput = $('#username').val();
    let passwordInput = $("#password").val();

    let userReg = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    let passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    let validationResult = userReg.test(userInput);
    let passwordValidationResult = passwordReg.test(passwordInput);

    if (validationResult === false) {
      messageUser.html("Email must like this pattern [letter And Number@gmail.com] and do not contain space");
      return false;
    }

    if (passwordValidationResult === false) {
      messagePassword.html("must include capital characters, numbers, and special characters");
      return false;
    }

    // Save data in local storage
    localStorage.setItem("username", userInput);
    localStorage.setItem("password", passwordInput);

    return true;
  });
});



