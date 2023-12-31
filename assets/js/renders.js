


function render(data, firstPage , page) {

    if (firstPage) {
        data = data.slice(0, 4)
    }else{
        let count = data.length;
        let pages = Math.ceil(count/perPage)
        renderPaginate(pages)
        data = data.slice(((page-1)*perPage), (page*perPage))
    }

    let template = data.map(product => {
        const { title, image, price, id } = product;

        return `<div class="root__card" onclick="routeShowProduct(${id} , ${firstPage})">
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


function routeShowProduct(id , firstPage){
    history.pushState({},"","details/"+id)
    products(id , firstPage)
}



function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



function showProduct(data, firstPage) {
    root.classList.add("showProduct");
    root.classList.remove("allProducts");


    const { title,id , image, price, category, rating, description } = data;

    root.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="back" height="1em" viewBox="0 0 320 512" onclick="products(null ,${firstPage})"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
    <div class="root__mainImg">
    <img src="${image}" alt="">
</div>
<div class="root__aboutProduct">
    <h2 class="root__aboutProduct__titleProduct">${title}</h2>
    <p class="root__aboutProduct__description">${description}</p>
    <p class="root__aboutProduct__categoryProduct">category: ${category}</p>
    <p class="root__aboutProduct__ratingProduct">rate: ${rating.rate}</p>
    <p class="root__aboutProduct__priceProduct">price: ${price} $</p>
    <button onclick="addToCart(${id})" class="root__aboutProduct__shop ${(cartProducts.includes(id))? ' added"> ADDED' : '"> ADD TO CART'}</button>
</div>`;


}






products(null, true);






function reload() {
    if (location.pathname !== "/") {
        history.pushState({}, "", "/")
    }
    window.location.reload(true);
}


function showList() {
    document.querySelector(".categoryList").classList.toggle("show")
}


function showbar() {
    document.querySelector(".menu").classList.toggle("show")
    document.querySelector(".categoryList").classList.remove("show")
}




function menuEventAdder() {
    for (const item of categoryMenu) {
        item.addEventListener("click", function () {
            document.querySelector(".categoryList").classList.add("categoryListMenu");
        }
        )
    }
}




menuEventAdder();


function handleRoute(){
    const pathname = location.pathname;

    if(pathname=="/"){
        window.location.reload(true);
    }

    if(pathname=="/AllProducts"){
        showAllfn(currentPage);
    }

    if(pathname=="/cart"){
        cartReq();
    }

    if(pathname.includes("category")){
        let newPathname = pathname.replaceAll("category/", "").replace("%20" , " ").replace("/","")
        getCategories(newPathname)
    }

    if(pathname.includes("details/")){
        let newPathname = pathname.replaceAll("/details/", "")
        products(newPathname)
    }
}


window.addEventListener("popstate" , handleRoute)