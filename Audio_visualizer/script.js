// let audio = new Audio("national_anthem.ogg");
const container = document.getElementById("container");
/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("audio_visualizer_canvas");
const file = document.getElementById("fileUpload");

const ctx = /** @type {CanvasRenderingContext2D} */ canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let audioSource;
let analyzer;
let audio = document.getElementById("audio_1");
audio.src = "national_anthem.ogg";

const colors = [
  "white",
  "blue",
  "green",
  "gray",
  "purple",
  "red",
  "orange",
  "pink",
  "white",
  "blue",
  "green",
  "gray",
  "purple",
  "red",
  "orange",
  "pink",
  "white",
  "blue",
  "green",
  "gray",
  "purple",
  "red",
  "orange",
  "pink",
  "white",
  "blue",
  "green",
  "gray",
  "purple",
  "red",
  "orange",
  "pink",
];

container.addEventListener("click", function () {
  // let audio = new Audio("national_anthem.ogg");
  // audio.src = "Aashayein.mp3";
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  console.log(audioCtx);
  audio.play();
  audioSource = audioCtx.createMediaElementSource(audio);
  analyzer = audioCtx.createAnalyser();
  audioSource.connect(analyzer);
  analyzer.connect(audioCtx.destination);
  analyzer.fftSize = 1024;
  const bufferLength = analyzer.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  // const barWidth = canvas.width / 2 / bufferLength;
  const barWidth = 15;
  let barHeight;
  let x;

  function animate() {
    x = 0;
    // meter++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    analyzer.getByteFrequencyData(dataArray);
    drawCurveVisualizer(bufferLength, x, barWidth, barHeight, dataArray);
    // drawBarVisualizer(bufferLength, x, barWidth, barHeight, dataArray);
    requestAnimationFrame(animate);
  }
  animate();
});

file.onchange = function () {
  const files = this.files;
  const audio = document.getElementById("audio_1");
  audio.src = URL.createObjectURL(files[0]);
  audio.load();

  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  console.log(audioCtx);
  audio.play();
  audioSource = audioCtx.createMediaElementSource(audio);
  analyzer = audioCtx.createAnalyser();
  audioSource.connect(analyzer);
  analyzer.connect(audioCtx.destination);
  analyzer.fftSize = 1024;
  const bufferLength = analyzer.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  // const barWidth = canvas.width / 2 / bufferLength;
  const barWidth = 15;
  let barHeight;
  let x;

  function animate() {
    x = 0;
    // meter++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    analyzer.getByteFrequencyData(dataArray);
    drawCurveVisualizer(bufferLength, x, barWidth, barHeight, dataArray);
    // drawBarVisualizer(bufferLength, x, barWidth, barHeight, dataArray);
    requestAnimationFrame(animate);
  }
  animate();
};

function drawBarVisualizer(bufferLength, x, barWidth, barHeight, dataArray) {
  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i] * 1.5;
    let val = Math.floor(i / colors.length);
    let color =
      i > colors.length ? colors[i - colors.length * val - 1] : colors[i];
    ctx.fillStyle = color;
    // let red = (i * barHeight) / 20,
    //   green = i / 2,
    //   blue = barHeight;
    // ctx.fillStyle = `rgb(${red},${green},${blue})`;
    ctx.fillRect(
      canvas.width / 2 - x,
      canvas.height - barHeight,
      barWidth,
      barHeight
    );
    ctx.fillRect(
      canvas.width / 2 - x,
      canvas.height - barHeight - 20 * (barHeight * 0.01),
      barWidth,
      4
    );
    x += barWidth;
  }
  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i] * 2;
    let val = Math.floor(i / colors.length);
    let color =
      i > colors.length ? colors[i - colors.length * val - 1] : colors[i];
    ctx.fillStyle = color;
    // let red = (i * barHeight) / 20,
    //   green = i / 2,
    //   blue = barHeight;
    // ctx.fillStyle = `rgb(${red},${green},${blue})`;
    ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
    ctx.fillRect(
      x,
      canvas.height - barHeight - 20 * (barHeight * 0.01),
      barWidth,
      4
    );
    x += barWidth;
  }
}

function drawCurveVisualizer(bufferLength, x, barWidth, barHeight, dataArray) {
  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i] * 1.5;
    ctx.save();
    ctx.translate(canvas.width * 0.5, canvas.height * 0.5);
    // ctx.rotate(i * 4.184);
    ctx.rotate((i * (Math.PI * 10)) / bufferLength);
    const hue = i * 0.3;
    ctx.fillStyle = `hsl(${hue},100%,${barHeight / 3}%)`;
    ctx.fillRect(0, 0, barWidth, barHeight);
    x += barWidth;
    ctx.restore();
  }
}

window.onresize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};
