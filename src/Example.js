var formdata = new FormData();
formdata.append("image", fileInput.files[0], "/C:/Users/HP/Desktop/img/owl.jpg");
formdata.append("userData", "{\n    \"title\":\"Owl\",\n    \"description\":\"Bird\"\n}");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("http://localhost:8080/movie/upload/image", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

