let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://zivuch.github.io/data.json');

xhr.responseType = 'json';

xhr.send();

xhr.onload = function() {
    if (xhr.status != 200) {
        alert("Error")
      // analyze HTTP status of the response
      // e.g. 404: Not Found
      // console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    } else { 
        alert("Process successfully completed")
        // show the result
      // response is the server response
      // console.log(`Done, got ${xhr.response.length} bytes`);
      console.log(xhr.response);
    }
  };

  xhr.onprogress = function(event) {
    if (event.lengthComputable) {
      // console.log(`Received ${event.loaded} of ${event.total} bytes`);
    } else {
      // console.log(`Received ${event.loaded} bytes`); // no Content-Length
    }
  };