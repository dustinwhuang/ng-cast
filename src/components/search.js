angular.module('video-player')

.component('search', {
  bindings: {
    result: '<'
  },
  
  controller: function(youTube) {
    this.search = query => {
      youTube.search({query: query, max: 5, key: window.YOUTUBE_API_KEY}, this.result);
    };
  },
   
  templateUrl: 'src/templates/search.html'
});
