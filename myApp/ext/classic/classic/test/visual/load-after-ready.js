Ext.onReady(function () {
    if (watchdog) {
        clearTimeout(watchdog);
        watchdog = null;
    }

    var el = document.createElement('div');
    el.style.color = 'green';
    el.style.fontSize = '30px';
    el.innerHTML = 'onReady called';

    document.body.appendChild(el);
});
