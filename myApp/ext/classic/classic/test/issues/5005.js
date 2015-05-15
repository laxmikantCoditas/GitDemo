// Ext.require('Ext.diag.layout.ContextItem');

var testCase = {
    run: function () {

        // original test case
        // "test<br>test<br>test<br>test<br>test<br><ol><li>testing the ol</li></ol>test<br>"

        var longLine = "a b c d e f g h i j k l m n o p q r s t u v w x y z",
            veryLongLine = longLine + ' ' + longLine.toUpperCase() + '<br>',
            shortMsg = [
                "line1<br>",
                "line2<br>",
                "line3<br>",
                "line4<br>",
                "line5<br>",
                "<ol>",
                "<li>list1 list1 list1</li>",
                "<li>list2 list2 list2</li>",
                "</ol>",
                "line6<br>"
            ].join(''),
            veryShortMsg = 'Are you sure?',
            mbox = Ext.MessageBox,

            medMsg = longLine + '<br>' + shortMsg,
            longMsg = veryLongLine + '<br>' + shortMsg,

            cb = function(btnId, value, cfg){
                if(btnId == 'ok'){
                    config.width = null;
                } else if(btnId == 'cancel') {
                    config.width = 250;
                } else if(btnId == 'no') {
                    config.width = 10;
                } else if(btnId == 'yes') {
                    config.width = 1000;
                }

                config.msg = mbox.msg.getValue() == shortMsg
                    ? (config.icon) ? medMsg : longMsg
                    : shortMsg;

                setTimeout(function() {
                    Ext.MessageBox.show(config);
                }, 500);
            },
            fullConfig ={
                title: "TEST",
                buttons: mbox.OK|mbox.CANCEL|mbox.NO|mbox.YES,
                msg: longMsg,
                fn:cb,
                scope:this,
                multiline: true,
                prompt: true,
                progress: true,
                progressText: 'Progress',
                icon: mbox.INFO,
                modal: false
            },
            config = {
                title: "TEST",
                buttons: mbox.OK|mbox.CANCEL|mbox.NO|mbox.YES,
                msg: longMsg,//.replace(/[ ]/g, '&nbsp;'),
                fn:cb,
                scope:this,
                modal: false
            };

        mbox.show({
            width: 250,
            title: "TEXT",
            modal: true,
            buttons: Ext.MessageBox.OKCANCEL,
            msg: longMsg
        });
    }
};
