document.addEventListener("DOMContentLoaded", function(){
    const selectElement = document.querySelector('.select')

    selectElement.addEventListener('change', (event) => {
        const lang = event.target.value
        const newPath = window.location.pathname
            + `?lang=${lang}`
        window.location.replace(newPath)
    })
})
