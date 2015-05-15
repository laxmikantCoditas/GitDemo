importPackage(java.lang);
importPackage(com.sencha.util);

(function(){

    var firstNames   = ['Ed', 'Tommy', 'Aaron', 'Abe', 'Jamie', 'Adam', 'Dave', 'David', 'Jay', 'Nicolas', 'Nige'],
        lastNames    = ['Spencer', 'Maintz', 'Conran', 'Elias', 'Avins', 'Mishcon', 'Kaneda', 'Davis', 'Robinson', 'Ferrero', 'White'];

    var data = [];

    for (var i = 0; i < 2500; i++) {
        var firstNameId = Math.floor(Math.random() * firstNames.length),
            lastNameId  = Math.floor(Math.random() * lastNames.length),
            name        = firstNames[firstNameId] + " " + lastNames[lastNameId];

        var _data = {};

        for (var j=1; j<= 25; j++) {
            _data['name_'+j] = name;
        }

        data.push(_data);
    }

    FileUtil.writeFile($args[0], "var __bigdata = "  + JsonUtil.toJson(data) + ";");
})();