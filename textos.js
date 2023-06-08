const inputTexto = document.getElementById("input-texto");
const texto = document.getElementById("texto");
const inputNome = document.getElementById("input-nome");
const nome = document.getElementById("nome");

function editTexto() {
  if (inputTexto.value === "") {
    alert("Você deve escrever uma bio!");
  } else {
    let p = document.createElement("p");
    p.innerHTML = inputTexto.value;
    texto.appendChild(p);
    document.getElementById("texto-padrao").style.display = "none";
    p.setAttribute("id", "texto-padrao");
    document.getElementById("abrir-input-texto").style.display = "block";
    document.getElementById("editar-texto").style.display = "none";
  }
  inputTexto.value = "";
}

function abrirInputTexto() {
  document.getElementById("abrir-input-texto").style.display = "none";
  document.getElementById("editar-texto").style.display = "block";
}

function editNome() {
  if (inputNome.value === "") {
    alert("Você deve escrever seu nome!");
  } else {
    let h1 = document.createElement("h1");
    h1.innerHTML = inputNome.value;
    nome.appendChild(h1);
    document.getElementById("nome-padrao").style.display = "none";
    h1.setAttribute("id", "nome-padrao");
    document.getElementById("abrir-input-nome").style.display = "block";
    document.getElementById("editar-nome").style.display = "none";
  }
  inputNome.value = "";
}

function abrirInputNome() {
  document.getElementById("abrir-input-nome").style.display = "none";
  document.getElementById("editar-nome").style.display = "block";
}
