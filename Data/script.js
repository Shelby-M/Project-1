var googleApikey = "AIzaSyCQwhxC1XQdwl0B2Aqpb5S6fQCpXOvC0W8";
var input = document.querySelector(".input");

$("#searchButton").click(function () {
  console.log("button");
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?${input.value}&key=${googleApikey}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  });
});
