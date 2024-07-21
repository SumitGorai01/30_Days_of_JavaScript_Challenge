/**
 * Day 9: DOM Manipulation
 */

//Tasks/Activities:

/**
 * Activity 1: Selecting and Manipulating Elements
 */

//Task 1: Select an HTML element by its ID and change its text content.
document.getElementById('changeText').textContent = 'New Text after changed';

//Task 2: Select an HTML element by its class and change its background color.
document.querySelector(".myDiv").style.backgroundColor = "Green";


/**
 * Activity 2: Creating and Appending Elements
 */

//Task 3: Create a new div element with some text content and append it to the body.
let newDiv = document.createElement("div");
newDiv.textContent = "Hi, I am new div added here";
document.body.appendChild(newDiv);


//Task 4: Create a new li element and add it to an existing ul list.

let newLi = document.createElement("li");
newLi.textContent = "New List Item Added.";
document.querySelector("ul").appendChild(newLi);



/**
 * Activity 3: Removing Elements
 */

//Task 5: Select an HTML element and remove it from the DOM.

const removeElement = document.getElementById("removePara");
removeElement.parentNode.removeChild(removeElement);


//Task 6: Remove the last child of a specific HTML element.
const parentElement = document.getElementById("parentElement");
parentElement.removeChild(parentElement.lastChild);


/**
 * Activity 4: Modifying Attributes and Classes
 */

//Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
const img = document.querySelector(".image1");
img.src = "./img2.png"

//Task 8: Add and remove a CSS class to/from an HTML element.
function addClass() {
    const element = document.getElementById("myParagraph");
    element.classList.add("boldText")
}
function removeClass() {
    const element = document.getElementById("myParagraph");
    element.classList.remove("boldText")
}


/**
 * Activity 5: Event Handling
 */

//Task 9: Add a click event listener to a button that changes the text content of a paragraph.
function changePara(){
    document.getElementById("changePara").textContent = "New Paragraph after change"
  }
//Task 10: Add a mouseover event listener to an element that changes its border color.
function changeBgColor(){
    let value = document.getElementsByClassName("myDiv");
    for(let i = 0;i<value.length;i++){
        value[i].style.backgroundColor = "Green"
    }
}


