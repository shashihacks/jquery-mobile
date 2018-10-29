var cities = ["Perth", "Brisbane", "Sydney", "Melbourne", "Adelaide"]
    // Onload Function
function myFunction() {
    //            if(document.getElementById("cityname").innerText=="" || document.getElementById("cityname").innerText==undefined){
    //            document.getElementById("cityname").innerText="Perth"
    //        }
    //        showLogs()
}
//page init method to intialize page 
$(document).bind('pageinit', function (event) {
    if (document.getElementById("cityname").innerText == "" || document.getElementById("cityname").innerText == undefined) {
        document.getElementById("cityname").innerText = "Perth"
    }
    showLogs()
});
//Display city name in formpage
function getCity(cityName) {
    document.getElementById("cityname").innerText = cityName
}
var count = 1
    //Form submit
function submitted() {
    if ($("#contact").val() == "" || $("#contact").val() == undefined || $("#invoice").val() == "" || $("#invoice").val() == undefined || $('#selectCity').val() == "") {
        $("#errorpopup").popup("open");
        return;
    }
    var data = []
        //    document.getElementById('selectCity').value = "Perth";
    $("#p").popup("open");
    // Check browser support
    if (typeof (Storage) !== "undefined") {
        // Store
        var contact = document.getElementById("contact").value;
        var invoice = document.getElementById("invoice").value;
        var citySelected = document.getElementById("selectCity").value;
        var city = document.getElementById("cityname").innerText;
        var dateObj = new Date()
        data = [city, contact, invoice, citySelected, dateObj]
        if (localStorage.length == 0) {
            localStorage.setItem("data", JSON.stringify(data))
        }
        else if (localStorage.length > 0) {
            var x = JSON.parse(localStorage.getItem("data"))
            x.push(city)
            x.push(contact)
            x.push(invoice)
            x.push(citySelected)
            x.push(dateObj)
            localStorage.setItem("data", JSON.stringify(x))
            var ret = localStorage.getItem("data")
        }
    }
    else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
    document.getElementById("contact").value = "";;
    document.getElementById("invoice").value = "";
}

function getdata(cityName) {}
//Logs page function
function showLogs() {
    //     $('table').remove("tr:gt(0)");
    document.getElementById("citylogsname").innerText = document.getElementById("cityname").innerText
    var x = JSON.parse(localStorage.getItem("data"))
    var ul = document.getElementById("log")
        //    if(x==null || x==undefined)
        //        return
    var html = "<table><tr><th>City</th><th>Contact</th><th>Invoice</th><th>Destination</th><th>Date</th></tr> ";
    if (x == null) {
        return
    }
    for (var i = 0; i < x.length; i++) {
        if (i % 5 == 0 && x[i] == document.getElementById("cityname").innerText) {
           
                //        if (x[i] == document.getElementById("cityname").innerText) {
            html += "<tr>";
            html += "<td>" + x[i] + "</td>";
            html += "<td>" + x[i + 1] + "</td>";
            html += "<td>" + x[i + 2] + "</td>";
            html += "<td>" + x[i + 3] + "</td>";
            html += "<td>" + x[i + 4] + "</td>";
            i = i + 4
            html += "</tr>";
        }
    }
    //    }
    html += "</table>";
    document.getElementById("table-log").innerHTML = html;
}
//    document.getElementById("table-log").style.display='none'
//Cleear form fiels
function clearData() {
    document.getElementById("contact").value = "";;
    document.getElementById("invoice").value = "";
    document.getElementById("selectCity").selectedIndex = "-1"
}

function sendlogdata() {
    $("#logdatapopup").popup("open");
}

function cancel() {
    $("#logdatapopup").popup("close");
}


//send log data and clear when ok is clicked
function ok() {
    $("#logdatapopup").popup("close");
    setTimeout(function () {
        $("#sucesspopup").popup("open");
    }, 1000);
    localStorage.removeItem("data")
     localStorage.clear();
}

function done() {}

function errorok() {
    $("#errorpopup").popup("close");
    $('#p').popup("close")
}