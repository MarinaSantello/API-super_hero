'use strict'

//classe HTMLElement
class card extends HTMLElement {
    //criação das variáveis que vão receber os atributos
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});

        this.id = 'Undefined'
        this.name = 'Undefined'
        this.icon = 'Undefined'
        this.alignment = 'Undefined'
    }

    //pega os atributos
    static get observedAttributes() {
        return ['id', 'name', 'icon', 'alignment'];
    }

    //iguala as variáveis aos atributos criados
    attributeChangedCallback(nameAttr, oldValue, newValue) {
        this[nameAttr] = newValue;
    }

    //junta o html (component) com o css (styles)
    connectedCallback() {
        this.shadow.appendChild(this.component());
        this.shadow.appendChild(this.styles());
    }

    //css
    styles() {
        const style = document.createElement('style');
        let main = 'tomato'
        let light = 'aqua'
        let dark = 'brown'
        let opacity = 'aquamarine'

        if (this.alignment == 'good') {
            main = 'var(--blue-main)'
            light = 'var(--blue-light)'
            dark = 'var(--blue-dark)'
            opacity = 'var(--blue-opacity)'
        }
                
        else if (this.alignment == 'bad') {
            main = 'var(--red-main)'
            light = 'var(--red-light)'
            dark = 'var(--red-dark)'
            opacity = 'var(--red-opacity)'
        }
        
        else {
            main = 'var(--purple-main)'
            light = 'var(--purple-light)'
            dark = 'var(--purple-dark)'
            opacity = 'var(--purple-opacity)'
        } 


        style.textContent = `
            .card_container {
                backgroun-color: #D9D9D9;
                height: 310px;
                width: 180px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 20px;
                gap: 5px;
                text-decoration: none;
                border: 2px solid ${dark};
                border-radius: 20px;
            }

            .card_container:hover {
                background-image: linear-gradient(${dark}, #fff0);
                transition: 1s;
            }

            .img_div {
                height: 100%;
                width: 100%;
                border-radius: 24px;
                background-image: url(${this.icon});
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                box-shadow: inset 0px 0px 0px 8px #fffa;
            }

            .card_container:hover .img_div {
                box-shadow: inset 0px 0px 0px 8px ${opacity};
                transition: .5s;
            }

            .hero_image {
                height: 250px;
                width: 168px;
                border-radius: 24px;
            }

            .hero_name {
                display: flex;
                font-family: 'PT Sans Narrow', sans-serif;
                font-size: 30px;
                text-align: center;
                align-items: center;
                color: ${dark};
                height: 10vh;
            }
        `
        
        return style;
    }

    //conteúdo que 
    component() {
        const card = document.createElement('div');
        card.classList.add('card');
        console.log(this.id)
        card.innerHTML = `
            <a href="../pages/character_page.html?id=${this.id}" class="card_container" target="_blank">
                <div class="img_div">
                </div>
                <span class="hero_name">${this.name}</span>
            </a>
        `
        // <img class="hero_image" src="${this.icon}">

        return card;
    }
}

customElements.define('hero-card', card);

