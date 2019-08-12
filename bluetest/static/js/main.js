document.addEventListener("DOMContentLoaded", function (event) {
    page_url = window.location.href;
    setCookie('base_url', page_url, 7);
    
    window.addEventListener('popstate', function (event) {
        var new_page_url = window.location.href;
        var url_list = new_page_url.split('/');
        var url_postfix = url_list[url_list.length-1];
        var last_url = getCookie('last_url');
        var base_url = getCookie('base_url');

        if (url_list.length > 4 && url_postfix != last_url && new_page_url != base_url) {
            loadDoc(url_postfix)
        }
    });
});

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

function loadDoc(routeName) {
    page_url = window.location.href;
    setCookie('last_url', routeName, 7)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content-loader").innerHTML = this.responseText;
            window.history.pushState("", null, routeName);
        }
    };
    xhttp.open("GET", routeName, true);
    xhttp.send();
}
