
const cardList = document.querySelector(".cards")

for(let i = 0; i < data.length; i++){
    const pokemon = data[i]
    const card = document.createElement("li")
    card.classList.add("card")

    const title = document.createElement("h2")
    title.classList.add("card--title")
    title.innerText = pokemon.name
    card.appendChild(title)

    const image = document.createElement("img")
    image.width = "256"
    image.classList.add("card--img")
    image.src = pokemon.sprites.other["official-artwork"].front_default
    card.appendChild(image) 

    const cardText = document.createElement("ul")
    cardText.classList.add("card--text")
    for (let i = 0; i < pokemon.stats.length; i++){
        const stat = document.createElement("li")
        stat.innerText = `${pokemon.stats[i].stat.name}: ${pokemon.stats[i].base_stat}`
        cardText.appendChild(stat)
    }
    card.appendChild(cardText)

    const games = document.createElement("li") 
    const gamesTitle = document.createElement("h4")
    gamesTitle.innerText = "Games:"
    games.appendChild(gamesTitle)

    const listOfGames = document.createElement("div")
    let gamesString = pokemon.game_indices[0].version.name
    for(let i = 1; i < pokemon.game_indices.length; i++){
        gamesString += ", " + pokemon.game_indices[i].version.name
    }
    listOfGames.innerText = gamesString
    games.appendChild(listOfGames)

    card.appendChild(games)

    cardList.appendChild(card)
}
