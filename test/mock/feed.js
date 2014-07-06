'use strict';

angular.module('mockedFeed', [])
    .value('defaultJSON', {
        "query":{
            "count":1,
            "created":"2014-07-03T11:10:26Z",
            "lang":"nb-no",
            "diagnostics":{
                "publiclyCallable":"true",
                "url":{
                    "execution-start-time":"0",
                    "execution-stop-time":"465",
                    "execution-time":"465",
                    "content":"http://www.vg.no/rss/feed/forsiden/"
                },
                "user-time":"466",
                "service-time":"465",
                "build-version":"0.2.2602"
            },
            "results":{
                "rss":{
                    "version":"2.0",
                    "vg":"http://www.vg.no/namespace",
                    "channel":{
                        "image":{
                            "title":"VG RSS",
                            "url":"http://static.vg.no/leonora/gfk/front/vglogo.gif",
                            "link":"http://www.vg.no"
                        },
                        "title":"VG RSS",
                        "ttl":"10",
                        "description":"VG RSS",
                        "link":"http://www.vg.no/rss/feed/forsiden/",
                        "lastBuildDate":"Thu, 03 Jul 2014 13:03:00 +0200",
                        "item":[
                            {
                                "title":"Bilfører siktet for uaktsomt drap",
                                "description":null,
                                "link":"http://www.vg.no/nyheter/innenriks/bilfoerer-siktet-for-uaktsomt-drap/a/23245859/",
                                "guid":"http://www.vg.no/a/23245859/",
                                "waplink":"http://www.vg.no/nyheter/innenriks/bilfoerer-siktet-for-uaktsomt-drap/a/23245859/",
                                "img":null,
                                "articleImg":null,
                                "body":null,
                                "pubDate":"Thu, 03 Jul 2014 12:23:16 +0200"
                            },
                            {
                                "title":"Servitører må betale når gjester stikker fra regningen",
                                "description":null,
                                "link":"http://www.vg.no/nyheter/innenriks/lo/servitoerer-maa-betale-naar-gjester-stikker-fra-regningen/a/23245820/",
                                "guid":"http://www.vg.no/a/23245820/",
                                "waplink":"http://www.vg.no/nyheter/innenriks/lo/servitoerer-maa-betale-naar-gjester-stikker-fra-regningen/a/23245820/",
                                "img":null,
                                "articleImg":null,
                                "body":null,
                                "pubDate":"Thu, 03 Jul 2014 11:56:06 +0200"
                            }
                        ]
                    }
                }
            }
        }
    });