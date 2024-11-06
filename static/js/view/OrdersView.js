import OrderView from "./OrderView.js";

class OrdersView{

    constructor(parentElement, orders){

        orders.forEach(order => {
            new OrderView(parentElement, order)
        });

    }

}
export default OrdersView;