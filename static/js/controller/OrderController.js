import Model from "../model/Model.js";
import OrdersView from "../view/OrdersView.js";

class OrderController{

constructor(){

    const model = new Model();
    model.DataIn(orders_path, this.Orders)

}
Orders(list){
    const parentElement = $('#newOrders');
    new OrdersView(parentElement, list);
}

}
export default OrderController;