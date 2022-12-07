import * as bootstrap from 'bootstrap';
import "@/scss/style.scss";
import "@/css/style.css";
import {  myAnime1, myAnime2, myAnime3 } from './anime';
import { onScrollHeader } from './scroll';
import { scrollTo } from './smoothScroll';
import { aosAnime } from './aos';
import { typed } from './typed';

window.addEventListener('DOMContentLoaded', () => {
    myAnime1
    myAnime2
    myAnime3
    onScrollHeader()
    scrollTo()
    aosAnime
    typed
})
