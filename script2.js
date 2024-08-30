


//ARRAYS & OBECTS


//Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]


let questionArray = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]

const cleanTheRoom = (array) => {
    debugger
    const sortFunction = (a, b) => a - b;
    let sortedArray = array.sort(sortFunction);
    sortedArray
    let emptyArray= []
    const filterArray = sortedArray.reduce((accumulator, index) => {
        if (accumulator === index) {
            emptyArray.push([accumulator])
        }
    },)
    // emptyArray.push(filterArray)
    return emptyArray
}

console.log(cleanTheRoom(questionArray));









































// let array1 = [111,2,300,4,5,600,7,8,101,232,13,145,5,34,4,];
// array1;
// let array2 = [5,2,5,3,4,6,4,5,8,9,3,5,7,34,4,];

// array1.shift();
// array1;

// array1.pop();
// array1;

// array1.splice(4,1);
// array1;

// let array3 = array1.concat(array2);
// array3;

// let familyMember = {
//     navn: "",
//     alder: undefined,
//     kjønn: undefined,
// };

// familyMember;

// let kristianHaug = {...familyMember};
// kristianHaug;

// kristianHaug.alder = 27;
// kristianHaug.navn = "Kristian";
// kristianHaug.kjønn = "Mænn";

// kristianHaug;

// let annikenLindbak = {...familyMember};
// annikenLindbak.navn = "Anniken";
// annikenLindbak.alder = 30;
// annikenLindbak.kjønn = "Lady";

// annikenLindbak;

// let louisCat = {...familyMember};
// louisCat.navn = "Louis";
// louisCat.alder = 0.1;
// louisCat.kjønn = "Cat";

// louisCat;

// let allFamilyMembers = [kristianHaug, annikenLindbak, louisCat];

// allFamilyMembers;

// //MAP

// const allFamilyMembersAge = allFamilyMembers.map((property) => property.alder);

// // Gjør noe med accumulator for å regne totalalderen?

// console.log("I var familie er alderen " + allFamilyMembersAge);


// //FILTER

// const allFamilyMembersAdults = allFamilyMembersAge.filter(age => age > 18);


// console.log("I var familie er de voksne " + allFamilyMembersAdults)


// const allFamilyMembersAdults2 = allFamilyMembers.filter(property => property.alder > 18)
// const adultNames = allFamilyMembersAdults2.map(property=> property.navn);
// const adultAges = allFamilyMembersAdults2.map(property => property.alder)
// console.log(allFamilyMembersAdults2)


// console.log(`De voksne i vår familie er ${adultNames[0]} og ${adultNames[1]}. De er ${adultAges[0]} og ${adultAges[1]} år gamle. `)




// //REDUCE

// const totalAgeAllFamilyMembers = allFamilyMembers.reduce((accumulator, num) => {
//     return accumulator + num.alder
// }, 0)

// totalAgeAllFamilyMembers;


// const allFamilyMembersNamesInOne = allFamilyMembers.reduce((accumulator, property) => {
//     return accumulator + " " + property.navn
// }, "Våre navn er");

// allFamilyMembersNamesInOne

// const totalNumberArray1 = array1.reduce((accumulator, number) => {
//     return accumulator + number
// }, 0);

// totalNumberArray1

// const arrayOverHundred = array1.filter(number => number > 100)
// const sortFunctionArray = (a, b) => a - b
// arrayOverHundred.sort(sortFunctionArray)
// arrayOverHundred

// const arrayTimesThousand = arrayOverHundred.map(number => number*1000);
// arrayTimesThousand

// const totalArrayTimesThousand = arrayTimesThousand.reduce((accumulator, number) => {
//     return accumulator + number;
// }, 0);
// totalArrayTimesThousand


