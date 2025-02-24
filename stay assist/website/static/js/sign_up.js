document.addEventListener("DOMContentLoaded", function () {
    const genderSelect = document.getElementById("gender");
    const hostelSelect = document.getElementById("hostel");

    const hostels = {
        "Men": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"],
        "Ladies": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
    };

    genderSelect.addEventListener("change", function () {
        hostelSelect.innerHTML = '<option value="" disabled selected>Select Hostel</option>';
        const selectedGender = genderSelect.value;
        
        if (selectedGender) {
            hostels[selectedGender].forEach(block => {
                let option = document.createElement("option");
                option.value = block;
                option.textContent = `Block ${block}`;
                hostelSelect.appendChild(option);
            });
        }
    });
});

// Handle form submission and redirection
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents default form submission

    // Get the Flask-generated URL for sign-in
    const signInUrl = document.getElementById("register-form").dataset.signinUrl;

    // Redirect to the sign-in page
    window.location.href = signInUrl;
});
