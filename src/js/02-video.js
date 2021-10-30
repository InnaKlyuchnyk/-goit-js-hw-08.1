import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', event => {
  console.log('videoplayer-current-time', event.seconds);
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player
  .setCurrentTime(0)
  .then(function (seconds) {
    console.log(seconds);
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
