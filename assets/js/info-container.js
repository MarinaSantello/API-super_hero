'use strict'

class container extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});

        this.id = 'Undefined'
        this.alignment = 'Undefined'
        this.name = 'Undefined'
        this.intelligence = '0'
        this.strength = '0'
        this.speed = '0'
        this.durability = '0'
        this.power = '0'
        this.combat = '0'
        this.race = 'Undefined'
        this.gender = 'Undefined'
        this.publisher = 'Undefined'
        this.firstappearance = 'Undefined'
        this.groupaffiliation = 'Undefined'
        this.icon = 'Undefined'
    }

    static get observedAttributes() {
        return ['id', 'alignment', 'name', 'intelligence', 'strength', 'speed', 'durability', 'power', 'combat', 'race', 'gender', 'publisher', 'firstappearance', 'groupaffiliation', 'icon'];
    }

    attributeChangedCallback(attribute, oldValue, newValue) {
        this[attribute] = newValue
        console.log(newValue)
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

        
        .character__container {
            display: flex;
            flex-direction: column;
            gap: 24px;
            height: 78vh;
        }

        .title__name {
            font-family: 'Bayon', sans-serif;
            text-transform: uppercase;
            color: ${main};
            text-decoration: underline;
            font-size: 3.3rem;
            height: 50vh;
            padding-left: 5vw;
            height: auto;
            background-color: tomato;
        }
        .${this.name}__data {
            display: flex;
            width: 100vw;
            justify-content: space-between;
            background-color: 'tomato';
        }

        .card__img {
            width: 20%;
            height: 402px;
            background-image: url(${this.icon});
            background-size: cover;
            background-repeat: no-repeat;
        }

        .title__powers {
            display: flex;
            font-family: 'Bayon', sans-serif;
            text-transform: uppercase;
            color: ${main};
            text-decoration: underline;
            font-size: 3rem;
            justify-content: center;
        }

        .powers__container {
            display: flex;
            flex-direction: column;
            width: 70vw;
            justify-content: space-around;
            padding: 32px;
            background-color: #fff;
        }

        .power__stats {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .data__power {
            display: flex;
            gap: 24px;
        }

        .power {
            width: 10vw;
            font-family: 'PT Sans Narrow', sans-serif;
            font-size: 1.5rem;
        }

        .background__bar {
            display: flex;
            width: 80%;
            height: 24px;
            background-color: rgba(38, 38, 38, 0.2);
        }

        .power__intelligence,
        .power__strength,
        .power__speed,
        .power__durability,
        .power__power,
        .power__combat {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            color: #fff;
            font-family: 'Bebas Neue', cursive;
            padding-right: 10px;
            font-size: 1.2rem;
            font-weight: lighter;
        }
        .power__intelligence {
            width: ${this.intelligence}%;
            background-color: ${main};
        }

        .power__strength {
            width: ${this.strength}%;
            background-color: ${main};
        }

        .power__speed {
            width: ${this.speed}%;
            background-color: ${main};
        }

        .power__durability {
            width: ${this.durability}%;
            background-color: ${main};
        }

        .power__power {
            width: ${this.power}%;
            background-color: ${main};
        }

        .power__combat {
            width: ${this.combat}%;
            background-color: ${main};
        }

        .biography__container {
            display: flex;
            flex-direction: column;
            font-family: 'PT Sans Narrow', sans-serif;
            font-weight: 500;
            align-items: center;
            font-size: 1.3rem;
        }

        .biography__topics{
            display: flex;
            gap: 15px;
        }
            
        `
        
        return style;
    }

    component() {
        const containerCharacter = document.createElement('div');
        containerCharacter.classList.add('container-character');
        containerCharacter.innerHTML = `
        <div class="character__container">
            <span class="title__name">${this.name}</span>

            <div class="${this.name}__data">
                <div class="card__img"></div>

                <div class="powers__container">
                    <span class="title__powers">power stats</span>

                    <div class="power__stats">
                        
                        <div class="data__power">
                            <span class="power">Intelligence</span>

                            <div class="background__bar">
                                <div class="power__intelligence">
                                    ${this.intelligence}%
                                </div>
                            </div>
                        </div>

                        <div class="data__power">
                            <span class="power">Strength</span>

                            <div class="background__bar">
                                <div class="power__strength">
                                    ${this.strength}%
                                </div>
                            </div>
                        </div>

                        <div class="data__power">
                            <span class="power">Speed</span>

                            <div class="background__bar">
                                <div class="power__speed">
                                    ${this.speed}%
                                </div>
                            </div>
                        </div>

                        <div class="data__power">
                            <span class="power">Durability</span>

                            <div class="background__bar">
                                <div class="power__durability">
                                    ${this.durability}%
                                </div>
                            </div>
                        </div>

                        <div class="data__power">
                            <span class="power">Power</span>

                            <div class="background__bar">
                                <div class="power__power">
                                    ${this.power}%
                                </div>
                            </div>
                        </div>

                        <div class="data__power">
                            <span class="power">Combat</span>

                            <div class="background__bar">
                                <div class="power__combat">
                                    ${this.combat}%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="biography__container">
                <div class="biography__topics">
                    <span>${this.race}</span> <span>&#8226;</span> <span>${this.gender}</span> <span>&#8226;</span> <span>${this.publisher}</span> <span>&#8226;</span> <span>${this.firstappearance}</span>
                </div>

                <span>${this.groupaffiliation}</span>
            </div>
        <div>

        `

        return containerCharacter;
    }
}

customElements.define('info-container', container);
