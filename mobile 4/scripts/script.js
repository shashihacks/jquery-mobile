data = document.getElementById("data").textContent

function formpage(data) {
    $('#data').innertext == data
    if ($('#data').innertext == undefined || $('#data').val() == "") {
        document.getElementById("data").textContent = data
    }
    $('#time').html(new Date())
    console.log(new Date(), data)
}
$(document).on("pageinit", "#form-entry", function (event) {
    console.log(data)
    if (data == undefined) {
        $('#some_error').popup("open")
    }
});
$(document).on('pageshow', '#form-entry', function () {
    console.log('pageshow');
    if (data == undefined || data == "") {
        $(location).attr('href', '#home')
        $('#some_error').popup("open")
    }
});
$(document).on('pageshow', '#logs', function () {
    // $('#logtab').empty()
    constructlogs()
});
///Save log data in local storage
var logged = []

function saveEntry() {
    //    $('#some_error').popup("open")
    var contact, invoice, destination, data
    console.log("clicked")
    data = document.getElementById("data").textContent
    console.log()
    contact = $('#contact').val()
    invoice = $('#invoice').val()
    destination = $("#Destination").val()
    console.log(contact, invoice)
    if (contact == "") {
        $('#contact_error').popup("open")
    }
    else if (invoice == "") {
        $("#invoice_error").popup("open")
    }
    else if (data == "" || data == undefined) {
        $('#some_error').popup("open")
    }
    else {
        //check if storage is supported or not by browser
        if (typeof (Storage) !== "undefined") {
            // Store data
            //creating objects
            var log_object = ({
                    "city": data
                    , "contact": contact
                    , "invoice": invoice
                    , "destination": destination
                    , "time": new Date()
                })
                //insert the data in to the array
            logged.push(log_object)
            localStorage.setItem("logger", JSON.stringify(logged));
            //            var getlogs = JSON.parse(localStorage.getItem("logger"));
        }
        else {
            document.getElementById("no-support").innerHTML = "Sorry, your browser does not support Web Storage...,Open in Recommended Browsers";
            alert("local storage does'nt support")
        }
        //sucess dialog pop up
        $('#success-msg').popup("open")
            //clear filed on exit
        $('#contact').val('')
        $('#invoice').val('')
    }
}
//clearing form data
function reset() {
    $('#contact').val('') //clear contact field
    $('#invoice').val('') //clear invoice field
}
var table_html = ""

function constructlogs() {
    $('#logtab').empty()
    var getlogs = JSON.parse(localStorage.getItem("logger"));
    console.log(getlogs, typeof (getlogs))
    if (getlogs != null) {
        var table_head=    "<tr>                <th>City</th>                <th>Contact &emsp;&emsp;</th>                <th>Invoice Number&emsp;&emsp;&emsp;</th>                <th>Destination&emsp;&emsp;</th>                <th>Time</th>              </tr>"
        $('#logtab').append(table_head)
        for (var i = 0; i < getlogs.length; i++) {
//            if (document.getElementById("data").innerText == getlogs[i].city) {
                console.log(getlogs[i])
                table_html = "<tr> <td>" + getlogs[i].city + "&emsp;</td><td>" + getlogs[i].contact + "&emsp;</td><td>" + getlogs[i].invoice + "&emsp;</td> <td> " + getlogs[i].destination + "&emsp;</td><td> " + getlogs[i].time + "&emsp;</td> </tr>";
                $('#logtab').append(table_html)
//            }
        }
    }
}


function sendlogger(){
    $('#erase-log').popup("open")
}

function confirmed(){
     $('#erase-log').popup("close")
    setTimeout(function(){
        localStorage.clear()
        $('#success-log').popup("open")
    },600)
    
}