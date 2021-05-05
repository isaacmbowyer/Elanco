
// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedEm = localStorage.getItem('email');  //Users Name from Registration
    var storedPw = localStorage.getItem('regpassword');     //Users Password from Registration

    // entered data from the login-form
    var userEmail = document.getElementById('userEmail').value;     //Users Username Entered into Login box
    var userPw = document.getElementById('userPw').value;         //Users Password Entered into Login box
    var ButtonType = document.getElementById('login_btn').value; //Type of login button i.e. quick login normal login
    var FormAction = document.getElementById('login-form');      //Link the button redirects to on login
    
    // user 1 
    if(userEmail == 'tom.browns@gmail.com' && userPw == 'Password12!'){
        // set the data for the logged in user
        localStorage.setItem('ls', true)
        localStorage.setItem('fullname', 'Tom Brown');
        localStorage.setItem('email', 'tom.browns@gmail.com')
        localStorage.setItem('code', '93635');
        localStorage.setItem('address1', '78 West Devonshire Ave');
        localStorage.setItem('city', 'Los Banos')
        localStorage.setItem('province/state/county', 'CA')
        localStorage.setItem('country', 'United States');
        localStorage.setItem('petname', 'Charlie');
        localStorage.setItem('petdate', '19/17/21');
        FormAction.setAttribute('action', '/Rebate/index.html')
        FormAction.submit();
    }
   

    // check if stored data from register-form is equal to data from login form
    if(userEmail == storedEm && userPw == storedPw) {
        // veiw details
        localStorage.setItem('ls', true);
        FormAction.action="viewdetails.html";
        FormAction.submit();

    }
    
    else {
       // password/details inccorect 
       document.getElementById('user-error').style.display = 'block';

    }
}

function visibility() {
    // let user see password
    var x = document.getElementById("userPw");
    
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


// Log Out
var link = document.getElementById('user-log')
if(localStorage.getItem('ls') != null){
    // change the link to say log out 
    link.innerHTML = 'Log Out';
}




