$(document).ready(function(){
    $("Texn").click(function(){
        $("n").toggleClass("afficher cacher");
        $(".afficher").show();
        $(".cacher").hide();
    });
    $("Texn").dblclick(function(){
        $(this).css("background-color", "lightBlue");
    });
});
