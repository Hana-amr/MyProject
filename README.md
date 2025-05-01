# Projectbeschrijving

Dit project is een interactieve single-page webapplicatie gebaseerd op de Ricky and Morty API. De applicatie toont personages op een visueel aantrekkelijke tabel en kaartweergave. Gebruikers kunnen gegevens filteren op status, soort en geslacht via dropdownmenu’s. 
Daarnaast kunnen gebruikers via de kaartweergave personages selecteren en toevoegen aan hun favorietenlijst, zodat ze snel toegang hebben tot hun favoriete personages.


### Functionaliteiten

## Dataverzameling & -weergave (bestand main.js)

- **Data ophalen met fetch():** 20 personages van de Rick and Morty API worden opgehaald met de fetch() functie (regel 3). De response wordt verwerkt naar JSON en weergegeven op de pagina.
- **Gebruik van Promises (.then()):** Na het ophalen van data wordt .then() gebruikt om de JSON-data asynchroon te verwerken (regels 4-5).
- **DOM-manipulatie met document.getElementById()** De HTML-tabel wordt dynamisch gevuld door het selecteren van een tbody element met getElementById() (regel 7).
- **Elementen dynamisch aanmaken met document.createElement() en innerHTML** Elk karakter wordt in een rij (<tr>) gezet die dynamisch wordt gecreëerd en toegevoegd aan de tabel (regels 10-19).
-**Template literals (\``) voor dynamische HTML:** Gebruik van een template strings om HTML-structuur met variabelen te vullen, zoals naam en afbeelding van elk personage (regel 10-16).
- **Iteratie over een array met .forEach():** Alle personages worden één voor één verwerkt met behulp van .forEach() (regel 9).
- **Foutafhandeling met .catch():** Eventuele fouten tijdens het ophalen van data worden opgevangen en weergegeven in de console (regel 24).

## Interactiviteit

### Gebruikte API's met links 
**Rick and Morty API:**(https://rickandmortyapi.com/documentation/#episode-schema) 
- **Personages:** (https://rickandmortyapi.com/api/character)


### Implementatie van technische vereisten 

### Installatiehandleiding 

### Screenshots van de applicatie 

## Bronnen: 
[naam van de site] (link)


