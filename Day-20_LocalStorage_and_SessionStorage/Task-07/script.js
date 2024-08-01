// Save form data to sessionStorage
document.getElementById("sessionForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("sessionName").value;
    const email = document.getElementById("sessionEmail").value;
    sessionStorage.setItem("sessionData", JSON.stringify({ name, email }));
    showSessionData();
  });
  
  // Display saved data on page load
  function showSessionData() {
    const savedSessionData = JSON.parse(sessionStorage.getItem("sessionData"));
    if (savedSessionData) {
      document.getElementById(
        "sessionData"
      ).textContent = `Name: ${savedSessionData.name}, Email: ${savedSessionData.email}`;
    }
  }
  
  showSessionData();