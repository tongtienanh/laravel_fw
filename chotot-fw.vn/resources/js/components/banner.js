import Swiper from 'swiper/bundle';
var Banner = {
    init()
    {
        var swiper = new Swiper('.swiper-banner', {
            lazy: true,
            loop: true,
            speed: 1000,
            effect : 'fade',
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        });
    }
};
export default Banner;

