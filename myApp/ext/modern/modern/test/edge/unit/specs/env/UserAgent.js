Ext.require('Ext.env.UserAgent', function() {

describe("Ext.env.UserAgent", function() {
    var profiles = {
        Safari_502_Mac: {
            userAgent: 'Safari_5533.18.5Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_4; en-us) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5',
            expect: {
                browser: {
                    name: 'Safari',
                    flags: ['Safari', 'Safari5', 'Safari502', 'WebKit', 'WebKit533', 'WebKit533181'],
                    version: '5.0.2'
                },
                os: {
                    name: 'MacOS',
                    flags: ['MacOS', 'MacOS10', 'MacOS1064'],
                    version: '10.6.4'
                },
                device: 'Desktop'
            }
        },

        Chrome_70517_Mac: {
            userAgent: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_4; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Chrome/7.0.517.44 Safari/534.7',
            expect: {
                browser: {
                    name: 'Chrome',
                    flags: ['Chrome', 'Chrome7', 'Chrome7051744', 'WebKit', 'WebKit5347', 'WebKit534'],
                    version: '7.0.517.44'
                },
                os: {
                    name: 'MacOS',
                    flags: ['MacOS', 'MacOS10', 'MacOS1064'],
                    version: '10.6.4'
                },
                device: 'Desktop'
            }
        },

        Opera_980_Mac: {
            userAgent: 'Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.6.30 Version/10.63',
            expect: {
                browser: {
                    name: 'Opera',
                    flags: ['Opera', 'Opera9', 'Opera980', 'Presto', 'Presto2630', 'Presto2'],
                    version: '9.80'
                },
                os: {
                    name: 'MacOS',
                    flags: ['MacOS'],
                    version: ''
                },
                device: 'Desktop'
            }
        },

        IE_8_Win7: {
            userAgent: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; .NET CLR 3.5.30729)',
            expect: {
                browser: {
                    name: 'IE',
                    flags: ['IE', 'IE8', 'IE80', 'Trident', 'Trident4', 'Trident40'],
                    version: '8.0'
                },
                os: {
                    name: 'Windows',
                    flags: ['Windows', 'Windows6', 'Windows61'],
                    version: '6.1'
                },
                device: 'Desktop'
            }
        },

        IE_7_WinVista: {
            userAgent: 'Mozilla/5.0 (Windows; U; MSIE 7.0; Windows NT 6.0; en-US)',
            expect: {
                browser: {
                    name: 'IE',
                    flags: ['IE', 'IE7', 'IE70'],
                    version: '7.0'
                },
                os: {
                    name: 'Windows',
                    flags: ['Windows', 'Windows6', 'Windows60'],
                    version: '6.0'
                },
                device: 'Desktop'
            }
        },

        IE_61_WinXP: {
            userAgent: 'Mozilla/4.0 (compatible; MSIE 6.1; Windows XP)',
            expect: {
                browser: {
                    name: 'IE',
                    flags: ['IE', 'IE6', 'IE61'],
                    version: '6.1'
                },
                os: {
                    name: 'Windows',
                    flags: ['Windows'],
                    version: ''
                },
                device: 'Desktop'
            }
        },

        iPad_32: {
            userAgent: 'Mozilla/5.0(iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10',
            expect: {
                browser: {
                    name: 'Safari',
                    flags: ['Safari', 'Safari4', 'Safari404', 'WebKit', 'WebKit531', 'WebKit5312110'],
                    version: '4.0.4'
                },
                os: {
                    name: 'iOS',
                    flags: ['iOS', 'iOS3', 'iOS32'],
                    version: '3.2'
                },
                device: 'Tablet'
            }
        },

        iPad_43: {
            userAgent: 'Mozilla/5.0 (iPad; U; CPU OS 4_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8F190 Safari/6533.18.5',
            expect: {
                browser: {
                    name: 'Safari',
                    flags: ['Safari', 'Safari5', 'Safari502', 'WebKit', 'WebKit533', 'WebKit533179'],
                    version: '5.0.2'
                },
                os: {
                    name: 'iOS',
                    flags: ['iOS', 'iOS4', 'iOS43'],
                    version: '4.3'
                },
                device: 'Tablet'
            }
        },

        iPhone_31: {
            userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1_3 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7E18 Safari/528.16',
            expect: {
                browser: {
                    name: 'Safari',
                    flags: ['Safari', 'Safari4', 'Safari40', 'WebKit', 'WebKit528', 'WebKit52818'],
                    version: '4.0'
                },
                os: {
                    name: 'iOS',
                    flags: ['iOS', 'iOS3', 'iOS313'],
                    version: '3.1.3'
                },
                device: 'Phone'
            }
        },

        iPod_41: {
            userAgent: 'Mozilla/5.0 (iPod; U; CPU iPhone OS 4_1 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8B118 Safari/6531.22.7',
            expect: {
                browser: {
                    name: 'Safari',
                    flags: ['Safari', 'Safari4', 'Safari405', 'WebKit', 'WebKit532', 'WebKit5329'],
                    version: '4.0.5'
                },
                os: {
                    name: 'iOS',
                    flags: ['iOS', 'iOS4', 'iOS41'],
                    version: '4.1'
                },
                device: 'Phone'
            }
        },

        iPod_31: {
            userAgent: 'Mozilla/5.0 (iPod; U; CPU iPhone OS 3_1_3 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7E18 Safari/528.16',
            expect: {
                browser: {
                    name: 'Safari',
                    flags: ['Safari', 'Safari4', 'Safari40', 'WebKit', 'WebKit528', 'WebKit52818'],
                    version: '4.0'
                },
                os: {
                    name: 'iOS',
                    flags: ['iOS', 'iOS3', 'iOS313'],
                    version: '3.1.3'
                },
                device: 'Phone'
            }
        },

        Android_22_G2: {
            userAgent: ' Mozilla/5.0 (Linux; U; Android 2.2; en-us; T-Mobile G2 Build/ FRF91) AppleWebKit/533.1(KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
            expect: {
                browser: {
                    name: 'Safari',
                    flags: ['Safari', 'Safari4', 'Safari40', 'WebKit', 'WebKit533', 'WebKit5331'],
                    version: '4.0'
                },
                os: {
                    name: 'Android',
                    flags: ['Android', 'Android2', 'Android22'],
                    version: '2.2'
                },
                device: 'Phone'
            }
        },

        Android_22_Desire: {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 2.2; en-vn; Desire_A8181 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
            expect: {
                browser: {
                    name: 'Safari',
                    flags: ['Safari', 'Safari4', 'Safari40', 'WebKit', 'WebKit533', 'WebKit5331'],
                    version: '4.0'
                },
                os: {
                    name: 'Android',
                    flags: ['Android', 'Android2', 'Android22'],
                    version: '2.2'
                },
                device: 'Phone'
            }
        },

        Android_22_NexusOne: {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; Nexus One Build/ FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
            expect: {
                browser: {
                    name: 'Safari',
                    flags: ['Safari', 'Safari4', 'Safari40', 'WebKit', 'WebKit533', 'WebKit5331'],
                    version: '4.0'
                },
                os: {
                    name: 'Android',
                    flags: ['Android', 'Android2', 'Android22'],
                    version: '2.2'
                },
                device: 'Phone'
            }
        },

        Android_21_GalaxyS: {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 2.1-update1; fr-fr; GT-I9000 Build/ECLAIR) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17',
            expect: {
                browser: {
                    name: 'Safari',
                    flags: ['Safari', 'Safari4', 'Safari40', 'WebKit', 'WebKit530', 'WebKit53017'],
                    version: '4.0'
                },
                os: {
                    name: 'Android',
                    flags: ['Android', 'Android2', 'Android21'],
                    version: '2.1update1'
                },
                device: 'Phone'
            }
        },

        Android_21_Evo: {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Sprint APA9292KT Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko)',
            expect: {
                browser: {
                    name: 'Other',
                    flags: ['Other', 'WebKit', 'WebKit530', 'WebKit53017'],
                    version: ''
                },
                os: {
                    name: 'Android',
                    flags: ['Android', 'Android2', 'Android21'],
                    version: '2.1update1'
                },
                device: 'Phone'
            }
        },

        BlackBerry_Torch: {
            userAgent: 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en-US) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.246 Mobile Safari/534.1+',
            expect: {
                browser: {
                    name: 'Safari',
                    flags: ['WebKit', 'WebKit534', 'WebKit5341', 'Safari', 'Safari6', 'Safari600246'],
                    version: '6.0.0.246'
                },
                os: {
                    name: 'BlackBerry',
                    flags: ['BlackBerry', 'BlackBerry6', 'BlackBerry600246'],
                    version: '6.0.0.246'
                },
                device: 'Phone'
            }
        },

        RIM_Tablet_PlayBook: {
            userAgent: 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 1.0.0; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.7 Safari/534.11+',
            expect: {
                browser: {
                    name: 'Safari',
                    flags: ['WebKit', 'WebKit534', 'WebKit53411', 'Safari', 'Safari7', 'Safari7107'],
                    version: '7.1.0.7'
                },
                os: {
                    name: 'RIMTablet',
                    flags: ['RIMTablet', 'RIMTablet1', 'RIMTablet100'],
                    version: '1.0.0'
                },
                device: 'Tablet'
            }
        },

        BlackBerry_10_Alpha: {
            userAgent: 'Mozilla/5.0 (BlackBerry) AppleWebKit/536.2+ (KHTML, like Gecko) Version/10.0.4.188 Mobile Safari/536.2+',
            expect: {
                browser: {
                    name: 'Safari',
                    flags: ['WebKit', 'WebKit536', 'WebKit5362', 'Safari', 'Safari10', 'Safari1004188'],
                    version: '10.0.4.188'
                },
                os: {
                    name: 'BlackBerry',
                    flags: ['BlackBerry', 'BlackBerry10', 'BlackBerry1004188'],
                    version: '10.0.4.188'
                },
                device: 'Phone'
            }
        },

        "Android 3.0.1 / Samsung Galaxy Tab 10.1": {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 3.0.1; en-us; GT-P7510 Build/HRI83) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13',
            expect: {
                browser: {
                    name: 'Safari',
                    flags: ['WebKit', 'WebKit534', 'WebKit53413', 'Safari', 'Safari4', 'Safari40'],
                    version: '4.0'
                },
                os: {
                    name: 'Android',
                    flags: ['Android', 'Android3', 'Android301'],
                    version: '3.0.1'
                },
                device: 'Tablet'
            }
        },

        "Android 2.3.3 / Motorola Droid X": {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-us; DROIDX Build/4.5.1_57_DX5-26) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
            expect: {
                browser: {
                    name: 'Safari',
                    flags: ['WebKit', 'WebKit533', 'WebKit5331', 'Safari', 'Safari4', 'Safari40'],
                    version: '4.0'
                },
                os: {
                    name: 'Android',
                    flags: ['Android', 'Android2', 'Android233'],
                    version: '2.3.3'
                },
                device: 'Phone'
            }
        },

        "Bada 1.0 / Samsung Wave": {
            userAgent: 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8500/S8500XXJEE; U; Bada/1.0; en-us) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WVGA SMM-MMS/1.2.0 OPN-B',
            expect: {
                browser: {
                    name: 'Dolfin',
                    flags: ['WebKit', 'WebKit533', 'WebKit5331', 'Dolfin', 'Dolfin2', 'Dolfin20'],
                    version: '2.0'
                },
                os: {
                    name: 'Bada',
                    flags: ['Bada', 'Bada1', 'Bada10'],
                    version: '1.0'
                },
                device: 'Phone'
            }
        },

