function init(){
    renderDishes();
}

function renderDishes() {
    let dishesRef = document.getElementById("dishes");
    for(let i = 0; i < myDishes.length; i++) {
        dishesRef.innerHTML += getHTMLDishes(i);
    }
}