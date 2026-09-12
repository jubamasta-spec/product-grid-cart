let cartTotal = 0;

const buttons = document.querySelectorAll(".add-to-cart");
const cartDisplay = document.getElementById("cart-total");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const price = parseFloat(button.getAttribute("data-price"));
    cartTotal += price;
    cartDisplay.textContent = `Cart: $${cartTotal.toFixed(2)}`;
  });
});
