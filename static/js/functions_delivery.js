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

const addedIngredients = [];
const addedIngredientsDisplay = document.getElementById('added-ingredients');
const ingredientsGroup = document.getElementById('ingredients-group');
    
addedIngredientsDisplay.innerHTML = "No added ingredients";
    
function DisplayPizzaEdits() {
    addedIngredients.length = 0;
    addedIngredientsDisplay.innerHTML = "";
    
    const addedIngredientsHeadingBolder = document.createElement('b');
    addedIngredientsHeadingBolder.textContent = "Added ingredients: ";
    addedIngredientsDisplay.appendChild(addedIngredientsHeadingBolder);
    
    const ingredientNames = ingredientsGroup.querySelectorAll('p');
    const ingredientCounters = ingredientsGroup.querySelectorAll('blh-counter');
    
    ingredientCounters.forEach((counter, index) => {
        const inputField = counter.querySelector('input');
        if (inputField) {
            const value = parseInt(inputField.value, 10);
            if (value >= 1) {
                addedIngredients.push(`- ${ingredientNames[index].textContent} (x${value})`);

                const addedIngredientP = document.createElement('p');
                addedIngredientP.textContent = addedIngredients[addedIngredients.length - 1];
                addedIngredientsDisplay.appendChild(addedIngredientP);
            }
        }
    });
    
    if (addedIngredients.length === 0) {
        addedIngredientsDisplay.innerHTML += "No added ingredients";
    }
}