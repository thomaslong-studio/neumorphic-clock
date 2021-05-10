window.onload = function () {
  setTimeout(this.clockFade, 2000);
};

function clockFade() {
  console.log("the clock has faded in");
}

const scHand = document.querySelector(".sec");
const mnHand = document.querySelector(".mn");
const hrHand = document.querySelector(".hr");

function getTime() {
  const current = new Date();

  const seconds = current.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  scHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = current.getMinutes();
  const minutesDegrees =
    (minutes / 60) * 360 + (seconds * (360 / 60)) / 60 + 90;
  mnHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = current.getHours();
  const hoursDegrees = (hours / 12) * 360 + (minutes * (360 / 60)) / 12 + 90;
  hrHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(getTime, 1000);
