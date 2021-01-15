
// const images = [
//   'luke0.png',
//   'luke1.png',
//   'luke2.png',
//   'luke3.png',
// ];

let volumeMeter;
let $img;
let $scale;
let imgNumber;
let scale;

const IMAGE_COUNT = 6;
const IMAGE_NAME = 'lay';

const UPDATE_INTERVAL = 10; // milliseconds

$(document).ready(() => {

  $img = $(`#${IMAGE_NAME}`);
  $scale = $('#scale');

  // $($img).on('mousemove', function(ev){
  //   // console.log(ev.offsetX, ev.target.width);
  //   const xNorm = ev.offsetX / ev.target.width;
  //   let imgNumber = Math.floor(IMAGE_COUNT * xNorm);
  //   // console.log({imgNumber, xNorm});
  //   if(imgNumber < 0){
  //     imgNumber = 0;
  //   } else if(imgNumber > IMAGE_COUNT-1){
  //     imgNumber = IMAGE_COUNT-1;
  //   }
  //   $img.attr('src', `img/${IMAGE_NAME}${imgNumber}.png`);
  // });

  $('#start').click(startRec);

});



function VolumeMeter(context) {
  this.context = context;
  this.volume = 0.0;
  this.script = context.createScriptProcessor(2048, 1, 1);
  this.script.onaudioprocess = (event) => {
    const input = event.inputBuffer.getChannelData(0);
    var sum = 0.0;
    for (var i = 0; i < input.length; ++i) {
      sum += input[i] * input[i];
    }
    this.volume = Math.sqrt(sum / input.length);
  };
}

VolumeMeter.prototype.connectToSource = function(stream, callback) {
  try {
    this.mic = this.context.createMediaStreamSource(stream);
    this.mic.connect(this.script);
    this.script.connect(this.context.destination);
    if (typeof callback !== 'undefined') {
      callback(null);
    }
  } catch (e) {
    // what to do on error?
  }
};
VolumeMeter.prototype.stop = function() {
  this.mic.disconnect();
  this.script.disconnect();
};

const startRec = function () {
  const volumeValue = document.querySelector('#volume');
  try {
    window.audioContext = new AudioContext();
  } catch (e) {
    alert('Web Audio API not supported.');
  }
  const constraints = {
    audio: true,
    video: false
  };
  function handleSuccess(stream) {
    volumeMeter = new VolumeMeter(window.audioContext);
    volumeMeter.connectToSource(stream, function() {
      setInterval(() => {

        scale = parseInt( $scale.val() );
        const val = (volumeMeter.volume * scale).toFixed(3);
        // volumeValue.value = val;//volumeMeter.volume.toFixed(2);

        imgNumber = Math.floor(IMAGE_COUNT * val);
        // console.log({imgNumber, xNorm});
        if(imgNumber < 0){
          imgNumber = 0;
        } else if(imgNumber > IMAGE_COUNT-1){
          imgNumber = IMAGE_COUNT-1;
        }
        $img.attr('src', `img/${IMAGE_NAME}${imgNumber}.png`);


      }, UPDATE_INTERVAL);
    });
  }
  function handleError(error) {
    // what to do on error?
  }
  navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);
};
stopRec = function() {
  VolumeMeter.prototype.stop();
}
