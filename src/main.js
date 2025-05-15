
// Alle DOM elementen

const searchbutton = document.getElementById('searchbutton');
const searchInput = document.getElementById('searchInput');
const statusFilter = document.getElementById('statusFilter');
const speciesFilter = document.getElementById('speciesFilter');
const genderFilter = document.getElementById('genderFilter');
const tableBody  = document.getElementById('table-body');
const cardContainer  = document.getElementById('cardContainer');
const favorietenContainer  = document.getElementById('favorietenContainer');
const geenMelding   = document.getElementById('geenMelding ');

// kaarten en favorieten

const scrollLinks = document.getElementById('scrollLinks');
const scrollRechts = document.getElementById('scrollRechts');
const favorietenLink = document.querySelector('.nav-menu .nav-link[href="#favorieten"]');

//API 

const apiBaseUrl = 'https://rickandmortyapi.com/api/character';
const pagesToFetch = 3;
let alleCharacters = [];

//Data ophalen van de API meerdere pagina's

async function fetchCharacters(){
  try {
    const urls = Array.from({length: pagesToFetch}, (_,i) => `${apiBaseUrl}?page=${i +1}`);
    const responses = await Promise.all(urls.map(url => fetch(url)));

    for (const res of responses) {
      if (!res.ok) throw new Error(`Fout bij ophalen (status: ${res.status})`)
    }

  const data = await Promise.all(responses.map(res => res.json()));
  return data.flatMap(page => page.results);

  } catch (err) {
    console.error('Fout bij ophalen: ', err);
    alert('Er is een fout opgetreden bij het ophalen van gegevens. ');
    return [];
  }
}

//Zoekfunctionaliteit

async function performSearch() {
  const name = searchInput.value.toLowerCase();
  const status = statusFilter.value;
  const species = speciesFilter.value;
  const gender = genderFilter.value;

  if (alleCharacters.length === 0){
    alleCharacters = await fetchCharacters();

  }
  const filtered = alleCharacters.filter(character => {
    const matchesName = character.name.toLowerCase().includes(name);
    const matchesStatus = status === '' || character.status === status;
    const matchesSpecies = species === '' || character.species === species;
    const matchesGender = gender === '' || character.gender === gender;
    return matchesName && matchesStatus && matchesSpecies && matchesGender;

  });
  renderTable(filtered);
}

//Toon de resultaten in de tabel

function renderTable(characters) {
  tableBody.innerHTML = '';

  if (characters.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="6">Geen resultaten gevonden</td></tr>';
    return; 
  }

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
}




/*
//Zoekbalk 
document.getElementById('searchbutton').addEventListener('click', () => {
  const name = document.getElementById('searchInput').value.toLowerCase();
  const status = document.getElementById('statusFilter').value;
  const species = document.getElementById('speciesFilter').value;
  const gender = document.getElementById('gender').value;

  const urls = [
    'https://rickandmortyapi.com/api/character?page=1',
    'https://rickandmortyapi.com/api/character?page=2',
    'https://rickandmortyapi.com/api/character?page=3'

  ];


      Promise.all(urls.map(url => fetch(url).then(res => res.json())))
      .then(results => {
        let characters = results.flatMap(data => data.results);
      
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
kaartweergave + Favorieten met sterretje 
const cardContainer = document.getElementById('cardContainer');
const favorietenContainer = document.getElementById('favorietenContainer');
const geenMelding = document.getElementById('geenFavorieten');

let alleCharacters = [];


  const urls = [
    'https://rickandmortyapi.com/api/character?page=1',
    'https://rickandmortyapi.com/api/character?page=2',
    'https://rickandmortyapi.com/api/character?page=3'

  ];

  Promise.all(urls.map(url => fetch(url).then(res => res.json())))
  .then(results => {
     alleCharacters = results.flatMap(data => data.results);
    toonAlleKaarten();
  })
  .catch(error => console.error('Fout bij ophalen data:', error));

// Toon alle kaarten in scrollbare container
function toonAlleKaarten() {
  cardContainer.innerHTML = '';
  alleCharacters.forEach(character => {
    const kaart = maakKaart(character);
    cardContainer.appendChild(kaart);
  });
  //observer activeren
  observeerFavorietKnoppen();
}

// Maak een kaartje met sterknop
function maakKaart(character) {
  const card = document.createElement('div');
  card.classList.add('card');

  const isFav = isFavorited(character.id);

  card.innerHTML = `
    <img src="${character.image}" alt="${character.name}">
    <h3>${character.name}</h3>
    <p>${character.species} - ${character.status}</p>
    <button class="star-btn ${isFav ? 'favoriet' : ''}" data-id="${character.id}">
      ★
    </button>
  `;

  const starBtn = card.querySelector('.star-btn');
  starBtn.addEventListener('click', () => toggleFavorite(character.id, starBtn));

  return card;
}

// Check of ID in localStorage staat
function isFavorited(id) {
  const favs = JSON.parse(localStorage.getItem('favorites')) || [];
  return favs.includes(id);
}

// Voeg toe of verwijder uit favorieten
function toggleFavorite(id, button) {
  let favs = JSON.parse(localStorage.getItem('favorites')) || [];

  if (favs.includes(id)) {
    favs = favs.filter(favId => favId !== id);
    button.classList.remove('favoriet');
  } else {
    favs.push(id);
    button.classList.add('favoriet');
  }

  localStorage.setItem('favorites', JSON.stringify(favs));
}

// Toont favorieten (bij klikken in menu)
function laadFavorieten() {
  favorietenContainer.innerHTML = '';

  const favs = JSON.parse(localStorage.getItem('favorites')) || [];

  if (favs.length === 0) {
    geenMelding.style.display = 'block';
    return;
  }

  geenMelding.style.display = 'none';

  fetch(`https://rickandmortyapi.com/api/character/${favs.join(',')}`)
    .then(res => res.json())
    .then(data => {
      const favoritesArray = Array.isArray(data) ? data : [data];

      favoritesArray.forEach(character => {
        const kaart = maakKaart(character);
        favorietenContainer.appendChild(kaart);
      });
    });
}

// Scrollfunctionaliteit kaartjes
document.getElementById('scrollLinks').addEventListener('click', () => {
  cardContainer.scrollBy({ left: -300, behavior: 'smooth' });
});

document.getElementById('scrollRechts').addEventListener('click', () => {
  cardContainer.scrollBy({ left: 300, behavior: 'smooth' });
});

// Navigatie-link naar favorieten
document.querySelector('.nav-menu .nav-link[href="#favorieten"]').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('favorieten').scrollIntoView({ behavior: 'smooth' });
  laadFavorieten();
});




//OBSERVER API

// Observer: detecteer als een kaart 'favoriet' wordt in de console
const kaartObserver = new MutationObserver((mutaties) => {
  mutaties.forEach((mutatie) => {
    if (mutatie.type === 'attributes' && mutatie.attributeName === 'class') {
      const knop = mutatie.target;
      const id = knop.getAttribute('data-id');
      const isFavoriet = knop.classList.contains('favoriet');
      console.log(`Kaart ${id} is ${isFavoriet ? 'toegevoegd aan' : 'verwijderd uit'} favorieten.`);
    }
  });
});

function observeerFavorietKnoppen() {
  const knoppen = document.querySelectorAll('.star-btn');
  knoppen.forEach(knop => {
    kaartObserver.observe(knop, { attributes: true });
  });
}
*/