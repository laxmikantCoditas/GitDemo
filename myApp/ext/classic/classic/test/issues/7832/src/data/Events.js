Ext.define('Ext.calendar.data.Events', {

    statics: {
        getData: function() {
            var today = Ext.Date.clearTime(new Date()), 
                makeDate = function(d, h, m, s) {
                    d = d * 86400;
                    h = (h || 0) * 3600;
                    m = (m || 0) * 60;
                    s = (s || 0);
                    return Ext.Date.add(today, Ext.Date.SECOND, d + h + m + s);
                };
                
            return {
                "evts": [
                    {"id":0,"cid":1,"title":"My Schedule","start":"2012-11-20T13:37:00","end":"2012-11-20T19:37:00","notes":""},
                    {"id":1,"cid":1,"title":"My Schedule","start":"2012-11-20T19:37:00","end":"2012-11-21T01:37:00","notes":""},
                    {"id":2,"cid":1,"title":"My Schedule","start":"2012-11-22T01:37:00","end":"2012-11-22T07:37:00","notes":""},
                    {"id":3,"cid":1,"title":"My Schedule","start":"2012-11-22T07:37:00","end":"2012-11-22T13:37:00","notes":""},
                    {"id":4,"cid":1,"title":"My Schedule","start":"2012-11-22T13:37:00","end":"2012-11-22T19:37:00","notes":""},
                    {"id":5,"cid":1,"title":"My Schedule","start":"2012-11-22T19:37:00","end":"2012-11-23T01:37:00","notes":""},
                    {"id":6,"cid":1,"title":"My Schedule","start":"2012-11-23T01:37:00","end":"2012-11-23T07:37:00","notes":""},
                    {"id":7,"cid":1,"title":"My Schedule","start":"2012-11-23T07:37:00","end":"2012-11-23T13:37:00","notes":""},
                    {"id":8,"cid":1,"title":"My Schedule","start":"2012-11-23T13:37:00","end":"2012-11-23T19:37:00","notes":""},
                    {"id":9,"cid":1,"title":"My Schedule","start":"2012-11-23T19:37:00","end":"2012-11-24T01:37:00","notes":""},
                    {"id":10,"cid":1,"title":"My Schedule","start":"2012-11-27T01:37:00","end":"2012-11-27T07:37:00","notes":""},
                    {"id":11,"cid":1,"title":"My Schedule","start":"2012-11-27T07:37:00","end":"2012-11-27T13:37:00","notes":""},
                    {"id":12,"cid":1,"title":"My Schedule","start":"2012-11-27T13:37:00","end":"2012-11-27T19:37:00","notes":""},
                    {"id":13,"cid":1,"title":"My Schedule","start":"2012-11-27T19:37:00","end":"2012-11-28T01:37:00","notes":""},
                    {"id":14,"cid":1,"title":"My Schedule","start":"2012-11-29T01:37:00","end":"2012-11-29T07:37:00","notes":""},
                    {"id":15,"cid":1,"title":"My Schedule","start":"2012-11-29T07:37:00","end":"2012-11-29T13:37:00","notes":""},
                    {"id":16,"cid":1,"title":"My Schedule","start":"2012-11-29T13:37:00","end":"2012-11-29T19:37:00","notes":""},
                    {"id":17,"cid":1,"title":"My Schedule","start":"2012-11-29T19:37:00","end":"2012-11-30T01:37:00","notes":""},
                    {"id":18,"cid":1,"title":"My Schedule","start":"2012-11-30T01:37:00","end":"2012-11-30T07:37:00","notes":""},
                    {"id":19,"cid":1,"title":"My Schedule","start":"2012-11-30T07:37:00","end":"2012-11-30T13:37:00","notes":""},
                    {"id":20,"cid":1,"title":"My Schedule","start":"2012-11-30T13:37:00","end":"2012-11-30T19:37:00","notes":""},
                    {"id":21,"cid":1,"title":"My Schedule","start":"2012-11-30T19:37:00","end":"2012-12-01T01:37:00","notes":""}

                ]
            }
        }
    }
});
