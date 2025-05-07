document.addEventListener("DOMContentLoaded", function() {
    let cart = [];
    const cartCount = document.getElementById("cart-count");
    const cartItemsList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartModal = document.getElementById("cart-modal");
    const closeModal = document.querySelector(".close");
    const checkoutButton = document.getElementById("checkout");

    // Buka modal keranjang saat ikon diklik
    document.getElementById("cart-icon").addEventListener("click", function() {
        cartModal.style.display = "block";
        updateCart();
    });

    // Tutup modal
    closeModal.addEventListener("click", function() {
        cartModal.style.display = "none";
    });

    // Tambah item ke keranjang
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
            let name = this.getAttribute("data-name");
            let price = parseInt(this.getAttribute("data-price"));

            let item = cart.find(i => i.name === name);
            if (item) {
                item.quantity++;
            } else {
                cart.push({ name, price, quantity: 1 });
            }
            updateCart();
        });
    });

    // Update tampilan keranjang
    function updateCart() {
        cartItemsList.innerHTML = "";
        let total = 0;
        cart.forEach(item => {
            let li = document.createElement("li");
            li.textContent = `${item.name} x ${item.quantity} - Rp${item.price * item.quantity}`;
            cartItemsList.appendChild(li);
            total += item.price * item.quantity;
        });
        cartTotal.textContent = `Rp${total}`;
        cartCount.textContent = cart.length;
    }

    // Checkout via WhatsApp
    checkoutButton.addEventListener("click", function() {
        let phone = "6282352573491"; // Ganti dengan nomor WhatsApp
        let message = "Pesanan saya:%0A";
        cart.forEach(item => {
            message += `- ${item.name} x ${item.quantity} (Rp${item.price * item.quantity})%0A`;
        });
        let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        message += `%0ATotal: Rp${total}`;

        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let cart = [];
    const cartCount = document.getElementById("cart-count");
    const cartItemsList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartModal = document.getElementById("cart-modal");
    const closeModal = document.querySelector(".close");
    const checkoutButton = document.getElementById("checkout");

    document.getElementById("cart-icon").addEventListener("click", function() {
        cartModal.style.display = "block";
        updateCart();
    });

    closeModal.addEventListener("click", function() {
        cartModal.style.display = "none";
    });

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
            let id = this.getAttribute("data-id");
            let name = this.getAttribute("data-name");
            let price = parseInt(this.getAttribute("data-price"));

            let item = cart.find(i => i.id === id);
            if (item) {
                item.quantity++;
            } else {
                cart.push({ id, name, price, quantity: 1 });
            }
            updateCart();
        });
    });

    function updateCart() {
        cartItemsList.innerHTML = "";
        let total = 0;
        cart.forEach(item => {
            let li = document.createElement("li");
            li.innerHTML = `
                ${item.name} - Rp${item.price * item.quantity} 
                <div class="quantity-controls">
                    <button class="decrease" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="increase" data-id="${item.id}">+</button>
                </div>
            `;
            cartItemsList.appendChild(li);
            total += item.price * item.quantity;
        });
        cartTotal.textContent = `Rp${total}`;
        cartCount.textContent = cart.length;

        document.querySelectorAll(".increase").forEach(button => {
            button.addEventListener("click", function() {
                let id = this.getAttribute("data-id");
                let item = cart.find(i => i.id === id);
                if (item) {
                    item.quantity++;
                    updateCart();
                }
            });
        });

        document.querySelectorAll(".decrease").forEach(button => {
            button.addEventListener("click", function() {
                let id = this.getAttribute("data-id");
                let item = cart.find(i => i.id === id);
                if (item) {
                    item.quantity--;
                    if (item.quantity === 0) {
                        cart = cart.filter(i => i.id !== id);
                    }
                    updateCart();
                }
            });
        });
    }

    checkoutButton.addEventListener("click", function() {
        let phone = "6282352573491";
        let message = "Pesanan saya:%0A";
        cart.forEach(item => {
            message += `- ${item.name} x ${item.quantity} (Rp${item.price * item.quantity})%0A`;
        });
        let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        message += `%0ATotal: Rp${total}`;

        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let cart = [];
    const cartCount = document.getElementById("cart-count");
    const cartItemsList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartModal = document.getElementById("cart-modal");
    const closeModal = document.querySelector(".close");
    const checkoutButton = document.getElementById("checkout");

    document.getElementById("cart-icon").addEventListener("click", function() {
        cartModal.style.display = "block";
        updateCart();
    });

    closeModal.addEventListener("click", function() {
        cartModal.style.display = "none";
    });

    // Tambah ke keranjang
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
            let id = this.getAttribute("data-id");
            let name = this.getAttribute("data-name");
            let price = parseInt(this.getAttribute("data-price"));

            let item = cart.find(i => i.id === id);
            if (item) {
                item.quantity++;
            } else {
                cart.push({ id, name, price, quantity: 1 });
            }
            updateCart();
        });
    });

    // Pesan langsung ke WhatsApp
    document.querySelectorAll(".order-now").forEach(button => {
        button.addEventListener("click", function() {
            let name = this.getAttribute("data-name");
            let price = this.getAttribute("data-price");

            let phone = "6282352573491";
            let message = `Saya ingin memesan:%0A- ${name} (Rp${price})`;

            window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
        });
    });

    function updateCart() {
        cartItemsList.innerHTML = "";
        let total = 0;
        cart.forEach(item => {
            let li = document.createElement("li");
            li.innerHTML = `
                ${item.name} - Rp${item.price * item.quantity} 
                <div class="quantity-controls">
                    <button class="decrease" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="increase" data-id="${item.id}">+</button>
                </div>
            `;
            cartItemsList.appendChild(li);
            total += item.price * item.quantity;
        });
        cartTotal.textContent = `Rp${total}`;
        cartCount.textContent = cart.length;

        document.querySelectorAll(".increase").forEach(button => {
            button.addEventListener("click", function() {
                let id = this.getAttribute("data-id");
                let item = cart.find(i => i.id === id);
                if (item) {
                    item.quantity++;
                    updateCart();
                }
            });
        });

        document.querySelectorAll(".decrease").forEach(button => {
            button.addEventListener("click", function() {
                let id = this.getAttribute("data-id");
                let item = cart.find(i => i.id === id);
                if (item) {
                    item.quantity--;
                    if (item.quantity === 0) {
                        cart = cart.filter(i => i.id !== id);
                    }
                    updateCart();
                }
            });
        });
    }

    checkoutButton.addEventListener("click", function() {
        let phone = "6282352573491";
        let message = "Pesanan saya:%0A";
        cart.forEach(item => {
            message += `- ${item.name} x ${item.quantity} (Rp${item.price * item.quantity})%0A`;
        });
        let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        message += `%0ATotal: Rp${total}`;

        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    });
});
