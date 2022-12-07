import anime from 'animejs/lib/anime.es.js';
export const myAnime1 = anime( {
    targets: '.intro__content-text',
    translateX: [-1000, 0],
    easing: 'easeInOutSine',
    duration: 1000
})
export const myAnime2 = anime( {
    targets: '.intro__buttons',
    translateY: [1000, 0],
    easing: 'easeInOutSine',
    duration: 2000
})
export const myAnime3 = anime( {
    targets: '.intro__img',
    translateX: [500, 0],
    easing: 'easeInOutSine',
    duration: 1000
})
