'use strict'

import { searchHeroes } from "./heroesapi.js"
import './search-page.js'

//função para retornar os cards dos heróis de acordo com a palavra chave digitada
const showCards = async (attribute, data) => {
    //retorno da api
    let dataAPI = await data
    //palavra chave da barra de pesquisa (nome ou editora)
    let attributeCharacter = attribute.toLowerCase()

    const showContainer = document.getElementById('show_container')

    
    dataAPI.forEach(element => {
        let name = element.name.toLowerCase()
        // console.log(name)
        // // console.log(`${attributeCharacter} TESTE`)
        let publisher = element.biography.publisher

        if (name.includes(attributeCharacter)) {
            console.log(publisher)

            showContainer.innerHTML += `
                <hero-card class="card-container" id="${element.id}" name="${element.name}" icon="https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/${element.slug}.jpg" alignment="${element.biography.alignment}"></hero-card>
            `
        } 
        // else {

        //     showContainer.innerHTML = `
        //         <span class="no_result_text">No results found</span>
        //     `
            
        // }

    });


}

const searchCards = async () => {

    const hero = document.getElementById('hero').value
    if (hero == '') {

        const showContainer = document.getElementById('show_container')
        showContainer.textContent = ''
        document.querySelector('main').style.height = '76vh';

    } else {
        const cards = await searchHeroes()
        console.log(cards)
        showCards(hero, cards)
        document.querySelector('main').style.height = 'auto';
    }

}

const handlekeypress = (event) => {

    if (event.key == 'Enter') {

        const showContainer = document.getElementById('show_container')
        showContainer.textContent = ''
        searchCards()

    }

}

document.getElementById('hero').addEventListener('keypress', handlekeypress)

export {

    showCards

}