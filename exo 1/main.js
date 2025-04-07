function applyTwice(func, value){
    func(value)
    func(value)
}

function makeCounter(){
    let counter = 0
    
    return () => {
        return counter++
    }
}

function changeColor(color){
    document.getElementById("salut").style.color = color
}

function changeSize(size){
    document.getElementById("salut").style.size = size
}

console.log(applyTwice(console.log, "salut"))

const counter = makeCounter()

console.log(counter())
console.log(counter())

const tab  = [
    changeColor,
    changeSize]