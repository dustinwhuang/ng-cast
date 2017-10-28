angular.module('video-player')
.service('youTube', function($http) {
  this.search = (query, callback) => {
    $http({
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        q: query,
        key: window.YOUTUBE_API_KEY,
        maxResults: 5,
        videoEmbeddable: 'true',
        type: 'video'
      }
    }).then(data => callback(data.data.items))
      .catch(data => console.log('error:', data));
  };
});
