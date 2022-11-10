'use strict'

class card extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});

        this.id = 'Undefined';
        this.alignment = 'Undefined';
        this.name = 'Undefined';
        this.fullname = 'Undefined';
        this.placeofbirth = 'Undefined';
        this.publisher = 'Undefined';
        this.firstappearance = 'Undefined';
        this.groupaffiliation = 'Undefined';
        this.icon = 'Undefined';
    }

    static get observedAttributes() {
        return ['id', 'alignment', 'name', 'fullname', 'placeofbirth', 'publisher', 'firstappearance', 'groupaffiliation', 'icon'];
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        this[nameAttr] = newValue;
    }

    connectedCallback() {
        this.shadow.appendChild(this.component());
        this.shadow.appendChild(this.styles());
    }

    styles() {
        const style = document.createElement('style');
        let main = 'tomato'
        let light = 'aqua'
        let dark = 'brown'

        if (this.alignment == 'good') {
            main = 'var(--blue-main)'
            light = 'var(--blue-light)'
            dark = 'var(--blue-dark)'
        }
                
        else if (this.alignment == 'bad') {
            main = 'var(--red-main)'
            light = 'var(--red-light)'
            dark = 'var(--red-dark)'
        } 
        
        else {
            main = 'var(--purple-main)'
            light = 'var(--purple-light)'
            dark = 'var(--purple-dark)'
        } 

        style.textContent = `
            .card {
                background-color: #ffff;
                width: 90vw;
                height: auto;
                display: flex;
                align-items: center;
                padding: 42px;

                border-width: 12px; 
                border-style: solid;
                border-color:  ${dark};
                border-radius: 30px;
            
            }

            .card__nome, 
            .card__fullname, 
            .card__placeofbirth,
            .card__publisher,
            .card__firstappearance,
            .card__groupaffiliation {
                font-weight:bold;
                color: ${dark};
                font-size: 1.3rem;
                display: flex;
                align-items: center;
            }

            .info__container {
                width: 80%;
                padding: 24px;
            }

            .info__topics {
                display: flex;
                gap: 10px;
            }

            .card__img {
                width: 20%;
                height: 402px;
                background-image: url(${this.icon});
                background-size: cover;
                background-repeat: no-repeat;
            }

            .a__information {
                text-decoration: none;
                display: flex;
                justify-content: flex-end;
            }

            .more__info{
                color: white;
                font-size: 1.3rem;
                background-color: ${main};
                border-radius: 100px;
                padding: 10px;
            }
        `
        
        return style;
    }

    component() {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="card__img"></div>
            <div class="info__container">
                <div class="name__topic">
                    <div class="card__nome">${this.name}</div>
                </div>

                <div class="topics">
                    <div class="info__topics">
                        <h3>Full name:</h3>
                        <div class="card__fullname">${this.fullname}</div>
                    </div>

                    <div class="info__topics">
                        <h3>Place of birth:</h3>
                        <div class="card__placeofbirth">${this.placeofbirth}</div>
                    </div>

                    <div class="info__topics">
                        <h3>Publisher:</h3>
                        <div class="card__publisher">${this.publisher}</div>
                    </div>

                    <div class="info__topics">
                        <h3>Firt appearance:</h3>
                        <div class="card__firstappearance">${this.firstappearance}</div>
                    </div>

                    <div class="info__topics">
                        <h3>Group affiliation:</h3>
                        <div class="card__groupaffiliation">${this.groupaffiliation}</div>
                    </div>
                </div>

                <a href="./pages/character_page.html?id=${this.id}" class="a__information" target="_blank">
                    <span class="more__info">More informations</span>
                </a>
            </div>
        `

        return card;
    }
}

customElements.define('card-famous-character', card);

