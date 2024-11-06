import Model from "../model/Model.js"
import DeliveryView from "../view/DeliveryDropdown.js";
import MenuItems from "../view/MenuItemsView.js";

class MenuController{
    constructor(){

       /*  const menu_path = "{{ url_for('data', filename='Menu.json') }}" */
        const model = new Model();
        
        
        model.DataIn(menu_path, this.MenuItems)
        

        
    }
    
    MenuItems(list){
        const parentElement = $('article');
        new MenuItems(parentElement, list);
    }


}
export default MenuController;