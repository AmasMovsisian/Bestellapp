function init(){
    renderDishes();
}

function renderDishes() {
    let dishesRef = document.getElementById("dishes");
    for(let i = 0; i < myDishes.length; i++) {
        dishesRef.innerHTML += `
        <div class="food_Container${[i]}" id="foodContainer${[i]}">
            <p><strong>${myDishes[i].name}</strong></p> 
            <span>${myDishes[i].description}</span> <br><br>
            <span class="price">${myDishes[i].price.toFixed(2)}€</span> <br><br>
        </div>`
    }
}