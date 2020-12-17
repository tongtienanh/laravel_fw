import 'bootstrap/js/src/modal';
import 'jquery-validation';
import 'jquery.cookie';
import 'select2/dist/js/select2';
import Http from './../helpers/Http';
import Storage from './../helpers/Storage';

var FormContact = {
    init()
    {
        this.showModal();
        this.validate();
        this.saveContact();
        this.fillInfo();
        $('.select2').select2({
            width: '100%'
        });
    },
    showModal()
    {
        $('#turn-off-contact').on('change', function () {
            let $this = $(this),
                val   = $this.val();
            if (val == 1) {
                var date = new Date();
                date.setTime(date.getTime() + 10 * (60 * 1000));
                $.cookie('toc', 1, {expires: date});
            }
        });
        setTimeout(function () {
            if (!$.cookie('toc')) {
                $('#form-contact').modal('show');
            }
        }, 6000);

        $('.js-open-form-customer').on('click', function (e) {
            e.preventDefault();
            let $this        = $(this),
                dom          = $this.data('dom'),
                $formContact = null,
                carType      = $this.data('type'),
                carId        = $this.data('id'),
                carName      = $this.data('name');
            if (typeof dom !== 'undefined' && dom.length > 0) {
                $formContact = $(dom);
            }
            else {
                $formContact = $('#form-contact');
            }
            $formContact.find('select[name="car_type"] option[value="' + carType + '"]').prop('selected', true);
            $formContact.find('select[name="car_type"]').select2({width: '100%'}).trigger('change');
            $formContact.find('input[name="car_id"').val(carId);
            $formContact.find('input[name="car_name"').val(carName);
            $formContact.find('.car-name').text(carName);
            $formContact.modal('show');
        });
    },
    validate()
    {
        let $form = $('#form-get-contact');
        if ($form.length === 0) return false;
        $.validator.setDefaults({
            debug: true,
            success: "valid"
        });
        $.validator.methods.regex = function (value, element) {
            return this.optional(element) || /^(0)[0-9]{9}$/.test(value);
        };
        $form.validate({
            rules: {
                name: {
                    required: true
                },
                phone: {
                    required: true,
                },
                email: {
                    email: true
                },
            },
            messages: {
                name: {
                    required: 'Quý khách chưa nhập tên'
                },
                phone: {
                    required: 'Quý khách chưa nhập sđt',
                },
                email: {
                    email: "Định dạng email sai"
                },
            },
            errorPlacement: function (error, element) {
                var placement = $(element).data('error');
                if (placement) {
                    $(placement).append(error)
                }
                else {
                    error.addClass('invalid-feedback').insertAfter(element);
                }
            },
        });
    },
    saveContact()
    {
        let self = this;
        $('.js-save-contact').on('click', function (e) {
            e.preventDefault();
            let $this    = $(this),
                $form    = $this.closest('form'),
                dataForm = new FormData($form[0]);
            if (!$form.valid()) return false;
            self.cacheInfo();

            let ajax = Http.post({
                url: window._contact.url_store,
                processData: false,
                contentType: false,
                data: dataForm,
                beforeSend: function () {
                    $this.attr("disabled", true);
                    Http.loading();
                }
            });
            ajax.done(function (data) {
                if (data.error) {
                    alert('Có lỗi xảy ra, liên hệ BQT');
                    return false;
                }
                $this.closest('form').hide();
                $this.closest('form').siblings('.box-success').show();
            });
            ajax.always(function () {
                setTimeout(function () {
                    $this.removeAttr("disabled");
                }, 1000);
                Http.done();
            });
        });
    },
    cacheInfo()
    {
        let $form    = $('#form-get-contact'),
            dataForm = new FormData($form[0]);
        let customer = {
            name: dataForm.get('name'),
            phone: dataForm.get('phone'),
            email: dataForm.get('email'),
            location: dataForm.get('location'),
        };
        Storage.setStorage('customer', customer);
    },
    fillInfo()
    {
        let customer = Storage.getStorage('customer'),
            $form    = $('#form-get-contact');
        $form.find('input[name="name"]').val(customer.name);
        $form.find('input[name="phone"]').val(customer.phone);
        $form.find('input[name="email"]').val(customer.email);
        $form.find('select[name="location"] option[value="' + customer.location + '"]').prop('selected', true);
        $form.find('select[name="location"]').select2({width: '100%'}).trigger('change');
    }
};
export default FormContact;
