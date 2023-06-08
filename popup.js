const mudarAvatar1 = document.querySelector("#mudarAvatar1");
const mudarAvatar2 = document.querySelector("#mudarAvatar2");
const mudarAvatar3 = document.querySelector("#mudarAvatar3");
const mudarAvatar4 = document.querySelector("#mudarAvatar4");
const mudarAvatar5 = document.querySelector("#mudarAvatar5");
const mudarAvatar6 = document.querySelector("#mudarAvatar6");
const mudarAvatar7 = document.querySelector("#mudarAvatar7");
const mudarAvatar8 = document.querySelector("#mudarAvatar8");
const mudarAvatar9 = document.querySelector("#mudarAvatar9");
const mudarAvatar10 = document.querySelector("#mudarAvatar10");
const mudarAvatar11 = document.querySelector("#mudarAvatar11");
const mudarAvatar12 = document.querySelector("#mudarAvatar12");
const avatar = document.querySelector("#avatarSelecionado");

function abrirPopup() {
  document.getElementById("popup-wrapper").style.display = "block";
}

function fecharPopup() {
  document.getElementById("popup-wrapper").style.display = "none";
}

mudarAvatar1.addEventListener("click", function () {
  avatar.setAttribute("src", "assets/avatar1.png");
});

mudarAvatar2.addEventListener("click", function () {
  avatar.setAttribute("src", "assets/avatar2.png");
});

mudarAvatar3.addEventListener("click", function () {
  avatar.setAttribute("src", "assets/avatar3.png");
});

mudarAvatar4.addEventListener("click", function () {
  avatar.setAttribute("src", "assets/avatar4.png");
});

mudarAvatar5.addEventListener("click", function () {
  avatar.setAttribute("src", "assets/avatar5.png");
});

mudarAvatar6.addEventListener("click", function () {
  avatar.setAttribute("src", "assets/avatar6.png");
});
mudarAvatar7.addEventListener("click", function () {
  avatar.setAttribute("src", "assets/avatar7.png");
});

mudarAvatar8.addEventListener("click", function () {
  avatar.setAttribute("src", "assets/avatar8.png");
});

mudarAvatar9.addEventListener("click", function () {
  avatar.setAttribute("src", "assets/avatar9.png");
});

mudarAvatar10.addEventListener("click", function () {
  avatar.setAttribute("src", "assets/avatar10.png");
});

mudarAvatar11.addEventListener("click", function () {
  avatar.setAttribute("src", "assets/avatar11.png");
});

mudarAvatar12.addEventListener("click", function () {
  avatar.setAttribute("src", "assets/avatar12.png");
});
