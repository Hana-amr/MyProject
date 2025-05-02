# Projectbeschrijving

Dit project is een interactieve single-page webapplicatie gebaseerd op de Rick and Morty API. De applicatie toont personages op een visueel aantrekkelijke tabel en kaartweergave. Gebruikers kunnen gegevens filteren op status, soort en geslacht via dropdownmenu’s. 
Daarnaast kunnen gebruikers via de kaartweergave personages selecteren en toevoegen aan hun favorietenlijst, zodat ze snel toegang hebben tot hun favoriete personages.


## Functionaliteiten

### Dataverzameling & -weergave (bestand main.js)
- Data wordt opgehaald via de officiële [Rick and Morty API](https://rickandmortyapi.com/api/character)
- Minstens 20 personages worden opgehaald
- Gegevens worden in zowel in een **tabel** als in een **kaartweergave** gepresenteerd.
- Tabel toont: Afbeelding, Naam, Status Soort, Geslacht, Locatie.
- Scrollbare kaartweergave met afbeeldingen en sterknoppen (voor favorieten)

### Interactiviteit
- **Filterfunctionaliteit:**(naam, status, soort en geslacht).
- **Zoekfuntie:** Naam van de personage opzoeken.
- **Sorteermogelijkheden:** Sorteer indirect via filters en selecties
- Resulaten worden automatisch bijgewerkt op basis can zoek- / filtercriteria

### Personalisatie
- Gebruikers kunnen **favorieten** opslaan via een sterknop op elk kaartje.
- Favorieten worden **lokaal opgeslagen** in 'localStorage' en blijven behouden tussen sessies.
- Wanneer je op menu-item "Favorieten" drukt krijg je je favoriete kaartjes te zien.


## Gebruikte API's met links 
**Rick and Morty API:**(https://rickandmortyapi.com/documentation/#episode-schema) 
- **Personages:** (https://rickandmortyapi.com/api/character)


## Implementatie van technische vereisten 

- **addeventListener** wordt op meerdere plaatsen gebruikt om interactie met de pagina mogelijk te maken, zoals bij het klikken op de zoekknop, sterknoppen voor favorieten en de navigatieknoppen voor het scrollen.
- lijn 3: Haalt de waarde van de zoekbalk op en zet deze om naar kleine letters voor een case-insensitieve zoekfunctie. 
- Lijn 4, 5, 6: Haalt de geselecteerde waarde op uit de filters voor status, soort en geslacht via hun respectieve ID's.
- Lijn 8, 9: **fetch()** haalt gegevens op van de Rick and Morty API. De **.then(response => response.json())** zet de ontvangen JSON-data om naar een JavaScript object.
- Lijn 52: Alle karakters worden opgehaald van de API en opgeslagen in een array **alleCharacters**. Elke karakter wordt in een kaart weergegeven.
- De gefilterde karakters worden weergegeven in een **HTML-tabel**. Voor elk karakter worden gegevens(afbeelding, naam, status, soort, geslacht, locatie) in een nieuwe rij geplaatst.
- lijn 100: **toggleFavorite()** voegt het karakter toe of verwijdert het uit de favorietenlijst, opgeslagen in **localStorage**. Bij het laden van de favorieten worden deze uit de **localStorage** gehaald en getoond in een aparte favoriten sectie.
- Favorieten worden opgeslagen in **localStorage**, zodat ze tussen sessies behouden blijven, zelfs als de gebruiker de pagina herlaadt.
- Lijn 140: De knoppen voor scrollen naar links en rechts verschuiven de kaarten binnen de container door de **ScrollBy()** methode te gebruiken.
- Bij klikken op de **favorieten link** in het **navigatiemenu**, wordt de gebuiker naar de favorieten sectie geleid en woren de favorieten opnieuw geladen.

## Installatiehandleiding 

- Geen instalatie vereist, site gewoon in een moderne webbrowser openen.

## Screenshots van de applicatie 

## Bronnen: 
[naam van de site] (link)


