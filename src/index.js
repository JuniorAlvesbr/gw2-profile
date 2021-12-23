const $form = document.querySelector('[data-js="form"]')

const getApiKeyFromLocalStorage = storageName => {
    const APIKEY = localStorage.getItem(storageName)
    raids(APIKEY)
}

getApiKeyFromLocalStorage('apikey')

$form.addEventListener('submit', async event => {
    event.preventDefault()
    const APIKEY = event.target.inputAPI.value

    localStorage.setItem('apikey', APIKEY)

    raids(APIKEY)
})
