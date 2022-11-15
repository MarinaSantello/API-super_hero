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
                height: auto;
                display: flex;
                align-items: center;
                padding: 42px;
                font-family: 'PT Sans Narrow', sans-serif;
                border-width: 2px; 
                border-style: solid;
                border-color:  ${dark};
                border-radius: 0px 24px 24px 0px;
                color: ${dark};            
            }

            .card__fullname, 
            .card__placeofbirth,
            .card__publisher,
            .card__firstappearance,
            .card__groupaffiliation {
                font-weight: lighter;
                font-size: 1.3rem;
                display: flex;
                align-items: center;
            }

            .card__nome {
                font-weight: bold;
                font-size: 2.3rem;
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
                background-position: center;
                background-repeat: no-repeat;
                border-radius: 24px;
                box-shadow: inset 0px 0px 0px 12px #fffa;
            }

            .a__information {
                text-decoration: none;
                display: flex;
                justify-content: flex-end;
            }

            .more__info{
                color: ${main};
                font-size: 1.3rem;
                border-radius: 100px;
                border-width: 2px; 
                border-style: solid;
                border-color:  ${dark};
                padding: 12px 24px 12px 24px;
                transition: .2s;
            }

            .more__info:hover {
                color: #fff;
                background-color: ${main};
                transition: .5s;
            }

            @media (max-width: 768px) {
                .card {
                    padding: 22px;
                    flex-direction: column;
                }

                .card__nome {
                    font-size: 1.8rem
                }

                .info__topics {
                    gap: 24px;
                }

                .card__img {
                    width: 100%;
                }

                .card__groupaffiliation {
                    padding-top: 16px;
                }

                .a__information {
                    justify-content: center;
                    padding-top: 50px;
                }
            
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

