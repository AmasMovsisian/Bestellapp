function init() {
  renderDishes();
  renderBasket();
  priceCalculation();
  orderItems();
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
  priceCalculation();
  updateOrderButtonStyle();
}

function clearBasket(index) {
  basketDishes.splice(index, 1);
  renderBasket();
  priceCalculation();
  updateOrderButtonStyle();
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
  priceCalculation();
}

function priceCalculation() {
  let priceCalculationRef = document.getElementById("priceCalculation");
  let subtotal = 0;
  for (let i = 0; i < basketDishes.length; i++) {
    subtotal += basketDishes[i].price * basketDishes[i].amount;
  }
  let deliveryCost = 5;
  let total = subtotal + deliveryCost;
  if (basketDishes.length === 0) {
    priceCalculationRef.innerHTML = getHTMLEmptyBasketText();
  } else {
    priceCalculationRef.innerHTML = getHTMLForPriceCalculation(
      subtotal,
      deliveryCost,
      total
    );
    orderItems();
  }
}

function orderItems() {
  const orderItemsRef = document.getElementById("orderItems");
  orderItemsRef.innerHTML = `<button id="orderBtn" class="order_BTN" onclick="orderConfirm()">Bestellen</button>`;
  updateOrderButtonStyle();
}

function updateOrderButtonStyle() {
  let orderBtn = document.getElementById("orderBtn");
  let pricesStyles = document.getElementById("priceCalculation");

  if (orderBtn == null) {
    return;
  }

  if (basketDishes.length == 0) {
    orderBtn.style.opacity = "0.5";
    orderBtn.style.backgroundColor = "gray";
    orderBtn.style.color = "black";
    pricesStyles.style.boxShadow = "none";
  } else {
    orderBtn.style.opacity = "1";
    orderBtn.style.backgroundColor = "";
    orderBtn.style.color = "";
    pricesStyles.style.boxShadow = "";
  }
}

function orderConfirm() {
  const orderBtn = document.getElementById("orderBtn");

  if (basketDishes.length > 0) {
    showDialog();
  } else {
    orderBtn.disabled = true;
  }

  updateOrderButtonStyle();
}

function showDialog() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("dialog").style.display = "block";
}

function closeDialog() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("dialog").style.display = "none";
}
