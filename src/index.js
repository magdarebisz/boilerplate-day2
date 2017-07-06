/* eslint-disable no-plusplus */

// 1 - get reference for audio html tag

// 4 - get reference for play html tag

// 5 - get reference for pause html tag

// 33 - get reference for prev html tag

// 34 - get reference for next html tag

// 14 - get reference for time info html tag

// 29* - get reference for title info html tag

// 29** - get reference for author html tag

// 17 - get reference for progress value html tag

// 39 - get reference for body

// 15 - radius for circle progress bar
const RADIUS = 198;
// 16 - circumference for circle progress bar
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
// 21 - declare songs folder path as string

// 31 - declare images folder path as string

// 24 declare empty songs array which supposed to hold objects

// 32 declare empty backgrounds array which supposed to hold strings

// 26 declare current song index which has to get ability to change

// 28 - assign path to source of the audio

// 27 - change current index function

// 2 - declare and invoke play function

// 3 - declare pause function

// 25 - load first function
const loadFirstSong = () => {
  if (true) { // check if there is 'mp3' in src attr
    // set up new index in to track current song index
    // assign path to audio.src
    // play !
  }
};

// 9 - declare show pause button and hide play function
const showPauseBtn = () => {
  // set opacity 1 for pause button
  // set opacity 0 for play button
};

// 10 - declare show play button and hide pause function

// 8 - declare play audio handler for both play and pause
const playAudio = () => {
  if (true) { // put here expression

  } else {

  }
};

// 38 - every time song changes set up new background

// 29 - update both title and author, get title and author from current playing
// song and assign them to title info and author info spans

// 40 - play prev song

// 37 - play next song on click function
const nextSong = () => {
  // use setup new index function to increase it by one
  // check using if statement if it is last song if so set up index to 0
  // invoke assign path function
  // play !
  // invoke update title and author
  // update background
};

// 42 - change song every time the last one ended

// 23 - extract title and author from path to the audio file
const getMetaSong = (path) => {
  const extractedInfo = path.replace(/.mp3|http:\/\/localhost:8080\/src\/assets\/audio\//gi, '');
  const index = extractedInfo.indexOf('-');
  const result = {
    author: extractedInfo.substring(0, index),
    title: extractedInfo.substring(index + 1),
  };
  return result;
};
// 13 - show time function
const showTime = () => {
  // extract duration, current time properties from audio object
  // update time info tag
};

// 14 - function that set up offset on progress
// const progress = (value) => {
//   const progressOffset = value / 100;
//   const dashoffset = CIRCUMFERENCE * (1 - progressOffset);
//   progressValue.style.strokeDashoffset = dashoffset;
// };

// 18 - start updating progress backgrounds
const updateProgress = () => {
  // get current propgress as percentage
  // invoke progress with progressPercentage as argument
};
// 19 - set up stroke dasharray as circumeference

// 22 - extract links/parse text to get array array of html tags

// 12 - declare timeupdate handler which should show time and update progress

// 6 -  start listening click events on play button

// 7 - start listening click events on pause button

// 35 - attach click listener to prev button

// 36 - attach click listener to next button

// 11 - start listening for timeupdate events

// 41 - auto play next song on 'ended' audio event

// 20

// fetch(songsFolder, {
//   method: 'get',
// }).then(response => response.text())
//   .then((text) => {
//     const links = extractLinks(text);
//     links.forEach((link) => {
//       if (link.href.indexOf('mp3') > -1) {
//         const metaSong = getMetaSong(link.href);
//         const path = link.href;
//         const result = Object.assign({}, path, metaSong);
//         // const result = { path, ...metaSong };
//         songs.push(result);
//       }
//     });
//     loadFirstSong();
//     updateTitleAndAuthor();
//     // invoke showTime
//   }).catch(error => console.error('error', error)); // eslint-disable-line no-console

// 30
// fetch(imagesFolder, {
//   method: 'get',
// }).then(response => response.text())
//   .then((text) => {
//     const links = extractLinks(text);
//     // extract links as shown prev
//     // iterate over links using forEach
//     // check if link.href has 'jpg'
//     // insert path to backgrounds array
//
//   }).catch(error => console.error('error', error)); // eslint-disable-line no-console
