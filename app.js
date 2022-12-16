
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    current = count++
    document.getElementById("count-el").textContent = count
}


function save() {
    saveEl.textContent += count + " - "
}

