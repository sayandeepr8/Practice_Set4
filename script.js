// Product data

const products = [

    {
        id: 1,
        name: "Wireless Headphones",
        price: 1499,
        image: "https://dummyjson.com/image/200x200/000/fff?text=Headphones",
        description: "High quality wireless headphones with clear sound."
    },

    {
        id: 2,
        name: "Smart Watch",
        price: 2499,
        image: "https://dummyjson.com/image/200x200/000/fff?text=Smart+Watch",
        description: "Smart watch with fitness tracking and notifications."
    },

    {
        id: 3,
        name: "Running Shoes",
        price: 1999,
        image: "https://dummyjson.com/image/200x200/000/fff?text=Shoes",
        description: "Comfortable running shoes suitable for everyday use."
    },

    {
        id: 4,
        name: "Backpack",
        price: 999,
        image: "https://dummyjson.com/image/200x200/000/fff?text=Backpack",
        description: "Durable backpack suitable for college and travel."
    },

    {
        id: 5,
        name: "Bluetooth Speaker",
        price: 1299,
        image: "https://dummyjson.com/image/200x200/000/fff?text=Speaker",
        description: "Portable Bluetooth speaker with powerful sound."
    },

    {
        id: 6,
        name: "Gaming Mouse",
        price: 799,
        image: "https://dummyjson.com/image/200x200/000/fff?text=Mouse",
        description: "Responsive gaming mouse with ergonomic design."
    }

];


// Display products

function displayProducts() {

    let container =
        document.getElementById("productContainer");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    products.forEach(product => {

        container.innerHTML += `

            <div class="product-card">

                <img src="${product.image}">

                <h3>${product.name}</h3>

                <p class="price">
                    ₹${product.price}
                </p>

                <button onclick="showDetails(${product.id})">
                    View Details
                </button>

                <button onclick="addToCart(${product.id})">
                    Add to Cart
                </button>

            </div>

        `;

    });
}


// Show product details

function showDetails(id) {

    let product =
        products.find(p => p.id === id);

    document.getElementById("modalImage").src =
        product.image;

    document.getElementById("modalName").innerHTML =
        product.name;

    document.getElementById("modalDescription").innerHTML =
        product.description;

    document.getElementById("modalPrice").innerHTML =
        "₹" + product.price;

    document.getElementById("modalCartButton").onclick =
        function() {
            addToCart(product.id);
        };

    document.getElementById("productModal").style.display =
        "flex";
}


// Close popup

function closeModal() {

    document.getElementById("productModal").style.display =
        "none";
}


// Add product to cart

function addToCart(id) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    let product =
        products.find(p => p.id === id);

    cart.push(product);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(product.name + " added to cart!");

}


// Display products when page loads

displayProducts();