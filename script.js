
let pin = "";

function addPin(num) {
  if (pin.length < 6) {
    pin += num;
    updateDots();
  }
}

function clearPin() {
  pin = "";
  updateDots();
}

function submitPin() {
  if (pin === "123456") {
    alert("Alerta enviado com sucesso!");
    clearPin();
  } else {
    alert("PIN incorreto");
    clearPin();
  }
}

function updateDots() {
  const pinDots = document.getElementById("pinDots");
  pinDots.innerHTML = "";
  for (let i = 0; i < pin.length; i++) {
    const dot = document.createElement("div");
    dot.className = "dot";
    pinDots.appendChild(dot);
  }
}

function showContacts() {
  document.getElementById("sideContacts").style.display = "flex";
  setTimeout(() => {
    document.getElementById("sideContacts").style.display = "none";
  }, 3000);
}
