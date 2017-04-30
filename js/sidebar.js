$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
        $("#user-photo").toggleClass("hidden");
        $("#show-info").toggleClass("hidden");
});