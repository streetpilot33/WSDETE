// Fetch and display 6 dog images
document.getElementById('fetchButton').addEventListener('click', function() {
    const imageContainer = document.getElementById('dogImages');
    imageContainer.innerHTML = ''; // Clear any existing images
  
    // Fetch 6 random dog images
    for (let i = 0; i < 6; i++) {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
          const img = document.createElement('img');
          img.src = data.message;
          img.alt = 'Dog Image';
          img.classList.add('w-full', 'h-72', 'object-cover', 'rounded-lg', 'shadow-lg', 'mb-4');
          imageContainer.appendChild(img);
        })
        .catch(error => console.error('Error fetching dog image:', error));
    }
  });
  
  // Display breeds.json data in a table
  fetch('breeds.json')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('breedTableBody');
      data.forEach(breed => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td class="border px-4 py-2">${breed.breedId}</td>
          <td class="border px-4 py-2">${breed.breedName}</td>
          <td class="border px-4 py-2">${breed.description}</td>
          <td class="border px-4 py-2">${breed.size}</td>
          <td class="border px-4 py-2">${breed.lifespan}</td>
          <td class="border px-4 py-2">${breed.origin}</td>
        `;
        tableBody.appendChild(row);
      });
    })
    .catch(error => console.error('Error fetching breeds data:', error));
  
  // Form validation for Sign-Up page
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (!name || !email || !password) {
      alert('All fields are required.');
      return;
    }
  
    alert('Sign up successful!');
  });
  