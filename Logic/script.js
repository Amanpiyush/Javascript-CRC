// for(let i = 0; i < document.body.childNodes.length; i++){
//     alert(document.body.childNodes[i]);
// }

// const list = document.getElementById('Fruits');

// // These two lines below do the SAME thing:
// console.log(list.childNodes[0]);   // The first child node
// console.log(list.firstChild);      // Also the first child node

// // These two lines below do the SAME thing:
// console.log(list.childNodes[list.childNodes.length - 1]); // Last node
// console.log(list.lastChild);                              // Also last node


// console.log(list.hasChildNodes(''));

let fruits = document.getElementById('Fruits')
fruits.style.color = 'orange';

// let fruits = 7; -- It will send the Alert
// alert(fruits)

//Keep ID Unique.

// let element = document.querySelectorAll('ul>li:last-child');
// for(let elm of element){
//     alert(elm.innerHTML)
// }


//Matches : Iterating over elements like a array or something and trying to filter it.

// const URL = document.querySelector('#domain');
// alert(`Nivigating to ${URL}`)


// for(let elem of document.body.children){
//     if(elem.matches('a[href$ ="io"]')){
//         alert("the refernce us Here " + elem.href)
//     }
// }

// alert(document.body)


// let text = document.body.firstChild;
// alert(text.data)


// let comment = text.nextSibling
// alert(comment.data)



//Text-content

let Fruits = document.getElementById('Fruits');
//alert(Fruits.textContent); // Will give the text content of the element


//fruits.hidden = true; // Hides the element
// fruits.hidden = false; // Unhides the element

// setInterval (() =>
//     fruits.hidden = !fruits.hidden, 1000);


// alert(elem.type)
// alert(elem.id)
// alert(elem.text)



// let body = document.querySelector('body');
// alert(body.id)

// document.body.Fruits = {
//     first : 'Guva',
//     Second : 'Grapes',
//     Third : 'Sugarcane',
// };

// document.body.sayTagName = function (){
//     alert(this.tagName);
// }
// alert(document.body.Fruits.tagName); // Accessing the custom property


// alert(document.body.getAttribute('something')) // Accessing the custom attribute

alert(Animal.getAttribute('about'));        // Accessing the custom attribute

//
// setTimeout (()=>{
//   location.relaod();
// }, 5000)

// setTimeout(()=>{
//     location.reload()
// },1000)

// alert(Animal.getAttribute('about'));

// Animal.setAttribute('about', "Panda")

// alert(Animal.outerHTML);

//property Attribute sync

let input = document.querySelector('input');
 

//Attribute => property
// input.setAttribute('value', 'text');
// alert(input.value)

// //property ==> Attribute
// input.value = "newId";
// alert(input.getAttribute('value'));

// Buying using Attribute we retrive the original value

//Modifying the documents 

//For messgae mostly we are using  the "Div" createElement
let div = document.createElement('div');
div.className = 'alert';
div.innerHTML = "<strong>Hi! there</strong> You get an important message to read";
setTimeout(()=>{
    document.body.append(div);
}, 3000)

// alert(div.className)

