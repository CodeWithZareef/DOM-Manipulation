
// console

// window.open() => open new window

// window.close() => close window

// console.log("babbar"); babbar

// window.console.log("Love Babbar"); Love Babbar


// window object => Global Object hota hai (or harik me sabse uper hota hai
// isse upper koi be nhi hota)

// created by browser
// browser create window object

// we can close window object 


// when html code convert into js object is called document (this all process called DOM)
// DOM  Document Object Model
// Tree like structure

// BOM  Browser Object Model
// (Navigation, History, Screen size) under BOM

// Fetch (Access)

// getElementById document ka object hai
// input me id dete hai or us id ke basis pr output me ek single object lake deta hai 
// jiski id match kr jati hai

// document.getElementById("fpara"); single output

// document.getElementById('fheading');

// document.getElementsByClassName("textMatter");

// document.getElementsByTagName('p'); return multiple object ek array like structure k andar

// document.querySelector('.textMatter'); sub se pelhe jo mujhe mille ga usse return kr degy

// document.querySelector('p'); return first element of p tag

// document.querySelectorAll('p'); return all p tag in array
// console.log(document.querySelectorAll('.textMatter'));
//  return all classes of textMatter

// first select element in browser then write $0
// let para = $0; 

// If not found
// console.log(document.getElementById('fpar')); return null
// console.log(document.getElementsByClassName('extMatter')); return empty array
// console.log(document.getElementsByTagName('o')); return empty array
// console.log(document.querySelector('.textMatte')); return null
// console.log(document.querySelectorAll('.textMatte')); return empty array


// Update existing element 
// 
// innerHTML get/set
// button.innerHTML (tag/tags)

// outerHTML (sets or returns the HTML element, including attributes, start tag, and end tag)
// element.outerHTML = "<h2>This is a h2 element</h2>";

// textContent visible enters tabs (code dekh ta hai see tabs and enters)

// let element = document.querySelector('#fdiv');

// element.textContent

// innerText only visible text content (same as ui)

// element.innerText

// Add element

// createElement()

// let fHeading = document.createElement('h1');
// let fHeading = document.getElementById().document.createElement('h1');

// fHeading.textContent = "My name is love babbar";

// appendChild() end me add hota hai

// let bodyTag = document.querySelector('body');

// bodyTag.appendChild(fHeading);

// Decide where to append child

// insertAdjacentElement(position, HTMLcontent)

// positions (beforebegin, afterbegin, beforeend, afterend)

let myDiv = document.querySelector('#myDiv');

let newElement = document.createElement('span');

newElement.textContent = "This is me Love Babbar";

// myDiv.insertAdjacentElement('beforebegin', newElement);

// myDiv.insertAdjacentElement('afterbegin', newElement);

// myDiv.insertAdjacentElement('beforeend', newElement);

// myDiv.insertAdjacentElement('afterend', newElement);

// Removal

// removeChild() opposite of appendChild()
// parent and child important (Home Work using child how to find parent)

let parent = document.querySelector('#myDiv');
// let parent = child.parentElement;
let child = document.querySelector('#fpara');

parent.removeChild(child);
