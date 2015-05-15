Ext.onReady(function () {
    var cmp = Ext.create('Ext.draw.Component', {
        width: 400,
        height: 400,
        renderTo: Ext.getBody(),
        items: []
    });

    cmp.surface.add({
        type: "path",
        path: "M-122.304 84.285C-122.304 84.285 -122.203 86.179 -123.027 86.16C-123.851 86.141 -140.305 38.066 -160.833 40.309C-160.833 40.309 -143.05 32.956 -122.304 84.285z",
        "stroke-width":"0.172",
        stroke:"#000",
        fill:"#fff"
    }).show(true);
});
