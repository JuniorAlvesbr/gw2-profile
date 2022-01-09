const $form = document.querySelector('[data-js="form"]')
console.log($form.inputAPI.value)


const getApiKeyFromLocalStorage = () => {
    const APIKEY = localStorage.getItem('apikey')

    if (APIKEY) {
        $form.inputAPI.value = APIKEY
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