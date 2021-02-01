window.onload = function() {
    var y = localStorage.getItem('seatno')
    document.getElementById("seatinput").value = y
    var seatvalue = localStorage.getItem('price')
    document.getElementById("seatprice").value = `${seatvalue}`

}

function checkGender(seat, gender, dataArray) {
    if (seat % 2 == 0) {
        // console.log("seat")
        if (dataArray[seat - 1] && dataArray[seat - 1].gender != gender) {
            // console.log("false")
            return false
        } else {
            // console.log("true")
            return true
        }
    } else {
        // console.log(seat, gender, dataArray)
        // console.log(dataArray[seat + 1])
        if (dataArray[seat + 1] && dataArray[seat + 1].gender != gender) {


            return false
        } else {
            return true
        }
    }
}


function bookSeat() {
    // console.log("1", localStorage.getItem("inputDetails"))
    var inputDetails = JSON.parse(localStorage.getItem("inputDetails"))
        // console.log("2", inputDetails)

    var y = localStorage.getItem('seatno')



    var name = document.getElementById("name").value
    var mail = document.getElementById('mail').value
    var x = document.getElementsByName('gender')
        // console.log("3", inputDetails)
    let gender;

    for (i = 0; i < x.length; i++) {
        if (x[i].checked)
            gender = x[i].value

    }
    inputDetails[y] = { name: name, mail: mail, gender: gender }




    if (name.length > 0 && mail.length > 5 && x) {
        var check = checkGender(parseInt(y), gender, inputDetails)
        if (parseInt(y) > 20) {
            if (inputDetails[000]) {
                if (inputDetails[000].gender == gender) {
                    localStorage.setItem('inputDetails', JSON.stringify(inputDetails))
                    window.location.href = "/last/last.html";
                } else {
                    alert("gender mismatch")
                    window.location.href = "/bus/bus.html";
                }
            } else {
                inputDetails[000] = { gender: gender }
                localStorage.setItem('inputDetails', JSON.stringify(inputDetails))
                window.location.href = "/last/last.html";
            }
        } else if (check) {

            localStorage.setItem('inputDetails', JSON.stringify(inputDetails))

            window.location.href = "/last/last.html";
        } else {
            alert("gender mismatch")
            window.location.href = "/bus/bus.html";

        }
    } else {
        alert("enter all fields")
    }




}