// // 1. Using map:
// // Exercise 1: Given an array of numbers, return a new array where each number is doubled.
// // Exercise 2: Given an array of strings, return a new array with the first letter of each string capitalized.
// // 2. Using filter:
// // Exercise 1: Given an array of numbers, return a new array with only the even numbers.
// // Exercise 2: Given an array of strings, return a new array with strings that contain more than 5 characters.
// // 3. Using reduce:
// // Exercise 1: Given an array of numbers, find the sum of all the numbers.
// // Exercise 2: Given an array of numbers, find the maximum number.


// let array4 = [1,5,3,2,6,4,2,67,3,4,65];
// const doubledArray = array4.map(number => number*2);
// doubledArray

// let stringArray = ["lolol", "hehehee", "tralalal", "this is not capitalised"];
// const capitalisedStringArray = stringArray.map(string => string.charAt(0).toUpperCase() + string.slice(1));
// console.log(capitalisedStringArray);

// const evenArray = array4.filter(number => {
//     return number % 2 === 0
// })

// evenArray

// const filteredStringArray = stringArray.filter(string => string.length > 5);
// filteredStringArray;

// const array4Sum = array4.reduce((accumulator, number) => {
//     return accumulator + number;
// }, 0);

// array4Sum;

// const highestNumberArray4 = array4.reduce((accumulator, number) => {
//     if (accumulator < number, accumulator = number) {
//         return accumulator
//     } 
// }, 0)

// highestNumberArray4


// // ADVANCED OBJECTS


// class Flower {
//     constructor(plant, color, water) {
//     this.plant = plant;
//     this.color = color;
//     this.water = water;
//     }
//     whisper() {
//         console.log(`whoosh whoosh i'm a ${this.color} ${this.plant}, please water me ${this.water}!`)
//     }
// }

// class insideFlower extends Flower {
//     constructor(plant, color, water, light){
//         super(plant, color, water)
//         this.light = light;
//     }
//     pot() {
//         console.log("please give me a new pot every 6 months")
    
//     }
// }

// class outsideFlower extends Flower {
//     constructor(plant, color, water, earth) {
//         super(plant, color, water)
//         this.earth = earth;
//     }   
//     cut(day) {
//         console.log("please cut me once every " + day + " days")}
// }



// const peaceLily = new insideFlower("Peace Lily", "White", "Twice a week", "Indirect sunlight");
// const snakePlant = new insideFlower("Snake Plant", "Green", "Once every 2 weeks", "Low light");
// const fiddleLeafFig = new insideFlower("Fiddle Leaf Fig", "Dark Green", "Once a week", "Bright indirect light");
// const spiderPlant = new insideFlower("Spider Plant", "Variegated", "Twice a week", "Moderate light");
// const pothos = new insideFlower("Pothos", "Golden", "Once a week", "Low to bright indirect light");

// const roseBush = new outsideFlower("Rose Bush", "Red", "Thrice a week", "Rich soil");
// const oakTree = new outsideFlower("Oak Tree", "Green", "Once a month", "Deep, well-drained soil");
// const lavender = new outsideFlower("Lavender", "Purple", "Twice a week", "Well-drained sandy soil");
// const sunflower = new outsideFlower("Sunflower", "Yellow", "Daily", "Loamy soil");
// const mapleTree = new outsideFlower("Maple Tree", "Red", "Once a month", "Well-drained soil");

// const grass = new outsideFlower("Grass", "Green", "Not too much", "Soft");
// const tree = new outsideFlower("Gran", "Green", "Never", "Any");
// const alocasia = new insideFlower("Alocasia", "Green", "Once a week", "Place in window");

// let insidePlants = [peaceLily, snakePlant, fiddleLeafFig, spiderPlant, pothos, ];
// let outsidePlants = [roseBush, oakTree, lavender, sunflower, mapleTree];


// let ourPlants = [insidePlants, outsidePlants];
// console.log(ourPlants)

//     const insidePlantsNames = insidePlants.map(property => property.plant)
//     insidePlantsNames
//     const insidePlantsNamesSorted = insidePlantsNames.sort()
//     insidePlantsNamesSorted
//     console.log(insidePlantsNamesSorted[1].length)
//     const insidePlantsNamesLongest = insidePlantsNamesSorted.reduce((accumulator, name) => name.length > accumulator.length ? name : accumulator, insidePlantsNamesSorted[0]);
//     insidePlantsNamesLongest

