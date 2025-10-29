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
}

function getHTMLBasketDishes(j) {
   return `
            <p><strong>${basketDishes[j].name}</strong></p>
            <div class="basket_items">

            <button onclick="removeFromBasket(${j})">-</button> 
            <span>${basketDishes[j].amount}x</span>
            <button onclick="addToBasket(${j})">+</button> 

            <span>${(basketDishes[j].price * basketDishes[j].amount).toFixed(2)} €</span>
            <button onclick="clearBasket(${j})"><i class="material-icons">delete</i></button>

            </div>
        `;
}