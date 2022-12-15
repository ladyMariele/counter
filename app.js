//initialize the count as 0
//listen for when the increment button is clicked
// increment the count variable when increment button is clicked
// change the count-el id to reflect the current count variable

count = 0

function increment() {
    current = count++
    document.getElementById("count-el").innerText = count
}
