var NavTab = {
    init()
    {
        this.activeTab();
    },
    activeTab()
    {
        $('.js-nt-tab a').on('click', function (e) {
            e.preventDefault();
            let $this  = $(this),
                target = $this.attr('href');
            $this.closest('li').addClass('active').siblings().removeClass('active');
            console.log(target);
            $(target).show().siblings().hide();
        });
    }
};
export default NavTab;
