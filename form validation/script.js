

function signInPage() {
  var email = document.getElementById("email1");
  var password = document.getElementById("password1");

  var storedUser = localStorage.getItem("email");
  var storedPw = localStorage.getItem("password");

  if (email.value == storedUser && password.value == storedPw) {
    //   var token = Math.random().toString(36).substring(2);

    //   storedUser.token = token;

    //   for (let key in storedUser) {
    //     if (storedUser.hasOwnProperty(key)) {
    //         value = storedUser[key];
    //         console.log(key, value);
    //         localStorage.setItem(key,value)
    //     }
    // }console.log(email)
    alert("succesfull");
    localStorage.setItem("user1", storedUser);
    console.log(storedUser)
    document.getElementById("signinForm").action = "profile.html"
    var currentToken = window.location.hash.substring(1);

  } else {
    alert("Invalid email or password");
    console.log(storedUser);
  }
}




const Store = () => {
  let token = Math.random().toString(36).substring(2);
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let gender = document.getElementById("gender");
  let dob = document.getElementById("dob");
  let address = document.getElementById("address");

  console.log("password", password, password.value);

  document.getElementById("fame_error").innerHTML = "";
  document.getElementById("lame_error").innerHTML = "";
  document.getElementById("password_error").innerHTML = "";
  document.getElementById("email_error").innerHTML = "";

  if (
    !firstName.value.match(/^[a-zA-Z]+$/) ||
    firstName.value.length < 2 ||
    firstName.value.length >= 50
  ) {
    document.getElementById("fame_error").innerHTML =
      "First name is required (2-50 characters) <br />";
    document.getElementById("fame_error").style.fontSize = "10px";
    document.getElementById("fame_error").style.color.fontSize = "red";
    return;
  }

  if (
    !lastName.value.match(/^[a-zA-Z]+$/) ||
    lastName.value.length <= 2 ||
    lastName.value.length >= 50
  ) {
    document.getElementById("lame_error").innerHTML =
      "Last name is required (2-50 characters) <br />";
    document.getElementById("lame_error").style.color = "red";
    document.getElementById("lame_error").style.fontSize = "10px";
    return;
  }
  if (!email.value.match(/^\S+@\S+\.\S+$/)) {
    document.getElementById("email_error ").innerHTML =
      "Invalid email address <br />";
    document.getElementById("email_error").style.color = "red";
    document.getElementById("email_error").style.fontSize = "10px";
    return;
  }

  if (password.value.length < 8) {
    document.getElementById("password_error").innerHTML =
      "Minimum 8 characters required <br />";
    document.getElementById("password_error").style.color = "red";
    document.getElementById("password_error").style.fontSize = "10px";
    return;
  }

  if (password.value.length > 19) {
    document.getElementById("password_error").innerHTML =
      "Maximum 19 characters allowed <br />"
    document.getElementById("password_error").style.color = "red";
    document.getElementById("password_error").style.fontSize = "10px";
    return;
  }

  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,19}$/.test(password.value)) {
    document.getElementById("password_error").innerHTML =
      "Password required at least 1 uppercase, 1 lowercase, and 1 digit (8-19 characters)<br />";
    document.getElementById("password_error").style.color = "red";
    document.getElementById("password_error").style.fontSize = "10px";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.some((v) => v.email === email.value)) {
    // alert("Duplicate Data");
  } else {
    users.push({
      token: token,
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
      gender: gender.value,
      dob: dob.value,
      address: address.value,
    });

    localStorage.setItem("users", JSON.stringify(users));
  }
}


