// HTML form:
// <form id="signupForm">
//   <label for="firstName">First Name:</label>
//   <input type="text" id="firstName" required maxlength="50"><br>

//   <label for="lastName">Last Name:</label>
//   <input type="text" id="lastName" required maxlength="50"><br>

//   <label for="email">Email:</label>
//   <input type="email" id="email" required maxlength="50"><br>

//   <label for="password">Password:</label>
//   <input type="password" id="password" required maxlength="50" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"><br>

//   <label for="gender">Gender:</label>
//   <select id="gender">
//     <option value="male">Male</option>
//     <option value="female">Female</option>
//     <option value="other">Other</option>
//   </select><br>

//   <label for="dob">Date of Birth:</label>
//   <input type="date" id="dob"><br>

//   <label for="address">Address:</label>
//   <textarea id="address" required></textarea><br>

//   <button type="submit">Sign Up</button>
// </form>
// JavaScript code to handle form submission and store data:
// document.getElementById('signupForm').addEventListener('submit', function(e) {
//   e.preventDefault();

//   // Generate random token
//   var token = Math.random().toString(36).substr(2);

//   // Get form values
//   var firstName = document.getElementById('firstName').value;
//   var lastName = document.getElementById('lastName').value;
//   var email = document.getElementById('email').value;
//   var password = document.getElementById('password').value;
//   var gender = document.getElementById('gender').value;
//   var dob = document.getElementById('dob').value;
//   var address = document.getElementById('address').value;

//   // Create user object
//   var user = {
//     token: token,
//     firstName: firstName,
//     lastName: lastName,
//     email: email,
//     password: password,
//     gender: gender,
//     dob: dob,
//     address: address
//   };

//   // Store user data in browser storage
//   localStorage.setItem('user', JSON.stringify(user));

//   // Display success message
//   alert('Sign up successful!');
// });


// let user_records = new Array();
// user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
// if (user_records.some((v) => {
//     return v.email == email
// })) {
//     alert("Login Successful")
//     let current_user=user_records.filter((v)=>{
//         return v.email==email && v.password==password
//     })[0]

//     localStorage.setItem("name",current_user.name);
//     localStorage.setItem("email",current_user.email);
//     window.location.href="profile.html";
// }
// else {
//    alert("Login Fail")
// }


function saveData(){
  let name, email, password;
  name=document.getElementById("name").value;
  email=document.getElementById("email").value;
  password=document.getElementById("password").value;

// localStorage.setItem("name",name);
// localStorage.setItem("email",email);
//localStorage.setItem("password",password);


let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{
    return v.email==email
})){
    alert("Duplicate Data");
}
else{
    user_records.push({
        "name":name,
        "email":email,
        "password":password
    })
    localStorage.setItem("users",JSON.stringify(user_records));
}
}


function saveData(){
  let email, password;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  // localStorage.setItem("name",name);
  // localStorage.setItem("email",email);
  //localStorage.setItem("password",password);


  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
  if (user_records.some((v) => {
      return v.email == email
  })) {
      alert("Login Successful")
      let current_user=user_records.filter((v)=>{
          return v.email==email && v.password==password
      })[0]

      localStorage.setItem("name",current_user.name);
      localStorage.setItem("email",current_user.email);
      window.location.href="profile.html";
  }
  else {
     alert("Login Fail")
  }
}

const Sign =()=>{
  let email = document.getElementById("emails");
  let password = document.getElementById("passwords");
  let user = JSON.parse(localStorage.getItem("users"))
  if(user.some((v)=>{
     return v.email==email.value && v.password == password.value
 })){
alert("succesfull")
document.getElementById("signinform").action = "profile.html"
 }else{
  alert("invalid User Name and Password")
 }

}



let stored = JSON.parse(localStorage.getItem("users"));

let profile_info =  document.getElementById("profile-info");

let welcome_text =  document.getElementById("h-1");


var url_string = window.location.href; 
var url = new URL(url_string);
var email = url.searchParams.get("email");
var password = url.searchParams.get("password");

// stored.some((v)=>{
// welcome_text.innerText=`${v.fname} ${v.lname} `

// profile_info.innerHTML=`
// <p> First Name : ${v.fname}</p>
// <p> Last Name : ${v.lname}</p>
// <p> Email  : ${v.email}</p>
// <p> Phone  : ${v.phone}</p>
// <p> Gender : ${v.gender}</p>
// <p> DOB : ${v.dob}</p>
// <p> Address : ${v.address}</p>
// <p> Age  :  ${agecalculator(v.dob)}</p>
// `
// })