const user = {
    name : "Sumit",
    email:"user@example.com"
}
localStorage.setItem("user",JSON.stringify(user));

const savedUser = JSON.parse(localStorage.getItem("user"));
console.log("Saved User : ",savedUser);

