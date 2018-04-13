
///// CHART 1

var ctxBar = document.getElementById('bar_chart').getContext('2d');
var chart = new Chart(ctxBar, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {}
});


///// CHART 2





var ctxDoughnut = document.getElementById('doughnut_chart').getContext('2d');
var chart = new Chart(ctxDoughnut, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {}
});



///// CHART 3





var ctxArea = document.getElementById('area_chart').getContext('2d');
var chart = new Chart(ctxArea, {
    // The type of chart we want to create
    type: 'polarArea',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {}
});

// verification formulaire

var users = [
  {userName:"admin", password:"password"},
  {userName: "lucas", password: "lucas"},
  {userName: "invite", password:"invite"}
]

var nom = document.getElementById("username").value;
var motDePasse= document.getElementById("password").value;
var lienConection = document.getElementById("lien_validation");



lienConection.setAttribute("href","pages/dashboard.html");
