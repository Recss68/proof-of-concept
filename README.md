# 🎨 Stories in between layers of paint...

### Bekijk hier de unieke kunstwerken van het Rijksmuseum! <br>

*(psst... Je kunt de kunstwerken bekijken met een 3D viewer als je naar de detailpagina gaat 😮)*

## 📑 Inhoudsopgave

* [📖 Beschrijving](#beschrijving)
* [🖼️ Gebruik](#gebruik)
* [✨ Kenmerken](#kenmerken)
* [⚙️ Performance](#performance)
* [💻 Installatie](#installatie)
* [🔗 Bronnen](#bronnen)
* [📄 Licentie](#licentie)

---

## 📖 Beschrijving

In de afgelopen periode heb ik een opdracht gekregen van **270degrees / The Valley** om een website te maken waar we kunstwerken uit de API van het **Rijksmuseum** kunnen tonen.
Met een 3D viewer van **270degrees** is het mogelijk om het kunstwerk te tonen als een 3D model die je kunt rondraaien en bekijken zoals jij dat wilt.
Ook is het mogelijk om kunstwerken te liken en dit terug te zien in je **favorietenlijst**.

### 🖼️ Illustratie

![Afbeelding van WhatsApp op 2025-06-18 om 12 04 33\_848f14cc-left](https://github.com/user-attachments/assets/26842453-ec4c-4fbe-ae85-94290a011ce5)
![dekstop-front](https://github.com/user-attachments/assets/62717bd7-2b07-443d-bafc-35f00f1c8711)

---

## 🖼️ Gebruik

Op deze website kunnen gebruikers kunstwerken uit het **Rijksmuseum** op een unieke manier ontdekken. Dankzij een geïntegreerde **3D model viewer** kunnen gebruikers de kunstwerken vanuit alle hoeken bekijken voor een meeslepende ervaring.
Daarnaast kunnen ze kunstwerken **liken** en toevoegen aan hun persoonlijke **favorietenlijst**. Zo ontstaat er een interactieve en persoonlijke kunstbeleving.

🔗 [Bekijk de live site](https://artwork-270projects.onrender.com)

---

## ✨ Kenmerken

* Dynamisch ingeladen kunstwerken via Rijksmuseum API
* Interactieve 3D viewer met 270degrees.io
* Favorietenlijst-functionaliteit
* Responsive en toegankelijk ontwerp
* Kunstwerkdetails: titel, kunstenaar, jaar, beschrijving, link

---

## ⚙️ Performance

Tijdens het testen van de website met **Lighthouse** en **PageSpeed Insights** kwamen er een aantal prestatieproblemen naar voren. De belangrijkste oorzaken van vertraging waren:

* 📸 Te grote en niet-geoptimaliseerde afbeeldingen (WebP ontbreekt)
* 🕒 Traag reagerende server (soms >2 seconden)
* 🧹 Veel ongebruikte CSS en JavaScript
* 🧱 Blokkerende scripts en third-party code
* 📐 Geen `width`/`height` op afbeeldingen → layoutverschuivingen
* 🧠 Lazy loading vertraagt zichtbare content

De pagina’s **Art** en **Details** scoorden het laagst vanwege de zware 3D-viewer en het grote netwerkverkeer (soms >18 MB).
**Favorites** presteerde het best, maar ook daar waren nog optimalisaties mogelijk.

### 🔧 Verbeterpunten

* Afbeeldingen comprimeren en WebP gebruiken
* Layout stabieler maken met vaste afmetingen
* Serverreactietijd verlagen
* Ongebruikte code verwijderen
* Scripts optimaliseren en caching instellen

📄 **Meer info in de uitgebreide performance wiki:**
👉 [Bekijk de volledige audit in de Wiki](https://github.com/Recss68/proof-of-concept/wiki/Project-%E2%80%90-Artwork-%E2%80%90-270Degrees#performance-audit)

---

## 💻 Installatie

In dit project wordt gebruik gemaakt van **Express JS**.

1. 🔄 Fork dit project en open het in **VS Code**
2. 💽 Open de terminal en voer `npm install` uit om alle benodigdheden te installeren
3. ▶️ Start de server met `npm run`
4. 🌐 Open je browser en ga naar [http://localhost:8000](http://localhost:8000)

---

## 🔗 Bronnen

*(Hier kun je bronnen en gebruikte documentatie toevoegen)*

---

## 📄 Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
