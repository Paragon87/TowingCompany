$(document).ready(function() {
    
    //Open business Facebook page function
    $("#fbButton").on("click", function () {
        window.open("https://www.facebook.com/Mercado-and-Sons-Towing-673109756480032", "_blank");
    });

    //Pointer hover color change functions
    $("#fbButton").hover(function() {
        $(this).css("color", "grey");
    },
    function() {
        $(this).css("color", "white");
    });

    $("#emailButton").hover(function() {
        $(this).css("color", "grey");
    },
    function() {
        $(this).css("color", "white");
    });

    $("#callButton").hover(function() {
        $(this).css("color", "grey");
    },
    function() {
        $(this).css("color", "white");
    });

    //Send email
    var sender = "?sender=" + document.getElementById("name").value;
    var senderEmail = "senderEmail=" + document.getElementById("email").value;
    var message = "body=" + document.getElementById("msg").value;
    var subject = "Website Lead";
    var recipient="goff3110";
    var at = String.fromCharCode(64);
    var dotcom="gmail.com";
    var mail="mailto:";

    // Validating Empty Field
    function check_empty() {
        if (document.getElementById("name").value == "" || document.getElementById("email").value == "" || document.getElementById("msg").value == "") {
            alert("Fill All Fields !");
        } else {
            window.open(mail+recipient+at+dotcom+sender+senderEmail+subject+message, "_blank");
            alert("Form Submitted Successfully...");
        };
    };
    //Function To Display Popup
    function div_show() {
    document.getElementById('emailPopup').style.display = "block";
    };

    //Function to Hide Popup
    function div_hide() {
        document.getElementById('emailPopup').style.display = "none";
    };

    //Open email popup button
    $("#emailButton").on("click", div_show);

    //Close email popup button
    $("#close").on("click", div_hide);

    //Submit form button
    $("#submit").on("click", check_empty);
});