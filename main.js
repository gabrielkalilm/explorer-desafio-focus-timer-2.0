/* buttons*/
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');

const treeButton = document.getElementById('tree');
const rainButton = document.getElementById('rain');
const coffeShopButton = document.getElementById('coffeShop');
const fireButton = document.getElementById('fire');

/* clock */
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

/* songs */
const treeSong = new Audio('./assets/tree.wav')
const rainSong = new Audio('./assets/rain.wav')
const coffeShopSong = new Audio('./assets/coffeShop.wav')
const fireSong = new Audio('./assets/fire.wav')


/* mood events */

treeButton.addEventListener('click', (event) =>{
  rainButton.classList.remove('selected')
  coffeShopButton.classList.remove('selected')
  fireButton.classList.remove('selected')
  rainSong.pause()
  coffeShopSong.pause()
  fireSong.pause()

  treeButton.classList.toggle('selected')
    if(treeButton.classList.contains('selected')){
      treeSong.play()
      return
    }
  treeSong.pause()
})

rainButton.addEventListener('click', (event) =>{
  treeButton.classList.remove('selected')
  coffeShopButton.classList.remove('selected')
  fireButton.classList.remove('selected')
  treeSong.pause()
  coffeShopSong.pause()
  fireSong.pause()

  rainButton.classList.toggle('selected')
  if(rainButton.classList.contains('selected')){
    rainSong.play()
    return
  }
  rainSong.pause()
})

coffeShopButton.addEventListener('click', (event) =>{
  treeButton.classList.remove('selected')
  rainButton.classList.remove('selected')
  fireButton.classList.remove('selected')
  treeSong.pause()
  rainSong.pause()
  fireSong.pause()

  coffeShopButton.classList.toggle('selected')
  if(coffeShopButton.classList.contains('selected')){
    coffeShopSong.play()
    return
  }
  coffeShopSong.pause()
})

fireButton.addEventListener('click', (event) =>{
  treeButton.classList.remove('selected')
  rainButton.classList.remove('selected')
  coffeShopButton.classList.remove('selected')
  treeSong.pause()
  rainSong.pause()
  coffeShopSong.pause()

  fireButton.classList.toggle('selected')
  if(fireButton.classList.contains('selected')){
    fireSong.play()
    return
  }
  fireSong.pause()
})

/* áudio loop */

treeSong.loop = true 
rainSong.loop = true 
coffeShopSong.loop = true 
fireSong.loop = true 

/* timer events */

function playTimer () {
  playButton.classList.toggle('isRunning')
  pauseButton.classList.toggle('isRunning')
  if(playButton.classList.contains('isRunning')){
    countdown()
    return
  }
}

playButton.addEventListener('click', (event) =>{
  playTimer()
})

function pauseTimer () {
  playButton.classList.toggle('isRunning')
  pauseButton.classList.toggle('isRunning')
}

pauseButton.addEventListener('click', (event) =>{
  pauseTimer()
})

function pressStopButton() {
displayMin = 0
displaySec = 0
updateDisplay(displayMin, displaySec)
playButton.classList.remove('isRunning')
pauseButton.classList.add('isRunning')
}

stopButton.addEventListener('click', (event) =>{
  pressStopButton()
})

plusButton.addEventListener('click', (event) =>{
  displayMin = Number(displayMin) + 5
  updateDisplay(displayMin, displaySec)
})

minusButton.addEventListener('click', (event) =>{
  if(displayMin >= 5) 
  {displayMin = Number(displayMin) - 5
  updateDisplay(displayMin, displaySec)
  }
})

/* countDown*/
let countdownId = null

function countdown() {
  clearTimeout(countdownId)

  if(pauseButton.classList.contains('isRunning')){
    return
  }

  displayMin = Number(minutes.textContent)
  displaySec = Number(seconds.textContent)

  displaySec--

  if(displaySec < 0) {
    displaySec = 59
    displayMin--
  }

  if(displayMin < 0) {
    pressStopButton()
    return
  }
  
  updateDisplay(displayMin, displaySec)

  countdownId = setTimeout(() => countdown(), 1000)
}

/* updateDisplay */

let displayMin = 0
let displaySec = 5

function updateDisplay(displayMin, displaySec) {
  displayMin = displayMin ?? minutes.textContent
  displaySec = displaySec ?? seconds.textContent

  minutes.textContent = String(displayMin).padStart(2, "0")
  seconds.textContent = String(displaySec).padStart(2, "0")
}

updateDisplay(displayMin, displaySec)