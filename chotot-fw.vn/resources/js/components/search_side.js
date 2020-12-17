// import 'select2/dist/js/select2';
import 'devbridge-autocomplete';

var SearchSide = {
    init()
    {
        this.toggle();
        // this.runSelect2Filter();
        this.autoComplete();
        this.autoCompleteMb();
    },
    toggle()
    {
        $('.js-ss-toggle').on('click', function (e) {
            e.preventDefault();
            $('body').toggleClass('no-scroll');
            $('.search-side').toggleClass('open');
        });
    },
    // runSelect2Filter()
    // {
    //     $('.select2').select2({
    //         width : '100%'
    //     });
    // },
    autoComplete()
    {
        $('#autocomplete-top').autocomplete({
            serviceUrl: window._search.url_auto_complete,
            transformResult: function (response) {
                return {
                    suggestions: $.map(JSON.parse(response), function(dataItem) {
                        return { value: dataItem.name, data: dataItem.name };
                    })
                };
            }
        });
        $('#autocomplete').autocomplete({
            serviceUrl: window._search.url_auto_complete,
            transformResult: function (response) {
                return {
                    suggestions: $.map(JSON.parse(response), function(dataItem) {
                        return { value: dataItem.name, data: dataItem.name };
                    })
                };
            }
        });
    },
    autoCompleteMb()
    {
        $('#autocomplete-mb').autocomplete({
            serviceUrl: window._search.url_auto_complete,
            transformResult: function (response) {
                return {
                    suggestions: $.map(JSON.parse(response), function(dataItem) {
                        return { value: dataItem.name, data: dataItem.name };
                    })
                };
            }
        });
    }
};
export default SearchSide;
