angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    index: '<',
    onClick: '<',
    service: '<'
  },

  templateUrl: 'src/templates/videoListEntry.html'
});
