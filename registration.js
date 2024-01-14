let paraFirst = document.getElementById("paraFirst");
let paraLast = document.getElementById("paraLast");
let paraEmail = document.getElementById("paraEmail");
let paraPassword = document.getElementById("paraPassword");
let paraRepeatPassword = document.getElementById("paraRepeatPassword");
let parTelNumber = document.getElementById("parTelNumber");


document.getElementById("registrationForm").onsubmit = function () {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let Password = document.getElementById("Password").value;
    let repeatPassword = document.getElementById("password").value;
    let telNumber = document.getElementById("telNumber").value;
    // let dateOfBirth = document.getElementById("dateOfBirth").value;

    // -----------------------------regular expression-------------------------

    let firstNameReg = /^[A-Z][a-zA-Z]{2,}$/;
    let lastNameReg = /^[A-Z][a-zA-Z]{2,}$/;
    let emailReg = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    let PasswordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let repeatePasswordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    // let dateOfBirthReg = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    // let telNumberReg = /^01\d{9}$/;
    let telNumberReg = /^(010|011|012|015)[0-9]{8}$/;

// ------------------------------test Regular-------------------------------------

    let firstNameRegValidation = firstNameReg.test(firstName);
    let lastNameRegValidation = lastNameReg.test(lastName);
    let emailRegValidation = emailReg.test(email);
    let passwordRegValidation = PasswordReg.test(Password);
    let repeatePasswordRegValidation = repeatePasswordReg.test(repeatPassword);
    // let dateOfBirthRegValidation = dateOfBirthReg.test(dateOfBirth)
    let telNumberRegValidation = telNumberReg.test(telNumber);

// ---------------------------------testSbmitForm--------------------------------------

if (!firstNameRegValidation) {
    paraFirst.innerHTML = "must start with a capital letter and the number of letters at least 3."
    return false;
}
if(!lastNameRegValidation) {
    paraLast.innerHTML = "must start with a capital letter and the number of letters at least 3."
    return false
}
if(!emailRegValidation) {
    paraEmail.innerHTML = "Email must like this pattern [letter And Number@gmail.com] and do not contain space"
    return false;
}
if(!passwordRegValidation) {
    paraPassword.innerHTML = "Password must have at least one capital letter and special characters and numbers and the length of Password must at least 9. "
    return false;
}
if(!repeatePasswordRegValidation || Password !== repeatPassword) {
    paraRepeatPassword.innerHTML = "The confirm password and password must be identical.";
    return false
}
// if(!dateOfBirthRegValidation) {
//     return false;
// }
if(!telNumberRegValidation) {
    parTelNumber.innerHTML = "must start with 010 or 011 or 012 or 015 and the number of telNumber must be 11"
    return false;
}
localStorage.setItem("firstName", firstName)
localStorage.setItem("LastName", lastName)
localStorage.setItem("email", email)
localStorage.setItem("password", Password)
localStorage.setItem("repeatPassword", repeatPassword)
localStorage.setItem("telNumber", telNumber)

return true;
}



// =====================================jQuery========================
// $(document).ready(function() {
//     let paraFirst = $("#paraFirst");
//     let paraLast = $("#paraLast");
//     let paraEmail = $("#paraEmail");
//     let paraPassword = $("#paraPassword");
//     let paraRepeatPassword = $("#paraRepeatPassword");
//     let parTelNumber = $("#parTelNumber");
  
//     $("#registrationForm").submit(function() {
//       let firstName = $("#firstName").val();
//       let lastName = $("#lastName").val();
//       let email = $("#email").val();
//       let Password = $("#Password").val();
//       let repeatPassword = $("#password").val();
//       let telNumber = $("#telNumber").val();
//       // let dateOfBirth = $("#dateOfBirth").val();
  
//       // Regular expressions
//       let firstNameReg = /^[A-Z][a-zA-Z]{2,}$/;
//       let lastNameReg = /^[A-Z][a-zA-Z]{2,}$/;
//       let emailReg = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
//       let PasswordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
//       let repeatePasswordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
//       // let dateOfBirthReg = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
//       let telNumberReg = /^(010|011|012|015)[0-9]{8}$/;
  
//       // Validation
//       let firstNameRegValidation = firstNameReg.test(firstName);
//       let lastNameRegValidation = lastNameReg.test(lastName);
//       let emailRegValidation = emailReg.test(email);
//       let passwordRegValidation = PasswordReg.test(Password);
//       let repeatePasswordRegValidation = repeatePasswordReg.test(repeatPassword);
//       // let dateOfBirthRegValidation = dateOfBirthReg.test(dateOfBirth);
//       let telNumberRegValidation = telNumberReg.test(telNumber);
  
//       if (!firstNameRegValidation) {
//         paraFirst.html("must start with a capital letter and the number of letters at least 3.");
//         return false;
//       }
//       if (!lastNameRegValidation) {
//         paraLast.html("must start with a capital letter and the number of letters at least 3.");
//         return false;
//       }
//       if (!emailRegValidation) {
//         paraEmail.html("Email must be in the format [letter And Number@gmail.com] and must not contain spaces.");
//         return false;
//       }
//       if (!passwordRegValidation) {
//         paraPassword.html("Password must have at least one capital letter, special characters, numbers, and be at least 9 characters long.");
//         return false;
//       }
//       if (!repeatePasswordRegValidation || Password !== repeatPassword) {
//         paraRepeatPassword.html("The confirm password and password must be identical.");
//         return false;
//       }
//       // if (!dateOfBirthRegValidation) {
//       //   return false;
//       // }
//       if (!telNumberRegValidation) {
//         parTelNumber.html("must start with 010, 011, 012, or 015 and the number of telNumber must be 11.");
//         return false;
//       }
  
//       // Save data in local storage
//       localStorage.setItem("firstName", firstName);
//       localStorage.setItem("lastName", lastName);
//       localStorage.setItem("email", email);
//       localStorage.setItem("password", Password);
//       localStorage.setItem("telNumber", telNumber);
  
//       return true;
//     });
//   });
