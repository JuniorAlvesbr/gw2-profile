const $form = document.querySelector('[data-js="form"]')
const $loading = document.querySelector('[data-loading="loading"]')

const getApiKeyFromLocalStorage = () => {
    const APIKEY = localStorage.getItem('apikey')
    $form.inputAPI.value = APIKEY
}

const showLoading = () => $loading.classList.toggle('-active')

$form.addEventListener('submit', async event => {
    event.preventDefault()
    showLoading()

    const APIKEY = event.target.inputAPI.value
    localStorage.setItem('apikey', APIKEY)

    await raids(APIKEY)
    showLoading()
})

getApiKeyFromLocalStorage()