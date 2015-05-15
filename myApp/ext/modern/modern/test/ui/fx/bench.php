<!DOCTYPE HTML>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="../../../resources/css/sencha-touch.css" type="text/css">
    <script type="text/javascript" src="../../../sencha-touch.js"></script>
    <script type="text/javascript">
        //<![CDATA[
        Ext.setup({
            requires: [
                'Ext.Container',
                'Ext.Button'
            ],
            logger: null,
            onReady: function() {
                animator = Ext.Animator;
            }

        });

        function render() {
            var uis = ['normal', 'back', 'round', 'action', 'forward', 'decline', 'confirm', 'small'],
                container, items, i, j;

            container = new Ext.Container({
                layout: 'hbox'
            });

            for (i = 0; i < 10; i++) {
                items = [];

                for (j = 0; j < 10; j++) {
                    items.push({
                        id: 'button' + i + j,
                        ui: uis[random(0, uis.length)],
                        xtype: 'button',
                        text: 'Button ' + i
                    });
                }

                container.add({
                    id: 'container' + i,
                    xtype: 'container',
                    layout: 'vbox',
                    items: items
                });
            }

            Ext.Viewport.add(container);

            run();
            setInterval(run, 1000);
        }

        function random(from, to){
           return Math.floor(Math.random() * (to - from + 1) + from);
        }

        function getRandomColor(){
            return random(0, 255);
        }

        function run() {
            try {
                var transitions = [];

                for (var i = 0; i < 10; i++) {
                    transitions.push({
                        element: 'container' + i,
                        to: {
                            transform: {
                                translate: [random(0, 300), random(0, 300), 0],
                                rotate: random(-45, 45) + 'deg',
                                scale: Math.random() * 2
                            }
//                                'background-color': 'rgba(' + getRandomColor() + ', ' + getRandomColor() + ', ' + getRandomColor() + ', 1)'
                        },
                        duration: '2s',
                        easing: 'ease-in-out'
                    });
//                    animator.run({
//                        element: '#container' + i,
//                        transition: {
//                            to: {
//                                transform: {
//                                    translate: [random(0, 300), random(0, 300), 0],
//                                    rotate: random(-45, 45) + 'deg',
//                                    scale: Math.random() * 2
//                                }
////                                'background-color': 'rgba(' + getRandomColor() + ', ' + getRandomColor() + ', ' + getRandomColor() + ', 1)'
//                            },
//                            duration: '2s',
//                            easing: 'ease-in-out'
//                        }
//                    });
                }

                animator.run(transitions);
            } catch (e) {
                alert(e);
            }
        }
        //]]>
    </script>
</head>
<body>
    <div style="position:absolute; bottom: 0; right: 0; z-index: 100"><button onclick="render()">Do it</button></div>
</body>
</html>
