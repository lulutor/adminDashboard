
var users = [
  {userName:"admin", password:"password"}
]
var lienSignIn = document.getElementById("lien_validation");
var validate = document.getElementById("validate")
var signUp = document.getElementById("sign_up")

var validation = function (utilisateur, motDePasse) {
  for(var i = 0; i < users.length; i++) {
    if(utilisateur === users[i].userName && motDePasse === users[i].password) {
      lienSignIn.setAttribute("href", "pages/dashboard.html")
      document.getElementById("you_can").textContent = "You can sign in"
    }else{
      document.getElementById("you_can").textContent = "Wrong password"
    }
  }
  return;
}
validate.addEventListener('click', function(){
  var userNameSignIn = document.getElementById("username").value;
  var passwordSignIn = document.getElementById("password").value;
  validation(userNameSignIn, passwordSignIn);

});

signUp.addEventListener('click', function() {
  var userNameSignUp = document.getElementById("username_sign_up").value;
  var passwordSignUp = document.getElementById("password_sign_up").value;
  users.push({userName: userNameSignUp, password: passwordSignUp});
})