// let a = insidePlants.includes(snakePlant)
// console.log(a)

// let cardNumber = '123456789235';
// let cardNumberLength = cardNumber.length;
// cardNumberLength

// let slicedNumber = cardNumber.slice(0, 4);
// slicedNumber
// let anonymousNumber = slicedNumber.padEnd(cardNumber.length, "*")
// anonymousNumber



// console.log(Object.entries(ourPlants[0][0]));
// const insidePlantObjects = (ourPlants[0].map(flowerArray => flowerArray));



// let obj = {
//     username0 : "kristian",
//     username1 : "anniken",
//     username2 : "louis",
// }

// let objValues = Object.values(obj);
// let objEntries = Object.entries(obj);
// objValues

// objEntries
// let flatObjEntries = objEntries.flat()
// flatObjEntries



// let newObject = objEntries.map(property => {
//     return property[1] + property[0].replace('username', '');
// })

// newObject


// const flatPlants = insidePlants.map(index => Object.values(index));
// flatPlants




















// class Family {
//     constructor(name, type, age) {
//         this.name = name;
//         this.type = type;
//         this.age = age;
//     }
//     introduce () {
//         console.log(`Hi I am ${this.name}, I'm a ${this.type}, and I'm ${this.age} old!`)
//     }
// }

// class FamilyMember extends Family {
//     constructor(name, type, age) {
//         super(name, type, age)
//     }
//     shout() {
//         console.log(`WOHOOOO I'M ALIVE! I'M ${this.name}, A GREAT ${this.type}, AND I'M GONNA LIVE TO BE A ${this.age}`)
//     }
// }

// const kristian = new FamilyMember("Kristian", "Warrior", 110);
// kristian

// const anniken = new FamilyMember("Anniken", "Lover", 333);
// anniken

// const louis = new FamilyMember("Louis", "CatAssassin", 666);
// louis

// const allFamilyMembers666 = [kristian, anniken, louis];
// allFamilyMembers666

// let allFamilyMembers666Names = allFamilyMembers666.map(property => property.name)
// allFamilyMembers666Names

// allFamilyMembers666Names.sort()
// allFamilyMembers666Names

// const baby = new FamilyMember("unknown", "baby", undefined);
// baby

// allFamilyMembers666.push(baby);
// allFamilyMembers666

// const familyNamesSorted = (family) => {
//     const familyNames = family.map(property => property.name + " ❤️");
//      return familyNames.sort();
// }

// console.log(familyNamesSorted(allFamilyMembers666));

// const sortFamilyAge = (family) => {
//     const familyAges = family.map(property => property.age);
//     const sortArrayFunction = (a, b) => a - b;
//     return familyAges.sort(sortArrayFunction);
// };

// console.log(sortFamilyAge(allFamilyMembers666));

































// let array1 = [1,2,3,4,5,6,4,3,4,5,3,3,2,1,1,2,3,4,5,2,3,10,10,10,12,12];

// let array2 = [7,7,7,7,7,5,5,5,5,5,9,9,9,9];


// const sortArray = (a,b) => a - b;


// // for (let i = 0; i < array1.length; i++) {
// //     console.log(array1[i] + 0.2);
// // }

// // let object1 = {
// //     navn: "Kristian",
// //     alder: 27,
// //     kjønn: "Mænn",
// // }


// // let familyMember = {
// //     navn: "",
// //     alder: undefined, 
// //     kjønn: "",
// // }

// // let kristianHaug = {...familyMember};
// // kristianHaug.navn = "Kristian Haug";
// // kristianHaug.alder = 27
// // kristianHaug.kjønn = "Mænn"
// // kristianHaug;

// // let annikenLindbak = {...familyMember};
// // annikenLindbak.navn = "Anniken Lindbak";
// // annikenLindbak.alder = 30;
// // annikenLindbak.kjønn = "Lady";
// // annikenLindbak;

