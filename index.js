$(document).ready(function() {
    
    //Service list
    $("#li1").hover(function() {
        document.getElementById("liDiv1").style.display = "block";
    },
    function() {
        document.getElementById("liDiv1").style.display = "none";
    });

    $("#li2").hover(function() {
        document.getElementById("liDiv2").style.display = "block";
    },
    function() {
        document.getElementById("liDiv2").style.display = "none";
    });

    $("#li3").hover(function() {
        document.getElementById("liDiv3").style.display = "block";
    },
    function() {
        document.getElementById("liDiv3").style.display = "none";
    });

    $("#li4").hover(function() {
        document.getElementById("liDiv4").style.display = "block";
    },
    function() {
        document.getElementById("liDiv4").style.display = "none";
    });

    //Open business Facebook page function
    $("#fbButton").on("click", function() {
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

    // Validating Empty Field And Sending Email
    function check_empty() {
        if (document.getElementById("name").value == "" || document.getElementById("email").value == "" || document.getElementById("msg").value == "") {
            alert("Fill All Fields !");
        } else {
            //Send email
            var sender = document.getElementById("name").value;
            var senderEmail = document.getElementById("email").value;
            var message = document.getElementById("msg").value + "%0D%0A%0D%0AFrom: " + sender + "%0D%0AReturn Email: " + senderEmail + "%0D%0A%0D%0A";
            var body = "body=" + message;
            var subject = "?subject=Website Lead&";
            var recipient="mercadotowing6";
            var at = String.fromCharCode(64);
            var dotcom="yahoo.com";
            var mail="mailto:";

            var mailWindow = window.open(mail + recipient + at + dotcom + subject + body);
            setTimeout(function(){mailWindow.close()}, 50);
            alert("Form Submitted Successfully...");
            div_hide();
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

    //Function to dial business phone
    $("#callButton").on("click", function() {
        window.location.href = "tel:8478007859";
    });
});
