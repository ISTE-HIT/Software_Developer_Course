var x = document.getElementById("txt_in"), y = document.getElementById("search"), z = document.querySelector(".display_info"), loc_name, temp, tmin, tmax, flike, humidity, wind, visibility, sunr, suns;

async function getData(loc) {
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=f74b15174e9b474dedc94690d0584fca&units=metric`)

    let fdata = await data.json();

    console.log(fdata);

    if (fdata.cod == 200) {
        document.querySelector(".wloc").innerHTML = (`<p>${fdata.name}</p>`);
        document.querySelector(".tmain").innerHTML = (`<p>${Math.round(fdata.main.temp)}</p>`);
        document.querySelector(".mint").innerHTML = (`<p>${Math.round(fdata.main.temp_min)}</p>`);
        document.querySelector(".maxt").innerHTML = (`<p>${Math.round(fdata.main.temp_max)}</p>`);
        document.querySelector(".feelsin").innerHTML = (`<p>${Math.round(fdata.main.feels_like)}</p>`);
        document.querySelector(".humidity").innerHTML = (`<p>${fdata.main.humidity} %</p>`);
        document.querySelector(".wind").innerHTML = (`<p>${fdata.wind.speed} Knots</p>`);

        let pressure = (fdata.main.pressure) / 1000;

        document.querySelector(".press").innerHTML = (`<p>${pressure} Bars</p>`);
        document.querySelector(".direc").innerHTML = (`<p>${fdata.wind.deg} Deg.</p>`);

        if(Math.round(fdata.main.temp) >= 18)
        {
            document.querySelector(".mood").src = "sun.png";
        }
        else if(Math.round(fdata.main.temp) < 18 && Math.round(fdata.main.temp) >= 5)
        {
            document.querySelector(".mood").src = "mild cold.png";
            document.querySelector(".mood").style.width = "150px";
        }
        else if(Math.round(fdata.main.temp) < 5)
        {
            document.querySelector(".mood").src = "cold.png";
        }
    }

    else {
        alert("Invalid Location Please try again with a correct location !!!!!");
    }
}

y.addEventListener("click", () => {
    getData(x.value);
})

x.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        getData(x.value);
    }
})