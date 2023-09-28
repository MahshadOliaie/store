


function renderCategory(data){
    let template = data.map(item =>{
        return `<p class="categotyList__item" onclick="showCategory(\`${item}\`)">${item}</p>`
    }).join("");

    categoryList.innerHTML = template
}



function showCategoryItems(data){
    render(data, false , "1");
}


function showCategory(oneCategory){
    history.pushState({},"","category/"+oneCategory)
    getCategories(oneCategory);
}