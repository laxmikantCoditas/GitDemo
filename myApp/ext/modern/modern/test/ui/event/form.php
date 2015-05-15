<!DOCTYPE HTML>
<html lang="en-US">
<head>
    <meta charset="UTF-8" />
    <title>Test DOM Events</title>
    <link href="../themes/blackTranslucent.css" media="screen" rel="stylesheet" type="text/css"/>
    <style type="text/css">
        .bar.tab .icon { width: 30px !important; height: 30px !important; }
        .bar.tab .icon.home { -webkit-mask-image: url(../themes/default/bar/tab/icons/home.png); }
        .bar.tab .icon.search { -webkit-mask-image: url(../themes/default/bar/tab/icons/search.png); }
        .bar.tab .icon.list { -webkit-mask-image: url(../themes/default/bar/tab/icons/list.png); }
        .bar.tab .icon.media { -webkit-mask-image: url(../themes/default/bar/tab/icons/movie.png); }
        .bar.tab .icon.user { -webkit-mask-image: url(../themes/default/bar/tab/icons/female.png); }

        body {
            /* Android */
            /*margin-top: 100px;*/
            /*-webkit-transition: height 0.1s linear;*/
        }

        .tableLayout.navigatable > .pressed, .tableLayout > .navigatable.pressed {
            background: #015de6;
            -webkit-background-size: auto;
        }

        .tableLayout.grouped {
            /*border: 1px solid red;*/
            /*-webkit-border-radius: none;*/
            -webkit-box-shadow: none;
        }

        #scroller {
            width: 100%;
        }

        /*#list, #list > * {*/
            /*-webkit-perspective: 1;*/
        /*}*/

        /*#list > :nth-child(n):nth-child(-n+50) {*/
            /*-webkit-perspective: 1;*/
        /*}*/

        /*#list > :nth-child(50) {*/
            /*background-color: red;*/
        /*}*/
    </style>
    <script type="text/javascript" src="../../../sencha-touch.js"></script>
    <script type="text/javascript" src="sencha.js"></script>
    <script type="text/javascript">
        Ext.setup({
            requires: [
                'Ext.scroll.scroller.Factory'
            ],
            viewport: {

            },
            onReady: function() {
                var scroller = window.scroller = Ext.scroll.scroller.Factory.create({
                    element: Sencha.get('scroller'),
                    direction: 'vertical'
                });

                Ext.Viewport.on('orientationchange', 'refresh', scroller);
            }
        });

    </script>
</head>
<body>
    <div id="defaultScreen" style="height: 100%" class="linearLayout vertical">
        <div>
            <div id="defaultNavigationBar" class="bar navigation plain">
                <div class="left"><a id="defaultBackButton" class="button bar back">Back</a></div>
                <div><h1 id="defaultTitle">Test Events</h1></div>
                <div class="right"></div>
            </div>
        </div>

        <div class="flexible">
            <div id="defaultViewContainer" class="frameLayout">
                <div id="listView" class="top">
                    <div class="scrollView">
                        <div id="scroller" class="scroller">
                            <div id="list" class="tableLayout grouped navigatable">
                                <?php for($i = 0; $i < 100; $i++): ?>
                                <div>
                                    <label>Input <?php echo $i ?>:</label>
                                    <span><input type="text" placeholder="input <?php echo $i ?>" /></span>
                                </div>
                                <div>
                                    <label>Password <?php echo $i ?>:</label>
                                    <span><input type="password" placeholder="password <?php echo $i ?>" /></span>
                                </div>
                                <div>
                                    <label>Textarea <?php echo $i ?>:</label>
                                    <span><textarea rows="4"></textarea></span>
                                </div>
                                <?php endfor; ?>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="userView" class="scrollView">
                    <div class="scroller">
                        <form method="post" action="" style="display: block; ">
                            <ul class="tableLayout grouped">
                                <li>
                                    <span style="width:100px"><label for="username">Email</label></span>
                                    <span><input type="email" id="loginUsername" name="username" placeholder="name@example.com" autocorrect="off" autocapitalize="off" style="" /></span>
                                </li>
                                <li>
                                    <span><label for="password">Password</label></span>
                                    <span><input type="password" id="loginPassword" name="password" placeholder="password" autocorrect="off" autocapitalize="off" style="" /></span>
                                </li>
                            </ul>

                            <ul class="linearLayout horizontal fixed" style="padding-top:15px">
                                <li style="text-align:center">
                                    <button type="submit" id="loginButton" class="modal normal" style="width:85%">Login</button></li>
                                <li style="text-align:center">
                                    <button type="button" id="signupButton" class="modal normal" style="width:85%">Sign Up</button></li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div id="defaultTabBar" class="bar tab linearLayout horizontal fixed">
                <a href="index.php#" id="listTab" class="tab active">
                    <span id="" class="icon list"></span> List
                </a>
                <!--<a href="#" id="homeTab" class="tab">-->
                    <!--<span id="" class="icon home"></span> Home-->
                <!--</a>-->
                <!--<a href="#" id="searchTab" class="tab">-->
                    <!--<span id="" class="icon search"></span> Search-->
                <!--</a>-->
                <!--<a href="#" id="mediaTab" class="tab">-->
                    <!--<span id="" class="icon media"></span> Media-->
                <!--</a>-->
                <a href="index.php#" id="userTab" class="tab">
                    <span id="" class="icon user"></span> My Account
                    <span id="jobAlertBadge" class="badge">3</span>
                </a>
            </div>
        </div>

    </div>
</body>
</html>
