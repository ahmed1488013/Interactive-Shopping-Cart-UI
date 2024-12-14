const productPrices = {
    product1: 25.00,
    product2: 15.00
  };
  
  function changeQuantity(productId, change) {
    const quantityInput = document.getElementById(productId);
    let quantity = parseInt(quantityInput.value);
  
    if (quantity + change >= 1) {  // Prevent negative or zero quantity
      quantity += change;
      quantityInput.value = quantity;
      updateTotal();
    }
  }
  
  function updateTotal() {
    const product1Quantity = parseInt(document.getElementById('product1').value);
    const product2Quantity = parseInt(document.getElementById('product2').value);
  
    const totalCost = (productPrices.product1 * product1Quantity) + (productPrices.product2 * product2Quantity);
    document.getElementById('total-cost').textContent = `$${totalCost.toFixed(2)}`;
  }
  