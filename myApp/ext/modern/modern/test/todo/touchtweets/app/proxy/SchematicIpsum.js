/**
 * @class Ext.data.SchematicIpsum
 * @extends Ext.data.proxy.Rest
 *
 * This simple proxy allows us to use SchematicIpsum to simulate JSON data from a server
 */
Ext.define('Twitter.proxy.SchematicIpsum', {
    extend: 'Ext.data.proxy.Rest',
    alias: 'proxy.schematicipsum',

    config: {
        url: 'http://schematic-ipsum.herokuapp.com/?n=',

        extraParams: {
            "type": "object",
            "properties[id][type]":"string",
            "properties[id][ipsum]":"id",
            "properties[from_user][type]":"string",
            "properties[from_user][ipsum]":"first name",
            "properties[profile_image_url][type]":"string",
            "properties[profile_image_url][ipsum]":"small image",
            "properties[text][type]":"string",
            "properties[text][ipsum]":"sentence",
            "properties[created_at][type]":"string",
            "properties[created_at][format]":"date-time"
        }
    },

    /*
        Simulate a random amount of tweets
     */
    getUrl: function() {
        return this._url + (Math.round(Math.random() * 10) + 15);
    },

    getMethod: function() {
        return "POST";
    }
});