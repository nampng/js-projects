const cells = document.querySelectorAll('.panel')
console.log(cells)

cells.forEach((panel) => {
    panel.addEventListener('click', () => {
        if (panel.classList.contains('active')) {
            panel.classList.remove('active')
        }
        else {
            removeActive()
            panel.classList.add('active')
        }
    })
})

function removeActive() {
    console.log("removing active")
    cells.forEach((panel) => {
        panel.classList.remove('active')
    })
}