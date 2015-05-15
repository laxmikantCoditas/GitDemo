Ext.setup({
    requires: [
        'Ext.scroll.Scroller'
    ],
    viewport: {
        autoRender: false
    },
    onReady: function() {
        var dispatcher = Ext.event.Dispatcher.getInstance();

        function setActiveTab(id) {
            var currentActiveTab = Sencha.query(document, '.tab.active')[0],
                currentActiveView= Sencha.query(document, '.scrollView.top')[0],
                newActiveView= Sencha.get(id + 'View'),
                newActiveTab = Sencha.get(id + 'Tab');

            Sencha.addClass(newActiveTab, 'active');
            Sencha.addClass(newActiveView, 'top');

            Sencha.removeClass(currentActiveTab, 'active');
            Sencha.removeClass(currentActiveView, 'top');
        }

//        dispatcher.addListener('element', '#list > div', 'touchstart', function(e) {
//            var item = e.getTarget(),
//                touch = e.touch;
//
//            item.startX = touch.point.x;
//            item.startY = touch.point.y;
//
//            item.className = 'pressed';
//        });
//
//        dispatcher.addListener('element', '#list > div', 'touchmove', function(e) {
//            var item = e.getTarget(),
//                touch = e.touch;
//            var translateX = touch.point.x - item.startX;
//            var translateY = touch.point.y - item.startY;
//
//            item.style.webkitTransform = 'translate3d('+translateX+'px, '+translateY+'px, 0px)';
//    //                item.clone.style.webkitTransform = 'translate('+translateX+'px, '+translateY+'px)';
//    //                item.clone.style.left = translateX + 'px';
//    //                item.clone.style.top = translateY + 'px';
//        });
//
//        dispatcher.addListener('element', '#list > div', 'touchend', function(e) {
//            var item = e.getTarget();
//
//    //                document.body.removeChild(item.clone);
//            item.className = '';
//        });
    //
        dispatcher.addListener('element', '.tab', 'tap', function(e) {
            var tab = e.getTarget(),
                id = tab.id.replace(/Tab$/, '');

            setActiveTab(id);
        });
    //
    //            dispatcher.addListener('element', '#list > div', 'tap', function(e) {
    //                var item = e.getTarget();
    //
    //                item.className = 'pressed';
    //
    //                e.stopPropagation();
    //            });
    //
    //            dispatcher.addListener('element', '#list > div', 'swiperight', function(e) {
    //                var item = e.getTarget();
    //
    //                item.className = '';
    //            });
    //
    //            dispatcher.addListener('element', '#list > div', 'doubletap', function(e, info) {
    //                var item = e.getTarget();
    //
    //                item.className = '';
    //            });
    //
    //            dispatcher.addListener('element', '#list > div', 'longpress', function(e, info) {
    //                var item = e.getTarget();
    //
    //                item.style.display = 'none';
    //            });
    //
    //            dispatcher.addListener('element', '#userTab', 'doubletap', function(e, info) {
    //                Sencha.get('jobAlertBadge').innerText = parseInt(Sencha.get('jobAlertBadge').innerText) + 1;
    //            });
    //
    //            dispatcher.addListener('element', '#defaultBackButton', 'tap', function(e, info) {
    //                setActiveTab('list');
    //            });
    //
        dispatcher.addListener('element', '#list', 'pinchstart', function(e) {
            var item = e.getTarget();

            if (!item.hasOwnProperty('scale')) {
                item.scale = 1;
            }
            else {
                item.scale = item.currentScale;
            }
        });

        dispatcher.addListener('element', '#list', 'pinch', function(e) {
            var item = e.getTarget();

            item.currentScale = item.scale * e.scale;
    //                item.style.fontSize = Math.round(item.currentScale * 100) + '%';
            item.style.webkitTransform = 'translate3d(0px, 0px, 0px) scale('+item.currentScale+') rotate('+item.currentRotation+'deg)';
        });

        dispatcher.addListener('element', '#list', 'rotatestart', function(e) {
            var item = e.getTarget();

            if (!item.hasOwnProperty('rotation')) {
                item.rotation = 0;
            }
            else {
                item.rotation = item.currentRotation;
            }
        });

        dispatcher.addListener('element', '#list', 'rotate', function(e) {
            var item = e.getTarget();

            item.currentRotation = item.rotation + e.rotation;

    //                item.style.fontSize = Math.round(item.currentScale * 100) + '%';
            item.style.webkitTransform = 'translate3d(0px, 0px, 0px) scale('+item.currentScale+') rotate('+item.currentRotation+'deg)';
        });
    //
    //            dispatcher.addListener('element', '#list', 'pinchend', function(e) {
    ////                item.style.webkitTransform = 'translate3d(0px, 0px, 0px) scale('+item.currentScale+')';
    //            });
    //
    //            dispatcher.addListener('element', '#list', 'doubletap', function(e, info) {
    //                var item = e.getTarget();
    //
    //                item.style.webkitTransform = null;
    //            });

        var scroller = window.scroller = Ext.create('Ext.scroll.View', {
            element: Sencha.get('listView')
        });

        Ext.Viewport.on('resize', 'refresh', scroller);
        Ext.Viewport.on('orientationchange', 'refresh', scroller);
//
//        setInterval(function() {
//            Sencha.get('defaultTitle').innerText = Date.now();
//        }, 1000);
    }
});
