# Projectbeschrijving

Dit project is een interactieve single-page webapplicatie, gebaseerd op de Rick and Morty API. De applicatie toont personages in een overzichtelijke en visueel aantrekkelijke tabel en kaartweergave. Gebruikers kunnen personages filteren op status, soort en geslacht via dropdownmenu’s. 

Daarnaast kunnen gebruikers via de kaartweergave personages selecteren en toevoegen aan hun favorietenlijst, zodat ze snel toegang hebben tot hun favoriete personages. Deze favorieten worden zichtbaar zodra de gebruiker in de navigatiebalk op 'Favorieten' klikt.

Mocht een gebruiker problemen ervaren, dan kan hij of zij contact nemen via de knop in de 'About-sectie' of door in de navigatiebalk op 'Contact' te klikken.


## Functionaliteiten

### 1.Dataverzameling & -weergave (main.js)
- Data wordt opgehaald via de officiële [Rick and Morty API](https://rickandmortyapi.com/api/character)
- Er worden drie paginas opgehaald
- Gegevens worden in zowel in een **tabel** als in een **kaartweergave** gepresenteerd.
- Tabel toont: Afbeelding, Naam, Status Soort, Geslacht en Locatie( 6 elementen).
- Scrollbare kaartweergave met afbeeldingen en sterknoppen (voor favorieten)

### 2.Interactiviteit
- **Filterfunctionaliteit:**(naam, status, soort en geslacht).
- **Zoekfuntie:** Naam van de personage opzoeken.
- **Sorteermogelijkheden:** Sorteer indirect via filters en selecties
- Resulaten worden automatisch bijgewerkt op basis van zoek- / filtercriteria

### 3.Personalisatie
- Gebruikers kunnen **favoriete kaartjes** opslaan via een sterknop op elk kaartje.
- Favorieten worden **lokaal opgeslagen** in 'localStorage' en blijven behouden tussen sessies.
- Wanneer je op menu-item "Favorieten" drukt krijg je je favoriete kaartjes te zien.
- Gebruikers kunnen contact nemen via de knop in de 'About-sectie' of door in de navigatiebalk op 'Contact' te klikken. (Visueel werkt niet!)

### 4.Gebruikerservaring:  
#### Visueel aantrekkelijke interface
- Gebruik van kleuren.
- Gebruik van emoji's bij kaartjes.

#### Gebruiksvriendelijke navigatie 
- Zoekbalk met filters makkelijk te gebruiken.
- Alle delen op de website toegangkelijk via navigatiebalk (je hoeft niet te scrollen).

## Gebruikte API's met links 
**Rick and Morty API:** https://rickandmortyapi.com/
- **Personages:** 3 paginas: https://rickandmortyapi.com/api/character


## Implementatie van technische vereisten (main.js)

### 1.DOM manipulatie

#### Elementen selecteren 
- Regels 7-14:
- Doel: Selecteert elementen om ze later te manipuleren.

#### Elementen manipuleren
- Regels 74 en 80-88:
- Doel: Werkt de tabel bij met zoekresultaten.

#### Events aan elementen koppelen
- Regel 4 en 126:
- Doel: Koppelt de zoekfunctie aan een klik-event.

### 2.Modern JavaScript
#### Gebruik van constanten
- Regels 22-23:
- Doel: Definieert onveranderkijke variabelen.

#### Template literals
- Regels 80-86 en 116-120:
- Doel: Dynamische strings met variabelen.

#### Iteratie over arrays
- Regels 33-35, 78-88, 101-103:
- Doel: data verwerken, filteren en weergeven. 

#### Array methodes
- Regel 30 en 58:
- Maakt een array van URLs met **Array.form**.

#### Arrow functions
- Regels 30, 58-63 en 126:
- Doel: Anonieme functies coor array-operaties.

#### Ternary Operator
- Regel 119:
- Doel: Conditionele weergave van emoji's.

#### Callback functions
- Regel 4, 126 en 78: 
- Doel: Een functie doorgeven als argument om later uit te voeren.

#### Promises
- Regel 31 en 37:
- Doel: Asynchrone operaties (hier API-calls) afhandelen zoner de hoofdthrad te blokkeren.

#### Async & Await
- Regels 28-37:
- Doel: Asynchrone API-calls.

#### Observer API (1 is voldoende)
- Regels 227-233:
- Doel: Houdt wijzigingen in favorieten bij.

### 3.Data & API

#### Fetch om data op te halen
- Regel 31:
- Doel: Haalt data op van de API.

#### JSON manipuleren en weergeven
- Regel 37 en 133:
- Doel: Converteert responses naar JSON

#### 4.Opslag

#### Gebruik van LocalStorage 
- Regel 149:
- Doel: slaat favorieten op

## Installatiehandleiding 

- Geen instalatie vereist, site gewoon in een moderne webbrowser openen.



## Bronnen: 
- W3schools: https://www.w3schools.com/cssref/css_colors.php
- Google fonts: https://fonts.google.com/
- Google icons: https://fonts.google.com/icons 
- Emoji's: https://getemoji.com/ 
- Flexbox Frroggy: https://flexboxfroggy.com/#nl 
- chatgpt: zie folder **AI chatlog**



