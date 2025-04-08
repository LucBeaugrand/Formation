//exo1

(function () {
    console.log("Hello from IIFE")
})()

//exo2

function init() {
    console.log("Initializing")

    init = function () {
        console.log("Already initialized")
    }
}

init()
init()

//exo3

function sum() {
    let total = 0
    if (arguments.length <= 3) {
        for (let i = 0; i < arguments.length; i++) {
            total += arguments[i]
        }
    }

    return total
}

console.log(sum(1, 2, 3));

//exo4

(function (name) {
    console.log(`Hello ${name}`)
})("Michel")

//exo5

function once() {

    console.log("Je me fais qu'une fois")

    once = function () {
    }

}

once()
once()

//exo6
function add(a) {
    return function add(b) {
        return a + b
    }
}

console.log(add(1)(2))