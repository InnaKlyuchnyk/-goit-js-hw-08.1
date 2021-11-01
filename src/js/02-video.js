import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(updateVideoTime, 1000));

function updateVideoTime(event) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(event));
}

const time = localStorage.getItem(STORAGE_KEY);
const parsedTime = JSON.parse(time);
if (parsedTime === null) {
  return;
}
const timeForStartVideo = parsedTime.seconds;

player
  .setCurrentTime(timeForStartVideo)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
