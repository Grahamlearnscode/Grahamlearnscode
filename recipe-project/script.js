console.log('hello world');

let recipe1 = {
    name: 'autumn veg soup',
    serves: 3,
    recipe: {
        ingredients: ['butternut squash', 'sweet potato', 'shallots'],
        method: 'Chop the ingredients. Put in a pan. Cook'
    }
}

let recipe2 = {
    name: 'curry naan wrap',
    serves: 2,
    recipe: {
        ingredients: ['chicken', 'madras paste', 'shallots', 'naan'],
        method: 'Chop the ingredients. Put in a pan. Cook'
    }
}

let recipe3 = {
    name: 'wurry waan wrap',
    serves: 2,
    recipe: {
        ingredients: ['chicken', 'madras paste', 'shallots', 'naan'],
        method: 'Chop the ingredients. Put in a pan. Cook'
    }
}


let allRecipes = [recipe1, recipe2, recipe3];


////Function to get recipe names and include them as HTML
// let recipeNamesHTML='';

// let getRecipeNamesHTML = function() {allRecipes.forEach(recipe => {
//     recipeNamesHTML+= `<h3>${recipe.name}</h3>`});
// }

// getRecipeNamesHTML();
// console.log(recipeNamesHTML);

// let recHTML = document.querySelector('#recipes');
// recHTML.innerHTML += recipeNamesHTML;


////Get an array of recipe names
let recipeNames = [];
function getRecipeNames() {
    allRecipes.forEach(recipe => {
        recipeNames.push(recipe.name);
    })
}

getRecipeNames();

////Get an HTML list template of recipe names
let recipeNamesHTML = ``;
function listRecipeNames(){
    recipeNames.forEach(recipeName => {
        recipeNamesHTML += `<li style="text-transform:capitalize">${recipeName}</li>`;
        return recipeNamesHTML;
    })
}

listRecipeNames();

let allRecipesDiv = document.querySelector('#allRecipes');
allRecipesDiv.innerHTML = `<ul>${recipeNamesHTML}</ul>`;

