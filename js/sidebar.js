$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
    $("#user-photo").toggleClass("hidden");
    $("#show-info").toggleClass("hidden");
    $(".collapsible-text").toggleClass("hidden");
    $("#control").toggleClass("glyphicon-menu-hamburger glyphicon-remove-circle");
    $("#personal-options").toggleClass("hidden");
});

$("#personal").click(function (e) {
    e.preventDefault();
    $("#personal-options").toggleClass("sublist-hidden");
});

log