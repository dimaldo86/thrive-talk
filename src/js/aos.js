import AOS from 'aos';
import 'aos/dist/aos.css';


export const aosAnime = AOS.init({
    startEvent: 'DOMContentLoaded',
    duration: 1000,
    offset:0
});