// // let louisCat = {...familyMember};
// // louisCat.navn = "Louis";
// // louisCat.alder = 0.1;
// // louisCat.kjønn = "Cat";
// // louisCat

// // let allFamilyMembers = [kristianHaug, annikenLindbak, louisCat];
// // allFamilyMembers


// // for (let i = 0; i < allFamilyMembers.length; i++) {
// // console.log(allFamilyMembers[i].navn + " er " + allFamilyMembers[i].alder + " år!")
// // }

// // let name = 'jon snow'

// // let obj = {
// //     [name]: "hello",
// //     ['ray' + ' smith']: "hihi"
// // }

// // obj

// // console.log(obj['jon snow']);
// // console.log(obj['ray smith']);

// // const name2 = "Kristian"
// // const alder = 34;
// // const pet = "cat";

// // const greetingBest = `Hello ${name2} you seem to be of age ${alder}. What a lovely ${pet} you have!`;

// // greetingBest

// // const greetingFunctionKristian = (name2=``, alder=30, pet=`cat`) => `Hello ${name2}, you seem to be of age ${alder}. What a lovely ${pet} you have!`;
// // console.log(greetingFunctionKristian("Kristian", 340, "dog"));

// // allFamilyMembers[0].greeting = greetingFunctionKristian;
// // console.log(allFamilyMembers[0].greeting("Kristian", 20, "dog"))

// // const greetingFunctionAnniken = (name=``, alder=30, pet=`cat`) => `Jammen såå godt å se deg ${name}, gratulerer så mye med å ha blitt ${alder}! Hvordan står det til med ${pet}en?`;
// // allFamilyMembers[1].greeting = greetingFunctionAnniken
// // const annikenOLindbak = allFamilyMembers[1];
// // console.log(annikenOLindbak.greeting("Louis", 1, "hund"));


// // const greetingFunctionLouis = (sound = ``, move =``, clawattack = 99) => `Louis ${sound}, Louis ${move}, Louis att ${clawattack} times!!!`;
// // console.log(greetingFunctionLouis("purr", "run", 420));

// // allFamilyMembers[2].greeting = greetingFunctionLouis;

// // for (let i = 0; i<allFamilyMembers.length; i++) {
// //     console.log(allFamilyMembers[i]);
// // }








// let array1 = [1,2,3,3,4,5,6,3,2,3,4,1,1,2,3,4,5,6,7,8,10,10,11,2,3];
// console.log(array1);



// let myToDoListPrivate = [];
// const addToDo = (task) => myToDoListPrivate.push(task); 


// const sortFunction = (a, b) => a - b;
 

// let words = [
//     "apple", "banana", "cherry", "date", "elderberry", 
//     "fig", "grape", "honeydew", "kiwi", "lemon", 
//   ];

//  let moreWords = ["mango", "nectarine", "orange", "papaya", "quince", 
//   "raspberry", "strawberry", "tangerine", "ugli", "vanilla", 
//   "watermelon", "xigua", "yam", "zucchini", "blueberry"];



//   for (let i = 0; i < array1.length; i++) {
//     console.log(array1[i] + " is a number" )}



















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
const gameResetButton = document.getElementsByClassName("game-reset-button")[0];

gameResetButton.addEventListener("click", (event) => {
    event.preventDefault();
    
    stopStopwatch();
    elapsedTime = 0;
    stopwatchElement.innerText = "00:00:00";
    counterValue.innerText = 0;
    counterValueInt = 0;
    levelCounter = "1";
    levelCounterInt = 1;
    winTitle.classList.add("hidden");


    document.getElementById("level-counter").innerText = levelCounter;
    newGameElement.remove(newGameElement);
})

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
let counterValueInt = 0;

let levelCounter = document.getElementById("level-counter").innerText;
let levelCounterInt = parseInt(levelCounter);

const winTitle = document.getElementById("winner-title");


