# Projectbeschrijving

Dit project is een interactieve single-page webapplicatie, gebaseerd op de Rick and Morty API. De applicatie toont personages in een overzichtelijke en visueel aantrekkelijke tabel en kaartweergave. Gebruikers kunnen personages filteren op status, soort en geslacht via dropdownmenu’s. 

Daarnaast kunnen gebruikers via de kaartweergave personages selecteren en toevoegen aan hun favorietenlijst, zodat ze snel toegang hebben tot hun favoriete personages. Deze favorieten worden zichtbaar zodra de gebruiker in de navigatiebalk op 'Favorieten' klikt.

Mocht een gebruiker problemen ervaren, dan kan hij of zij contact nemen via de knop in de 'About-sectie' of door in de navigatiebalk op 'Contact' te klikken.


## Functionaliteiten

### 1.Dataverzameling & -weergave (main.js)
- Data wordt opgehaald via de officiële [Rick and Morty API](https://rickandmortyapi.com/api/character)
- Er worden drie pagina's opgehaald.
- Gegevens worden zowel in een **tabel** als in een **kaartweergave** gepresenteerd.
- Tabel toont: Afbeelding, Naam, Status, Soort, Geslacht en Locatie (6 elementen).
- Scrollbare kaartweergave met afbeeldingen en sterknoppen (voor favorieten).

### 2.Interactiviteit
- **Filterfunctionaliteit:** (naam, status, soort en geslacht).
- **Zoekfunctie:** Naam van het personage opzoeken.
- **Sorteermogelijkheden:** Sorteer indirect via filters en selecties
- Resultaten worden automatisch bijgewerkt op basis van zoek-/filtercriteria

### 3.Personalisatie
- Gebruikers kunnen **favoriete kaartjes** opslaan via een sterknop op elk kaartje.
- Favorieten worden **lokaal opgeslagen** in localStorage en blijven behouden tussen sessies.
- Wanneer je op het menu-item "Favorieten" drukt, krijg je je favoriete kaartjes te zien.
- Gebruikers kunnen contact nemen via de knop in de 'About-sectie' of door in de navigatiebalk op 'Contact' te klikken. (Het contactformulier is alleen visueel en werkt momenteel niet.)

### 4.Gebruikerservaring:  
#### Visueel aantrekkelijke interface
- Gebruik van kleuren.
- Gebruik van emoji's bij kaartjes.

#### Gebruiksvriendelijke navigatie 
- Zoekbalk met filters makkelijk te gebruiken.
- Alle delen van de website zijn toegankelijk via de navigatiebalk (je hoeft niet te scrollen).

## Gebruikte API's met links 
**Rick and Morty API:** https://rickandmortyapi.com/
- **Personages:** 3 pagina's: https://rickandmortyapi.com/api/character


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
- Doel: Definieert onveranderlijke variabelen.

#### Template literals
- Regels 80-86 en 116-120:
- Doel: Dynamische strings met variabelen.

#### Iteratie over arrays
- Regels 33-35, 78-88, 101-103:
- Doel: data verwerken, filteren en weergeven. 

#### Array methodes
- Regel 30 en 58:
- Maakt een array van URLs met **Array.from**.

#### Arrow functions
- Regels 30, 58-63 en 126:
- Doel: Anonieme functies voor array-operaties.

#### Ternary Operator
- Regel 119:
- Doel: Conditionele weergave van emoji's.

#### Callback functions
- Regel 4, 126 en 78: 
- Doel: Een functie doorgeven als argument om later uit te voeren.

#### Promises
- Regel 31 en 37:
- Doel: Asynchrone operaties (hier API-calls) afhandelen zonder de main thread te blokkeren.

#### Async & Await
- Regels 28-37:
- Doel: Asynchrone API-calls.

#### Observer API (1 is voldoende)
- Regels 227-233:
- Doel: Houdt wijzigingen in favorieten bij.

### 3.Data & API

#### Fetch om data op te halen
- Regel 31:
- Doel: Haalt data van de API op.

#### JSON manipuleren en weergeven
- Regel 37 en 133:
- Doel: Converteert responses naar JSON

#### 4.Opslag

#### Gebruik van LocalStorage 
- Regel 149:
- Doel: slaat favorieten op

## Installatiehandleiding 

Stappen
1. Clone de repository: 
-> git clone <URL-van-de-repository>
-> cd <naam-van-de-repository>

2. Installeer de dependencies:
-> npm install

3. Start de ontwikkelserver:
-> npm run dev

4. Bekijk de website 

## Bronnen: 
- W3schools: https://www.w3schools.com/cssref/css_colors.php
- Google fonts: https://fonts.google.com/
- Google icons: https://fonts.google.com/icons 
- Emoji's: https://getemoji.com/ 
- Flexbox Froggy: https://flexboxfroggy.com/#nl 
- AI chatlogs:
- https://chatgpt.com/share/682e202a-31ec-800b-b8ae-55ebfafa67b7 
- https://chatgpt.com/share/682e2081-4740-800b-aa4c-40868b17f8ed 
- https://chatgpt.com/share/682e20c0-1f3c-800b-833d-4c2ac8eacd32
- https://chatgpt.com/share/682e22fd-87b8-800b-8904-addf571a5fd3 
- https://chatgpt.com/share/682e2660-d840-800b-8658-137ec5afcabd 



