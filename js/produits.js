var un = document.getElementById("diaporama_btn1")
var deux = document.getElementById("diaporama_btn2")
var trois = document.getElementById("diaporama_btn3")
var quatre = document.getElementById("diaporama_btn4")

un.addEventListener("click", function() {
  document.getElementById("diapo_img").setAttribute("src", "../images/diaporama_btn1.jpg")
})

deux.addEventListener("click", function() {
  document.getElementById("diapo_img").setAttribute("src", "../images/diaporama_btn2.jpg")
})

trois.addEventListener("click", function() {
  document.getElementById("diapo_img").setAttribute("src", "../images/diaporama_btn3.jpg")
})

quatre.addEventListener("click", function() {
  document.getElementById("diapo_img").setAttribute("src", "../images/diaporama_btn4.jpg")
})
