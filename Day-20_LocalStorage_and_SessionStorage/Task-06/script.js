const sessionUser = {
    name : "Amit",
    email : "a@gmail.com"
}
sessionStorage.setItem("sessionUser",JSON.stringify(sessionUser));

const sessionSavedUser = JSON.parse(sessionStorage.getItem("sessionUser"));

console.log("Session User : ",sessionSavedUser);