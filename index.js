/* data */
weight = 0;
years = 0;
planets = [
    {
        "name": "Mercury",
        "img": "resources/planets/mercury.png",
        "basic-info": {
            "discovery": "1631",
            "mass": "0.055 Earths",
            "orbital radius": "2,439.7 km",
            "orbital period": "87.97 Earth days"
        },
        "years-conversion": 4.1,
        "weight-conversion": 0.3
    },
    {
        "name": "Venus",
        "img": "resources/planets/venus.png",
        "basic-info": {
            "discovery": "1610",
            "mass": "0.815 Earths",
            "orbital radius": "6,051.8 km",
            "orbital period": "225 Earth days"
        },
        "years-conversion": 1.6,
        "weight-conversion": 0.9
    },
    {
        "name": "Earth",
        "img": "resources/planets/earth.png",
        "basic-info": {
            "discovery": "n.a.",
            "mass": "5.972×10^24 kg",
            "orbital radius": "6371 km",
            "orbital period": "365.25 Earth days"
        },
        "years-conversion": 1,
        "weight-conversion": 1
    },
    {
        "name": "Mars",
        "img": "resources/planets/mars.png",
        "basic-info": {
            "discovery": "1610",
            "mass": "0.107 Earths",
            "orbital radius": "3,389.5 km",
            "orbital period": "687 Earth days"
        },
        "years-conversion": 0.5,
        "weight-conversion": 0.3
    },
    {
        "name": "Jupiter",
        "img": "resources/planets/jupiter.png",
        "basic-info": {
            "discovery": "1610",
            "mass": "317.8 Earths",
            "orbital radius": "69,911 km",
            "orbital period": "12 Earth years"
        },
        "years-conversion": 0.08,
        "weight-conversion": 2.5
    },
    {
        "name": "Saturn",
        "img": "resources/planets/saturn.png",
        "basic-info": {
            "discovery": "1610",
            "mass": "95.16 Earths",
            "orbital radius": "58,232 km",
            "orbital period": "29 Earth years"
        },
        "years-conversion": 0.03,
        "weight-conversion": 1
    },
    {
        "name": "Uranus",
        "img": "resources/planets/uranus.png",
        "basic-info": {
            "discovery": "1781",
            "mass": "14.54 Earths",
            "orbital radius": "25,362 km",
            "orbital period": "84 Earth years"
        },
        "years-conversion": 0.01,
        "weight-conversion": 0.8
    },
    {
        "name": "Neptune",
        "img": "resources/planets/neptune.png",
        "basic-info": {
            "discovery": "1846",
            "mass": "17.15 Earths",
            "orbital radius": "24,622 km",
            "orbital period": "165 Earth years"
        },
        "years-conversion": 0.005,
        "weight-conversion": 1.1
    }

];
index = 2;
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
            radius: ${planets[n]["basic-info"]["orbital radius"]}<br>
            orbit time: ${planets[n]["basic-info"]["orbital period"]}`
    $("#planet-info").html(info);
    $("#years").val(years*(planets[n]["years-conversion"]));
    $("#weight").val(weight*(planets[n]["weight-conversion"]));
}
function next(){
    index = (index==7) ? 0 : (index+1);
    changePlanet(index);
}
function prev(){
    index = (index==0) ? 7 : (index-1);
    changePlanet(index);
}
function setVals(){
    years = $("#years").val()/(planets[index]["years-conversion"]);
    weight = $("#weight").val()/(planets[index]["weight-conversion"]);
}
/* functions */
changePlanet(index);