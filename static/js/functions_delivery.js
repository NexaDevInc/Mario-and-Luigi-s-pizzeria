generateTimeSlots(openingTime, closingTime).forEach(slot => {
    const deliveryTimeSlotSelect = document.getElementById('delivery-time');
    const option = document.createElement('option');
    option.value = slot.time;
    option.textContent = `${slot.time}`;
    deliveryTimeSlotSelect.appendChild(option);
});

const checkbox = document.getElementById('checkbox');
const address = document.getElementById('address');
const billingAddress = document.getElementById('billing-address');
const billingAddressLabel = document.getElementById('billing-address-label');
let tempBillingAddress = '';

address.addEventListener('input', () => {
    if (checkbox.checked) {
        billingAddress.value = address.value;
    }
});

billingAddress.addEventListener('input', () => {
    if (checkbox.checked) {
        billingAddress.disabled = true;
    } else {
        tempBillingAddress = billingAddress.value;
        billingAddress.disabled = false;
    }
});

checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
        billingAddressLabel.style.color = '#a1a1a1';
        billingAddress.style.color = '#616161';
        billingAddress.style.backgroundColor = '#a1a1a1';
        billingAddress.value = address.value;
        billingAddress.disabled = true;
    } else {
        billingAddressLabel.style.color = '#F0EFF4';
        billingAddress.style.color = '#58641D';
        billingAddress.style.backgroundColor = '#F0EFF4';
        billingAddress.value = tempBillingAddress;
        billingAddress.disabled = false;
    }
});