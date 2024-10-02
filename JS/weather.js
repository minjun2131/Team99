const MY_API_KEY = "fe28cd8b6bcb5519910af4ef5c5f7e6c";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${MY_API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather");
      const city = document.querySelector(".city");
      const temperature = document.querySelector(".temperature");

      weather.innerText = `, ${data.weather[0].main}`;
      city.innerText = data.name;
      temperature.innerText = `, ${data.main.temp}℃`;
    });
}
function onGeoError() {
  alert("위치를 찾을 수 없어요!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
