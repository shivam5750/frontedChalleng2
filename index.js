var drop = document.querySelectorAll('.link')
var uparrow = document.querySelectorAll('.arrow')



for (let i = 0; i < drop.length; i++){
    drop[i].addEventListener('mouseover', () => {
        uparrow[i].classList.remove('down')
        uparrow[i].classList.add('up')

    })
}

for (let i = 0; i < drop.length; i++){
    drop[i].addEventListener('mouseout', () => {
        uparrow[i].classList.remove('up')
        uparrow[i].classList.add('down')

    })
}

