document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    localStorage.setItem("userData",JSON.stringify({name,email}));

    showData();
});

function showData(){
    const savedData = JSON.parse(localStorage.getItem("userData"));

    if(savedData){
        document.getElementById("savedData").textContent = `Name : ${savedData.name} , Email : ${savedData.email}`
    }
}

showData();