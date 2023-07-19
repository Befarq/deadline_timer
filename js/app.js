let frame = document.getElementById("frame");
let newEvent = JSON.parse(localStorage.getItem("eventDate"))
  ? JSON.parse(localStorage.getItem("eventDate"))
  : [];
let deadline = new Date(newEvent[1]);
let diff = deadline - new Date();
let kun = Math.floor(diff / (3600 * 24 * 1000));
let soat = Math.floor((diff - kun * 3600 * 24 * 1000) / (3600 * 1000));
let minut = Math.floor(
  (diff - (kun * 24 * 3600 * 1000 + soat * 3600 * 1000)) / (60 * 1000)
);
let sekund = Math.floor(
  (diff - (kun * 24 * 3600 * 1000 + soat * 3600 * 1000 + minut * 60 * 1000)) /
    1000
);
console.log(sekund);
let kunJoyi = document.createElement("h3");
kunJoyi.textContent = kun + " kun";
let soatJoyi = document.createElement("h3");
soatJoyi.textContent = soat + " soat";
let minutJoyi = document.createElement("h3");
minutJoyi.textContent = minut + " daqiqa";
let sekundJoyi = document.createElement("h3");
sekundJoyi.textContent = sekund + " soniya";
if (newEvent.length > 0) {
  frame.innerHTML = "";
  let mavzu = document.createElement("h1");
  mavzu.textContent = newEvent[0] + "ga";
  frame.append(mavzu);
  if (kun) {
    frame.append(kunJoyi);
  }
  if (soat) {
    frame.append(soatJoyi);
  }
  if (minut) {
    frame.append(minutJoyi);
  }
  if (sekund) {
    frame.append(sekundJoyi);
  }
  let qoldi = document.createElement("h1");
  qoldi.textContent = "qoldi";
  frame.append(qoldi);
  let sbrosbtn = document.createElement("button");
  frame.append(sbrosbtn);
  sbrosbtn.textContent = "Sbros";
  sbrosbtn.classList.add("button2");
  setTimeout(function () {
    window.location.reload(1);
  }, 1000);
}

let eventName = document.getElementById("eventName");
let usersDate = document.getElementById("usersDate");
let addButton = document.getElementById("add");
addButton.addEventListener("click", () => {
  newEvent.push(eventName.value);
  newEvent.push(usersDate.value);
  localStorage.setItem("eventDate", JSON.stringify(newEvent));
  window.location.reload(1);
});
