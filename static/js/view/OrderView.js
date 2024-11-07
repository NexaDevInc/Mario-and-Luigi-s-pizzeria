class OrderView {
    length = 4; // 4 időzítő hely
    #inProgressList = new Array(this.length).fill(0); // Alapértelmezett állapot minden időzítőhöz
    constructor(parentElement, order) {
        // Minden rendelés elemet hozzáadunk a felülethez
            const orderHtml = `
                <div class="OrderData" data-id="${order.id}">
                    <h3>${order.pizzachoice}</h3>
                    <p>Pizza name: ${order.pizzachoice}</p>
                    <p>Order time: ${order.time}</p>
                    <p>Customer: ${order.name}</p>
                    <p>Intended for: ${order.Intendedfor}</p>
                    <p>Status: ${order.status}</p>
                    <button class="load-order" id="placeInOven${order.id}">Load Order</button>
                </div>
            `;
            parentElement.append(orderHtml);


        // Gombok eseménykezelőinek beállítása
        $(`#placeInOven${order.id}`).on("click", () => {
            this.assignOrderToTimer(order); // Azonnal átadjuk az adott rendelést
        });
    }

    assignOrderToTimer(order) {
        // Find the first available timer
        const freeTimerIndex = this.#inProgressList.findIndex(status => status === 0);
    
        if (freeTimerIndex !== -1) { // If there is a free timer
            this.#inProgressList[freeTimerIndex] = 1; // Mark the timer as occupied
    
            // Select the timer element based on the index
            const timerElement = $(`.element:eq(${freeTimerIndex})`);
            
            // Update only the content fields within the timer, preserving buttons
            timerElement.find('h3').text(order.pizzachoice);
            timerElement.find('p:nth-of-type(1)').text(`Pizza name: ${order.pizzachoice}`);
            timerElement.find('p:nth-of-type(2)').text(`Order time: ${order.time}`);
            timerElement.find('p:nth-of-type(3)').text(`Customer: ${order.name}`);
            timerElement.find('p:nth-of-type(4)').text(`Intended for: ${order.Intendedfor}`);
            timerElement.find('p:nth-of-type(5)').text(`Status: In the Oven`);
            timerElement.find('p:nth-of-type(6)').text(`OrderID: ${order.id}`);
    
            // Enable the start button for the specific oven
            timerElement.find(`#${["red", "green", "blue", "yellow"][freeTimerIndex]}ButtonStart`).prop('disabled', false);
    
            // Attach event handlers to the timer buttons
            $(`#${["red", "green", "blue", "yellow"][freeTimerIndex]}ButtonStart`).off("click").on("click", () => {
                this.startTimer(timerElement, freeTimerIndex);
            });
            $(`#${["red", "green", "blue", "yellow"][freeTimerIndex]}ButtonStop`).off("click").on("click", () => {
                this.stopTimer(timerElement, freeTimerIndex);
            });
            $(`#${["red", "green", "blue", "yellow"][freeTimerIndex]}ButtonReset`).off("click").on("click", () => {
                this.resetTimer(timerElement, freeTimerIndex);
            });
        } else {
            alert('All timers are occupied. Please wait until one is reset.');
        }
    }
    
}

export default OrderView;



/* class OrderView{
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
 */