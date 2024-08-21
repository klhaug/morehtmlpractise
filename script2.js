
// Cache DOM Elements
const button = document.getElementById("button");
const userInput = document.getElementById("user-input");
const printArea = document.getElementById("print-area");


/** 
* @param {HTMLElement} parent
* @param {...HTMLElement} children 
*/

const appendChildren = (parent, ...children) => {
    children.forEach(child => parent.appendChild(child));
}

/**  Creates a new delete button element.
 @returns {HTMLButtonElement} the newly created button.
*/

const createNewDelButton = () => {
    const newButton = document.createElement("button");
    newButton.setAttribute("id","del-button");
    newButton.textContent = "Delete"
    newButton.addEventListener("click", () => {
        newButton.closest('.list-container').remove();
    }) 
    return newButton;
}

/**  Creates a new list item element.
 @returns {HTMLElement} the newly created list item.
*/


const createNewListElement = () => {
    const newListElement = document.createElement("li")
    newListElement.classList.add("li-style");
    const newTextNode = document.createTextNode(userInput.value);
    newListElement.appendChild(newTextNode);
    return newListElement;
}


const createNewPrintAreaElement = () => {
    const newListElement = createNewListElement();
    const newButton = createNewDelButton();
    const newListContainer = document.createElement("div");
    newListContainer.classList.add("list-container")
    
    appendChildren(newListContainer, newListElement, newButton)

    printArea.prepend(newListContainer);
    userInput.value = "";
}

button.addEventListener("click", () => {
    if (userInput.value.length > 0) {createNewPrintAreaElement();}
})

userInput.addEventListener("keydown", (event) => {
    if (userInput.value.length > 0 && event.key === "Enter")
        {createNewPrintAreaElement();};
})

//GAME

// DOM CHACHE
const gameElement = document.getElementsByClassName("block")[0];
const characterCreationForm = document.getElementById("character-creation-form");

console.log(characterCreationForm);

characterCreationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const formObject = Object.fromEntries(formData.entries());

    console.log(formObject);
});



gameElement.addEventListener("click", () => {
    const boxClass = gameElement.classList[1];
    
    switch(boxClass) {
        case "one":
            gameElement.classList.remove("one")
            gameElement.classList.add("two")
            break;
        case "two":
            gameElement.classList.remove("two")
            gameElement.classList.add("three")
            break;
        case "three":
            gameElement.classList.remove("three")
            gameElement.classList.add("four")
            break;
        case "four":
            gameElement.classList.remove("four")
            gameElement.classList.add("five")
            break;
        case "five":
            gameElement.classList.remove("five")
            gameElement.classList.add("six")
            break;
        case "six":
            gameElement.classList.remove("six")
            gameElement.classList.add("seven")
            break;
        case "seven":
            gameElement.classList.remove("seven")
            gameElement.classList.add("eight")
            break;
        case "eight":
            gameElement.classList.remove("eight")
            gameElement.classList.add("nine")
            break;
        case "nine":
            gameElement.classList.remove("nine")
            gameElement.classList.add("one")
            break;
        default: 
            console.log("somethings wrong")
    }

})

