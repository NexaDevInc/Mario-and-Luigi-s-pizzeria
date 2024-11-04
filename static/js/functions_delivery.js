generateTimeSlots(openingTime, closingTime).forEach(slot => {
    const deliveryTimeSlotSelect = document.getElementById('delivery-time');
    const option = document.createElement('option');
    option.value = slot.time;
    option.textContent = `${slot.time}`;
    deliveryTimeSlotSelect.appendChild(option);
});