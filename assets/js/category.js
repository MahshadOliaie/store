


function renderCategory(data){
    let template = data.map(item =>{
        return `<p class="categotyList__item">${item}</p>`
    }).join("");

    categoryList.innerHTML = template
}