'use strict'

import './info-container.js'

let parametro = window.location.search.substring(1)
let id = parametro.split('=')[1]

//função que retorna o link da api
const searchHeroes = async () => {

    const url = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';

    const response = await fetch(url);

    const heroesList = await response.json();

    return heroesList;

}

const api = await searchHeroes()

//função para criar os cards dos heróis mais famosos
const createCardFamous = async (data, id) => {
    //retorno da api
    let dataAPI = await data
    //id do personagem
    let idCharacter = id

    const main = document.getElementById('main')

    dataAPI.forEach(element => {
        if(element.id == idCharacter){
            let nameByID = element.name
            windowName(nameByID)

            main.innerHTML = `
                <info-container id="${element.id}" class="info__character" alignment="${element.biography.alignment}" name="${element.name}" icon="https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/${element.slug}.jpg" intelligence="${element.powerstats.intelligence}" strength="${element.powerstats.strength}" speed="${element.powerstats.speed}" durability="${element.powerstats.durability}" power="${element.powerstats.power}" combat="${element.powerstats.combat}" race="${element.appearance.race}" gender="${element.appearance.gender}" publisher="${element.biography.publisher}" firstappearance="${element.biography.firstAppearance}" groupaffiliation="${element.connections.groupAffiliation}"></info-container>
            `
        }
    });
}

//função para mudar o título da página conforme o nome do herói
const windowName = (character) => {
    const title = document.createElement('title')
    const head = document.getElementById('head')

    title.textContent = character

    head.appendChild(title)
}

createCardFamous(api, id)

export {

    searchHeroes

}