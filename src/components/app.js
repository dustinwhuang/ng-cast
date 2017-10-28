angular.module('video-player')

.component('app', {
  controller: function(youTube, twitch) {
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    // this.service = 'twitch';

    this.selectVideo = index => {
      this.currentVideo = this.videos[index];
    };

    this.searchResults = data => {
      this.videos = data;
      this.currentVideo = data[0];
    };

    this.changeService = () => {
      if (this.service === 'youTube') {
        youTube.search({query: 'angular.js', max: 5, key: window.YOUTUBE_API_KEY}, this.searchResults);
      }
      if (this.service === 'twitch') {
        twitch.search({query: 'test', key: window.TWITCH_API_KEY}, this.searchResults);
      }
    };

    if (this.service === 'youTube') {
      youTube.search({query: 'angular.js', max: 5, key: window.YOUTUBE_API_KEY}, this.searchResults);
    }
    if (this.service === 'twitch') {
      twitch.search({query: 'test', key: window.TWITCH_API_KEY}, this.searchResults);
    }
  },

  templateUrl: 'src/templates/app.html'
});
