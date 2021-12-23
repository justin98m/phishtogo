function addListener(){
  var deleteButton = document.getElementsByClassName('delete')
  var songSibling
  for (var i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", function(event){
    songSibling = this.nextSibling
    if(confirm("Kaila, are you sure you want to delete '"+songSibling.innerText + "'?")){
      deleteSongClient(songSibling,this)
      deleteSongServer(songSibling)
      }
    })
  }
}
function deleteSongClient(song,deleteButton){
    song.remove()
    deleteButton.remove()
}
function deleteSongServer(song){
  song = {
    title : song.innerText,
    url: String(song.firstChild.href).replace(/\s/g, ""),
    app: "phishPizza",
    method: "delete"
  }
  const XHR = new XMLHttpRequest();
  console.log("deleting ", song.title, song.url , " from localhost");
  //wait for response from server
  //then alert of success or failure
  XHR.addEventListener("load", function(event){
    alert("Data Submitted")
  })
  XHR.addEventListener("error", function(event){
    alert("There was an error , contact Justin so he can fix it")

  })
  XHR.open("POST", "http://localhost:3000/directory")
  XHR.setRequestHeader('Content-Type','application/json')
  XHR.send(JSON.stringify(song))
}

export default addListener
