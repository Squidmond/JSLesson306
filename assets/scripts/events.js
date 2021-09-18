console.log(`*** Script Starting ***`);
const button = document.getElementById("clickMeBtn");
console.dir(button);
// Best way to add event
// button.addEventListener("click", (btn) => {
//     console.log("Button was clicked");
// });

// Another way
// button.onclick = function (ptrEvnt) {
//     // Could also be a function expression or arrow function
//     console.log('Pointer Event', ptrEvnt);
//     console.log(`ptrEvent.srcElement: `, ptrEvnt.srcElement);
//     console.log(`ptrEvnt.srcElement.id: `, ptrEvnt.srcElement.id);
// }
// Yes another way
const btnClickHandler = (ptrEvnt) => {
    console.log('Pointer Event', ptrEvnt);
    console.log(`ptrEvent.srcElement: `, ptrEvnt.srcElement);
    console.log(`ptrEvnt.srcElement.id: `, ptrEvnt.srcElement.id);
};
button.onclick = btnClickHandler;
console.log(`*** End Of Line ***`);