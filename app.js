let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    current = count++
    countEl.textContent = count
}


function save() {
    saveEl.textContent += count + " - "
    countEl.textContent = 0
    count = 0
}

