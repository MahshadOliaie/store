


function renderPaginate(pages) {

    let template = "";
    for (let i = 1; i <= pages; i++) {
        template += `<p onclick="changePage(${i})" id="${i}">${i}</p>`
    }

    pageStatefn(template);
}


function changePage(page="1"){

    products(null , false , page)

    document.getElementById(currentPage).classList.remove("currentPage");
    document.getElementById(page).classList.add("currentPage");
    currentPage = page;
}