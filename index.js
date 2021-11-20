/* data */
planets = [
    {
        "name": "Mercury",
        "img": "",
        "basic-info": {
            "discovery": "2014",
            "mass": "0.055 Earths",
            "orbital radius": "0.432 AU",
            "orbital period": "87.97 Earth days"
        },
        "years-conversion": 0,
        "weight-conversion": 0
    },
    {
        "name": "",
        "img": "",
        "basic-info": {
            "discovery": "",
            "mass": "",
            "orbital radius": "",
            "orbital period": ""
        },
        "years-conversion": 0,
        "weight-conversion": 0
    },
    {
        "name": "",
        "img": "",
        "basic-info": {
            "discovery": "",
            "mass": "",
            "orbital radius": "",
            "orbital period": ""
        },
        "years-conversion": 0,
        "weight-conversion": 0
    },
    {
        "name": "",
        "img": "",
        "basic-info": {
            "discovery": "",
            "mass": "",
            "orbital radius": "",
            "orbital period": ""
        },
        "years-conversion": 0,
        "weight-conversion": 0
    }
];
/* data */

/* preloader */
window.addEventListener("load", () => {
    $("#preloader").css("z-index", -2);
});
/* preloader */

/* functions */
function changePlanet(n){
    $("#planetimg").attr("src", planets[n]["img"])
    $("#planet-name").text(planets[n]["name"]);
    info = `discovery: ${planets[n]["basic-info"]["discovery"]}<br>
            mass: ${planets[n]["basic-info"]["mass"]}<br>
            orbital radius: ${planets[n]["basic-info"]["orbital radius"]}<br>
            orbital period: ${planets[n]["basic-info"]["orbital period"]}`
    $("#planet-info").html(info);
}
/* functions */