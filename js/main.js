let marketInput = document.querySelector("#market");
let button = document.querySelector("#btn");
let elBtn = document.querySelector(".btn");
let list = document.querySelector("#list");
let elYour = document.querySelector(".output");
let elOl = document.querySelector(".choose__list");
arrayMarket = []; 

marketInput.addEventListener("change", () => {
    market = marketInput.value.trim();

    if (market.length < 2 || market.length > 15 || !isNaN(market)) {
        marketInput.style.border = "1px solid red";
        return;
    }

    arrayMarket.push(market);

    elOl.innerHTML = "";

    for (let elSuper of arrayMarket) {
        let elLi = document.createElement("li");
        elLi.innerHTML = elSuper;
        elOl.appendChild(elLi);
    }

     marketInput.value = null;
})

button.addEventListener("click", () => {
    e.preventDefault()
  
    arrayMarket.pop();
  })