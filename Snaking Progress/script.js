let counter = 1

const circles = document.querySelectorAll(".circle")
const progress = document.querySelectorAll(".progress")
const next = document.getElementById('next')
const prev = document.getElementById('prev')

next.addEventListener('click', () => {
    if (counter < 6) {
        counter++
    }
    circles.forEach((circle) => {
        if (circle.id <= counter) {
            circle.classList.add("active")
        }
    })

    progress.forEach((bar) => {
        if (bar.id <= counter - 1) {
            bar.classList.add("active")
        }
    })

    update()
})

prev.addEventListener('click', () => {
    if (counter > 1) {
        counter--
    }
    circles.forEach((circle) => {
        if (circle.id > counter) {
            circle.classList.remove("active")
        }
    })

    progress.forEach((bar) => {
        if (bar.id > counter - 1) {
            bar.classList.remove("active")
        }
    })

    update()
})

function update() {
    if (counter == 1) {
        prev.disabled = true
    }
    else if (counter == 6) {
        next.disabled = true
    }
    else {
        prev.disabled = false
        next.disabled = false
    }
}