// btn = document.querySelector('.btn')
// search = document.querySelector('.search')
// Lbtn = document.querySelector('.Lbtn')
// loading = document.querySelector('.loading')

// btn.addEventListener('click', () => {
//     search.classList.toggle('active')
// })



// Lbtn.addEventListener('click', () => {
//     loading.classList.toggle('active')
// })

loadText = document.querySelector('.loading-text')
bg = document.querySelector('.bg')

load = 0

int = setInterval(blurring, 50)



function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = 1 - load/100;

    bg.style.filter = `blur(${30 - (load/100) * 30}px)`
}