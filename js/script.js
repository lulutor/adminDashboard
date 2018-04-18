
var users = [
  {userName:"admin", password:"password"}
]
var userNameSignIn = document.getElementById("username").value;
var passwordSignIn = document.getElementById("password").value;
var lienSignIn = document.getElementById("lien_validation");

var validation = function (utilitaire, motDePasse) {
  for(var i=0; i<users.length; i++){
    if(utilitaire === users[i].userName && motDePasse === users[i].userName) {
      lienSignIn.setAttribute("href", "pages/dashboard.html");
    }
  }
}

validation(userNameSignIn, passwordSignIn);
