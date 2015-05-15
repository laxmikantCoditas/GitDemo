// Ext.require('Ext.diag.layout.ContextItem');

var testCase = {
    run: function () {
        Ext.DomHelper.append(document.body, [{
                tag: 'p',
                style: 'width: 600px; margin-bottom: 20px;',
                html: 'Collapse (no scrollbar) then expand (scrollbar) - check panel width ' +
                    'to see if inline width was applied (should not since it is natural width), ' +
                    'otherwise ensure that the panel header is not clipped'
            }, {
                tag: 'div',
                style: {
                    border: '1px solid red',
                    height: '300px',
                    overflowY: 'auto',
                    marginLeft: '30px',
                    width: '300px'
                },
                cn: [{
                    id: "inner",
                    style: 'border: 1px solid green'
                }]
            }]);

        this.panel = new Ext.panel.Panel({
            collapsible: true,
            height: 400,
            renderTo: 'inner',
            title: 'Panel',
            //width: 200,
            listeners: {
                resize: function(panel) {
                    var el = Ext.get('inner');
                    //panel.setWidth(el.getWidth() - el.getFrameWidth('lr'));
                }
            }
        });

        this.manager.expect(this.panel.el.dom.style.width).toEqual('');
    },

    events: [
        // collapse the panel:
        { type: 'mduclick', ts: 1000, x: 0, y: 0, target: '#tool-1015-toolEl', button: 0,
          afterplay: 'afterCollapse' },

        // expand the panel:
        { type: 'mduclick', ts: 2000, x: 0, y: 0, target: '#tool-1015-toolEl', button: 0,
          afterplay: 'afterExpand' },

        // collapse the panel:
        { type: 'mduclick', ts: 3000, x: 0, y: 0, target: '#tool-1015-toolEl', button: 0,
          afterplay: 'afterCollapse' },

        // expand the panel:
        { type: 'mduclick', ts: 4000, x: 0, y: 0, target: '#tool-1015-toolEl', button: 0,
          afterplay: 'afterExpand' }
    ],

    afterCollapse: function (ev) {
        var me = this;

        ev.defer();
        setTimeout(function () {
            me.manager.expect(me.panel.el.dom.style.width).toEqual('');
            ev.finish();
        }, 1);
    },

    afterExpand: function (ev) {
        var me = this;

        ev.defer();
        setTimeout(function () {
            me.manager.expect(me.panel.el.dom.style.width).toEqual('');
            ev.finish();
        }, 1);
    }
};
