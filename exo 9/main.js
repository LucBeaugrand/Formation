const form = document.getElementById("nameForm");

const NAME_KEY = 'my_name';

form.addEventListener("submit", function (event) {
    const userName = document.getElementById('name').value.trim();
    const userAge = document.getElementById('age').value.trim();

    if (userName && userAge) {
        const obj = {
            nom: userName,
            age: userAge
        }
        localStorage.setItem(NAME_KEY, JSON.stringify(obj))
        chargerObjet()
    }
})

function chargerObjet() {
    const data = localStorage.getItem(NAME_KEY);
    if (data) {
      const obj = JSON.parse(data);
      objectDisplay.innerHTML = `Nom : <strong>${obj.nom}</strong><br>Age : <em>${obj.age}</em>`;
    }
}

window.addEventListener('load', () => {
    chargerObjet();
});