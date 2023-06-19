function validateForm() {
 
  var fileInput = document.getElementById('fileip');
  var file = fileInput.files[0];

  if (file) {
    var fileName = file.name;
    var fileExtension = fileName.split('.').pop().toLowerCase();

    if (fileExtension === 'mp3') {

      console.log('File is valid.');
      // Perform any desired action for a valid MP3 file
      uploadFile(); // Calling the function here as we do do not have a separate button to confirm upload
    }
    else {
      // Invalid file type
      alert('Please upload an MP3 file.');

      // Reset the file input field
      fileInput.value = '';
    }
 
  }
  {
    var fileIn = document.getElementById('fileip');
    var uploadLabel = document.getElementById('upload-label');
  
    // Check if a file has been selected
    if (fileIn.files.length > 0) {
      uploadLabel.classList.add('uploaded');
      uploadLabel.innerHTML = 'File uploaded!';
    } else {
      uploadLabel.classList.remove('uploaded');
      uploadLabel.innerHTML = 'Upload file';
    }
  }
}
/*function convertToMp3() {
  var youtubeLink = document.getElementById("yt").value;

  // Check if the input is a valid YouTube link
  if (!youtubeLink.includes("youtube.com/watch?v=")) {
      alert("Invalid YouTube link");
      return;
  }

  // Extract the video ID from the YouTube link
  var videoId = youtubeLink.split("v=")[1];

  // Create an HTTP POST request to the server
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://your-server-url.com/convert", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  // Set up the data to be sent to the server
  var data = JSON.stringify({
      videoId: videoId
  });

  // Handle the response from the server
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          if (response.success) {
              alert("MP3 file conversion successful");
              // Perform any additional actions upon successful conversion
          } else {
              alert("MP3 file conversion failed");
              // Perform any error handling actions
          }
      }
  };

  // Send the request with the data to the server
  xhr.send(data);
}
var chords = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

        // Get the container element
        var chordContainer = document.getElementById('chordContainer');

        // Loop through the chords and create chord elements
        for (var i = 0; i < chords.length; i++) {
            // Create a new chord element
            var chordElement = document.createElement('div');
            chordElement.className = 'chord';
            chordElement.textContent = chords[i];

            // Append the chord element to the container
            chordContainer.appendChild(chordElement);
        }*/


function uploadFile() {
  var fileInput = document.getElementById('fileip');
  var file = fileInput.files[0];

  var formData = new FormData();
  formData.append('file', file);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      // Display the result on the webpage
      document.getElementById('result').innerText = response.result;
    }
  };
  xhr.send(formData);
}

function check() {
  var fileInput = document.getElementById('fileip');
  
  if (fileInput.files.length === 0) {
    alert('Please select a file before submitting.');
    return false;
  }
  
  // Continue with form submission
  return true;
}
