var Http = {
    loading()
    {
        $('<div class="loading">Hệ thống đang xử lý, vui lòng đợi ...</div>').appendTo('body');
    },
    done()
    {
        $('div.loading').remove();
    },
    get(params)
    {
        let data = {
            type: 'GET',
        };
        data = Object.assign(data, params);
        return this.send(data);
    },
    post(params)
    {
        let data = {
            type: 'POST',
        };
        data = Object.assign(data, params);
        return this.send(data);
    },
    delete(params)
    {
        let data = {
            type: 'DELETE',
        };
        data = Object.assign(data, params);
        return this.send(data);
    },
    put(params)
    {
        let data = {
            type: 'PUT',
        };
        data = Object.assign(data, params);
        return this.send(data);
    },
    send(opt)
    {
        let data = {
            async: true,
            url: '',
            type: 'GET',
            data: {},
            dataType: 'json',
        };
        data = Object.assign(data, opt);
        return $.ajax(data);
    }
};
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
export default Http;
