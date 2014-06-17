$(document).ready(function($) {
  $.ajax({
    url : "http://api.wunderground.com/api/7132a3c0bbd2bf16/forecast/geolookup/conditions/q/MO/Winfield.json",
    dataType : "jsonp",
    success : function(parsed_json) {
      precip_today_in = parsed_json['current_observation']['precip_today_in'];
      var observation_time = parsed_json['current_observation']['observation_time'];
      console.log("Rain: " + precip_today_in + " inches.");
      console.log("last updated: " + observation_time);
      rain(precip_today_in);
      observationTime(observation_time);
    }
  });
});

//display rain inches
var rain = function(precip_today_in){
  if (precip_today_in >= 0){
    $(".rain").append("<div class='precip-today-in'>" + precip_today_in + "</div");
  }
};



var rainInfo = function(precip_today_in) {
    if (precip_today_in === 0){
      $(".rain-text").text("No need for an umbrella today!");
    } else if (precip_today_in > 0){
      $(".rain-text").text("Better grab an umbrella on your way out!");
    } $(".rain-error").text("Data is temporarily unavailable.");
  };


var observationTime = function(observation_time){
  $(".rain-data").append("<p class='observation-time'>" + observation_time + "</p>");
};