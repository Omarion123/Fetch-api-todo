console.log("who is king?");
function requestNew() {
  // Fetching the array
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function (response) {
      return response.json();
    })
    // Displaying the json data into my div
    .then((response) => {
      console.log(response);
    });
}
