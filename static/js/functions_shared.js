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

timeSlots.forEach(slot => {
    const option = document.createElement('option');
    option.value = slot.time;
    option.textContent = `${slot.time}`;
    deliveryTimeSlotSelect.appendChild(takeOutTimeSlotSelect);
});    