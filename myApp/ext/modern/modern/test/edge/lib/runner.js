(function() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'specs.list?' + Date.now(), false);
    xhr.send(null);

    var specs = xhr.responseText.split("\n")
        .map(function(spec) {
            return spec.trim()
        })
        .filter(function(spec) {
            return !!spec && !/^\/\/|#/.test(spec)
        })
        .map(function(spec) {
            return "specs/" + spec
        });

    specs.push('run.js');

    specs.forEach(function(spec) {
        document.write('<script type="text/javascript" src="'+(spec + '?' + Date.now())+'"></script>');
    });
})();
