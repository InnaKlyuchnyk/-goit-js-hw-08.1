import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

let currentTime = 0;

player.on('pause', event => {
  currentTime = event;
  console.log('videoplayer-current-time', currentTime);
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
