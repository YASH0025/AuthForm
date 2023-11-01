
var storedUser = JSON.parse(localStorage.getItem('users'));
// var add = localStorage.getItem("address");
console.log(storedUser);

var email = sessionStorage.getItem("currentUser");
var password = sessionStorage.getItem("password");

storedUser.some((v) => {
  if (v.email == email) {
    document.getElementById("firstName").value = v.firstName;
    document.getElementById("lastName").value = v.lastName;
    document.getElementById("email").value = v.email;
    document.getElementById("gender").value = v.gender;
    document.getElementById("dob").value = v.dob;
    document.getElementById("address").value = add;
  }
});

console.log(firstName.value);



function editInfor(event) {
  // event.preventDefault();

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const gender = document.getElementById("gender");
  const dob = document.getElementById("dob");
  const address = document.getElementById("address");

  storedUser.forEach((v) => {
    if (v.email === email && v.password === password) {
      v.firstName = firstName.value;
      v.lastName = lastName.value;
      v.gender = gender.value;
      v.dob = dob.value;
      v.address = address.value;
    }
  });

  localStorage.setItem("users", JSON.stringify(storedUser));

  alert("Successfully updated user information!");
}


function nothing(){
  
// var storedUser = JSON.parse(localStorage.getItem('users'));
// var add = localStorage.getItem("address")
// console.log(storedUser)

// var emails = sessionStorage.getItem("email")
// var passwords = sessionStorage.getItem("password")

// storedUser.some((v) => {

//   if (v.email == emails && v.password == passwords) {


//     document.getElementById("firstName").value = v.firstName;
//     document.getElementById("lastName").value = v.lastName;
//     document.getElementById("email").value = v.email;
//     document.getElementById("dob").value = storedUser.dob;
//     document.getElementById("address").v = add;
//   }
// })


// console.log(firstName.value)
// function editInfor() {
//   // var token = Math.random().toString(36).substring(2);






  // let firstName = document.getElementById("firstName");
  // let lastName = document.getElementById("lastName");
  // let email = document.getElementById("email");
  // let gender = document.getElementById("gender")
  // let dob = document.getElementById("dob")
  // let address = document.getElementById("address")

//   storedUser.forEach((v) => {

//     if (v.email == emails && v.password == passwords) {


//       // var user = {

//         // firstName: firstName.value,
//         // lastName: lastName.value,
//         // email: email.value,
//     //    gender: gender.value,
//     //    dob: dob.value,
       
//         v.fname= firstName.value,
//         v.lname= lastName.value,
//         v.email= email.value,
//         v.gender= gender.value,
//         v.dob= dob.value,
       
//         v.address= address.value,
//         // v.password = password.value
      

//       localStorage.setItem("users", JSON.stringify(storedUser));



//     }
//   })


  


//   // localStorage.setItem("users", JSON.stringify(user));


//   // for (let key in user) {
//   //   if (user.hasOwnProperty(key)) {
//   //     value = user[key];
//   //     console.log(key, value);
//   //     localStorage.setItem(key, value);
//   //   }
//   // }


//   alert("Successfull");
// }
}

