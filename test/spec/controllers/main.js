'use strict';

describe('Controller: MainCtrl', function() {
    // load the controller's module
    beforeEach(module('rssFeedApp', 'mockedFeed'));

    var MainCtrl, scope, mockedFeed, httpBackend;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, $httpBackend, defaultJSON) {
        // Set up the expected feed data
        httpBackend = $httpBackend;
        $httpBackend.whenJSONP(/query.yahooapis.com/).respond(defaultJSON);

        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should return article title', function() {
        httpBackend.flush();
        expect(scope.stories[0].title).toBe('Bilfører siktet for uaktsomt drap');
    });
});