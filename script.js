// var city = 'london'
const options = {
  method: "GET",
  // url: 'https://api.api-ninjas.com/v1/weather?city=' + city,
  headers: { "X-Api-Key": "71h1osaMdQkgXXzWGJY3Iw==cvU5WkKaO3J6cBie" },
  contentType: "application/json",
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch("https://api.api-ninjas.com/v1/weather?city=" + city, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      temp.innerHTML = data.temp;
      min_temp.innerHTML = data.min_temp;
      max_temp.innerHTML = data.max_temp;
      feels_like.innerHTML = data.feels_like;
      humidity.innerHTML = data.humidity;
      wind_speed.innerHTML = data.wind_speed;
    });
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Punjab");

//          DELHI
fetch("https://api.api-ninjas.com/v1/weather?city=Delhi", options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    delhi_temp.innerHTML = data.temp;
    delhi_feels_like.innerHTML = data.feels_like;
    delhi_humidity.innerHTML = data.humidity;
    delhi_min_temp.innerHTML = data.min_temp;
    delhi_max_temp.innerHTML = data.max_temp;
    delhi_wind_speed.innerHTML = data.wind_speed;
  });

//          LONDON
fetch("https://api.api-ninjas.com/v1/weather?city=London", options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    lon_temp.innerHTML = data.temp;
    lon_feels_like.innerHTML = data.feels_like;
    lon_humidity.innerHTML = data.humidity;
    lon_min_temp.innerHTML = data.min_temp;
    lon_max_temp.innerHTML = data.max_temp;
    lon_wind_speed.innerHTML = data.wind_speed;
  });

//          NEW YORK
fetch("https://api.api-ninjas.com/v1/weather?city=New+York", options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    ny_temp.innerHTML = data.temp;
    ny_feels_like.innerHTML = data.feels_like;
    ny_humidity.innerHTML = data.humidity;
    ny_min_temp.innerHTML = data.min_temp;
    ny_max_temp.innerHTML = data.max_temp;
    ny_wind_speed.innerHTML = data.wind_speed;
  });

//          LOS ANGELES
fetch("https://api.api-ninjas.com/v1/weather?city=Los+Angeles", options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    la_temp.innerHTML = data.temp;
    la_feels_like.innerHTML = data.feels_like;
    la_humidity.innerHTML = data.humidity;
    la_min_temp.innerHTML = data.min_temp;
    la_max_temp.innerHTML = data.max_temp;
    la_wind_speed.innerHTML = data.wind_speed;
  });

//          KOLKATA
fetch("https://api.api-ninjas.com/v1/weather?city=Kolkata", options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    kol_temp.innerHTML = data.temp;
    kol_feels_like.innerHTML = data.feels_like;
    kol_humidity.innerHTML = data.humidity;
    kol_min_temp.innerHTML = data.min_temp;
    kol_max_temp.innerHTML = data.max_temp;
    kol_wind_speed.innerHTML = data.wind_speed;
  });

//          BANGALORE
fetch("https://api.api-ninjas.com/v1/weather?city=Bangalore", options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    bang_temp.innerHTML = data.temp;
    bang_feels_like.innerHTML = data.feels_like;
    bang_humidity.innerHTML = data.humidity;
    bang_min_temp.innerHTML = data.min_temp;
    bang_max_temp.innerHTML = data.max_temp;
    bang_wind_speed.innerHTML = data.wind_speed;
  });