//        "HTC_Sensation_Z710e with OSX userAgent": {
//            userAgent: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; HTC_Sensation_Z710e; en-gb) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16',
//            expect: {
//                browser: {
//                    name: 'Safari',
//                    flags: ['Safari', 'Safari5', 'Safari50', 'WebKit', 'WebKit533', 'WebKit53316'],
//                    version: '5.0'
//                },
//                os: {
//                    name: 'Android',
//                    flags: ['Android', 'Android2', 'Android23'],
//                    version: '2.3'
//                },
//                device: 'Phone'
//            }
//        },
        "Amazon Kindle Fire - Faked Desktop": {
            userAgent: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.0.13.81_10003810) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true',
            expect: {
                browser: {
                    name: 'Silk',
                    flags: [ 'Silk', 'Silk1', 'Silk10138110003810', 'WebKit', 'WebKit533', 'WebKit53316'],
                    version: '1.0.13.81.10003810'
                },
                os: {
                    name: 'Android',
                    flags: ['Android', 'Android2', 'Android23'],
                    version: '2.3'
                },
                device: 'Tablet'
            }
        },
        "Amazon Kindle Fire HD": {
            userAgent: 'Mozilla/5.0 (Linux; U; en-us; KFTT Build/IML74K) AppleWebKit/535.19 (KHTML like Gecko) Silk/2.1 Safari/535.19 Silk-Accelerated=true',
            expect: {
                browser: {
                    name: 'Silk',
                    flags: [ 'Silk', 'Silk2', 'Silk21', 'WebKit', 'WebKit535', 'WebKit53519'],
                    version: '2.1'
                },
                os: {
                    name: 'Android',
                    flags: ['Android', 'Android4', 'Android404'],
                    version: '4.0.4'
                },
                device: 'Tablet'
            }
        },
        "Galaxy Nexus ICS Chrome": {
            userAgent: 'Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19',
            expect: {
                browser: {
                    name: 'Chrome',
                    flags: [ 'Chrome', 'Chrome18', 'Chrome1801025133', 'WebKit', 'WebKit535', 'WebKit53519'],
                    version: '18.0.1025.133'
                },
                os: {
                    name: 'Android',
                    flags: ['Android', 'Android4', 'Android404'],
                    version: '4.0.4'
                },
                device: 'Phone'
            }
        },
        "Galaxy Nexus JB": {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 4.1; en-us; Galaxy Nexus Build/JRN84D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
            expect: {
                browser: {
                    name: 'Safari',
                    flags: [ 'Safari', 'Safari4', 'Safari40', 'WebKit', 'WebKit534', 'WebKit53430'],
                    version: '4.0'
                },
                os: {
                    name: 'Android',
                    flags: ['Android', 'Android4', 'Android41'],
                    version: '4.1'
                },
                device: 'Phone'
            }
        },
        "Windows 8 - IE 10 - Touch": {
            userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Win64; x64; Trident/6.0; Touch)',
            expect: {
                browser: {
                    name: 'IE',
                    flags: [ 'IE', 'IE10', 'IE100', 'Trident', 'Trident6', 'Trident60'],
                    version: '10.0'
                },
                os: {
                    name: 'Windows',
                    flags: ['Windows', 'Windows6', 'Windows62'],
                    version: '6.2'
                },
                device: 'Tablet'
            }
        },
        "Windows Phone 8": {
            userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; Microsoft; Virtual)',
            expect: {
                browser: {
                    name: 'IE',
                    flags: [ 'IE', 'IE10', 'IE100', 'Trident', 'Trident6', 'Trident60'],
                    version: '10.0'
                },
                os: {
                    name: 'WindowsPhone',
                    flags: ['WindowsPhone', 'WindowsPhone8', 'WindowsPhone80'],
                    version: '8.0'
                },
                device: 'Phone'
            }
        }
    };

    Ext.Object.each(profiles, function(device, profile) {
        describe(device, function(){
            it("should match", function() {
                var env = new Ext.env.UserAgent(profile.userAgent),
                    browser = env.browser,
                    os = env.os,
                    flags = [],
                    expected, k;

                expected = profile.expect.browser;

                expect(browser.name).toBe(expected.name);
                expect(browser.version.toString()).toBe(expected.version);

                for (k in browser.is) {
                    if (!browser.is.hasOwnProperty(k)) {
                        continue;
                    }

                    if (browser.is[k] === true) {
                        flags.push(k);
                    }
                }

                expect(flags.sort()).toEqual(expected.flags.sort());

                expected = profile.expect.os;

                expect(os.name).toBe(expected.name);
                expect(os.version.toString()).toBe(expected.version);

                flags.length = 0;
                for (k in os.is) {
                    if (!os.is.hasOwnProperty(k)) {
                        continue;
                    }

                    if (os.is[k] === true) {
                        flags.push(k);
                    }
                }

                expect(flags.sort()).toEqual(expected.flags.sort());

                expect(env.device.type).toEqual(profile.expect.device);
            });
        });
    });
});

});


