function getHTMLDishes(i) {
    return `  
        <div class="dishes_basket"> 
        
            <div class="food_Container${[i]}" id="foodContainer${[i]}">
                <p><strong>${myDishes[i].name}</strong></p> 
                <span>${myDishes[i].description}</span> <br><br>
                <span class="price">${myDishes[i].price.toFixed(2)}€</span> <br><br>
            </div>

            <div class="add_icon" id="addIcon">
             + 
            </div>

        </div> `
}