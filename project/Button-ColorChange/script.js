const button = document.querySelectorAll('.button');
const body = document.body;

//button is NodeList == For each Loop

button.forEach((button) => {
    button.addEventListener('click', (event) => {
        const color = event.currentTarget.id;
        if(color){
            body.style.backgroundColor = color;
        }
    })
})