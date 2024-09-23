// script.js
document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('productGrid');
    const productForm = document.getElementById('productForm');
    let products = JSON.parse(localStorage.getItem('products')) || [];

    function renderProducts() {
        productGrid.innerHTML = '';
        products.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="https://via.placeholder.com/250x200" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">$${product.price}</p>
                <p>${product.description}</p>
                <div class="contact">
                    <span>${product.phone}</span>
                    <a href="https://wa.me/${product.phone}" target="_blank" class="whatsapp">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
    }

    function addProduct(event) {
        event.preventDefault();
        const newProduct = {
            name: document.getElementById('productName').value,
            price: document.getElementById('productPrice').value,
            description: document.getElementById('productDescription').value,
            phone: document.getElementById('sellerPhone').value
        };
        products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));
        renderProducts();
        productForm.reset();
    }

    productForm.addEventListener('submit', addProduct);
    renderProducts();
});