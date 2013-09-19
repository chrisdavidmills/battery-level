var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
var indicator1 = document.getElementById('indicator1');
var indicator2 = document.getElementById('indicator2');
var batteryCharge = document.getElementById('battery-charge');
var batteryTop = document.getElementById('battery-top');
var chargeIcon = document.getElementById('battery-charging');

function updateBatteryStatus() {
  var percentage = Math.round(battery.level * 100);
  indicator1.innerHTML = "Battery status: " + percentage + " %";
  batteryCharge.style.width = percentage + '%';
  
  if(percentage == 100) {
    batteryTop.style.backgroundColor = 'yellow';
  }
  
  if(battery.charging) {
    indicator2.innerHTML = "Battery is charging"; 
    chargeIcon.style.visibility = 'visible';
  } else {
    indicator2.innerHTML = "Battery not charging";
    chargeIcon.style.visibility = 'hidden';
  }
}

battery.addEventListener("chargingchange", updateBatteryStatus, false);
battery.addEventListener("levelchange", updateBatteryStatus, false);
updateBatteryStatus();