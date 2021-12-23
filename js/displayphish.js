//add color to text
//Default color to text color and unclicke
//clicking link opens new tab
//cors fix in firefox
//https://testingfreak.com/how-to-fix-cross-origin-request-security-cors-error-in-firefox-chrome-and-ie/
import addListener from "./deletephish.js"
let requestUrl = "../datajson/phishPizza.json"
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
  var tempRow, row, rowLink,tempLink, tempColor, deleteRow,tempDelete
  deleteRow = document.createElement('BUTTON')
  deleteRow.classList.add('delete')
  row = document.createElement('li')
  row.classList.add("song")
  rowLink = document.createElement('a')
  rowLink.target = "_blank"
  console.log('delete element: ', deleteRow);
  for (var i = 0; i < songs.length; i++) {
      tempLink = rowLink.cloneNode()
      tempDelete = deleteRow.cloneNode()
      tempDelete.innerHTML ='X'
      tempLink.href = songs[i].url
      tempLink.style = "color : " + songs[i].color
      tempRow = row.cloneNode()
      songList.appendChild(tempDelete)
      songList.appendChild(tempRow)
      tempRow.appendChild(tempLink)
      tempLink.innerHTML = songs[i].title
  }
  addListener()
}

function randomPhrase(phrases){
  let index = Math.floor(Math.random() * (phrases.length))
  console.log("Size: ",phrases.length," Rando : ",index);
  title.innerHTML = phrases[index]
}
