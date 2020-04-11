function recipeCalculator(recipe, inputField, updater) {
    inputField.addEventListener("change", function () {
        var factor = this.value / recipe.baseAmount;
        var newRecipe = {};
        newRecipe.baseAmount = this.value;
        newRecipe.ingredients = recipe.ingredients.map(function (ingredient) {
            return {
                name: ingredient.name,
                amount: ingredient.amount * factor
            };
        });
        updater(newRecipe);
    });
}

var recipe = {
    baseAmount: 1,
    ingredients: [{
        name: "(g) Gemsiches- oder Rinderhackfleisch",
        amount: 150
    }, {
        name: "Packung Mischgemüse",
        amount: 0.5
    }, {
        name: "(g) Nudeln",
        amount: 200
    }, {
        name: "Glas Kartoffel Mal Anders",
        amount: 0.5
    }, {
        name: "Geriebener Käse",
        amount: 1
    }]
};

function updateResults(newRecipe) {
    document.getElementById("results").innerHTML = newRecipe.ingredients.reduce(function (prevValue, ingredient) {
        return prevValue + '<strong>' + ingredient.amount + ' - ' + '</strong>' +ingredient.name + "<br>";
    }, "");
}

recipeCalculator(recipe, document.getElementById("portion"), updateResults);
// Show initial recipe
updateResults(recipe);
