const $form = document.querySelector('[data-js="form"]')
const $loading = document.querySelector('[data-loading="loading"]')

const activeLoading = () => $loading.classList.add('-active')
const desactiveLoading = () => $loading.classList.remove('-active')

const getApiKeyFromLocalStorage = () => {
    const APIKEY = localStorage.getItem('apikey')
    $form.inputAPI.value = APIKEY
}

const showRaids = async (APIKEY) => {
    activeLoading()

    localStorage.setItem('apikey', APIKEY)

    await raids(APIKEY)

    desactiveLoading()
}


$form.addEventListener('submit', event => {
    event.preventDefault()

    const APIKEY = event.target.inputAPI.value

    if (!APIKEY) {
        alert("Por favor Insira sua API-KEY")
        return
    }

    showRaids(APIKEY)
})

getApiKeyFromLocalStorage()