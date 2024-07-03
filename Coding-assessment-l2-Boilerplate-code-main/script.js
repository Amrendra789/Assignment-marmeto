document.addEventListener("DOMContentLoaded", function() {
    const increaseButton = document.querySelector('.increase-quantity');
    const decreaseButton = document.querySelector('.decrease-quantity');
    const quantityInput = document.querySelector('#quantity');

    increaseButton.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (!isNaN(currentValue)) {
            quantityInput.value = currentValue + 1;
        } else {
            quantityInput.value = 1; // Default to 1 if the input is invalid
        }
    });

    decreaseButton.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (!isNaN(currentValue) && currentValue > 1) {
            quantityInput.value = currentValue - 1;
        } else {
            quantityInput.value = 1; // Default to 1 if the input is invalid or less than 1
        }
    });
});
