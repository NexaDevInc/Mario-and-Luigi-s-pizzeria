class OrderView{
    length = 4;
    #inProgressList = new Array(this.length);
    constructor(parentElement, order){
        parentElement.append(`
            <div class="OrderData">
                <h3>${order.pizzachoice}</h3>
                <p>Pizza name: ${order.pizzachoice}</p>
                <p>Order time: ${order.time}</p>
                <p>Customer: ${order.name}</p>
                <p>Intended for: ${order.Intendedfor}</p>
                <p>Status: ${order.status}</p>
                <button id="placeInOven${order.id}">Start</button>
            </div>

            `)

            this.btnElement = $(`#placeInOven${order.id}`)
            this.ovenStarter = $('.element')
            this.btnElement.on("click", ()=>{
                console.log("Hello", this.btnElement)
                for (let index = 0; index < this.#inProgressList.length; index++) {
                    if (this.#inProgressList[index] == 0) {
                        this.#inProgressList[index] = 1;
                        this.ovenStarter.append(`
                            <h3>${order.pizzachoice}</h3>
                            <p>Pizza name: ${order.pizzachoice}</p>
                            <p>Order time: ${order.time}</p>
                            <p>Customer: ${order.name}</p>
                            <p>Intended for: ${order.Intendedfor}</p>
                            <p>Status: In the Oven</p>
                            <div class="button-container">
                                <button id="StartOven${index}" onclick="toggleLED('Oven${index}')">Start Oven</button>
                                <button id="StopOven${index}" onclick="toggleLED('Oven${index}')">Stop Oven</button>
                                <button id="Finish${index}">Finish</button>
                            </div>
                            
                            `)
                    }
                }
            })





    }



}
export default OrderView;
