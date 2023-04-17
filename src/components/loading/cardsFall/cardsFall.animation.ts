import gsap from 'gsap';
import cardsJSON from '../../../cards.json';

function CardsFallFx() {
    let startAnim = () => {
        (function () {
            'use strict';

            let table = document.querySelector('#table.cardsFall') as HTMLDivElement,
                cardWidth = 100,
                cardHeight = 150,
                cardCount = 1,
                startingHands = 0;

            function init() {
                // bindEvents();

                // Initial draw
                start();
            }

            function start() {
                if (startingHands < 3) {
                    startingHands++;
                    draw();

                    setTimeout(start, 1000);
                }
            }

            function bindEvents() {
                window.addEventListener('click', () => {
                    draw();
                });
            }

            function draw() {
                let tl = gsap.timeline(),
                    position = getTableCenter(),
                    card = addCard();

                cardCount++;

                gsap.set(card, {
                    y: -table.offsetHeight,
                    x: table.offsetWidth / 5,
                    zIndex: -1,
                });
                let offsetX = table.offsetWidth * 0.5,
                    offsetY = table.offsetHeight * 0.5;
                tl.addLabel('start')
                    .to(
                        card,
                        {
                            duration: 1.5,
                            ease: 'Power2.easeOut',
                            x: position.x + getRandom(-offsetX, offsetX as any),
                            y: position.y + getRandom(-offsetY, offsetY as any),
                        },
                        'start',
                    )
                    .to(
                        card,
                        {
                            duration: 1.8,
                            ease: 'Power2.easeOut',
                            rotation: getRandom(360),
                        },
                        'start',
                    );
            }

            function addCard() {
                let card = document.createElement('div');
                card.className = 'card__loading';
                generateCardBg(card);
                table.appendChild(card);

                return card;
            }

            function getTableCenter() {
                return {
                    x: table.offsetLeft + table.offsetWidth / 2 - cardWidth / 2,
                    y: table.offsetTop + table.offsetHeight / 2 - cardHeight / 2,
                };
            }

            function getRandom(min: any, max = null) {
                let realMax = max === null ? min * 2 : max;
                return min + Math.random() * (realMax - min);
            }

            init();
        })();
    };

    const generateCardBg = (card: HTMLDivElement) => {
        const randomIndex = Math.floor(Math.random() * 2);
        const randomArray = randomIndex === 0 ? cardsJSON.cards : cardsJSON.wildcard;
        const randomCard = randomArray[Math.floor(Math.random() * randomArray.length)];
        // card.style.setProperty('--bgUrl', `url('./assets/img/cards/${randomCard}.png')`);
        const generatedUrl = `/assets/img/cards/${randomCard}.png`;
        card.style.setProperty('--bgUrl', `url('${generatedUrl}')`);
    };

    const removeInitialCards = () => {
        const cardContainer = document.querySelector('#table.cardsFall') as HTMLDivElement;
        console.log(cardContainer);
        if (getComputedStyle(cardContainer).animationName != 'none') {
            setTimeout(() => {
                console.log('Loading animation stopped');
                cardContainer.innerHTML = '';
            }, 3000);
        }
    };

    return {
        removeInitialCards,
        startAnim,
    };
}

export default CardsFallFx;
