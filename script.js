const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b581effe93mshd60a70126b1bfddp168925jsn02ff06c506ca',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) =>{
cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response=> response.json())
    .then(response=> {
        
        console.log(response)
    
        //cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    
    })
    .then(err=> console.error(err));
}

submit.addEventListener("click",(e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
    .then(response=> response.json())
    .then(response=> {
        
        console.log(response)
    
        //cloud_pct.innerHTML = response.cloud_pct
        temp3.innerHTML = response.temp
        feels_like3.innerHTML = response.feels_like
        humidity3.innerHTML = response.humidity
        min_temp3.innerHTML = response.min_temp
        max_temp3.innerHTML = response.max_temp
        wind_speed3.innerHTML = response.wind_speed
        wind_degrees3.innerHTML = response.wind_degrees
        //sunrise.innerHTML = response.sunrise
        //sunset.innerHTML = response.sunset
    
    })
    .then(err=> console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
    .then(response=> response.json())
    .then(response=> {
        
        console.log(response)
    
        //cloud_pct.innerHTML = response.cloud_pct
        temp4.innerHTML = response.temp
        feels_like4.innerHTML = response.feels_like
        humidity4.innerHTML = response.humidity
        min_temp4.innerHTML = response.min_temp
        max_temp4.innerHTML = response.max_temp
        wind_speed4.innerHTML = response.wind_speed
        wind_degrees4.innerHTML = response.wind_degrees
        //sunrise.innerHTML = response.sunrise
        //sunset.innerHTML = response.sunset
    
    })
    .then(err=> console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Sydney', options)
    .then(response=> response.json())
    .then(response=> {
        
        console.log(response)
    
        //cloud_pct.innerHTML = response.cloud_pct
        temp5.innerHTML = response.temp
        feels_like5.innerHTML = response.feels_like
        humidity5.innerHTML = response.humidity
        min_temp5.innerHTML = response.min_temp
        max_temp5.innerHTML = response.max_temp
        wind_speed5.innerHTML = response.wind_speed
        wind_degrees5.innerHTML = response.wind_degrees
        //sunrise.innerHTML = response.sunrise
        //sunset.innerHTML = response.sunset
    
    })
    .then(err=> console.error(err));
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', options)
    .then(response=> response.json())
    .then(response=> {
        
        console.log(response)
    
        //cloud_pct.innerHTML = response.cloud_pct
        temp6.innerHTML = response.temp
        feels_like6.innerHTML = response.feels_like
        humidity6.innerHTML = response.humidity
        min_temp6.innerHTML = response.min_temp
        max_temp6.innerHTML = response.max_temp
        wind_speed6.innerHTML = response.wind_speed
        wind_degrees6.innerHTML = response.wind_degrees
        //sunrise.innerHTML = response.sunrise
        //sunset.innerHTML = response.sunset
    
    })
    .then(err=> console.error(err));


   