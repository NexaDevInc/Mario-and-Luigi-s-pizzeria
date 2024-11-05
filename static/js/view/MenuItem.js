import OptionView from "./OptionView.js";

class MenuItem {
    vega;
    smallprice;
    mediumprice;
    largeprice;
    constructor(parentElement, Fooditem) {


        if (Fooditem.vegetarian == true) {
            this.vega = "Yes"
        }
        else {
            this.vega = "No"
        }
        Fooditem.size_options.forEach(size => {
            if (size.size == "small") {
                this.smallprice = size.price.toString()

            }
            else if (size.size == "medium") {
                this.mediumprice = size.price.toString()
            }
            else if (size.size == "large") {
                this.largeprice = size.price.toString()
            }
        });

        parentElement.append(`
        <div id="pizza-menu">
        <div class="pizza-item">
        <img src="${Fooditem.image_url}" alt="pizza-image" class="pizza-image">
        <h2 id="pizza_name">${Fooditem.name}</h2>
        <p id="description">${Fooditem.description}</p>
        <p id="ingridients"><strong>Ingridients:</strong> ${Fooditem.ingredients}</p>
        <div class="size-options">
            <p><strong>Sizes and Prices:</strong></p>
            <ul id="size">
                <li>Small: ${this.smallprice} $</li>
                <li>Medium: ${this.mediumprice} $</li>
                <li>Large: ${this.largeprice} $</li>
            </ul>
        </div>
        <p><strong>Vegetarian? :</strong> ${this.vega}</p>
        <p><strong>Calories:</strong> ${Fooditem.calories} kcal</p>
        <div class="toppings">
            <p><strong>Available toppings:</strong></p>
            <form action="/makeOrder">
                <div id="formelement${Fooditem.pizza_id}">
                </div>
            </form>
        </div>
    </div>
            
            
    `)

            this.formElement = $(`#formelement${Fooditem.pizza_id}`)
            Fooditem.available_toppings.forEach(topping => {    
                new OptionView(this.formElement,topping) 
            });
    }




}
export default MenuItem;