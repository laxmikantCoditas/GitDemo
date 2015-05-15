var toolbox;

function doBreak () {
    toolbox.debugBreak();
}

function doTest () {
    var text = [],
        count = 10,
        millis = [],
        micros = [],
        ticks = [],
        times = [],
        previous,
        current;

    function spin (mul) {
        for (var j = count*mul; j; --j) {
            // empty;
        }
    }

    function getTime () {
        return new Date().getTime();
    }

    if (!toolbox) {
        try {
            toolbox = new ActiveXObject('SenchaToolbox.Toolbox');
            var err = toolbox.watchGarbageCollector(true);
            if (err) {
                throw new Error(err);
            }
        } catch (e) {
            text = ['<p>Error: ', e.message || e.description,'</p>'];
        }
    }

    spin(500);// warm up
    text.push('<button onclick="doTest()">Run</button>&nbsp;&nbsp;'+
              '<button onclick="doBreak()">Break</button><br><br>');

    previous = getTime();
    for (var i = 0; i < count; ++i) {
        spin(500);
        current = getTime();
        times.push(current - previous);
        previous = current;
    }

    if (toolbox) {
        previous = toolbox.milliseconds;
        for (i = 0; i < count; ++i) {
            //spin();
            current = toolbox.milliseconds;
            millis.push(current - previous);
            previous = current;
        }

        previous = toolbox.microseconds;
        for (i = 0; i < count; ++i) {
            //spin();
            current = toolbox.microseconds;
            micros.push(current - previous);
            previous = current;
        }

        previous = toolbox.ticks;
        for (i = 0; i < count; ++i) {
            //spin();
            current = toolbox.ticks;
            ticks.push(current - previous);
            previous = current;
        }

        text.push('<p>Frequency = ' + (toolbox.frequency / 1000000.0) + ' microsec/tick</p>');

        text.push('<p>GC: ' + toolbox.garbageCollectionCounter + ' runs in ' + toolbox.garbageCollectionMilliseconds + 'ms</p>');
        text.push('<p>' + toolbox.events + '</p>');
    } else {
        for (i = 0; i < count; ++i) {
            millis[i] = micros[i] = ticks[i] = 'n/a';
        }
    }

    text.push('<hr><table width="100%" border="1">',
                '<tr>',
                    '<th rowspan="2">getTime</th>',
                    '<th colspan="3">Toolbox</th>',
                '</tr><tr>',
                    '<th>milliseconds</th>',
                    '<th>microseconds</th>',
                    '<th>ticks</th>',
                '</tr>');

    for (i = 0; i < count; ++i) {
        text.push('<tr>',
                    '<td>',times[i],'</td>',
                    '<td>',millis[i],'</td>',
                    '<td>',micros[i],'</td>',
                    '<td>',ticks[i],'</td>',
                  '</tr>')
    }

    text.push('</table>');

    text = text.join('');

    document.body.innerHTML = text;
}
