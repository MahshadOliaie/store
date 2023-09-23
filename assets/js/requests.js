

function products(id, firstPage ,page=1) {
    if (id) {
        return fetch(`https://fakestoreapi.com/products/${id}`)
            .then(Response => Response.json())
            .then(data => {
                isFirstPage = firstPage;
                showProduct(data, firstPage);
            })
    }
    else {
        return fetch(`https://fakestoreapi.com/products`)
            .then(Response => Response.json())
            .then(data => {
                isFirstPage = firstPage;
                render(data, firstPage ,page)
            });
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