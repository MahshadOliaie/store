


function render(data) {
    root.classList.remove("carts")
    root.classList.remove("showProduct");
    root.classList.add("allProducts");
    document.querySelector(".menu").classList.remove("show");


    let template = data.map(product => {
        const { title, image, price, id } = product;

        return `<div class="root__card" onclick="products(${id})">
        <div class="root__card__image">
            <img src="${image}" alt="">
        </div>
    
        <div class="root__card__about">
            <h3 class="root__card__about__title">${title}</h3>
            <p class="root__card__about__price">${price} $</p>
        </div>
    </div>`
    }).join("");

    root.innerHTML = template;


}



function showProduct(data) {
    root.classList.add("showProduct");
    root.classList.remove("allProducts");


    const { title, image, price, category, rating , description } = data;

    root.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="back" height="1em" viewBox="0 0 320 512" onclick="products()"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
    <div class="root__mainImg">
    <img src="${image}" alt="">
</div>
<div class="root__aboutProduct">
    <h2 class="root__aboutProduct__titleProduct">${title}</h2>
    <p class="root__aboutProduct__description">${description}</p>
    <p class="root__aboutProduct__categoryProduct">category: ${category}</p>
    <p class="root__aboutProduct__ratingProduct">rate: ${rating.rate}</p>
    <p class="root__aboutProduct__priceProduct">price: ${price} $</p>
    <button class="root__aboutProduct__shop">ADD TO CART</button>
</div>`;

  

}






products();



cart.addEventListener("click" , cartReq)
cartMenu.addEventListener("click" , cartReq)


bars.addEventListener("click" , function(){
    document.querySelector(".menu").classList.toggle("show")
})