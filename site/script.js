const button = document.getElementById('bulb-button');
const body = document.body;

button.addEventListener('click', () => {
    console.log("click happende");
    body.classList.toggle('lit');
});