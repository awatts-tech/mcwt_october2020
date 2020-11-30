let totalValue = 0;
document.getElementById("submit").addEventListener("click", makeMoney);
function makeMoney(event) {
  event.preventDefault();
//   console.log(event);
  let number = document.getElementById("number").value;
//   console.log(number);
  let coin = document.getElementById("coin-dropdown").value;
//   console.log(coin);
  for (number; number > 0; number--) {
    let newCoin = document.createElement("img");
    newCoin.onclick = removeCoin;
    if (coin === "penny") {
      newCoin.src = "penny.png";
      newCoin.className = "penny";
      totalValue += 0.01;
    } else if (coin === "nickel") {
      newCoin.src = "nickel.png";
      newCoin.className = "nickel";
      totalValue += 0.05;
    } else if (coin === "dime") {
      newCoin.src = "dime.png";
      newCoin.className = "dime";
      totalValue += 0.1;
    } else if (coin === "quarter") {
      newCoin.src = "quarter.png";
      newCoin.className = "quarter";
      totalValue += 0.25;
    }
    document.querySelector("#money").appendChild(newCoin);
    let addToTotal = document.getElementById("total-value");
    addToTotal.innerHTML = "Total Value: $" + totalValue.toFixed(2);
  }
}
function removeCoin(remove) {
    const className =  remove.target.className;
  if (className === "penny") {
    totalValue -= 0.01;
  } else if (className === "nickel") {
    totalValue -= 0.05;
  } else if (className === "dime") {
    totalValue -= 0.1;
  } else if (className === "quarter") {
    totalValue -= 0.25;
  }
  let removeFromTotal = document.getElementById("total-value");
 
    removeFromTotal.innerHTML = "Total Value: $" + totalValue.toFixed(2).toString();
// }
  remove.target.remove();
}