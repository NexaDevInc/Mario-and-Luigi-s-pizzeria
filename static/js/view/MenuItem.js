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
        
        <h2>${Fooditem.name}</h2>
        
        <p class="description">${Fooditem.description}</p>
        
        <p><strong>Ingridients:</strong> ${Fooditem.ingredients}</p>
        
        <div class="size-options">
            <p><strong>Sizes and Prices:</strong></p>
            <ul>
                <li>Small: ${this.smallprice} $</li>
                <li>Medium: ${this.mediumprice} $</li>
                <li>Large: ${this.largeprice} $</li>
            </ul>
        </div>
        <div class="toppings">
            <p><strong>Available toppings:</strong></p>

            <form action="/action_page.php" id="formelement">
                

                <input type="submit" value="Submit">
            </form>

        </div>
        <p><strong>Vegetarian? :</strong> ${this.vega}</p>
        <p><strong>Calories:</strong> ${Fooditem.calories} kcal</p>
    </div>
            
            
    `)

            this.formElement = $('#formelement')
            Fooditem.available_toppings.forEach(topping => {    
                this.toppinglist = topping
            });
            new OptionView(this.formElement,this.toppinglist )
                

            
        



    }




}
export default MenuItem;