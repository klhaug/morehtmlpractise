const button = document.getElementById("button");
const userInput = document.getElementById("user-input");
const printArea = document.getElementById("print-area");

const createNewListElement = () => {
    const newListContainer = document.createElement("div");    
    const newListElement = document.createElement("li");
    const newTextNode = document.createTextNode(userInput.value);
    const newButton = document.createElement("button");
    const newButtonText = document.createTextNode("DELETE");

        newListContainer.appendChild(newListElement);
        newListContainer.appendChild(newButton);
        newListElement.appendChild(newTextNode);
        newButton.appendChild(newButtonText);
        printArea.appendChild(newListContainer);
        newListElement.classList.add("li-style");
        newListContainer.classList.add("list-container");
        newButton.setAttribute("id", "del-button");
        userInput.value = "";

    
    newButton.addEventListener("click", () => {
        const parentElement = newButton.parentElement
        parentElement.remove();
})
}
 
button.addEventListener("click", () => {
    if (userInput.value.length > 0) 
        createNewListElement()
})



//SCOPES//
// Hvor er variablene tilgjengelige?

    const a = 5;

    const consoleLog = () => {
        const c = 10;
        console.log(c);
    }

    consoleLog();
    const c = 10;

    console.log("consolelog", c)

//Ternary Operator


const myButtonPrompt = () => {
    let userName = prompt("Please enter username", '')
    let isUserNameEntered = userName !== null && userName.trim() !== '' ? userName : "Please enter valid username"
    testP.innerText = isUserNameEntered
}


// UNDERSTAND
// Jeg skal koble opp et input-felt med en knapp, og få verdien fra inputfeltet til å legge seg til som en ny <p> i tekstboksen. 
// 1. Skrive i inputfeltet
// 2. Knappen lager en ny <p>, legger til verdien fra inputfeltet i den <p>
// 3. Den nye <p> med verdi lagt seg til legges inn i boksen. 

//PLAN

//1. Finn ut hvordan jeg får tak i verdien fra inputfeltet. 
//2. Finn ut hvordan man lager et nytt element
//3. Finn ut hvordan man legger til inputfelt-verdien i elementet
//4. Finn ut hvordan man appender det elementet riktig





const checkArray = [1, 0, 2, 4 ];
console.log(checkArray);

const checkObject = {
    name: "Kristian",
    age: 27,
    gender: "male",
    funny: true
}







































// let newPara = (newWisdom) => {
//     const para = document.createElement("p");
//     const node = document.createTextNode (newWisdom);
//     para.appendChild(node);
//     const element = document.getElementById("print_JS");
//     element.appendChild(para)
// }

// newPara("First Line");

// let es2021 = 
//     `const str = "ztm is the best of the best";
//     let str2 = str.replaceAll("best", "worst")`

// newPara(es2021);

// //finn nest siste tall
// const arr = [100, 200, 400, 6000, 10];
// //old way
// arr[arr.length-2]
// //new way
// arr.flat(-2);

// const newFamily = [
//     {navn: "Kristian", kjønn: "Mann", alder: 27, morsom: false},
//     {navn: "Anniken", kjønn: "Kvinne", alder: 30, morsom: true},
//     {navn: "Louis", kjønn: "Mann", alder: 0.1, morsom: true},
// ];

// console.log(newFamily);

// const filterFamily = (a, b)=> newFamily.filter(person => person[a] === b);
// console.log(filterFamily("kjønn", "Mann"));

// const lastFamilyMember = newFamily.findLast(x => x.alder >= 25);
// console.log(lastFamilyMember);

// const lastFamilyMemberIndex = newFamily.findLastIndex(x => x.alder >= 25);
// console.log(lastFamilyMemberIndex);

// const familyAgeFilter = newFamily.filter(x => x.alder <= 25)
// console.log("Family Age Filter", familyAgeFilter);

// const reversedFamily = newFamily.toReversed()
// console.log("New Family", newFamily);
// console.log("Reversed Family", reversedFamily);

// const filterFamilyNames = newFamily.map(x => x.navn);
// console.log("Filter Family Names", filterFamilyNames);

// const sortedFamily = filterFamilyNames.toSorted();
// console.log("Sorted Family", sortedFamily);

// const joinedFamily = sortedFamily.join(" ");
// console.log(joinedFamily);

// const splicedFamily = newFamily.toSpliced(2, 1);
// console.log("Spliced Family", splicedFamily);

// const withFamily = newFamily.with(2, {navn:'New Baby', kjønn: "ukjent", alder: 0, morsom: undefined});
// console.log("With Family", withFamily);

// const flattened = [[0,1], [2,3], [4,5]].reduce(
//     (accumulator, array) => {
//         console.log("array", array);
//         console.log("accumulator", accumulator);
//         return accumulator.concat(array)
//     },[]);

//     const flattened2 = [[0,1], [2,3], [4,5]].reduce(
//         (accumulator, array) => {
//             debugger;
//             return accumulator.concat(array)
//         },[]);
    
// let userName = prompt('Please enter username', '');
// let consoleLog2 = 
//     userName === null || 
//     userName.trim() === '' ? 
//     "Please enter username" : userName ;
//     testP.innerText = consoleLog2
// }




// const button = document.getElementById("button");
// const userInput = document.getElementById("user-input");
// const ul = document.getElementById("print-area-container");

// const inputLength = () => userInput.value.length;
// const createListElement = () => {
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(userInput.value));
//     ul.appendChild(li);
//     li.classList.add("li-style");
//     userInput.value = "";
// }

// const addListAfterClick = () => {
//     if (inputLength() > 0) {
//     createListElement();
//     }
// }

// const addListAfterKeyPress = (event) => {
//         if (inputLength() > 0 && event.key === "Enter") {
//         createListElement();
//         }
// }

// button.addEventListener("click", addListAfterClick);

// userInput.addEventListener("keypress", addListAfterKeyPress);
    