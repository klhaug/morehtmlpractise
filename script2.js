


//ARRAYS & OBECTS


//Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]


let questionArray = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]

const cleanTheRoom = (array) => {
    debugger
    const sortFunction = (a, b) => a - b;
    let sortedArray = array.sort(sortFunction);
    sortedArray
    let emptyArray = []
    for (i = 0; i < sortedArray.length; i++){
        if (sortedArray[i-1] === sortedArray[i]) {
            let newArray = sortedArray[i]
            emptyArray.push(newArray)

    }
    return emptyArray

}

console.log(cleanTheRoom(questionArray));


// map caller en funksjon på hvert element på arrayet den kjøres på og kommer tilbake med et nytt array








































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



















// // Cache DOM Elements
// const button = document.getElementById("button");
// const userInput = document.getElementById("user-input");
// const printArea = document.getElementById("print-area");

// /** 
// * @param {HTMLElement} parent
// * @param {...HTMLElement} children 
// */

// const appendChildren = (parent, ...children) => {
//     children.forEach(child => parent.appendChild(child));
// }

// /**  Creates a new delete button element.
//  @returns {HTMLButtonElement} the newly created button.
// */

// const createNewDelButton = () => {
//     const newButton = document.createElement("button");
//     newButton.setAttribute("id","del-button");
//     newButton.textContent = "Delete"
//     newButton.addEventListener("click", () => {
//         newButton.closest('.list-container').remove();
//     }) 
//     return newButton;
// }

// /**  Creates a new list item element.
//  @returns {HTMLElement} the newly created list item.
// */


// const createNewListElement = () => {
//     const newListElement = document.createElement("li")
//     newListElement.classList.add("li-style");
//     const newTextNode = document.createTextNode(userInput.value);
//     newListElement.appendChild(newTextNode);
//     return newListElement;
// }


// const createNewPrintAreaElement = () => {
//     const newListElement = createNewListElement();
//     const newButton = createNewDelButton();
//     const newListContainer = document.createElement("div");
//     newListContainer.classList.add("list-container")
    
//     appendChildren(newListContainer, newListElement, newButton)

//     printArea.prepend(newListContainer);
//     userInput.value = "";
// }

// button.addEventListener("click", () => {
//     if (userInput.value.length > 0) {createNewPrintAreaElement();}
// })

// userInput.addEventListener("keydown", (event) => {
//     if (userInput.value.length > 0 && event.key === "Enter")
//         {createNewPrintAreaElement();};
// })