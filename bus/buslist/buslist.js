window.onload = function() {

    var name = localStorage.getItem('Arrival');
    var desti = localStorage.getItem('Destination');
    var date = localStorage.getItem('date');


    if (name != "undefined" || name != "null") {
        document.getElementById('travel').innerHTML = `${name} to ${desti}`
        document.getElementById('date').innerHTML = date
    } else {
        document.getElementById('travel').innerHTML = "Hello!";
    }
}