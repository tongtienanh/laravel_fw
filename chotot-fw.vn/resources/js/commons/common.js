import 'jquery-lazy';
import SearchSide from "../components/search_side";
import NavSide from "../components/nav_side";

var Common = {
    init()
    {
        SearchSide.init();
        NavSide.init();
        $("img.lazy").Lazy({
            onError: function (element) {
                element.attr('src', '');
            }
        });
    }
};
export default Common;
