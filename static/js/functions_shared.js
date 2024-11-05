const pizzaModal = document.getElementById('pizza-editting-modal-aligner')

function openModal() {
    pizzaModal.style.display = 'flex';
}

function closeModal() {
    pizzaModal.style.display = 'none';
}

function generateTimeSlots(openingTime, closingTime) {
    const slots = [];
    const start = new Date(`1970-01-01T${openingTime}:00`);
    const end = new Date(`1970-01-01T${closingTime}:00`);

    for (let time = start; time <= end; time.setMinutes(time.getMinutes() + 15)) {
        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');

        const slot = {
            time: `${hours}:${minutes}`,
            available: true
        };

        slots.push(slot);
   }

    return slots;
}
const openingTime = "11:00";
const closingTime = "21:00";
const timeSlots = generateTimeSlots(openingTime, closingTime);

fetch('../static/data/Ingridients.json')
    .then(response => response.json())
    .then(data => {
        const ingredientGroup = document.getElementById('ingredients-group');
        data.forEach(ingredient => {
            const ingredientRow = document.createElement('div');
            ingredientRow.className = 'ingredient';
            ingredientGroup.appendChild(ingredientRow);

            const ingredientLabel = document.createElement('p');
            ingredientLabel.textContent = ingredient.Topping;
            ingredientRow.appendChild(ingredientLabel);

            const ingredientCounter = document.createElement('blh-counter');
            ingredientCounter.setAttribute('blh-counter-input-placeholder', "1");
            ingredientCounter.setAttribute('blh-counter-input-minimum', "0");
            ingredientCounter.setAttribute('blh-counter-input-maximum', "10");
            ingredientCounter.setAttribute('blh-counter-input-step', "1");
            ingredientCounter.setAttribute('blh-counter-color', "#58641D");
            ingredientCounter.setAttribute('blh-counter-active-color', "#F0EFF4");
            ingredientCounter.setAttribute('blh-counter-background-color', "transparent");
            ingredientCounter.setAttribute('blh-counter-active-background-color', "#58641D");
            ingredientRow.appendChild(ingredientCounter);
        });
    });

    fetch('../static/data/Menu.json')
    .then(response => response.json())
    .then(data => {
        const pizzaChoice = document.getElementById('pizza-choice');
        data.forEach(pizza => {
            const pizzaOption = document.createElement('option');
            pizzaOption.textContent = pizza.name;
            pizzaOption.value = pizza.name;
            pizzaChoice.appendChild(pizzaOption);
        });

        const modalHeading = document.querySelector('h2');
        modalHeading.textContent = "Edit " + pizzaChoice.value;

        pizzaChoice.addEventListener('input', () => {
            modalHeading.textContent = "Edit " + pizzaChoice.value;
        });
    });