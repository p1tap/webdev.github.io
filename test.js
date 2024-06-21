// Get the input elements
const grossPriceInput = document.getElementById('grossPrice');
const vatRateInput = document.getElementById('vatRate');

// Get the output elements
const vatOutput = document.getElementById('vat');
const totalPriceOutput = document.getElementById('totalPrice');

// Add event listener to calculate VAT and total price
grossPriceInput.addEventListener('input', calculateVAT);
vatRateInput.addEventListener('input', calculateVAT);

function calculateVAT() {
    // Get the values from the input elements
    const grossPrice = parseFloat(grossPriceInput.value);
    const vatRate = parseFloat(vatRateInput.value);

    // Calculate VAT and total price
    const vat = (grossPrice * vatRate) / 100;
    const totalPrice = grossPrice + vat;

    // Update the output elements
    vatOutput.textContent = `VAT = ${vat.toFixed(2)}`;
    totalPriceOutput.textContent = `Total Price = ${totalPrice.toFixed(2)}`;
}