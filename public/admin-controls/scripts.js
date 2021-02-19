//add ingredient
function addIngredient() {
    const ingredients = document.querySelector("#ingredients");
    const fieldContainer = document.querySelectorAll(".ingredient");
  
    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;
  
    // Deixa o valor do input vazio
    newField.children[0].value = "";
    ingredients.appendChild(newField);
  }

if (window.location.href.includes('create')) {
  document
  .querySelector(".add-ingredient")
  .addEventListener("click", addIngredient);

}

// add step

function addStep() {
    const preparationSteps = document.querySelector("#preparation-steps");
    const fieldContainer = document.querySelectorAll(".step");
  
    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;
  
    // Deixa o valor do input vazio
    newField.children[0].value = "";
    preparationSteps.appendChild(newField);
  }

if (window.location.href.includes('create')) {
  document
  .querySelector(".add-step")
  .addEventListener("click", addStep);
}

// management of visualizations

if (!window.location.href.includes('create')) {
  const adminCards = document.querySelectorAll(".admin-card");
  const keys = Object.keys(adminCards);
  const links = document.querySelectorAll(".admin-card-link")
  // console.log(links);
  for (let key in keys) {
    
    links[key].addEventListener("click", () => {
      
      links[key].href = `recipes/${key}`;
    })
  }

}
