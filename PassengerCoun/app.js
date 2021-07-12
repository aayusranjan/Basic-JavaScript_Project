let saveEL = document.getElementById("save-el")
let countEL = document.getElementById("count-el")
let count = 0
// console.log(countEL)
// console.log(saveEL)
function increment() {
    count += 1
    countEL.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEL.textContent += countStr //textContent render the excat result which we used in countStr(it's show the space) refrence: MDN Web Docs(Node.textContent)
    countEL.textContent = 0
    count = 0
}
// save()
// if u add save() then u get intial value as well
