import Common from "../commons/common";
import FormContact from "../components/form_contact";
var Blog = {
    init()
    {
        Common.init();
        FormContact.init();
    }
};
$(function () {
    Blog.init();
});
