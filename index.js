let countEl = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");

let count = 0;

const increment = () => {
  count += 1;
  console.log(count);
  countEl.textContent = count;
};

const save = () => {
  let countStr = count + "-";
  saveEL.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
};
