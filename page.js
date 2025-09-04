// Select the search input
const navSearch = document.querySelector(".srch-input");

// Listen for typing inside the search box
navSearch.addEventListener("keyup", function(e) {
    const searchValue = e.target.value.toLowerCase(); // user input
    const books = document.querySelectorAll(".book-card"); // all book cards

    books.forEach(book => {
        // Get the title and author text of each book
        const title = book.querySelector("h3").innerText.toLowerCase();
        const author = book.querySelector("p").innerText.toLowerCase();

        // Check if the search text matches title or author
        if (title.includes(searchValue) || author.includes(searchValue)) {
            book.style.display = "block"; // show book
        } else {
            book.style.display = "none"; // hide book
        }
    });
});


//CART FUNCTIONALITY  //

// Select cart elements
const cartIcon = document.querySelector(".nav-cart");
const cartCount = document.createElement("span");
cartCount.classList.add("cart-count");
cartCount.textContent = "0";
cartIcon.appendChild(cartCount);

let cart = [];

// Select all Add to Cart buttons
const addToCartButtons = document.querySelectorAll(".book-card button");

addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const bookCard = button.closest(".book-card");
        const title = bookCard.querySelector("h3").textContent;
        const author = bookCard.querySelector("p").textContent;
        const imgSrc = bookCard.querySelector("img").src;

        // Add book to cart
        cart.push({ title, author, imgSrc });

        // Update cart count
        cartCount.textContent = cart.length;

        alert(`${title} added to cart!`);
    });
});

// (Optional) Show cart items when clicking the cart
cartIcon.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    let cartItems = "🛒 Your Cart:\n\n";
    cart.forEach((item, index) => {
        cartItems += `${index + 1}. ${item.title} - ${item.author}\n`;
    });

    alert(cartItems);
});


// Location Popup functionality
const locationBtn = document.querySelector(".nav-add"); // "Deliver to India" section
const modal = document.getElementById("locationModal");
const closeBtn = document.querySelector(".close-btn");
const saveBtn = document.getElementById("saveLocation");
const locationInput = document.getElementById("locationInput");
const add2 = document.querySelector(".add2");

// Open modal
locationBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close modal (X button)
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Save location
saveBtn.addEventListener("click", () => {
  const newLocation = locationInput.value.trim();
  if (newLocation) {
    add2.textContent = newLocation;
    modal.style.display = "none";
  }
});

// Close when clicking outside modal
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Toggle dropdown on click
document.addEventListener("DOMContentLoaded", () => {
  const userMenu = document.querySelector(".nav-usr");
  const dropdown = userMenu.querySelector(".dropdown");

  userMenu.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent event bubbling
    dropdown.classList.toggle("show");
  });

  // close dropdown if clicked outside
  document.addEventListener("click", () => {
    dropdown.classList.remove("show");
  });
});

// Orders popup
const ordersBtn = document.querySelector(".nav-rtn");
const ordersPopup = document.getElementById("ordersPopup");
const ordersClose = ordersPopup.querySelector(".close-btn");

ordersBtn.addEventListener("click", () => {
  ordersPopup.style.display = "flex";
});

ordersClose.addEventListener("click", () => {
  ordersPopup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === ordersPopup) {
    ordersPopup.style.display = "none";
  }
});
