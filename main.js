// let url = document.getElementById("url");

let respons = document.getElementById("res");
let request = document.getElementById("req");
let json = document.getElementById("json");
$(document).ready(function () {
    $("#select").click(function () {
        $("#get").css("display", "block");
        $("#down").css("display", "inline");
        $("#left").css("display", "none");
    });
    $("#select").click(function () {
        $("#post").css("display", "block");

    });
});

$("#get").click(function () {
    $("#select").css("display", "none");
    $("#pres").css("display", "block");
    $("#res").css("display", "block");
    $("#json").css("display", "block");

});
$("#get").click(function () {
    $("#post").css("display", "none");
});

$("#post").click(function () {
    $("#select").css("display", "none");
    $("#pres").css("display", "block");
    $("#res").css("display", "block");
    $("#json").css("display", "block");
    $("#preq").css("display", "block");
    $("#req").css("display", "block");

});
$("#post").click(function () {
    $("#get").css("display", "none");
});






function chose(element1, element2) {
    if ($(element1).css("display") == "block" && $(element2).css("display") == "none") {
        return true;
    } else {
        return false;
    }
};


$("#btn").click(function () {
    $.ajax({
        url: $("#url").val(),
        type: "GET",
        success: function (data, statusetext, xhr) {
            if (chose($("#get"), $("#post")) == true) {
                return respons.innerHTML = JSON.stringify(data);


            } if (chose($("#get"), $("#post")) == true) {
                return json.innerHTML = JSON.stringify(xhr.getAllResponseHeaders("Content-Type"));

            }



        },
        error: function (err) {
            respons.innerHTML = JSON.stringify(err);
        }

    })
});



$("#btn").click(function () {
    $.ajax({
        url: $("#url").val(),
        type: "post",
        data: $("#req").val(),
        success: function (data, statusetext, xhr) {
            if (chose($("#post"), $("#get")) == true) {
                return respons.innerHTML = JSON.stringify(data);
                
            } if (chose($("#get"), $("#post")) == true) {
                return json.innerHTML = JSON.stringify(xhr.getAllResponseHeaders("Content-Type"));

            }

        },
        error: function (err) {
            respons.innerHTML = JSON.stringify(err);
        }

    });

});