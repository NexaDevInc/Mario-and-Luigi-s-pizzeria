generateTimeSlots(openingTime, closingTime).forEach(slot => {
    const takeOutTimeSlotSelect = document.getElementById('take-out-time');
    const option = document.createElement('option');
    option.value = slot.time;
    option.textContent = `${slot.time}`;
    takeOutTimeSlotSelect.appendChild(option);
});