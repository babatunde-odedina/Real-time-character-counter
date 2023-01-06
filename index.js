const totalEl = document.getElementById("total");
const remainingEl = document.getElementById("remaining");
// const textEl = document.getElementById("text");
const textEl= document.querySelector("textarea")

textEl.addEventListener("keyup", () => {
  updateCounter();
});

function updateCounter() {
  totalEl.innerHTML = textEl.value.length;
  remainingEl.innerHTML =
     textEl.getAttribute("maxlenght")
    // console.log(textEl.getAttribute("maxlenght"))

    const maxLenght = textEl.getAttribute("maxlenght")
    console.log(maxLenght)

}

updateCounter()
