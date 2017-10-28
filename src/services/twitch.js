angular.module('video-player')
.service('twitch', function($http) {
  this.search = (query, callback) => {
    $http({
      url: 'https://api.twitch.tv/kraken/search/streams',
      headers: {
        'Client-ID': window.TWITCH_API_KEY
      },
      params: {
        query: query ? query : 'programming'
      }
    }).then(data => callback(data.data.streams))
      .catch(data => console.log('error:', data));
  }; 
});
