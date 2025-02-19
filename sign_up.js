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
