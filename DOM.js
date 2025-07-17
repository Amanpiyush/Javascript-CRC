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



/// Function Add in the div

// Edit and Remove the Element in DOM

function addlanguage(langName){
    const li = document.createElement("li")
    li.innerHTML = `${langName}`
    document.querySelector('.langugage')
    appendChild(li)
}
addlanguage('python')

function OptAddLanguage (langname ){
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(langname))
     document.querySelector('.Language').appendChild('li')
}
OptAddLanguage("python")