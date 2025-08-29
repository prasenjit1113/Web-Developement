// Get elements
const search = document.querySelector(".search_value");
const name_input = document.querySelector(".name_input");
const ingredient_input = document.querySelector(".ingredient_input");
const steps_input = document.querySelector(".steps_input");
const btn = document.querySelector(".btn");
const items = document.querySelector(".items");

// Store recipes
let recipes = [];

// Render recipes in the UI
function renderRecipes(recipeList) {
    items.innerHTML = ""; // Clear previous results

    if (recipeList.length === 0) {
        items.innerHTML = `<li>No recipes found</li>`;
        return;
    }

    recipeList.forEach(recipe => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="list-items">
                <div class="list-recipe"><strong>${recipe.name}</strong></div>
                <div class="list-ingredient"><b>Ingredients:</b><br>${recipe.ingredients}</div>
                <div class="list-step"><b>Steps:</b><br>${recipe.steps}</div>
            </div>
        `;
        items.appendChild(li);
    });
}

// Add recipe button functionality
btn.addEventListener("click", (e) => {
    e.preventDefault();

    const name_value = name_input.value.trim();
    const ingredient_value = ingredient_input.value.trim();
    const step_value = steps_input.value.trim();

    if (name_value === "" || ingredient_value === "" || step_value === "") {
        alert("Please fill out all fields before adding a recipe!");
        return;
    }

    // Format ingredients & steps with line breaks
    const formattedIngredients = ingredient_value.replace(/\n/g, "<br>");
    const formattedSteps = step_value.replace(/\n/g, "<br>");

    // Add new recipe to array
    recipes.push({
        name: name_value,
        ingredients: formattedIngredients,
        steps: formattedSteps
    });

    // Sort recipes alphabetically
    recipes.sort((a, b) => a.name.localeCompare(b.name));

    // Re-render recipes
    renderRecipes(recipes);

    // Clear inputs
    name_input.value = "";
    ingredient_input.value = "";
    steps_input.value = "";
});

// Search functionality
search.addEventListener("input", () => {
    const query = search.value.toLowerCase();
    const results = recipes
        .filter(r => r.name.toLowerCase().includes(query))
        .sort((a, b) => a.name.localeCompare(b.name));

    renderRecipes(results);
});
