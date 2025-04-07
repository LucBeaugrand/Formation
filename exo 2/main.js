// exercice 1
function createLogger(prefix) {
    return (msg) => `${prefix} ${msg}`
}

const logInfo = createLogger("[INFO]");
console.log(logInfo("Connexion établie")); // Résultat attendu : "[INFO] Connexion établie"

// exercice 2
function createMultiplier(n) {
    return (m) => n * m
}

const triple = createMultiplier(3);
console.log(triple(4)); // Résultat attendu : 12