const $form = document.querySelector('[data-js="form"]')

const getApiKeyFromLocalStorage = () => {
    const APIKEY = localStorage.getItem('apikey')

    if (APIKEY) {
        raids(APIKEY)
    }
}

$form.addEventListener('submit', async event => {
    event.preventDefault()
    const APIKEY = event.target.inputAPI.value

    localStorage.setItem('apikey', APIKEY)

    raids(APIKEY)
})

getApiKeyFromLocalStorage()