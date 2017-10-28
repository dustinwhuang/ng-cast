angular.module('video-player')

.component('app', {
  controller: function(youTube, twitch) {
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    this.services = ['twitch', 'youTube'];

    this.selectVideo = index => {
      this.currentVideo = this.videos[index];
    };

    this.searchResults = data => {
      this.videos = data;
      this.currentVideo = data[0];
    };

    this.changeService = () => {
      let query = angular.element(document).find('input').val();
      if (this.service === 'youTube') {
        youTube.search(query, this.searchResults);
      }
      if (this.service === 'twitch') {
        twitch.search(query, this.searchResults);
      }
    };

    // youTube.search('angular.js', this.searchResults);
    twitch.search('programming', this.searchResults);
  },

  templateUrl: 'src/templates/app.html'
});
