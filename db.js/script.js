function init() {
  renderDishes();
  renderBasket();
}

function renderDishes() {
  let dishesRef = document.getElementById("dishes");
  dishesRef.innerHTML = "";
  for (let i = 0; i < myDishes.length; i++) {
    dishesRef.innerHTML += getHTMLDishes(i);
  }
}

function renderBasket() {
  let basketRef = document.getElementById("basketContent");
  basketRef.innerHTML = "";

  for (let j = 0; j < basketDishes.length; j++) {
    basketRef.innerHTML += getHTMLBasketDishes(j);
  }
}

function removeFromBasket(index) {
  let dish = basketDishes[index];
  if (dish.amount > 1) {
    dish.amount--;
  } else {
    basketDishes.splice(index, 1);
  }
  renderBasket();
}

function clearBasket(index) {
  basketDishes.splice(index, 1);
  renderBasket();
}

function addToBasket(i) {
  let dish = myDishes[i];
  let foundIndex = -1;

  for (let j = 0; j < basketDishes.length; j++) {
    if (basketDishes[j].name === dish.name) {
      foundIndex = j;
    }
  }

  if (foundIndex > -1) {
    basketDishes[foundIndex].amount++;
  } else {
    dish.amount = 1;
    basketDishes.push(dish);
  }

  renderBasket();
}
