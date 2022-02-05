$(document).ready(function(){
    $("div").click(function(){
        $("p").toggleClass("afficher cacher");
        $(".afficher").show();
        $(".cacher").hide();
    });
    $("div").dblclick(function(){
        $(this).css("background-color", "lightBlue");
    });
});
