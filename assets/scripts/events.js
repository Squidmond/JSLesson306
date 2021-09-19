console.log(`*** Script Starting ***`);
const buttons = document.querySelectorAll("button");
console.dir(buttons);

const btnClickHandler = (event) => {
    console.log('event', event);
    console.log(`event.target: `, event.target);
    console.log(`event.target.id: `, event.target.id);
    // Only allow one click
    //event.target.disabled = true;
};
const btnEnterHandler = (event) => {
    console.log(`You entered button: ${event.target.id} area`);
};
// Add cllick events for all buttons
buttons.forEach((btn, idx) => {
    btn.addEventListener("click", btnClickHandler);
    btn.addEventListener("mouseenter", btnEnterHandler);
});
// Code for infinite scroll data load
window.addEventListener('scroll', event => {
    console.log(event);
});

console.log(`*** End Of Line ***`);