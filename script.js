document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login functionality will be added soon!");
});

document.getElementById("serviceForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let serviceType = document.getElementById("serviceType").value;
    let description = document.getElementById("description").value;
    if (serviceType && description) {
        document.getElementById("serviceStatus").innerText = "Your " + serviceType + " request is submitted.";
    }
});
