function search() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';

  fetch('travel.json') // replace with your actual file name if different
    .then(response => response.json())
    .then(data => {
      let found = false;

      // Search Countries
      data.countries.forEach(country => {
        if (country.name.toLowerCase().includes(input)) {
          found = true;
          country.cities.forEach(city => {
            resultDiv.innerHTML += `
              <div class="search-card">
                <h2>${city.name}</h2>
                <img src="${city.imageUrl}" alt="${city.name}" width="300">
                <p>${city.description}</p>
              </div>
            `;
          });
        }
      });

      // Search Temples
      data.temples.forEach(temple => {
        if (temple.name.toLowerCase().includes(input)) {
          found = true;
          resultDiv.innerHTML += `
            <div class="search-card">
              <h2>${temple.name}</h2>
              <img src="${temple.imageUrl}" alt="${temple.name}" width="300">
              <p>${temple.description}</p>
            </div>
          `;
        }
      });

      // Search Beaches
      data.beaches.forEach(beach => {
        if (beach.name.toLowerCase().includes(input)) {
          found = true;
          resultDiv.innerHTML += `
            <div class="search-card">
              <h2>${beach.name}</h2>
              <img src="${beach.imageUrl}" alt="${beach.name}" width="300">
              <p>${beach.description}</p>
            </div>
          `;
        }
      });

      if (!found) {
        resultDiv.innerHTML = "<p>No match found.</p>";
      }
    })
    .catch(error => {
      console.error('Error:', error);
      resultDiv.innerHTML = '<p>Something went wrong while fetching data.</p>';
    });
}

// Event Listener
const btnSearch = document.getElementById('searchBtn');
btnSearch.addEventListener('click', searchDestination);
function resetSearch() {
    document.getElementById("searchInput").value = "";

    
  }
  