const Sign = () => {
  let email = document.getElementById("email1");
  let password = document.getElementById("password1");


  //  document.getElementById("email_error").innerHTML = "";
  // document.getElementById("password_error").innerHTML = "";


  // if (!email.value.match(/^\S+@\S+\.\S+$/)) {
  //   document.getElementById("email_error ").innerHTML =
  //     "Invalid email address <br/>";
  //   document.getElementById("email_error").style.color = "red";
  //   document.getElementById("email_error").style.fontSize = "10px";

  //   return;
  // }


  // if (password.value.length < 8) {
  //   document.getElementById("password_error").innerHTML =
  //     "Minimum 8 characters required ";
  //   document.getElementById("password_error").style.color = "red";
  //   document.getElementById("password_error").style.fontSize = "10px";

  //   return;
  // }




  // if (password.value.length > 19) {
  //   document.getElementById("password_error").innerHTML =
  //     "Maximum 19 characters allowed"
  //   document.getElementById("password_error").style.color = "red";
  //   document.getElementById("password_error").style.fontSize = "10px";

  //   return;
  // }

  // // if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,19}$/.test(password.value)) {
  // //   document.getElementById("password_error").innerHTML =
  // //     "Password required at least 1 uppercase, 1 lowercase, and 1 digit (8-19 characters)";
  // //   document.getElementById("password_error").style.color = "red";
  // //   document.getElementById("fame_error").style.fontSize = "5px";
  // //   return;
  // // }
  // if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,19}$/.test(password.value)) {
  //   document.getElementById("password_error").innerHTML =
  //     "Password required at least 1 uppercase, 1 lowercase, and 1 digit (8-19 characters)<br />";
  //   document.getElementById("password_error").style.color = "red";
  //   document.getElementById("password_error").style.fontSize = "10px";
  //   return;
  // }



  let user = JSON.parse(localStorage.getItem("users"))
  if (user.some((v) => {
    return v.email == email.value && v.password == password.value
  })) {
    alert("succesfull")
    window.location.href = 'profile.html';




    // var url_string = window.location.href; 

    // let url = new URLSearchParams(url_string.search);
    // url.searchParams.append("email" , email.value)


    document.getElementById("signinForm").action = "profile.html"
  } else {
    alert("invalid User Name and Password")
  }

}

const Sign1 = () => {


  let email = document.getElementById("email1");
  let password1 = document.getElementById("password1");
  const password = simpleHash(password1);
  let user = JSON.parse(localStorage.getItem("users"))


  if (user.some((v) => {

    if (v.email == email.value && v.password == password) {
      sessionStorage.setItem("email", email.value)
      sessionStorage.setItem("password", password)
    }

    return v.email == email.value && v.password == password;
  })) {




    document.getElementById("signinForm").action = "profile.html";




  } else {

    document.getElementById("sh-btn").style = 'Bottom : 100px'
    document.getElementById("invalid_user").innerText = 'Username and Password does not match';
    document.getElementById("invalid_user").style = 'display:block;'

    setTimeout(() => {
      document.getElementById("sh-btn").style = 'Bottom : 75px'
      document.getElementById("invalid_user").style = 'display:none;'

    }, 3000);

  }

}


const Store1 = () => {
  let token = Math.random().toString(36).substring(2);
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let gender = document.getElementById("gender");
  let dob = document.getElementById("dob");
  let address = document.getElementById("address");

  let errorMessages = [];

  document.getElementById("fame_error").innerHTML = "";
  document.getElementById("lame_error").innerHTML = "";
  document.getElementById("password_error").innerHTML = "";
  document.getElementById("email_error").innerHTML = "";

  if (
    !firstName.value.match(/^[a-zA-Z]+$/) ||
    firstName.value.length < 2 ||
    firstName.value.length >= 50
  ) {
    errorMessages.push("First name is required (2-50 characters)<br/>");
  }

  if (
    !lastName.value.match(/^[a-zA-Z]+$/) ||
    lastName.value.length <= 2 ||
    lastName.value.length >= 50
  ) {
    errorMessages.push("Last name is required (2-50 characters)<br/>");
  }

  if (!email.value.match(/^\S+@\S+\.\S+$/)) {
    errorMessages.push("Invalid email address<br/>");
  }

  if (password.value.length < 8) {
    errorMessages.push("Minimum 8 characters required<br/>");
  }

  if (password.value.length > 19) {
    errorMessages.push("Maximum 19 characters allowed<br/>");
  }

  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,19}$/.test(password.value)) {
    errorMessages.push(
      "Password required at least 1 uppercase, 1 lowercase, and 1 digit (8-19 characters)<br/>"
    );
  }

  if (errorMessages.length > 0) {
    errorMessages.forEach((errorMessage) => {
      let errorElement = document.getElementById("error");
      // errorElement.classList.add("error");
      // errorElement.innerHTML = errorMessage;
      // document.getElementById("signupForm").appendChild(errorElement);


    });
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.some((v) => v.email === email.value)) {
    // alert("Duplicate Data");
  } else {
    users.push({
      token: token,
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
      gender: gender.value,
      dob: dob.value,
      address: address.value,
    });

    localStorage.setItem("users", JSON.stringify(users));
  }
};
// 




