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