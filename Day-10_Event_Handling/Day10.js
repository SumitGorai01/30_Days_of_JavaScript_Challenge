/**
 * Day 10 :- Event Handling
 */

/**
 * Activity 1: Basic Event Handling
 */

// --Task 1: Add a click event listener to a button that changes the text content of a paragraph.
document.getElementById("changeParaBtn").addEventListener("click", function () {
    document.getElementById("para").textContent = "This is new Paragraph after change."
})

// --Task 2: Add a double-click event listener to an image that toggles its visibility.
document.getElementById("toggleVisibility").addEventListener("dblclick", function () {
    this.classList.toggle("hideTheImage")
})


/**
 * Activity 2: Mouse Events
 */

// --Task 3: Add a mouseover event listener to an element that changes its background color.
document.getElementById("box").addEventListener("mouseover", function () {
    this.style.backgroundColor = "orange"
})

// --Task 4: Add a mouseout event listener to an element that resets its background color.
document.getElementById("box").addEventListener("mouseout", function () {
    this.style.backgroundColor = "lightgreen"
})


/**
 * Activity 3: Keyboard Events
 */

// --Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
document.getElementById("textInput").addEventListener("keydown", function () {
    console.log(`You pressed ' ${event.key} key'`)
    alert(`You pressed ' ${event.key} ' key`)
})

// --Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
document.getElementById("inputValue").addEventListener("keyup", function () {
    document.getElementById("displayValueOnPress").textContent = `Your text : ${this.value}`
})


/**
 * Activity 4: Form Events
 */

// --Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
document.getElementById("formData").addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this)
    for (let [key, value] of formData.entries()) {
        console.log(`${key} : ${value}`)
    }
})

// --Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
document.getElementById("dropdown").addEventListener("change", function () {
    document.getElementById("selectedValue").textContent = `You Selected : ${this.value}`
})


/**
 * Activity 5: Event Delegation
 */

// --Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
document.getElementById("listItem").addEventListener("click", function () {
    if (event.target.tagName === "LI") {
        console.log(`Clicked Item : ${event.target.textContent}`)
    }
})

// --Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
document.getElementById("addItems").addEventListener("click", function () {
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${document.getElementById("list").children.length + 1
        }`;
    document.getElementById("list").appendChild(newItem)
})