const Store2 = () => {
  // Remove existing error messages
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach((element) => {
    element.remove();
  });

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const gender = document.getElementById("gender");
  const dob = document.getElementById("dob");
  const address = document.getElementById("address");

  const errorMessages = [];

  if (
    !firstName.value.match(/^[a-zA-Z]+$/) ||
    firstName.value.length <= 2 ||
    firstName.value.length >= 50
  ) {
    errorMessages.push("First name is required (2-50 characters)");
  }

  if (
    !lastName.value.match(/^[a-zA-Z]+$/) ||
    lastName.value.length <= 2 ||
    lastName.value.length >= 50
  ) {
    errorMessages.push("Last name is required (2-50 characters)");
  }

  if (!email.value.match(/^\S+@\S+\.\S+$/)) {
    errorMessages.push("Invalid email address");
  }

  if (password.value.length < 8) {
    errorMessages.push("Minimum 8 characters required");
  }

  if (password.value.length > 19) {
    errorMessages.push("Maximum 19 characters allowed");
  }

  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,19}$/.test(password.value)) {
    errorMessages.push(
      "Password required at least 1 uppercase, 1 lowercase, and 1 digit (8-19 characters)"
    );
  }

  if (errorMessages.length > 0) {
    errorMessages.forEach((errorMessage, index) => {
      let errorElement = document.createElement("span");

      errorElement.classList.add("error");
      errorElement.innerHTML = errorMessage;


      // Append the error element after the corresponding input field
      let inputElement;
      switch (index) {
        case 0:
          inputElement = firstName;
          if (inputElement) {
            inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
          } else {
            document.getElementById("signupForm").appendChild(errorElement);
          }
          break;
        case 1:
          inputElement = lastName;
          if (inputElement) {
            inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
          } else {
            document.getElementById("signupForm").appendChild(errorElement);
          }
          break;
        case 2:
          inputElement = email;
          if (inputElement) {
            inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
          } else {
            document.getElementById("signupForm").appendChild(errorElement);
          }
          break;
        case 3:
          inputElement = password;
          if (inputElement) {
            inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
          } else {
            document.getElementById("signupForm").appendChild(errorElement);
          }
          break;
        default:
          inputElement = null;
      }

      // if (inputElement) {
      //   inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
      // } else {
      //   document.getElementById("signupForm").appendChild(errorElement);
      // }
    });

    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.some((v) => v.email === email.value)) {
    // alert("Duplicate Data");
  } else {
    users.push({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
      gender: gender.value,
      dob: dob.value,
      address: address.value,
    });

    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("signinForm").action = "profile.html"
  }
};


function simpleHash(input) {
  let hash = 0;
  if (input.length === 0) return hash;

  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = (hash << 5) - hash + char;
  }

  return hash.toString();
}



