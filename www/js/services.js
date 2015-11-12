angular.module('starter.services', [])

    .factory('Chats', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var chats = [{
            id: 0,
            name: 'Ben Sparrow',
            lastText: 'You on your way?',
            face: 'img/ben.png'
        }, {
            id: 1,
            name: 'Max Lynx',
            lastText: 'Hey, it\'s me',
            face: 'img/max.png'
        }, {
            id: 2,
            name: 'Adam Bradleyson',
            lastText: 'I should buy a boat',
            face: 'img/adam.jpg'
        }, {
            id: 3,
            name: 'Perry Governor',
            lastText: 'Look at my mukluks!',
            face: 'img/perry.png'
        }, {
            id: 4,
            name: 'Mike Harrington',
            lastText: 'This is wicked good ice cream.',
            face: 'img/mike.png'
        }];

        return {
            all: function () {
                return chats;
            },
            remove: function (chat) {
                chats.splice(chats.indexOf(chat), 1);
            },
            get: function (chatId) {
                for (var i = 0; i < chats.length; i++) {
                    if (chats[i].id === parseInt(chatId)) {
                        return chats[i];
                    }
                }
                return null;
            }
        };
    })
    .factory('Events', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var events = [{
            id: 0,
            name: 'Soiree league of legends',
            description: 'Evenement league of legends',
            telephone: '06666666666',
            adress: 'bordeaux',
            date_debut: '25/10/2015',
            date_fin: '26/10/2015',
            image:'img/League_Of_Legends.jpg'
        }, {
            id: 1,
            name: 'Soiree league of legends',
            description: 'Evenement league of legends',
            telephone: '06666666666',
            adress: 'bordeaux',
            date_debut: '25/10/2015',
            date_fin: '26/10/2015',
            image:'img/League_Of_Legends.jpg'
        }, {
            id: 2,
            name: 'Soiree Magic',
            description: 'Evenement Magic',
            telephone: '06666666666',
            adress: 'Bordeaux',
            date_debut: '25/10/2015',
            date_fin: '26/10/2015',
            image:'img/Magic the gathering.jpg'
        }, {
            id: 3,
            name: 'Soiree CSGO',
            description: 'LAN CSGO',
            telephone: '06666666666',
            adress: 'Bordeaux',
            date_debut: '25/10/2015',
            date_fin: '26/10/2015',
            image:'img/CSGO.jpg'
        }, {
            id: 4,
            name: 'Soiree league of legends',
            description: 'Evenement league of legends',
            telephone: '06666666666',
            adress: 'bordeaux',
            date_debut: '25/10/2015',
            date_fin: '26/10/2015',
            image:'img/League_Of_Legends.jpg'
        }];

        return {
            all: function () {
                return events;
            },
            get: function (eventId) {
                for (var i = 0; i < events.length; i++) {
                    if (events[i].id === parseInt(eventId)) {
                        return events[i];
                    }
                }
                return null;
            }
        };
    });
