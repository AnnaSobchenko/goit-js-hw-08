import Player from '@vimeo/player';
let throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
let currentTime = 0;

try {
  currentTime = Number(localStorage.getItem('videoplayer-current-time'));
} catch (error) {
  currentTime = 0;
}

    player.on('play', function() {
        console.log('played the video!');
    });
    player.on('timeupdate', throttle(function(data) {
        console.log('timeupdate');
        currentTime=localStorage.setItem( "videoplayer-current-time", data.seconds)
    }, 1000)
    );

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
player.setCurrentTime(Number(currentTime)).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});