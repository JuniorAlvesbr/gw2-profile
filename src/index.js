const $form = document.querySelector('[data-js="form"]')
const $loading = document.querySelector('[data-loading="loading"]')

const activeLoading = () => $loading.classList.add('-active')
const desactiveLoading = () => $loading.classList.remove('-active')

const getApiKeyFromLocalStorage = () => {
    const APIKEY = localStorage.getItem('apikey')
    $form.inputAPI.value = APIKEY
}

$form.addEventListener('submit', async event => {
    event.preventDefault()
    activeLoading()

    const APIKEY = event.target.inputAPI.value

    if (!APIKEY) {
        alert("Por favor Insira sua API-KEY")
        return
    }

    localStorage.setItem('apikey', APIKEY)

    await raids(APIKEY)

    desactiveLoading()
})

getApiKeyFromLocalStorage()