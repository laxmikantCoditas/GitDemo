var configuration = {
  // don't touch
   unit: {
       specs: 'touch/test/unit/specs.html',

       noInstrument: [
           'touch/test',
           'platform/test',
           'platform/core/test',
           'testreporter'
       ]
   },

   // don't touch
   build: {

       setupScript: 'touch/test/build/setup.sh',

       teardownScript: 'touch/test/build/teardown.sh'

   },

    visual: {
        folders: ['touch/test/visual']
    },

    browsers: [{
    //    name : "Chrome",
    //    version : "16.0.912.77"
    // },{
       name : "Safari",
       version : "5.34.52.7"
    }]
};
