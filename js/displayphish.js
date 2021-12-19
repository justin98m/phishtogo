//add color to text
//Default color to text color and unclicke
//clicking link opens new tab
//cors fix in firefox
//https://testingfreak.com/how-to-fix-cross-origin-request-security-cors-error-in-firefox-chrome-and-ie/
import "./deletephish.js"
let requestUrl = "../datajson/data.json"
let request = new XMLHttpRequest()
let songList = document.getElementById("streamList")
console.log("Songs: ", songList);
request.open('Get',requestUrl)
request.responseType = 'json'
request.send()
request.onload = function(){
const data = request.response
randomPhrase(data.phrase)
displaySongs(data.song)
}
let title = document.getElementById('phrase')
title.style = "color: white"
function displaySongs(songs){
  var temp, tempLink, tempColor
  for (var i = 0; i < songs.length; i++) {
      tempLink = document.createElement('a')
      tempLink.href = songs[i].url
      tempLink.style = "color : " + songs[i].color
      temp = document.createElement('li')
      temp.classList.add("song")
      console.log("temp: ", temp);
      songList.appendChild(temp)
      temp.appendChild(tempLink)
      tempLink.innerHTML = songs[i].title

  }
}
function randomPhrase(phrases){
  let index = Math.floor(Math.random() * (phrases.length))
  console.log("Size: ",phrases.length," Rando : ",index);
  title.innerHTML = phrases[index]
}
