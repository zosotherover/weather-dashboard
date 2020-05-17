

var cityWeather;
if (localStorage.getItem("cities")) {
  cityWeather = JSON.parse(localStorage.getItem("cities"));
} else {
  cityWeather = [];
}

for (var i = 0; i < cityWeather.length; i++) {
  var a = $("<div class='card'>");
  a.text(cityWeather[i]);
  a.addClass("cityCard");
  a.attr("data-name", cityWeather[i]);
  $(".search").append(a);
}

function searchCurrentWeather(name) {

  console.log(name);
 
  var APIKey = "debb3fce20f823eb8313670ddbec1eb1";
  
  var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${APIKey}&units=imperial`;

  if (cityWeather.indexOf(name) === -1) {
    cityWeather.push(name);
    localStorage.setItem("cities", JSON.stringify(cityWeather));
  }
  

 $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    //Function to get the current weather via current weather data call
    console.log(response);
    var city = response.name;
    var temp = response.main.temp;
    var humidity = response.main.humidity;
    var windSpeed = response.wind.speed;
    var lat = response.coord.lat;
    var lon = response.coord.lon;
    console.log(lat, lon);

//  generate the city, date, temperature, humidity, wind speed
    // generate weather div

    var bodyEl = $(".currentWeather");
    var forecastEl = $("#forecastDiv");
    //clear clearing element!
    bodyEl.html("");
    forecastEl.html("");
    var weatherDiv = $("<div class='weather'>");
    bodyEl.append(weatherDiv);
    var pOne = $("<p>").text("City: " + city);
    pOne.appendTo(weatherDiv);
    var pTwo = $("<p>").text("Temperature: " + temp);
    pTwo.appendTo(weatherDiv);
    var pThree = $("<p>").text("Humidity: " + humidity);
    pThree.appendTo(weatherDiv);
    var pFour = $("<p>").text("Windspeed: " + windSpeed);
    pFour.appendTo(weatherDiv);
    var timeSteup = moment().format("MMM Do, YYYY");
    var pFive = $("<p>").text(timeSteup);
    pFive.appendTo(weatherDiv);
    weatherDiv.appendTo(forecastEl);
    //UV Index: 
    getUVIndex(lat, lon);
    fiveDayForecast(name);
  });
}
