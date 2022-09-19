let myLeads = [];
let inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
let ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
      <a href='${myLeads[i]}' target=_blank> 
        ${myLeads[i]} 
      </a>  
    </li>
    `;
  }
  ulEl.innerHTML = listItems;
}

let arr = ["clothes", "shoes", "sneakers"];
const storedItem = JSON.parse(localStorage.getItem("myArr"));
console.log(storedItem);
