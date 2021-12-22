const fetchRaids = async () => await fetch('https://api.guildwars2.com/v2/account/raids?access_token=8CA26801-906E-8F4A-9FE0-05956985CAD305CB785A-AD42-4FE1-BBEC-746E3CC94256')

const raids = async () => {
    const raid = await (await fetchRaids()).json()
    console.log(raid)
}

// raids()