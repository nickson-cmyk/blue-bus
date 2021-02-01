for (let n = 1; n < 6; n++) {
    var x = document.getElementsByClassName(`row${n}`)
    x[0].style.display = "flex"
    x[0].style.justifyContent = "space-between"
    x[0].style.marginBottom = "40px"
    var y = document.getElementsByClassName(`row${n}-left`)
    y[0].style.display = "flex"
    y[0].style.width = "40%"
    y[0].style.justifycontent = "space-evenly"
    var z = document.getElementsByClassName(`row${n}-right`)
    z[0].style.display = "flex"
    z[0].style.width = "40%"
    z[0].style.justifycontent = "space-evenly"


}

var inputValue = JSON.parse(localStorage.getItem("inputDetails"))

function sli(d) {
    var x = parseInt(document.getElementById(`${d}`).innerText)
    console.log(x)


    if (inputValue[x]) {
        alert("already booked")


    } else {
        if (x > 20) {
            var price = 40
            localStorage.setItem('price', price)
            var y = document.getElementById(`${d}`)
            localStorage.setItem("seatno", x)
            window.location.href = "http://127.0.0.1:5500/finalform/finalform.html"
        } else {
            var price = 50
            localStorage.setItem('price', price)
            var y = document.getElementById(`${d}`)
            localStorage.setItem("seatno", x)
            window.location.href = "http://127.0.0.1:5500/finalform/finalform.html"
        }
    }
}
if (inputValue) {
    for (let i = 1; i < 26; i++) {
        if (inputValue[i]) {

            console.log(inputValue[i])
            if (inputValue[i].gender == "male") {
                document.getElementById(`${i}`).classList.add("book-male")



            } else {
                document.getElementById(`${i}`).classList.add("book-female")


            }
        }


    }
} else {
    localStorage.setItem("inputDetails", JSON.stringify({}))
}