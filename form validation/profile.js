function edit() {
  if (sstoredUser) {
    window.location.href = "editInfo.html";

  }
  else {
    alert("User not found");
  }
}



let stored = JSON.parse(localStorage.getItem("users"));

let profile_info = document.getElementById("profileInfo");

var currentUser = sessionStorage.getItem("currentUser")
var password = sessionStorage.getItem("password")

// let welcome_text =  document.getElementById("h-1");



stored.some((v) => {

  if (v.email == currentUser && v.password == password) {

   document.getElementById("welcome").innerHTML =`Wellcome ${v.firstName}` ;
    profile_info.innerHTML = `
  <p >First Name: ${v.firstName}</p>
  <p>Last Name: ${v.lastName}</p>
  <p>Email: ${v.email}</p>
  <p>Gender: ${v.gender}</p>
  <p>Date of Birth: ${v.dob}</p>
  <p>Address: ${v.address}</p>
  <p>Age: ${agecalculator(v.dob)}</p>
  `
  }
})

function agecalculator(dob) {
  let todaysdate = new Date();
  let birthdate = new Date(dob);
  let age = todaysdate.getFullYear() - birthdate.getFullYear();
  let month = todaysdate.getMonth() - birthdate.getMonth()
  if (month === 0 && todaysdate.getDate() < birthdate.getDate()) {
    age--;
  }
  return age;
}

function x(){

  
// var storedUser = JSON.parse(localStorage.getItem('user'));

//     var profileInfo = document.getElementById('profileInfo');
//     profileInfo.innerHTML = `
//       <p >First Name: ${storedUser.firstName}</p>
//       <p>Last Name: ${storedUser.lastName}</p>
//       <p>Email: ${storedUser.email}</p>
//       <p>Gender: ${storedUser.gender}</p>
//       <p>Date of Birth: ${storedUser.dob}</p>
//       <p>Address: ${storedUser.address}</p>
//       <p>Age: ${ agecalculator(storedUser.dob)}</p>
//     `;
// // Function to calculate age based on date of birth
// function calculateAge(dob) {
//   var birthDate = new Date(dob);
//   var now = new Date();
//   var age = now.getFullYear() - birthDate.getFullYear();
//   var monthDiff = now.getMonth() - birthDate.getMonth();
//   if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthDate.getDate())) {
//     age--;
//   }
//   return age;
// }
// function agecalculator(dob){
//   let today = new Date();
//   let birthDate = new Date(dob);
//   let age = today.getFullYear() - birthDate.getFullYear();
//   let m = today.getMonth() - birthDate.getMonth();
//   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//     age--;
//     }
//     return age ;
//     }
// Redirect to edit profile page
//         window.location.href = 'edit-profile.html';
//       });
//     } else {
//       alert('Invalid token');
//     }
//   } else {
//     alert('User not found');
// window.location.href = "editInfo.html";
// document.getElementById("signinForm").action = "profile.html"
}



