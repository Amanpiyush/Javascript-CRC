//Events 
//AttachedEvent ( )
// jQuery



//Types of Events
//TimeStamps
//DefaultPrevented
//target, to Element
///Src Element
//Current Target
//Interview : Clicnet x, y , offset, screen x, screen y, title x, tilt y (Position realted)
//ALt key, ctrl key, shiftkay, keyCode
// document.getElementById('Image').addEventListener('click', (event) => {
//     console.log("You clicked on UL");
    
// }, false) 

// document.getElementById('Google').addEventListener('click',(event) => {
//     event.preventDefault();
//     event.stopPropagation()
//     console.log("Clicked Google");
// })

// document.getElementById('Owl').addEventListener('click', (event) => {
//     console.log('CLicked on Owl');
//     event.stopPropagation(); // It will Not Bubble the Elements
    
// }, true) //flase is default : It is always available.


//False 
//Event Propagation has te 2 context : Event Bubbling and Event Capturing
//Default is Event Bubbling : It track the elements from Inside to Outside.
//Event Capturing : It track the elements from Outside to Inside.

// container.addEventListener('click', function(event) {
//   console.log(event.target);        // The element actually clicked
//   console.log(event.currentTarget); // The container
//   console.log(this);                // Also the container (in regular function)
// });

const Images = document.querySelector('#Image').addEventListener('click', (event) => {
console.log(event.target.parentNode);
    console.log(event.target.tagName);
    if(event.target.tagName === 'IMG'){
        console.log(event.target.id);
        console.log(this);
        
        let removeit = event.target.parentNode
        removeit.remove(); //Remove the Element
    }
}, false)