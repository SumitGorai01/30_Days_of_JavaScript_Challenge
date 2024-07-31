/**
 * Day 19 :- Regular Expression
 */

/**
 * Activity 1: Basic Regular Expressions
 */

// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript in a string). Log the matches.
console.log("*** Task 1 ***");
let str = "Welcome to 30 Days JavaScript Challenge by Chai aur code. Learn JavaScript with chai";
let regex = /JavaScript/g;
let expersionMatches = str.match(regex);
console.log(expersionMatches)

// Task 2: Write a regular expression to match all digits in a string. Log the matches.
console.log("*** Task 2 ***");
let str2 = "Random digits = 123 456 789 0";
let regex2 = /\d/g
let matches2 =str2.match(regex2);
console.log(matches2);


/**
 * Activity 2: Character Classes and Quantifiers
 */

// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
console.log("*** Task 3 ***");
let str3 = "Learn JavaScript From Chai aur Code";
let regex3 = /\b[A-Z][a-z]*\b/g;
let matches3 = str3.match(regex3);
console.log(matches3);

// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
console.log("*** Task 4 ***");
let str4 = "30 days JavaScript Challenge by Hitesh Sir on chai aur code in 2024. ";
let regex4 = /\d+/g
let matches4 = str4.match(regex4);
console.log(matches4);


/**
 * Activity 3: Grouping and Capturing
 */

// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
console.log("*** Task 5 ***");
let str5 = "(123) 456-7890"
let regex5 = /\((\d{3})\) (\d{3})-(\d{4})/;
let matched5 = str5.match(regex5);
if(matched5){
    console.log(`Full match : ${matched5[0]}`)
    console.log(`Area code : ${matched5[1]}`)
    console.log(`Central office code : ${matched5[2]}`)
    console.log(`Line number : ${matched5[3]}`)
}
else{
    console.log(`No match found!`)
}

// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
console.log("*** Task 6 ***");
let email = "username@example.com";
let regex6 = /(\w+)@(\w+\.\w+)/;
let matches6 = email.match(regex6);
if(matches6){
    console.log(`Full match : ${matches6[0]}`)
    console.log(`Username : ${matches6[1]}`)
    console.log(`Domain : ${matches6[2]}`)
}else{
    console.log(`No match found!`)
}


/**
 * Activity 4: Assertions and Boundaries
 */

// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
console.log("*** Task 7 ***");
let str7 = "Hello JavaScript";
let regex7 = /^\w+/;
let matches7 = str7.match(regex7);
if(matches7){
console.log("Match : ",matches7[0]);
}else{
    console.log("No match found.")
}

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
console.log("*** Task 8 ***");
let str8 = "Hello JavaScript";
let regex8 = /\b\w+\b$/;
let matches8 = str8.match(regex8);
if(matches8){
console.log("Match : ",matches8[0]);
}else{
    console.log("No match found.")
}


/**
 * Activity 5: Practical Applications
 */

// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
console.log("*** Task 9 ***");
let password = "Password@123";
let regex9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

let isValidPassword = regex9.test(password);

if(isValidPassword){
    console.log("Password is valid");
}else{
    console.log("PAssword is not valid .Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character. ")
}
// Task 10: Write a regular expression to validate a URL. Log whether the the URL is valid.
console.log("*** Task 10 ***");
let url  = "https://www.exampleurl.com/";
let regex10 = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\/?]?.*)$/;
let isValidUrl = regex10.test(url);

if(isValidUrl){
    console.log("URL is Valid.");
}else{
    console.log("URL is not valid.");
}