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
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form from actually submitting to a backend

    // Optionally, you can add form validation or store user data in localStorage here

    window.location.href = "sign_in.html"; // Redirect to sign-in page after form submission
});
