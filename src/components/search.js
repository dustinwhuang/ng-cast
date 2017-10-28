angular.module('video-player')

.component('search', {
  bindings: {
    result: '<'
  },
  
  controller: function(youTube) {
    this.debouncedSearch = _.debounce(youTube.search, 500);

    this.search = query => {
      this.debouncedSearch({query: query, max: 5, key: window.YOUTUBE_API_KEY}, this.result);
    };
  },
   
  templateUrl: 'src/templates/search.html'
});