document.addEventListener("keydown", (event) => {
    if(event.key === "ArrowRight" || event.key === "ArrowLeft" || event.key === "ArrowUp" || event.key === "ArrowDown") {
        counterValue.innerText++;
        counterValueInt++;
    }




    if (counterValueInt === 50) {
        let activateSM = prompt("Activate Special Move!")
        if (activateSM === newGameElement.character["activate SM command"]) {
            newGameElement.classList.remove(newGameElement.classList[1]);
            newGameElement.classList.add("winner");
            winTitle.classList.remove(winTitle.classList[0]);
            stopStopwatch();
            const newUl = document.createElement("ul")
            document.getElementById("leaderboard-container").appendChild(newUl);
            const newLiContainer = document.createElement("div");
           
            newLiContainer.classList=("li-container");
            newUl.appendChild(newLiContainer);
           
            const liName = document.createElement("li")
            liName.appendChild(document.createTextNode(newGameElement.character["character name"]));
            newLiContainer.appendChild(liName);
            
            const liClass = document.createElement("li")
            liClass.appendChild(document.createTextNode(newGameElement.character.class));
            newLiContainer.appendChild(liClass);
            
            const liEmoji = document.createElement("li")
            liEmoji.appendChild(document.createTextNode(newGameElement.character.emoji));
            newLiContainer.appendChild(liEmoji);
         
            const liColor = document.createElement("li")
            liColor.appendChild(document.createTextNode(newGameElement.character.color));
            newLiContainer.appendChild(liColor);
            
            const liSpecialMove = document.createElement("li")
            liSpecialMove.appendChild(document.createTextNode(newGameElement.character["special move"]));
            newLiContainer.appendChild(liSpecialMove);

            const liCommand = document.createElement("li")
            liCommand.appendChild(document.createTextNode(newGameElement.character["activate SM command"]));
            newLiContainer.appendChild(liCommand);

            const liTime = document.createElement("li")
            liTime.appendChild(document.createTextNode(stopwatchElement.innerText));
            newLiContainer.appendChild(liTime);


            
        }
        else {alert("Wrong command!")}

    }
    else if (counterValueInt >= 40) {
        levelCounter = "5";
        levelCounterInt = 5;
    }
    else if (counterValueInt >= 30) {
        levelCounter = "4";
        levelCounterInt = 4;
    }
    else if (counterValueInt >= 20) {
        levelCounter = "3";
        levelCounterInt = 3;
    }
    else if (counterValueInt > 10) {
        levelCounter = "2";
        levelCounterInt = 2;
    }
    else {
        levelCounter = "1";
        levelCounterInt = 2;
    }

    document.getElementById("level-counter").innerText = levelCounter;

})


//RESET STEP COUNTER WHEN HITTING THE WALL
const originalAlert = window.alert

window.alert = (message) => {
    counterValue.innerText = 0;
    counterValueInt = 0;
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

//STOPWATCH//

    const submitButton = document.getElementsByClassName("game-submit-button")[0];
    let stopwatchElement = document.getElementById("stopwatch");
    let startTime;
    let elapsedTime = 0;
    let stopwatchInterval;
    
    function startStopwatch() {
        startTime = Date.now() - elapsedTime;
        stopwatchInterval = setInterval(updateStopwatch, 10); // Update every 10 milliseconds
    }
    
    function updateStopwatch() {
        elapsedTime = Date.now() - startTime;
    
        let milliseconds = Math.floor((elapsedTime % 1000) / 10); // Display only two digits for milliseconds
        let seconds = Math.floor((elapsedTime / 1000) % 60);
        let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    
        // Format the time
        milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
    
        stopwatchElement.innerText = `${minutes}:${seconds}:${milliseconds}`;
    }
    
    function stopStopwatch() {
        clearInterval(stopwatchInterval);
    }
    
    function resetStopwatch() {
        clearInterval(stopwatchInterval);
        elapsedTime = 0;
        stopwatchElement.innerText = "00:00:00";
    }

submitButton.addEventListener("click", startStopwatch);