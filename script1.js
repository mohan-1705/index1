document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const buyNowButtons = document.querySelectorAll('.buy-now');
  const cartItems = document.getElementById('cart-items');
  const cartEmptyMessage = document.getElementById('cart-empty');
  const paymentSection = document.getElementById('payment');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const product = event.target.closest('.product');
      const productName = product.querySelector('h3').textContent;
      const productPrice = product.querySelector('p').textContent;
      
      // Add product to the cart
      const cartItem = document.createElement('div');
      cartItem.textContent = `${productName} - ${productPrice}`;
      cartItems.appendChild(cartItem);
      
      cartEmptyMessage.style.display = 'none';
    });
  });

  buyNowButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      // Navigate to payment page
      window.location.href = 'payment.html';
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const buyNowButtons = document.querySelectorAll('.buy-now');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const product = event.target.closest('.product');
      const productName = product.querySelector('h3').textContent;
      const productPrice = product.querySelector('p').textContent;
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      cartItems.push({ name: productName, price: productPrice });
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      window.location.href = 'cart.html';
    });
  });

  buyNowButtons.forEach(button => {
    button.addEventListener('click', () => {
      window.location.href = 'payment.html';
    });
  });
});

