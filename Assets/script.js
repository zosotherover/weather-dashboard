/*

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

function searchOneDayWeather(name) {

  console.log(name);
 
  var APIKey = "debb3fce20f823eb8313670ddbec1eb1";
  
  var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${APIKey}&units=imperial`;

  if (cityWeather.indexOf(name) === -1) {
    cityWeather.push(name);
    localStorage.setItem("cities", JSON.stringify(cityWeather));
  }
  */