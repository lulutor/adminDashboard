
var users = [
  {userName:"admin", password:"password"}
]
var lienSignIn = document.getElementById("lien_validation");
var validate = document.getElementById("validate")
var signUp = document.getElementById("sign-up")

var validation = function (utilisateur, motDePasse) {
  for(var i = 0; i < users.length; i++) {
    if(utilisateur === users[i].userName && motDePasse === users[i].password) {
      lienSignIn.setAttribute("href", "pages/dashboard.html")
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
  var userNameSignIn = document.getElementById("username").value;
  var passwordSignIn = document.getElementById("password").value;
  users.push({userName: userNameSignIn, password: passwordSignIn});
});
