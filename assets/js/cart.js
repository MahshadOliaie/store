

function cartFn(carts, all) {
    debugger
    document.querySelector(".menu").classList.remove("show")
    let ids = [];
    carts.map(item => ids.push(item.id));
    all = all.filter(obj => ids.includes(obj.id));
    root = document.querySelector(".root");
    root.classList.remove("allProducts")
    root.classList.remove("showProduct")
    root.classList.add("carts")
    cartsRender(all);
}



function cartsRender(data) {
    let template = data.map(item => {
        const { title, image, price, category, rating } = item;

        return ` <svg xmlns="http://www.w3.org/2000/svg" class="back" height="1em" viewBox="0 0 320 512"
        onclick="products(null , isFirstPage)"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
    </svg>
    <div class="carts__cart">
        <div class="carts__cart__image">
            <img src="${image}" alt="">
        </div>
        <div class="carts__cart__about">
            <h2 class="carts__cart__about__title">${title}</h2>
            <p class="carts__cart__about__category">category: ${category}</p>
            <p class="carts__cart__about__rating">rate: ${rating.rate}</p>
            <p class="carts__cart__about__price">price: ${price}$</p>
            <button class="carts__cart__about__remove">REMOVE FROM CART</button>
        </div>
    </div>`
    }).join("");

    root.innerHTML = template;
}




function cartNumberfn() {

    fetch(`https://fakestoreapi.com/carts`)
        .then(Response => Response.json())
        .then(carts => {
            cartLength = carts.length;
            for (const item of cartCount) {
                item.textContent = cartLength
            }

        });

}


window.addEventListener("load", cartNumberfn)