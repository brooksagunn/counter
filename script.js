let counterNumber = document.getElementById("number");
let counterButtons = document.querySelectorAll(".counter-btn");

console.log(counterNumber.textContent);

counterButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    let currentNum = Number(counterNumber.textContent);
    if (btn.classList.contains("decrease")) {
      currentNum--;
    } else if (btn.classList.contains("increase")) {
      currentNum++;
    } else {
      currentNum = 0;
    }

    counterNumber.textContent = currentNum;
  });
});
