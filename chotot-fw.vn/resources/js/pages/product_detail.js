import "./../../plugins/view-more/jquery.show-more";
import Swiper from 'swiper/bundle';
import NavTab from "../components/nav_tab";
import FormContact from "../components/form_contact";
import DivScroll from "../components/div_scroll";
import Common from "../commons/common";
var DetailProduct = {
    init()
    {
        Common.init();
        NavTab.init();
        FormContact.init();
        DivScroll.contact();
        this.runImageCollection();
        this.viewMore();
        this.shareSocial();
    },
    runImageCollection()
    {
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            slidesPerView: 5,
            loop: true,
            freeMode: true,
            loopedSlides: 2, //looped slides should be the same
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            lazy: true,

        });
        var galleryTop = new Swiper('.gallery-top', {
            spaceBetween: 10,
            loop: true,
            loopedSlides: 2, //looped slides should be the same
            effect: 'fade',
            lazy: true,

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: galleryThumbs,
            },
        });
    },
    viewMore()
    {
        $('#content1').showMore({
            minheight: 600,
            buttontxtmore: "Xem thêm",
            buttontxtless: "Thu gọn",
            animationspeed: 250
        });
    },
    shareSocial()
    {

    }
};
$(function () {
    DetailProduct.init();
});
