angular.module('video-player')
.service('twitch', function($http) {
  this.search = (params, callback) => {
    $http({
      url: 'https://api.twitch.tv/kraken/search/streams',
      headers: {
        'Client-ID': params.key
      },
      params: {
        query: params.query
      }
    }).then(data => callback(data.data.streams))
      .catch(data => console.log('error:', data));
  }; 
});
