
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
const gameSection = document.getElementById("game-section");
const gameBoardContainer = document.getElementById ("game-board-container");

let newGameElement;

characterCreationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    newGameElement = document.createElement("div");
    newGameElement.classList.add("block")
    newGameElement.classList.add("five")
    gameBoardContainer.appendChild(newGameElement);
    
    
    const form = event.target;
    const formData = new FormData(form);

    const formObject = Object.fromEntries(formData.entries());


    console.log(formObject);
    newGameElement.character = formObject;

  

    const emojiHeader = document.createElement("h1");
    emojiHeader.classList = ("emoji-header");
    const characterEmoji = document.createTextNode(newGameElement.character.emoji);
    emojiHeader.appendChild(characterEmoji);
    newGameElement.appendChild(emojiHeader);

    const charAttContainer = document.createElement("ul");
    charAttContainer.classList = ("char-att-container");
    newGameElement.appendChild(charAttContainer);

    const liName = document.createElement("li");
    liName.classList = ("game-element-li");
    const characterName = document.createTextNode("Name: " + newGameElement.character['character name'])
    liName.appendChild(characterName);
    charAttContainer.appendChild(liName);

    const liClass = document.createElement("li");
    liClass.classList = ("game-element-li");
    const characterClass = document.createTextNode("Class: " + newGameElement.character.class)
    liClass.appendChild(characterClass);
    charAttContainer.appendChild(liClass);

    const liSpecialMove = document.createElement("li");
    liSpecialMove.classList = ("game-element-li");
    const characterSpecialMove = document.createTextNode("Special Move: " + newGameElement.character['special move'])
    liSpecialMove.appendChild(characterSpecialMove);
    charAttContainer.appendChild(liSpecialMove);

    const liActivateCommand = document.createElement("li");
    liActivateCommand.classList = ("game-element-li");
    const activateCommand = document.createTextNode("Activate Command: " + newGameElement.character['activate SM command'])
    liActivateCommand.appendChild(activateCommand);
    charAttContainer.appendChild(liActivateCommand);

    const chosenColor = newGameElement.character.color; 

    newGameElement.style.backgroundColor = chosenColor;
    
});


// STEP COUNTER

let counterValue = document.getElementById("counter-value");
document.addEventListener("keydown", (event) => {
    if(event.key === "ArrowRight" || event.key === "ArrowLeft" || event.key === "ArrowUp" || event.key === "ArrowDown") {
        counterValue.innerText++;
    }
})

//RESET STEP COUNTER WHEN HITTING THE WALL
const originalAlert = window.alert

window.alert = (message) => {
    counterValue.innerText = 0;
    gameBoardContainer.style.borderColor = "#ff0000";
    gameBoardContainer.style.borderWidth = "10px";
    
    setTimeout(() => {originalAlert(message)}, 20)
    
    
    setTimeout(() => {
        gameBoardContainer.style.borderColor = "#000000";
        gameBoardContainer.style.borderWidth = "1px";
    }, 500);
}




//CHARACTER MOVEMENT WITH ARROW KEYS

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
        const boxClass = newGameElement.classList[1];
        
        switch(boxClass) {
            case "one":
                newGameElement.classList.remove("one")
                newGameElement.classList.add("two")
                break;
            case "two":
                newGameElement.classList.remove("two")
                newGameElement.classList.add("three")
                break;
            case "three":
                alert("Move back sir");
                break;
            case "four":
                newGameElement.classList.remove("four")
                newGameElement.classList.add("five")
                break;
            case "five":
                newGameElement.classList.remove("five")
                newGameElement.classList.add("six")
                break;
            case "six":
                alert("Move back sir");
                break;
            case "seven":
                newGameElement.classList.remove("seven")
                newGameElement.classList.add("eight")
                break;
            case "eight":
                newGameElement.classList.remove("eight")
                newGameElement.classList.add("nine")
                break;
            case "nine":
                alert("Move back sir");
                break;
            default: 
                console.log("somethings wrong")
        }
        }

    })

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
        const boxClass = newGameElement.classList[1];
        
        switch(boxClass) {
            case "one":
                alert("Move back sir");
                break;
            case "two":
                newGameElement.classList.remove("two")
                newGameElement.classList.add("one")
                break;
            case "three":
                newGameElement.classList.remove("three")
                newGameElement.classList.add("two")
                break;
            case "four":
                alert("Move back sir");
                break;
            case "five":
                newGameElement.classList.remove("five")
                newGameElement.classList.add("four")
                break;
            case "six":
                newGameElement.classList.remove("six")
                newGameElement.classList.add("five")
                break;
            case "seven":
                alert("Move back sir");
                break;
            case "eight":
                newGameElement.classList.remove("eight")
                newGameElement.classList.add("seven")
                break;
            case "nine":
                newGameElement.classList.remove("nine")
                newGameElement.classList.add("eight")
                break;
            default: 
                console.log("somethings wrong")
        }
        }

    })

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowDown") {
        const boxClass = newGameElement.classList[1];
        
        switch(boxClass) {
            case "one":
                newGameElement.classList.remove("one")
                newGameElement.classList.add("four")
                break;
            case "two":
                newGameElement.classList.remove("two")
                newGameElement.classList.add("five")
                break;
            case "three":
                newGameElement.classList.remove("three")
                newGameElement.classList.add("six")
                break;
            case "four":
                newGameElement.classList.remove("four")
                newGameElement.classList.add("seven")
                break;
            case "five":
                newGameElement.classList.remove("five")
                newGameElement.classList.add("eight")
                break;
            case "six":
                newGameElement.classList.remove("six")
                newGameElement.classList.add("nine")
                break;
            case "seven":
                alert("Move back sir");
                break;
            case "eight":
                alert("Move back sir");
                break;
            case "nine":
                alert("Move back sir");
                break;
            default: 
                console.log("somethings wrong")
        }
        }

    })

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowUp") {
        const boxClass = newGameElement.classList[1];
        
        switch(boxClass) {
            case "one":
                alert("Move back sir");
                break;
            case "two":
                alert("Move back sir");
                break;
            case "three":
                alert("Move back sir");
                break;
            case "four":
                newGameElement.classList.remove("four")
                newGameElement.classList.add("one")
                break;
            case "five":
                newGameElement.classList.remove("five")
                newGameElement.classList.add("two")
                break;
            case "six":
                newGameElement.classList.remove("six")
                newGameElement.classList.add("three")
                break;
            case "seven":
                newGameElement.classList.remove("seven")
                newGameElement.classList.add("four")
                break;
            case "eight":
                newGameElement.classList.remove("eight")
                newGameElement.classList.add("five")
                break;
            case "nine":
                newGameElement.classList.remove("nine")
                newGameElement.classList.add("six")
                break;
            default: 
                console.log("somethings wrong")
        }
        }

    })