import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const getCurrentTimeVideo = localStorage.getItem("videoplayer-current-time");
const parsedFeedBackForm = JSON.parse(getCurrentTimeVideo);

const onPlay = function(data) {
    console.log(data)
    const currentTimeVideo = {          //TimeUppdate
        duration: data.duration,
        percent: data.percent,
        seconds: data.seconds,
      };     
    
        localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTimeVideo));
    
};

let currentTime = parsedFeedBackForm.seconds;
console.log(currentTime);

player.on('play', throttle(onPlay,1000));    

player.setCurrentTime(currentTime).then(function(seconds) {
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

