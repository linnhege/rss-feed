'use strict';

/**
 * @ngdoc function
 * @name rssFeedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rssFeedApp
 */

angular.module('rssFeedApp')
    .controller('MainCtrl', function($scope, $http) {

        function addStories(stories) {
            angular.forEach(stories, function(story){
                this.push(story);
            }, $scope.stories);
        }

        $scope.fetchFeed = function(feed, type, title) {
            type = type || 'rss';
            title = title || 'VG';
            feed = feed || 'www.vg.no/rss/feed/forsiden/';

            $scope.stories = [];

            var articles = [];

            var rssUrl =
                "https://query.yahooapis.com/v1/public/yql?q=" +
                "select%20*%20from%20xml%20where%20url%3D%22" +
                encodeURIComponent(feed) +
                "%22&format=json" +
                "&diagnostics=true" +
                "&callback=JSON_CALLBACK";

            $http.jsonp(rssUrl).
                success(function(data) {
                    $scope.title = title;

                    if(type === 'rss'){
                        articles = data.query.results.rss.channel.item;
                    }else if(type === 'feed'){
                        articles = data.query.results.feed.entry;
                    }
                    addStories(articles);
                }).
                error(function(data) {
                    console.error('Error fetching feed:', data);
                });
        };

        $scope.fetchFeed();
    });