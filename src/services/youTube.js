angular.module('video-player')
.service('youTube', function($http) {
  this.search = (params, callback) => {
    $http({
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        q: params.query,
        key: params.key,
        maxResults: params.max,
        videoEmbeddable: 'true',
        type: 'video'
      }
    }).then(data => callback(data.data.items))
      .catch(data => console.log('error:', data));
  };
});
