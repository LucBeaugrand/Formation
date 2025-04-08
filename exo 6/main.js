//exo 1 & 2

async function fetchIdTitle(id) {
    try {
        let reponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        let data = await reponse.json();
        console.log(data.title);
    } catch (err) {
        console.log("Erreur lors du fetch : " + err.message);
    }
}

fetchIdTitle(3);

//exo 3

const delay = (ms) => new Promise(resolve => setTimeout(() => resolve(console.log(`Fini !`)), ms));

delay(1000);

//exo 4

async function delayedHello() {
    await delay(1000);
    console.log("Hello async")
}

delayedHello();

//exo 5

function verifierMotDePasse(motDePasse) {
    try {
        return new Promise((resolve, reject) => {
            if (motDePasse.length >= 8) {
                resolve("Mot de passe accepté");
            } else {
                reject("Rejeté");
            }
        })
    } catch (error) {
        console.error("Erreur : " + error.message);
    }
}
verifierMotDePasse("123456789")
    .then((message) => console.log(message))
    .catch((erreur) => console.error(`erreur : ${erreur}`));
verifierMotDePasse("2")
    .then((message) => console.log(message))
    .catch((erreur) => console.error(`erreur : ${erreur}`));

async function testMotDePasse(motDePasse) {
    try {
        const result = await verifierMotDePasse(motDePasse)
        console.log(result)
    } catch (error) {
        console.error(error)
    }
}

testMotDePasse("123456789")