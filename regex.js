
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
$(() => {
    $("#btn").click(function () {
        if ($("#fname").val() === "" || $("#lname").val() === "" || $("#email").val() === "" ||$("#pass").val() === "") {
            $("#p1").css("display", "block");
        } else {
            $("#p1").css("display", "none");
        }
    })


    $("#btn").click(function () {
        if ($("#email").val()!=mailformat) {
            $("#p3").css("display", "block");
        } else {
            $("#p3").css("display", "none");
        }

    })
    $("#btn").click(function () {
        if ($("#pass").val()!=passFormat) {
            $("#p2").css("display", "block");
        } else {
            $("#p2").css("display", "none");
        }

    })
})





