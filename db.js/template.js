function getHTMLDishes(i) {
    return `  
        <div class="dishes_basket"> 
        
            <div class="food_Container${[i]}" id="foodContainer${[i]}">
                <p><strong>${myDishes[i].name}</strong></p> 
                <span>${myDishes[i].description}</span> <br><br>
                <span class="price">${myDishes[i].price.toFixed(2)}€</span> <br><br>
            </div>

            <div class="add_icon" id="addIcon" onclick="addToBasket(${i})">
             + 
            </div>

        </div> `
};

function getHTMLBasketDishes(j) {
   return `
            <p class="priceCalculationTextes"><strong>${basketDishes[j].name}</strong></p>
            <div class="basket_items">
            <button class="pricesCalcBTNs" onclick="removeFromBasket(${j})">-</button> 
            <span>${basketDishes[j].amount}x</span>
            <button class="pricesCalcBTNs" onclick="addToBasket(${j})">+</button> 

            <span>${(basketDishes[j].price * basketDishes[j].amount).toFixed(2)} €</span>
            <button class="remove_all_BTN" onclick="clearBasket(${j})"><i class="material-icons">delete</i></button>

            </div>
        `
};

function getHTMLForPriceCalculation(subtotal, deliveryCost, total) {
  return `
    <div class="price_calculation_design">
        <span class="prices_color">Zwischensumme</span> <span class="prices_color">${subtotal.toFixed(2)} €</span>
    </div>
    <div class="price_calculation_design">
        <span class="prices_color">Lieferkosten</span> <span class="prices_color">${deliveryCost.toFixed(2)} €</span>
    </div>
    <div class="price_calculation_design">
        <span><strong>Gesamt</strong></span> <span><strong>${total.toFixed(2)} €</strong></span>
    </div>`;
}


function getHTMLEmptyBasketText(){
  return `<span class="basket_empty_text"><strong>Dein Warenkorb ist noch leer!<br><br>
  Wähle leckere Pizzen aus und genieße deine Bestellung </strong></span>`
}