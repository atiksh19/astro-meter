/* loading data */
var data = [];
$.getJSON("data.json", (json) => {
    data = json["planets"]
});
/* loading data */

/* functions */
// function change(i){}
/* functions */

/* preloader */
window.addEventListener("load", () => {
    $("#preloader").css("z-index", -2);
});
/* preloader */