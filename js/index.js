btn = document.querySelector('.btn')
search = document.querySelector('.search')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
})

btn = document.querySelector('.btn')
loading = document.querySelector('.loading')

btn.addEventListener('click', () => {
    loading.classList.toggle('active')
})