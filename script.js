document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout');
    const buyModal = document.getElementById('buy-modal');
    const closeModal = document.querySelector('.close');
    const paymentOptions = document.querySelectorAll('.payment-option');
    const cart = [];

    // Add event listener to each "Add to Cart" button
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', event => {
            const product = event.target.parentElement;
            const productName = product.querySelector('p').innerText;
            const productPrice = product.querySelector('p:nth-of-type(2)').innerText;
            const productData = {
                name: productName,
                price: productPrice
            };
            cart.push(productData);
            updateCart();
        });
    });

    // Update cart display
    const updateCart = () => {
        cartItems.innerHTML = ''; // Clear current cart items
        cart.forEach(item => {
            const li = document.createElement('li');
            li.innerText = ${item.name} - ${item.price};
            cartItems.appendChild(li);
        });
    };

    // Show modal on checkout button click
    checkoutButton.addEventListener('click', () => {
        buyModal.style.display = 'block';
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        buyModal.style.display = 'none';
    });

    // Hide modal if clicked outside of it
    window.addEventListener('click', event => {
        if (event.target === buyModal) {
            buyModal.style.display = 'none';
        }
    });

    // Payment option selection
    paymentOptions.forEach(option => {
        option.addEventListener('click', () => {
            paymentOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });
});