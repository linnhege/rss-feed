"use strict";angular.module("rssFeedApp",["ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("rssFeedApp").controller("MainCtrl",["$scope","$http",function(a,b){function c(b){angular.forEach(b,function(a){this.push(a)},a.stories)}a.fetchFeed=function(d,e,f){e=e||"rss",f=f||"VG",d=d||"www.vg.no/rss/feed/forsiden/",a.stories=[];var g=[],h="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D%22"+encodeURIComponent(d)+"%22&format=json&diagnostics=true&callback=JSON_CALLBACK";b.jsonp(h).success(function(b){a.title=f,"rss"===e?g=b.query.results.rss.channel.item:"feed"===e&&(g=b.query.results.feed.entry),c(g)}).error(function(a){console.error("Error fetching feed:",a)})},a.fetchFeed()}]),angular.module("rssFeedApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);