var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");

var raw = "Hola mundo";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://webhook.site/ecba0a5e-7c78-482f-bfb9-2df5128666ed", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));