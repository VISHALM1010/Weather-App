let currentDate= new Date();

let Day =currentDate.getDate();

let Month=currentDate.getMonth();

let Year=currentDate.getFullYear();

let Todaydate = document.querySelector(".Date");


let searchinput=document.querySelector('.search input');
let searchbtn=document.querySelector('.search button');


let weatherIcon = document.querySelector(".weather-icon")

let discription = document.querySelector(".disc");
let ApiUrl="https://api.openweathermap.org/data/2.5/weather?APPID=0685c32763f9f9f093b2f64a66ffe285&units=metric&q=";


async  function weather(city){


    const data = await fetch(ApiUrl+city);

    var parsedata=await data.json();


    if(data.status=='404'){

        document.querySelector(".error").style.display="block";
document.querySelector(".weather").style.display="none";

    }

    

 

   

document.querySelector('.cityName').innerHTML=parsedata.name;
document.querySelector('.temp').innerHTML=Math.round(parsedata.main.temp)+"°C";
document.querySelector('.h1').innerHTML=parsedata.main.humidity+"%";
document.querySelector('.p1').innerHTML=parsedata.main.pressure+"Pa";
document.querySelector('.w1').innerHTML=parsedata.wind.speed+"km/h";


if(parsedata.weather[0].main=="Cloud"){

    weatherIcon.src="./Images/clouds.png"

    discription.innerHTML="Cloud"

    
}

else if(parsedata.weather[0].main=="Rain"){

    weatherIcon.src="./Images/rain.png"

    discription.innerHTML="Rain"
}

else if(parsedata.weather[0].main=="Clear"){

    weatherIcon.src="./Images/clear.png"

    discription.innerHTML="Clear"
}


else if(parsedata.weather[0].main=="Drizzle"){

    weatherIcon.src="./Images/drizzle.png"

    discription.innerHTML="Drizzle"
}

else if(parsedata.weather[0].main=="Snow"){

    weatherIcon.src="./Images/snow.png"

    discription.innerHTML="Snow"
}


document.querySelector(".weather").style.display="block";

Todaydate.innerHTML=Day+"-"+Month+"-"+Year;







}


searchbtn.addEventListener('click',()=>{


    weather(searchinput.value);
})

