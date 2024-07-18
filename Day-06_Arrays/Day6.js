/**
 * Day 6 :- Arrays ✔
 */

/**
 * Activity 1 : Array Creation and Access ✔
 */

// --Task 1 : Create an array of numbers from 1 to 5 and log the array to the console.✔
const arr = [1, 2, 3, 4, 5]
console.log("Array of numbers from 1 to 5 :", arr)
const arr1 = new Array(1, 2, 3, 4, 5)
console.log("Array of numbers from 1 to 5 :", arr1)

// --Task 2 : Access the first and last elements of the array and log them to the console ✔
const arr2 = [11, 22, 33, 44, 55, 66]
console.log(`First element : ${arr2[0]} \nLast element : ${arr2[arr2.length - 1]}`)

/**
 * Activity 2 : Array Methods(Basic) ✔
 */

// --Task 3: Use the push method to add a new number to the end of the array and log the updated array. ✔
const arr3 = [1, 2, 3, 4, 5, 6]
console.log("Before Push :", arr3)
arr3.push(8)
console.log("After Push :", arr3)

// --Task 4: Use the pop method to remove the last element from the array and log the updated array. ✔
const arr4 = [1, 2, 3, 4, 5, 6]
console.log("Before Pop : ", arr4)
arr4.pop()
console.log("After Pop : ", arr4)


// --Task 5: Use the shift method to remove the first element from the array and log the updated array. ✔
const arr5 = [1, 2, 3, 4, 5, 6]
console.log("Before Shift :", arr5)
arr5.shift()
console.log("After Shift :", arr5)


// --Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array. ✔
const arr6 = [1, 2, 3, 4, 5, 6]
console.log("Before unShift :", arr6)
arr6.unshift(85)
console.log("After unShift :", arr6)


/**
 * Activity 3: Array Methods (Intermediate) ✔
 * 
 */

// --Task 7: Use the map method to create a new array where each number is doubled and log the new array. ✔
const arr7 = [1, 2, 3, 4, 5, 6]
console.log("Old Array : ", arr7)
const doubleElement = arr7.map((arr7) => arr7 * 2)
console.log("New Array", doubleElement)


// --Task 8: Use the filter method to create a new array with only even numbers and log the new array. ✔
const arr8 = [1, 2, 3, 4, 5, 6]
console.log("Old Array : ", arr8)
const EvenNum = arr7.filter((arr8) => arr8 % 2 == 0)
console.log("Even element of Array", EvenNum)

// --Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result. ✔
const arr9 = [1, 2, 3, 4, 5, 6]
console.log("Old Array : ", arr9)
const sumOfArray = arr9.reduce((i, j) => i + j)
console.log("Sum of Array : ", sumOfArray)

/**
 * Activity 4: Array Iteration ✔
 */

// --Task 10: Use a for loop to iterate over the array and log each element to the console. ✔
const arr10 = [10, 20, 30, 40, 50, 60, 70, 80]
for (let i = 0; i < arr10.length; i++) {
    console.log(`Element at ${i + 1}th position : ${arr10[i]}`)
    // console.log("Element at ",i+1 ,"th position : ",arr10[i])
}

// --Task 11: Use the forEach method to iterate over the array and log each element to the console. ✔
const arr11 = [100, 200, 300, 400, 500, 600, 700, 800]
console.log("Array iteration by forEach loop : ")
arr11.forEach((arr11) => {
    console.log(arr11)
})

/**
 * Activity 5: Multi-dimensional Arrays ✔
 */

// --Task 12: Create a two-dimensional array (matrix) and log the entire array to the console. ✔
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log("Matrix is", matrix)

// --Task 13: Access and log a specific element from the two-dimensional array. ✔
console.log("Access of specific element from the two-dimensional array")
console.log(matrix[1][2])
console.log(matrix[0][2])
console.log(matrix[0][0])
console.log(matrix[1][1])