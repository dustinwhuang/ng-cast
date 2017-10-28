angular.module('video-player')

.component('search', {
  bindings: {
    result: '<',
    service: '<'
  },
  
  controller: function(youTube, twitch) {
    this.search = query => {
      if (this.service === 'youTube') {
        this.debouncedSearch = _.debounce(youTube.search, 500);
        this.debouncedSearch({query: query, max: 5, key: window.YOUTUBE_API_KEY}, this.result);
      }
      if (this.service === 'twitch') {
        this.debouncedSearch = _.debounce(twitch.search, 500);
        this.debouncedSearch({query: query, key: window.TWITCH_API_KEY}, this.result);
      }
    };
  },
   
  templateUrl: 'src/templates/search.html'
});
