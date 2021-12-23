const $raidDescriptionList = document.querySelectorAll('[data-value="raidDescriptionList"]')
const $raidWing1 = document.querySelector('[data-title="wing1"]')
const $wing1 = document.querySelectorAll('[data-wing="wing1"]')
const $raidWing2 = document.querySelector('[data-title="wing2"]')
const $wing2 = document.querySelectorAll('[data-wing="wing2"]')
const $raidWing3 = document.querySelector('[data-title="wing3"]')
const $wing3 = document.querySelectorAll('[data-wing="wing3"]')
const $raidWing4 = document.querySelector('[data-title="wing4"]')
const $wing4 = document.querySelectorAll('[data-wing="wing4"]')

const fetchRaids = async APIKEY => await fetch(`https://api.guildwars2.com/v2/account/raids?access_token=${APIKEY}`)

const getRaids = async APIKEY => await (await fetchRaids(APIKEY)).json()

const converNodeToArray = wing => Array.prototype.slice.call(wing)

const raidIsDone = (raidWing, wing) => {
    console.log(wing)
    const nodeToArray = converNodeToArray(wing)
    const isDone = nodeToArray.every(element => element.classList.contains('fa-check'))

    if (isDone) {
        raidWing.classList.remove('fa-times-circle')
        raidWing.classList.add('fa-check-circle')
    }
}

const raidDone = () => {
    raidIsDone($raidWing1, $wing1)
    raidIsDone($raidWing2, $wing2)
    raidIsDone($raidWing3, $wing3)
    raidIsDone($raidWing4, $wing4)
}

const addCheckIcon = (deadBossList) => {

    $raidDescriptionList.forEach(element => {
        const dataJsAttribute = element.dataset.js
        const haveDataJsInArray = deadBossList.includes(dataJsAttribute)

        if (haveDataJsInArray) {
            element.classList.remove('fa-times')
            element.classList.add('fa-check')
            return
        }

        element.classList.add('fa-times')
        element.classList.remove('fa-check')

    })

    raidDone()
}

const raids = async APIKEY => {
    const deadBossList = await getRaids(APIKEY)

    addCheckIcon(deadBossList)
}

