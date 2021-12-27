var form = document.getElementById('form')
//taken from : https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_forms_through_JavaScript
//sends song data to server to be added to json file
function sendData(song){
  const XHR = new XMLHttpRequest();
  //wait for response from server
  //then alert of success or failure
  XHR.addEventListener("load", function(event){
    console.log("Sending ", song , " TO server");
    alert("Data Submitted")
    form['submit'].disabled = false
  })
  XHR.addEventListener("error", function(event){
    alert("There was an error , contact Justin so he can fix it")
    form['submit'].disabled = false
  })
  XHR.open("POST", "http://ec2-3-88-169-211.compute-1.amazonaws.com:3000/directory")
  XHR.setRequestHeader('Content-Type','application/json')
  XHR.send(JSON.stringify(song))
}
function copySong (){
  //FormData object converts html form to key value pairs
  //name: data
  let song = {
    title: form['title'].value,
    color: form['color'].value,
    url : form['url'].value,
    app: 'phishPizza',
    method: 'add'
  }
  sendData(song)
}
form.addEventListener('submit', function(event){
  //prevent html from changing the page on submit
  event.preventDefault()
  copySong()
  alert("Song Submitted!")
  form.reset()
})
