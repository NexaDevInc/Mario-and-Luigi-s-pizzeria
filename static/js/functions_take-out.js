generateTimeSlots(openingTime, closingTime).forEach(slot => {
    const takeOutTimeSlotSelect = document.getElementById('take-out-time');
    const option = document.createElement('option');
    option.value = slot.time;
    option.textContent = `${slot.time}`;
    takeOutTimeSlotSelect.appendChild(option);
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