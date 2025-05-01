//Zoekbalk 
document.getElementById('searchbutton').addEventListener('click', () => {
  const name = document.getElementById('searchInput').value.toLowerCase();
  const status = document.getElementById('statusFilter').value;
  const species = document.getElementById('speciesFilter').value;
  const gender = document.getElementById('Gender').value;
//Data ophalen van de API
  fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      let characters = data.results;

      // Kunnen Filteren 
      characters = characters.filter(character => {
        const matchesName = character.name.toLowerCase().includes(name);
        const matchesStatus = status === '' || character.status === status;
        const matchesSpecies = species === '' || character.species === species;
        const matchesGender = gender === '' || character.gender === gender;

        return matchesName && matchesStatus && matchesSpecies && matchesGender;
      });

      // Tabel leegmaken en nieuwe resultaten tonen
      const tableBody = document.getElementById('table-body');
      tableBody.innerHTML = '';

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
});

window.addEventListener('load', () => {
  document.getElementById('searchbutton').click();
});

//kaartweergave
const cardContainer = document.getElementById('cardContainer');

fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    const characters = data.results;

    characters.forEach(character => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h3>${character.name}</h3>
        <p>${character.species} - ${character.status}</p>
      `;

      cardContainer.appendChild(card);
    });
  });

// Scroll functionaliteit
document.getElementById('scrollLinks').addEventListener('click', () => {
  cardContainer.scrollBy({ left: -300, behavior: 'smooth' });
});

document.getElementById('scrollRechts').addEventListener('click', () => {
  cardContainer.scrollBy({ left: 300, behavior: 'smooth' });
});


