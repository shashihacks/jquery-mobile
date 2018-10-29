$('document').ready(function () {
    city()
    if ("log" in localStorage) {
        showLogs()
    }
})
var cities = ["Perth"
, "Brisbane"
, "Sydney"
, "Melbourne"
, "Adelaide", ]

function city(city) {
    document.getElementById("cityname").innerText = city
    if ($('#cityname').text() == 'undefined') {
        document.getElementById("cityname").innerText = cities[2]
    }
}

function clearData() {
    $('#contactnumber').val('')
    $('#invoiceno').val('')
}

function test() {}

function getData() {
    if ($('#contactnumber').val() == "") {
        $('#alert-contact').popup("open")
        return
    }
    if ($('#invoiceno').val() == "") {
        $('#alert-invoice').popup("open")
        return
    }
    if ($('#contactnumber').val() != '' && $('#invoiceno').val() != '') {
        var city = document.getElementById("cityname").innerText
        var contact = $('#contactnumber').val()
        var invoiceno = $('#invoiceno').val()
        var dstn = $('#selectCity').val()
        var localdateandtime = new Date()
        if ("log" in localStorage) {
            localStorage.setItem("log", localStorage.getItem("log") + '?' + city + '?' + contact + '?' + invoiceno + '?' + dstn + '?' + localdateandtime)
        }
        else {
            localStorage.setItem("log", city + '?' + contact + '?' + invoiceno + '?' + dstn + '?' + localdateandtime)
        }
        var ret = localStorage.getItem("log")
            //clear form data
        $('#contactnumber').val('')
        $('#invoiceno').val('')
        document.getElementById('sucess').style.display = 'block'
        setTimeout(function () {
            document.getElementById('sucess').style.display = 'none'
        }, 1500)
        $('#log-saved').popup("open")
    }
    else {
        //        document.getElementById("savedialogbox").style.display='none'
        document.getElementById("error").style.display = 'block'
        setTimeout(function () {
            document.getElementById("error").style.display = 'none'
        }, 2500)
    }
    document.getElementById("log-error").style.display = 'none'
}
var disabler

function showLogs() {
    //    $('#loggedcityname').val(document.getElementById("cityname").innerText)
    document.getElementById("loggedcityname").innerText = document.getElementById("cityname").innerText
        //    if("log" in localStorage){
        //        disabler=false
        //        alert("f")
        //    }
        //    else{
        //        disabler=true
        //    }
    if (!("log" in localStorage)) {
        document.getElementById("log-error").style.display = 'block'
    }
    $("table").find("tr:gt(0)").remove();
    var data = localStorage.getItem("log")
    data = data.split('?')
        //    document.getElementById("loggedcityname").innerText= document.getElementById("cityname").innerText
    for (var i = 0; i < data.length; i++) {
        //Show only selected data log of the city
    
        if (i % 5 == 0) {
            if (data[i] == document.getElementById("cityname").innerText) {
                var sno = i
                var city = data[i];
                var contact = data[i + 1];
                var invoiceno = data[i + 2]
                var destination = data[i + 3]
                var localdateandtime = data[i + 4]
                i = i + 4
                var markup = "<tr><td>" + contact + "</td><td>" + invoiceno + "</td><td>" + destination + "</td><td>" + localdateandtime + "</td>  </tr>";
                $("table tbody").append(markup);
            }
        }
    }
}

function sendLogs() {
    //    if("log" in localStorage){
    //
    //            setTimeout(function () {
    //          document.getElementById('switch-pop-up').style.display = 'block'
    //        }, 1000)
    //       
    //       
    //    }
    //    else{
    //        return true;
    //    }
    $('#log-send').popup("open")
}

function confirm() {
    localStorage.removeItem("log");
}

function continued() {
    $('#log-send').popup("close")
    setTimeout(function () {
        $("#log-send-confirmed").popup("open")
    }, 1000)
}

function yes() {
    document.getElementById('switch-pop-up').style.display = 'none'
    localStorage.removeItem("log");
    document.getElementById('sucess-log').style.display = 'block'
}

function ok() {
    document.getElementById('sucess-log').style.display = 'none'
    document.getElementById('switch-pop-up').style.display = 'block'
}