


function render(data) {
    let template = data.map(product => {
        const { title, image, price, category, rating ,id } = product;

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
    const { title, image, price, category, rating , description } = data;

    root.innerHTML = `<div class="root__mainImg">
    <img src="${image}" alt="">
</div>
<div class="root__aboutProduct">
    <h2 class="root__aboutProduct__titleProduct">${title}</h2>
    <p class="root__aboutProduct__description">${description}</p>
    <p class="root__aboutProduct__categoryProduct">category: ${category}</p>
    <p class="root__aboutProduct__ratingProduct">rate: ${rating.rate}</p>
    <p class="root__aboutProduct__priceProduct">price: ${price} $</p>
    <button class="root__aboutProduct__shop">ADD</button>
</div>`;

    root.classList.add("showProduct");
    root.classList.remove("allProducts");

}



products();