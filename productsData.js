const products = [
    {
        id: 1,
        thumbnail: './Images/jewellery product/J1-P1.png',
        title: 'Lorem 001',
        price: '2000',
        category: 'New Collection'
    },
    {
        id: 2,
        thumbnail: './Images/jewellery product/J2-E1.png',
        title: 'Lorem 002',
        price: '2000',
        category: 'New Collection'
    },
    {
        id: 3,
        thumbnail: './Images/jewellery product/J3-E2.png',
        title: 'Lorem 003',
        price: '2000',
        category: 'New Collection'
    },
    {
        id: 4,
        thumbnail: './Images/jewellery product/J4-E3.png',
        title: 'Lorem 004',
        price: '2000',
        category: 'New Collection'
    },
    {
        id: 5,
        thumbnail: './Images/jewellery product/J5-R1.png',
        title: 'Lorem 005',
        price: '2000',
        category: 'New Collection'
    },
    {
        id: 6,
        thumbnail: './Images/jewellery product/J6-R2.png',
        title: 'Lorem 006',
        price: '2000',
        category: 'New Collection'
    },
    {
        id: 7,
        thumbnail: './Images/jewellery product/J7-S1.png',
        title: 'Lorem 007',
        price: '2000',
        category: 'New Collection'
    },
    {
        id: 8,
        thumbnail: './Images/jewellery product/J8-S2.png',
        title: 'Lorem 008',
        price: '2000',
        category: 'New Collection'
    },
    {
        id: 9,
        thumbnail: './Images/jewellery product/J9-B1.png',
        title: 'Lorem 009',
        price: '2000',
        category: 'New Collection'
    },
    {
        id: 10,
        thumbnail: './Images/jewellery product/J10-P2.png',
        title: 'Lorem 010',
        price: '2000',
        category: 'New Collection'
    },
    {
        id: 11,
        thumbnail: './Images/jewellery product/J11-R3.png',
        title: 'Lorem 011',
        price: '2000',
        category: 'New Collection'
    },
    {
        id: 12,
        thumbnail: './Images/jewellery product/J12-R4.png',
        title: 'Lorem 012',
        price: '2000',
        category: 'New Collection'
    }

]
window.onload = function() {
    displayWishlist();
}

function displayWishlist() {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let wishlistItems = document.getElementById('wishlistItems');
    wishlistItems.innerHTML = '';
    wishlist.forEach(item => {
        let li = document.createElement('li');
        li.innerHTML = `<img src="${item.image}" alt="${item.name}" style="max-width: 100px;"> <span>${item.name}</span>`;
        wishlistItems.appendChild(li);
    });
}

const renderProducts = () => {
    const wrapper = document.querySelector(".boxes")
    let productsHtml = ''
    products.forEach((prd) => {
        productsHtml += `<div class="box">
                        <ul class="list">
                            <li class="head-list">#001</li>
                            <li onClick="displayWishlist(${prd.id})" class="head-list heart"><a href=""><span class="material-icons-outlined">
                                        favorite_border
                                    </span></a></li>
                            <li onClick="addToCart(${prd.id})" class="head-list cart"><a href="./addcart.html"><span class="material-icons-outlined">
                                        shopping_cart
                                    </span></a></li>
                        </ul>
                        <a href=""><img width="230px" height="200px" src="${prd.thumbnail}" alt="error"></a>
                        <h5 class="Name">${prd.title}</h5>
                        <p class="Collection">${prd.category}</p>
                        <p class="Price">Rs.${prd.price}</p>
                    </div>`
    })
    wrapper.innerHTML = productsHtml
}
renderProducts()

const addToCart = (id) => {
    let itemsInCart = localStorage.getItem('cart-items') ? JSON.parse(localStorage.getItem('cart-items')) : []
    let alreadyExists = false
    itemsInCart.forEach((item) => {
        if (id === item.id) {
            alreadyExists = true
        }
    })
    if (alreadyExists) {
        alert('Product Already in Cart')
        return
    }
    const quantity = Number(prompt("Please Enter Product Quantity"))
    itemsInCart.push({
        id,
        quantity
    })
    localStorage.setItem('cart-items', JSON.stringify(itemsInCart))
}