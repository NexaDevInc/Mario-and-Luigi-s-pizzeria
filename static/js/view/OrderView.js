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
    
    
    startTimer(timerElement, timerIndex) {
        let remainingTime = 15 * 60; // 15 perc másodpercben
        const countdownElem = timerElement.find('.countdown');

        const interval = setInterval(() => {
            remainingTime -= 1;
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;
            countdownElem.text(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);

            if (remainingTime <= 0) {
                clearInterval(interval);
                alert(`Időzítő ${timerIndex + 1} lejárt! Reseteld az időzítőt.`);
                timerElement.find('.reset-timer').prop('disabled', false); // Reset gomb engedélyezése
            }
        }, 1000);
    }

    resetTimer(timerElement, timerIndex) {
        // Időzítő visszaállítása és rendelés törlése az időzítőből
        timerElement.find('.countdown').text('15:00');
        timerElement.find('.order-info').empty(); // Törli a rendelési adatokat
        this.#inProgressList[timerIndex] = 0; // Az időzítőt szabaddá teszi
        timerElement.find('.start-timer').prop('disabled', true); // Indítógomb tiltása
        timerElement.find('.reset-timer').prop('disabled', true); // Reset gomb tiltása
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