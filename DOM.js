//DOM Manipulation

const div = document.createElement("div")
console.log(div);

div.className ="MainClass"
div.id = "Main"
div.setAttribute("Title","Genrative Title")
div.style.backgroundColor = "orange"

const attachparent = document.createTextNode("Hello Buddy! Hiro") //Write a text in the div
div.appendChild(attachparent)

document.body.appendChild(div)  // Attach in the div



