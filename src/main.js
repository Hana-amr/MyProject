//Data ophalen van de API

fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    const characters = data.results;
    const tableBody = document.getElementById('table-body');

    characters.forEach(character => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td><img src="${character.image}" alt="${character.name}" width="50"></td>
        <td>${character.name}</td>
        <td>${character.status}</td>
        <td>${character.species}</td>
        <td>${character.gender}</td>
        <td>${character.location.name}</td>
      `;

      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error('Fout bij ophalen data:', error));
