$('document').ready(function () {
    //             $.mobile.changePage(
    //            window.location.href,
    //            {
    //              allowSamePageTransition : true,
    //              transition              : 'none',
    //              showLoadMsg             : false,
    //              reloadPage              : true
    //            }
    //          );
    document.getElementById("selectedcityname").innerHTML = "Perth"
});

function gotocitylog(city) {
    document.getElementById("selectedcityname").innerHTML = city

}

function previous() {}
var arr = new Array()

function save() {
    if ($("#textinput_1").val() == '' || $("#textinput_2").val() == '' || document.getElementById("selectedcityname").innerHTML == '' || document.getElementById("selectedcityname").innerHTML == undefined || $('#select_choice_city').val() == "") {
        $("#failurepopup").popup("open");
        return
    }
    else {
        // Checking browser support
        if (typeof (Storage) !== "undefined") {
            // Storing
            //     var testObject = { 'one': 1, 'two': 2, 'three': 3 };
            var contact_details = document.getElementById("textinput_1").value
            var invoice_number = document.getElementById("textinput_2").value
            var cityname = document.getElementById("selectedcityname").innerHTML
            var destination_city = document.getElementById("select_choice_city").value
            var date_now = new Date()
            var storeObject = {
                    "city": cityname
                    , "contact": contact_details
                    , "invoice": invoice_number
                    , "destination": destination_city
                    , "date_time": date_now
                }
                // Put the object into storage
            arr.push(storeObject)
            localStorage.setItem('city_data', JSON.stringify(arr));
            //if("city_data" in localStorage){
            //   localStorage.setItem('city_data', JSON.stringify(arr));
            //
            //}
            // Retrieve the object from storage
            var retrievedObject = localStorage.getItem('city_data');
          
            var obj = JSON.parse(retrievedObject)
            $("#successpopup").popup("open");
        }
        else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
        }
    }
}

function clearform() {
    document.getElementById("textinput_1").value = ""
    document.getElementById("textinput_2").value = ""
        //     $.mobile.changePage(
        //    window.location.href,
        //    {
        //      allowSamePageTransition : true,
        //      transition              : 'none',
        //      showLoadMsg             : false,
        //      reloadPage              : true
        //    }
        //  );
}

function showlog() {
    $("table").find("tr:gt(0)").remove();
 
    var retrievedObject = localStorage.getItem('city_data');
    var city_data = JSON.parse(retrievedObject)
//    console.log(city_data.length)
    for (var i = 0; i < city_data.length; i++) {
        if (city_data[i].city == $("#selectedcityname").html()) {
            var markup = "<tr> <td>" + i + "</td>         <td>" + city_data[i].city + "</td><td>" + city_data[i].contact + "</td><td>" + city_data[i].invoice + "</td> <td> " + city_data[i].destination + "</td><td> " + city_data[i].date_time + "</td> </tr>";
            $("table tbody").append(markup);
        }
    }
}

function sendlogdata() {
    $('#sendlogpopup').popup("open")
}

function yes_clicked() {
    setTimeout(function () {
        $('#confirmedpopup').popup("open")
    }, 1000)
    localStorage.clear();
    
     var retrievedObject = localStorage.getItem('city_data');
    var dataobjects = JSON.parse(retrievedObject)
//    for(var i=0;i<dataobjects.length;i++){
//        if($("#selectedcityname").html()==dataobjects[i].city){
//            dataobjects.splice(i,1);
//        }
//    }
 
}