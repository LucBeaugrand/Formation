const form = document.getElementById("cityForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    const city = document.querySelector("#city");
    const tel = document.querySelector("#tel");

    let valid = true

    console.log(city.value.trim()[0].toUpperCase())

    if (city.value == '' || city.value.trim()[0] != city.value.trim()[0].toUpperCase()) {
        document.getElementById("cityError").textContent = "La ville doit posséder une majuscule et n'être pas vide";
        valid = false
    }

    console.log(tel.value.length)

    if (tel.value.length != 10) {
        document.getElementById("telError").textContent = "Le numero doit posséder 10 caractères";
        valid = false
    }

    if (valid) {
        alert("Formulaire valide ! Données envoyées.");
        form.reset();
    }

});