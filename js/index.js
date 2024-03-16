btn = document.querySelector('.btn')
search = document.querySelector('.search')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
})

Lbtn = document.querySelector('.Lbtn')
loading = document.querySelector('.loading')

Lbtn.addEventListener('click', () => {
    loading.classList.toggle('active')
})