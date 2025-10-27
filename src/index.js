//Validation Function
function validateRecipeRequest(recipeRequest) {
  recipeRequest = recipeRequest.trim();
  if (recipeRequest.length <= 2) {
    showError("Please enter an ingredient or meal with at least 3 characters");
    return null;
  }
  return recipeRequest;
}

//Error Display Function
function showError(message) {
  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden", "generating");
  recipeElement.innerHTML = `<p class="error-message">${message}</p>`;
}

//Button State Management Function
function setSubmitButtonState(isDisabled) {
  let submitButton = document.querySelector(".submit-button");
  submitButton.disabled = isDisabled;

  if (isDisabled) {
    submitButton.value = "Creating...";
    submitButton.style.opacity = "0.6";
    submitButton.style.cursor = "not-allowed";
  } else {
    submitButton.value = "Create";
    submitButton.style.opacity = "1";
    submitButton.style.cursor = "pointer";
  }
}

//Scroll to Recipe Function
function scrollToRecipe() {
  let recipeElement = document.querySelector("#recipe");
  recipeElement.scrollIntoView({ behavior: "smooth", block: "start" });
}

//Error Handler
function handleError(error) {
  if (error.response && error.response.status === 404) {
    showError("Recipe or ingredient not found. Please check and try again.");
  } else {
    showError("Unable to create recipe. Please try again");
  }

  setSubmitButtonState(false);
}

//Display Recipe Function
function displayRecipe(response) {
  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("generating");

  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });

  setTimeout(scrollToRecipe, 300);

  setSubmitButtonState(false);
}

//Main Recipe Generation Function
function generateRecipe(event) {
  event.preventDefault();

  let userInstructionsInput = document.querySelector("#user-instructions");
  let recipeRequest = validateRecipeRequest(userInstructionsInput.value);

  if (!recipeRequest) {
    return;
  }

  let apiKey = "o9f9ab326ef453b45bfe0f44453a6b2t";
  let context =
    "You are an acclaimed chef, with an encyclopaedic knowledge of cuisine from around the world. You know all different ingredients and taste combinations to cater for all dietary needs of all ages. You love showing off your skills and inspiring people to prepare healthy, budget-friendly meals. You also understand time constraints. Your mission is to suggest recipes in accordance with the users instructions or recipe request. This could be a list of available ingredients or a requested meal. Please be polite. Provide the recipe in a clear and concise way, using the following format. Name of the recipe inside an <h1> element. Ingredients inside an <h2> element, within an unordered list. Method inside an <h2> element, within an ordered list. The number of people the recipe serves inside an <h2> element. The total time is takes the prepare and cook the recipe inside an <h2> element, split within an unordered list for preparation time inside an <li> and the cooking time within an <li>.Sign the recipe at the end with SheCodes AI inside a <strong> element.";
  let prompt = `User instructions are to generate a recipe about ${recipeRequest}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?context=${context}&prompt=${prompt}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.classList.add("generating");
  recipeElement.innerHTML = `⌛ Creating your recipe with ${recipeRequest}`;

  setSubmitButtonState(true);

  axios.get(apiUrl).then(displayRecipe).catch(handleError);

  userInstructionsInput.value = "";
}

//Event Listener SetUp
let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
