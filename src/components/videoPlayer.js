angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    video: '<',
    service: '<'
  },
  
  controller: function() {
    this.url = () => {
      if (this.service === 'youTube') {
        return this.video ? `https://www.youtube.com/embed/${this.video.id.videoId}` : '';
      }
      if (this.service === 'twitch') {
        return this.video ? `https://embed.twitch.tv/?layout=video&channel=${this.video.channel.name}` : '';
      }
    };
  },

  templateUrl: 'src/templates/videoPlayer.html'
});
