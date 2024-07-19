/**
 * Day 7: Objects ✔
 **/

/**
 *  Activity 1: Object Creation and Access ✔
 **/

// --Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console. ✔
const bookDetails = {
    title: "JavaScript",
    author: "Hitesh",
    year: "2024",
}
console.log("Book Details : ", bookDetails)

// --Task 2: Access and log the title and author properties of the book object. ✔
console.log("Title : ", bookDetails.title)
console.log("Author Name : ", bookDetails.author)

/**
 * Activity 2: Object Methods ✔
 */

// --Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method. ✔
let books = {
    title: "JavaScript",
    author: "Sumit",
    getBookDetails : function (){
        return `title : ${books.title} and author : ${books.author}`
    }
}
console.log(books.getBookDetails())

// --Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object. ✔
const bookDetail = {
    title: "JavaScript",
    author: "Hitesh",
    year: "2024",
    updateYear : function(year){
        bookDetail.year = year;
    }
}
bookDetail.updateYear(2025);
console.log("Updated Objects : ",bookDetail)

/**
 * Activity 3: Nested Objects ✔
 */

// --Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console. ✔
let libary = {
    name : "CNS Library",
    books :[
        {
            title : "Java",
            author : "Sumit"
        },
        {
            title : "Python",
            author : "Amit"
        },
        {
            title : "JavaScript",
            author : "Hitesh"
        }
    ]
}
console.log(libary)

// --Task 6: Access and log the name of the library and the titles of all the books in the library. ✔
console.log("Library Name : ",libary.name)
console.log("Titles name : ")
libary.books.forEach(book => {
    console.log(book.title)
})
/**
 * Activity 4: The this Keyword ✔
*/

// --Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method. ✔
let book = {
    title: "JavaScript",
    year: 2020,
    getBookDetails : function (){
        return `title : ${this.title} and Year : ${this.year}`
    }
}
console.log(book.getBookDetails())

/**
 * Activity 5: Object Iteration ✔
 */

// --Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value. ✔
const bookObject = {
    title: "JavaScript",
    author: "Hitesh",
    year: 2024,
}
console.log("======For..in :====== ")
for(let property in bookObject){
    console.log(`${property} : ${bookObject[property]}`)
}

// --Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object. ✔
const bookInfo = {
    title: "JavaScript",
    author: "Hitesh",
    year: "2023",
}
console.log("Keys : ",Object.keys(bookInfo))
console.log("Values : ",Object.values(bookInfo))