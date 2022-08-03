let valueResult = 0;

const refs = {
  resultString: document.querySelector(".result-string"),
  btnDivide: document.querySelector(".divide"),
  btnMultiply: document.querySelector(".multiply"),
  btnPlus: document.querySelector(".plus"),
  btnMinus: document.querySelector(".minus"),
  inputNumber: document.querySelector(".input-number"),
  btnRemove: document.querySelector(".remove"),
  btnResult: document.querySelector(".result"),
};
const lastSymbol = "";
console.log(lastSymbol);
let inputValue = "";
refs.inputNumber.addEventListener("input", () => {
  inputValue = Number(refs.inputNumber.value);
});

/*Плюс*/
const onPlus = () => {
  valueResult += inputValue;
  refs.resultString.insertAdjacentHTML("beforeend", `${inputValue}+`);

  refs.inputNumber.value = "";
};
refs.btnPlus.addEventListener("click", onPlus);
/* Минус */
const onMinus = () => {
  if (refs.resultString.textContent === "") {
    valueResult = inputValue;
    refs.resultString.insertAdjacentHTML(
      "beforeend",
      `${refs.inputNumber.value}-`
    );
    refs.inputNumber.value = "";
  } else if (refs.resultString.textContent[refs.resultString.textContent.length - 1] === "+") {
    valueResult += inputValue;
    refs.resultString.insertAdjacentHTML(
      "beforeend",
      `${refs.inputNumber.value}-`
    );
    refs.inputNumber.value = "";
  } else {
    valueResult -= inputValue;
    refs.resultString.insertAdjacentHTML(
      "beforeend",
      `${refs.inputNumber.value}-`
    );
    refs.inputNumber.value = "";
  }
};
refs.btnMinus.addEventListener("click", onMinus);

/*Равно*/
refs.btnResult.addEventListener("click", () => {
  if (
    refs.resultString.textContent[refs.resultString.textContent.length - 1] ===
    "-"
  ) {
    valueResult -= inputValue;
    refs.resultString.insertAdjacentHTML(
      "beforeend",
      `${refs.inputNumber.value} = ${valueResult}`
    );
    refs.inputNumber.value = "";
    valueResult = 0;
  } else if (
    refs.resultString.textContent[refs.resultString.textContent.length - 1] ===
    "+"
  ) {
    valueResult += inputValue;
    refs.resultString.insertAdjacentHTML(
      "beforeend",
      `${refs.inputNumber.value} = ${valueResult}`
    );
    refs.inputNumber.value = "";
    valueResult = 0;
  } else {
    return;
  }
});

refs.btnRemove.addEventListener("click", () => {
  refs.inputNumber.value = "";
  refs.resultString.innerHTML = "";
  valueResult = 0;
});
