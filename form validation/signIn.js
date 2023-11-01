function signInPage(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
   
    var storedUser = JSON.parse(localStorage.getItem('user'));
  
   
    if (storedUser && email === storedUser.email && password === storedUser.password) {
     
      var token = Math.random().toString(36).substr(2);
  
 
      storedUser.token = token;
  
    //   for (let key in storedUser) {
    //     if (storedUser.hasOwnProperty(key)) {
    //         value = storedUser[key];
    //         console.log(key, value);
    //         localStorage.setItem(key,value)
    //     }
    // }
     
      localStorage.setItem('user', JSON.stringify(storedUser));
  
      window.location.href = 'profile.html';
    } else {
      alert('Invalid email or password');
    }
}