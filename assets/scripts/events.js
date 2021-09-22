console.log(`*** Script Starting ***`);
const button = document.querySelector("button");
// console.dir(button);

// const btnClickHandler = (event) => {
//     console.log('event', event);
//     console.log(`event.target: `, event.target);
//     console.log(`event.target.id: `, event.target.id);
//     // Only allow one click
//     //event.target.disabled = true;
// };
// const btnEnterHandler = (event) => {
//     console.log(`You entered button: ${event.target.id} area`);
// };

button.addEventListener('click', function (event) {
    console.log('click on button');
    console.log('event', event);
    console.log('this', this);
    event.stopPropagation();
});
// const div = document.querySelector('div');
// console.dir(div);
// div.addEventListener('click', event => {
//     console.log('click on div');
//     console.log(event);
// });

// Add cllick events for all buttons
// buttons.forEach((btn, idx) => {
//     btn.addEventListener("click", btnClickHandler);
//     btn.addEventListener("mouseenter", btnEnterHandler);
// });
// Code for infinite scroll data load
// window.addEventListener('scroll', event => {
//     console.log(event);
// });
const form = document.querySelector("form");
console.dir(form);
// Onlu form elements have a submit event
form.addEventListener('submit', event => {
    console.log(`submit event fired`);
    console.dir(event);
    console.log(event.target.id);
    // Prevent form from transfer to server
    event.preventDefault();
});

// Event on each LI element way
// const listItems = document.querySelectorAll('li');
// listItems.forEach((element, index) => {
//     element.addEventListener('click', (event) => {
//         console.log(event);
//         event.target.classList.toggle('highlight');
//     });
// });
// Event deligation pattern
const list = document.querySelector('ul');
console.log(list);
list.addEventListener('click', (event) => {
    // event.target points to the LI element clicked (not ul)
    console.log('event', event);
    console.log('this', this);
    // (colud be li, h2, p) find LI nearest event target 
    event.target.closest('li').classList.toggle('highlight');
    // Trigger form submit (overrides preventDefault)
    // form.submit();
    // To keep preventDefault: select button on form and click
});

console.log(`*** End Of Line ***`);