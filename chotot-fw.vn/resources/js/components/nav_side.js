var NavSide = {
    init() {
        this.toggle();
    },
    toggle()
    {
        $('.js-ns-toggle').on('click', function (e) {
            e.preventDefault();
            $('body').toggleClass('no-scroll');
            $('.head-menu').toggleClass('open');
            $('#overlay').toggle();
        });
        $('#overlay').on('click', function (e) {
            e.stopPropagation();
            $('.js-ns-toggle').trigger('click');
        });
        $('.js-ns-sub').on('click', function (e) {
            e.preventDefault();
            let $this = $(this);
            $this.closest('li').toggleClass('open');
            $this.toggleClass('fa-angle-right').toggleClass('fa-angle-down')
        });
    }
};
export default NavSide;
