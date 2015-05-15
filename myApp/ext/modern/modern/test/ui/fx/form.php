<!DOCTYPE HTML>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <title></title>
    <style type="text/css">
        body {
            -webkit-perspective: 1;
        }

        body * {
            font-family: Helvetica;
            -webkit-box-sizing: border-box;
        }

        *:not(input):not(textarea):not(select) {
            -webkit-user-select: none;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
        }

        #container {
            position: relative;
            width: 100%;
            height: 400px;
            border:  1px solid red;
            overflow:  hidden;
        }

        #scroller {
            border: 2px solid green;
            width: 100%;
        }
    </style>
    <script type="text/javascript" src="../../../sencha-touch-all.js"></script>
    <script type="text/javascript">
        Ext.setup({
            requires: ['Ext.scroll.Scroller'],

            viewport: {
                autoRender: false,
                autoMaximize: false
            },
            logger: {
                writers: {
                    remote: {
                        xclass: 'Ext.log.writer.Remote',
                        url: '/dolog.php',
                        formatter: {
                            xclass: 'Ext.log.formatter.Identity'
                        }
                    }
                }
            },
            onReady: function() {
                scroller = Ext.create('Ext.scroll.Scroller', {
                    element: 'scroller',
                    scrollMethod: 'scrollposition'
                });

                if (Ext.os.is.iOS) {
                    Ext.get('scroller').dom.style.webkitPerspective = 1;
                }

                Ext.Logger.warn('READY');
            }
        });

        function animate() {
            Ext.Animator.run([
                {
                    element: 'mask',
                    from: {
                        transform: {}
                    },
                    to: {
                        transform: {
                            scaleX: 0,
                            translateX: -500
                        }
                    },
                    duration: 1000,
                    easing: 'ease-out'
                },
                {
                    element: 'container',
                    from: {
                        transform: {
                            translateX: 500,
                            rotate: 720
                        }
                    },
                    to: {
                        transform: {}
                    },
                    duration: 1000,
                    easing: 'ease-in'
                }
            ]);
        }
    </script>
</head>
<body>
<div id="container">
    <div id="scroller">
         <form>
             <?php for ($i = 0; $i < 100; $i++): ?>
                <div><input onfocus="this.scrollIntoViewIfNeeded(false)" type="text" style="height: 50px" placeholder="input <?php echo $i ?>" /></div>
             <?php endfor; ?>

             <?php for ($i = 0; $i < 10; $i++): ?>
                <div><textarea style="height: 100px; width: 100%"></textarea></div>
             <?php endfor; ?>
        </form>
    </div>
</div>
<div id="mask" style="position: absolute; left: 0; top: 0; width: 100%; height: 400px; background-color: green"></div>
<div style="background-color: red; width: 200px; height: 20px"></div>
<button style="position: absolute; bottom: 0" ontouchstart="animate()">Animate</button>
</body>
</html>
