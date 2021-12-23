const $form = document.querySelector('[data-js="form"]')

const fetchRaids = async APIKEY => await fetch(`https://api.guildwars2.com/v2/account/raids?access_token=${APIKEY}`)

const getRaids = async APIKEY => await (await fetchRaids(APIKEY)).json()

$form.addEventListener('submit', async event => {
    event.preventDefault()
    const APIKEY = event.target.inputAPI.value

    const raidListDone = await getRaids('8CA26801-906E-8F4A-9FE0-05956985CAD305CB785A-AD42-4FE1-BBEC-746E3CC94256')

    console.log(raidListDone)
})
