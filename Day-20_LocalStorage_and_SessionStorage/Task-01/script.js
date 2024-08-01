const key = "myString";
const value = "Hello , Chai aur coder"

localStorage.setItem(key ,value);
const retrivedValue = localStorage.getItem(key);

console.log(`Saved String : ${retrivedValue}`)