const judul = document.getElementById("judul");
const judulArray = Array.from(judul.innerText)
  .map((p) => `<span>${p}</span>`)
  .join("");
judul.innerHTML = judulArray;

const Elements = document.querySelectorAll("#judul span");
let index = 0;

function showNextLetter() {
  if (index < Elements.length) {
    Elements[index].classList.add("show");
    index++;
    setTimeout(showNextLetter, 50); 
  }
}

showNextLetter(); 