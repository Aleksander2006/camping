
fetch('http://localhost:3000/reserveringen')
  .then(response => response.json())
  .then(data => {
    // Gebruik de data om elementen op je website te maken
    console.log(data);
  })
  .catch(error => console.error('Error:', error));
