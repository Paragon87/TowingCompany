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
        $(this).css("color", "#990000");
    });

    $("#emailButton").hover(function() {
        $(this).css("color", "grey");
    },
    function() {
        $(this).css("color", "#990000");
    });

    $("#callButton").hover(function() {
        $(this).css("color", "grey");
    },
    function() {
        $(this).css("color", "#990000");
    });

});