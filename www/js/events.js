angular.module('app.resources.events', ['ngResource'])

    .factory('eventResource', function ($resource) {
        return $resource('/api/events', {}, {
            'get': {method: 'GET'},
            'add': {method: 'POST'}
        });
    });