function storeData(event) {




  // Remove existing error messages
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach((element) => {
    element.textContent = "";
  });

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const gender = document.getElementById("gender");
  const dob = document.getElementById("dob");
  const address = document.getElementById("address");

  const errorMessages = {
    firstName_error: "",
    lastName_error: "",
    email_error: "",
    password_error: "",
  };

  // Add event listeners to clear error messages dynamically
  firstName.addEventListener("input", function () {
    document.getElementById("firstName_error").textContent = "";
  });

  lastName.addEventListener("input", function () {
    document.getElementById("lastName_error").textContent = "";
  });

  email.addEventListener("input", function () {
    document.getElementById("email_error").textContent = "";
  });

  password.addEventListener("input", function () {
    document.getElementById("password_error").textContent = "";
  });

  if (
    !firstName.value.match(/^[a-zA-Z]+$/) ||
    firstName.value.length <= 2 ||
    firstName.value.length >= 50
  ) {
    errorMessages["firstName_error"] = "First name is required (2-50 characters)";

  }

  // document.getElementById("firstName_error").textContent = errorMessages[0];

  if (
    !lastName.value.match(/^[a-zA-Z]+$/) ||
    lastName.value.length <= 2 ||
    lastName.value.length >= 50
  ) {
    // errorMessages.push("Last name is required (2-50 characters)");
    // document.getElementById("lastName_error").textContent = "Last name is required (2-50 characters)";
    errorMessages["lastName_error"] = "First name is required (2-50 characters)";
  }

  if (!email.value.match(/^\S+@\S+\.\S+$/)) {
    // errorMessages.push("Invalid email address");
    // document.getElementById("email_error").textContent = errorMessages[2];
    errorMessages["email_error"] = "Invalid email address";
  }


  if (password.value.length < 8) {
    //errorMessages.push("Minimum 8 characters required");
    // document.getElementById("password_error").textContent = "Minimum 8 characters required";
    errorMessages["password_error"] = "Minimum 8 characters required";

  } else if (password.value.length > 19) {
    // errorMessages.push("Maximum 19 characters allowed");
    // document.getElementById("password_error").textContent = errorMessages[3];
    errorMessages["password_error"] = "Maximum 19 characters allowed";

  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,19}$/.test(password.value)) {
    // errorMessages.push(
    //   "Password should have at least 1 uppercase, 1 lowercase, and 1 digit (8-19 characters)"
    // );
    // document.getElementById("password_error").textContent = errorMessages[3];
    errorMessages["password_error"] = "Password should have at least 1 uppercase, 1 lowercase, and 1 digit (8-19 characters)";
  }

  let validate = false;
  Object.keys(errorMessages).map((key) => {
    if (errorMessages[key] != "") {
      validate = true;
      document.getElementById(key).textContent = errorMessages[key];
    }

  })

  if (validate) {

    event.preventDefault(); // Prevent form submission
    event.stopPropagation(); // Prevent form submission

  } else {

    const hashedPassword = simpleHash(password.value);




    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((v) => v.email === email.value)) {
      alert("Duplicate Data");
      event.preventDefault(); // Prevent form submission
      event.stopPropagation(); // Prevent form submission
    } else {
      users.push({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: hashedPassword,
        hashedPassword: hashedPassword,
        gender: gender.value,
        dob: dob.value,
        address: address.value,
      });

      localStorage.setItem("users", JSON.stringify(users));
      document.getElementById("signupForm").action = "profile.html"
      window.location.href = "profile.html"
      // window.location.href="profile.html"
      sessionStorage.setItem("currentUser", email.value)
      sessionStorage.setItem("password", password.value)
      sessionStorage.setItem("password", hashedPassword)
        // Clear form inputs
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  password.value = "";
  gender.value = "";
  dob.value = "";
  address.value = "";



  document.getElementById("signinForm").action = "profile.html";

  //////////////////////////


  let user = JSON.parse(localStorage.getItem("users"))


  if (user.some((v) => {

    if (v.email == email.value && v.password == password.value) {
      sessionStorage.setItem("email", email.value)
      sessionStorage.setItem("password", password.value)
    }

    return v.email == email.value && v.password == password.value;
  }


  )


  ) {




    document.getElementById("signinForm").action = "profile.html";




  }

    }
    

  }



  //////////////////////////////////////////////////////////////////////



  // alert("Registration successful!");
}






