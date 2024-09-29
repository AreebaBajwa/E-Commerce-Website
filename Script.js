// ********************************For SignUp Page*****************************
function SignUp(){
    const password = document.getElementById("password").value;
    const country = document.getElementById("country").value;
    const confirmPassword = document.getElementById("confirmpassword").value;
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("phone-no").value;
    const city = document.getElementById("city").value;

    if (password !== confirmPassword) {
        alert("Incorrect Confirm Password");
        return;
    }
    else{
    const userData = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        country : country,
        city: city,
        number: number,
        password: password,
    };
    var userlist = localStorage.getItem("users")
    var parseData = JSON.parse(userlist)
    
    var users = [];
    var users = parseData? parseData : [];
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users))
    alert("Sign Up sccessfully")};
    document.addEventListener("DOMContentLoaded", function() {
      location.href = "homepage.html";
  });

}
//****************************LOGIN*************************************************** */