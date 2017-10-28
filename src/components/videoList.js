angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    onClick: '<',
    service: '<'
  },

  templateUrl: 'src/templates/videoList.html'
});
