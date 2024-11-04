import MenuItem from "./MenuItem.js";

class MenuItems{

    constructor(parentElement, list){
        list.forEach(element => {
            new MenuItem(parentElement, element)
        });
    }

}
export default MenuItems;