/* get geoLocation*/
var msgDisplay = document.getElementById("geo-location-msg");
var geoLocation = document.getElementById("current-geo-location");
var formGetDirection = document.getElementById("get-direction");

function getDirection() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);
    } else {
        msgDisplay.innerHTML = "Geolocation is not supported by this browser.";
        formGetDirection.submit();
    }
}

function getPosition(position) {
    geoLocation.value = "" + position.coords.latitude + "," +
        position.coords.longitude;
    formGetDirection.submit();
}