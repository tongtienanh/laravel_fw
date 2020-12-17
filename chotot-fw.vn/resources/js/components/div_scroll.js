var DivScroll = {
    contact()
    {
        let $sticky      = $('.sticky'),
            stickyAnchor = $('#sticky-anchor').offset().top,
            stickyHeight = $sticky.outerHeight(),
            headerHeight = $('.header').outerHeight(),
            marginTop    = 15;
        $(window).scroll(function () {
            let scrollTop            = $(window).scrollTop(),
                footerTop            = $('footer').offset().top,
                middleStickAndHeader = stickyAnchor - headerHeight - marginTop;
            if (scrollTop + stickyHeight > (footerTop - stickyHeight)) {
                $('.sticky').css({
                    top: (scrollTop + stickyHeight - (footerTop - 20)) * -1
                });
            }
            else if (scrollTop > middleStickAndHeader) {
                $('.sticky').css({
                    'position': 'fixed',
                    'top': (headerHeight + marginTop) + 'px',
                });
            }
            else if (scrollTop <= middleStickAndHeader) {
                $('.sticky').css({
                    'position': 'relative',
                    'top': 'unset',
                });
            }
        });
    }
};
export default DivScroll;
