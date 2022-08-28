const myModal = document.querySelector(".modal");
const myInput = document.getElementById("terminar");

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const p5 = document.getElementById("p5");
const p6s = document.querySelectorAll('input[name="p6"]');
let p6 = "";

const calificar = () => {
  let resultado = 0;
  for (const f of p6s) {
    if (f.checked) {
      p6 = f.value;
    }
  }
  if (p1.value === "sol") resultado = resultado + 100 / 6;
  if (p2.value === "tierra") resultado = resultado + 100 / 6;
  if (p3.value === "jupiter") resultado = resultado + 100 / 6;
  if (p4.value === "saturno") resultado = resultado + 100 / 6;
  if (p5.value === "venus") resultado = resultado + 100 / 6;
  if (p6 === "neptuno") resultado = resultado + 100 / 6;
  const nota = document.querySelector("#nota");
  if (resultado < 40) nota.style.background = "red";
  else if (resultado < 70) nota.style.background = "yellow";
  else nota.style.background = "green";

  nota.innerHTML = Math.round(resultado);
};

myInput.addEventListener("click", calificar);
