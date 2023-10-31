

function products(id, firstPage, page = 1) {
    if (id) {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(Response => Response.json())
            .then(data => {
                isFirstPage = firstPage;
                showProduct(data, firstPage);
            })
    }
    else {
        fetch(`https://fakestoreapi.com/products`)
            .then(Response => Response.json())
            .then(data => {
                isFirstPage = firstPage;
                render(data, firstPage, page)
            });

        root.classList.remove("carts")
        root.classList.remove("showProduct");
        root.classList.add("allProducts");
        document.querySelector(".menu").classList.remove("show");
        for (let i = 0; i < 4; i++) {
            root.innerHTML += product
        }

    }




}


function cartReq() {
    let all = [];

    fetch(`https://fakestoreapi.com/products`)
        .then(Response => Response.json())
        .then(data => all = data);

    fetch(`https://fakestoreapi.com/carts`)
        .then(Response => Response.json())
        .then(carts => cartFn(carts, all));

    root = document.querySelector(".root");
    root.classList.remove("allProducts")
    root.classList.remove("showProduct")
    root.classList.add("carts")
    root.innerHTML = ""
    for (let i=0 ; i<=7 ; i++){
        root.innerHTML += cartsSkeleton
    }
}



function getCategories(oneCategory) {
    if (oneCategory) {
        fetch(`https://fakestoreapi.com/products/category/${oneCategory}`)
            .then(res => res.json())
            .then(json => showCategoryItems(json))
    }

    else {
        showList()
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => renderCategory(json))
    }


}





