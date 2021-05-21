var counter = 0

function update() {
    document.getElementById("counter").innerHTML = counter
}

function increment() {
    counter += 1
    update()
}

function decrement() {
    counter -= 1
    update()
}

update()