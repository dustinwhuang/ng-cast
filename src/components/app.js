angular.module('video-player')

.component('app', {
  controller: function(youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];

    this.selectVideo = index => {
      this.currentVideo = this.videos[index];
    };

    this.searchResults = data => {
      this.videos = data;
      this.currentVideo = data[0];
    };

    youTube.search({query: 'angular.js', max: 5, key: window.YOUTUBE_API_KEY}, this.searchResults);
  },

  templateUrl: 'src/templates/app.html'
});
