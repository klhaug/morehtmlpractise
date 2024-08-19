const button = document.getElementById("button");
const inputContent =document.getElementById("text-input").innerText
let testP = document.getElementById("p-1");


    


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

const isUserValid = (bool) => bool;
let answer = isUserValid(false) ? "1234" : "Access deniued";
let automatedAnswer = "Your account # is " + answer;

console.log(automatedAnswer);

const myButtonPrompt = () => {
    let userName = prompt("Please enter username", '')
    let isUserNameEntered = userName !== null && userName.trim() !== '' ? userName : "Please enter valid username"
    testP.innerText = isUserNameEntered
}




button.addEventListener("click", (myButtonPrompt))












































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
