var googleAuth = 'https://accounts.google.com/o/oauth2/auth?scope=https://www.google.com/m8/feeds/&response_type=token&redirect_uri=http://redirector.cloudfoundry.com/&approval_prompt=force&client_id=206115911344.apps.googleusercontent.com';
var authWindow;

var menu = document.getElementById('importer-menu');
var gContacts = document.getElementById('google-contacts');

document.getElementById('browser').addEventListener(
  'click', function(evt) {    
        var sdcard = navigator.getDeviceStorage('sdcard');
 
var request = sdcard.get("contacts.ldif");
 
request.onsuccess = function () {
  var file = this.result;
  console.log("Get the file: " + file.name);
};
 
request.onerror = function () {
  console.warn("Unable to get the file: " + this.error);
};
    });

document.getElementById('importButton').addEventListener('click', function(evt) { /* TODO : the parse and import */ });
