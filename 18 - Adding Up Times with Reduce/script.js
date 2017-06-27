// don't forget to turn the nodeList into an array
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
const totalTime = document.querySelector('.total');

const seconds = timeNodes
  .map(timeNode => timeNode.dataset.time)
  .map(timeCode => {
    const [mins,
      secs] = timeCode
      .split(':')
      .map(parseFloat);
    return (mins * 60) + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds); // total seconds 17938

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600); // user `Math.floor` to remove decimal point
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

// console.log(totalTime);
totalTime.innerHTML = `<span>Total time <b>${hours}</b>:<b>${mins}</b>:<b>${secondsLeft}</span>`;

console.log(`total seconds ${seconds}`)
console.log(`hours: ${hours}, mins: ${mins}, seconds: ${secondsLeft}`);
console.log(seconds);