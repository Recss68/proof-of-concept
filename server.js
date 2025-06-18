import express from 'express'
import { Liquid } from 'liquidjs';
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

const engine = new Liquid()
app.engine('liquid', engine.express())

app.set('views', './views')

const API_KEY = process.env.RIJKSMUSEUM_API_KEY;

    app.get('/', async function (request, response) {
    try {
      const apiArt = await fetch(`https://www.rijksmuseum.nl/api/nl/collection?key=${API_KEY}&filter=10`);
      const apiArtData = await apiArt.json();
      
      response.render('index.liquid', {
          art: apiArtData.artObjects
      });
      } catch (error) {
        console.error("Something went wrong in the page check error:",error);
        response.status(500).render("error.liquid");
      }
    });

    app.get('/artwork', async function (request, response) {
    try {
        const apiArt = await fetch(`https://www.rijksmuseum.nl/api/nl/collection?key=${API_KEY}`);
        const apiArtData = await apiArt.json();
        
      response.render('artwork.liquid', {
              art: apiArtData.artObjects
      });
      } catch (error) {
        console.error("Something went wrong in the page check error:",error);
            response.status(500).render("error.liquid");
      }
    });

    app.get('/details/:id', async function (request, response) {
      try {
          const artId = request.params.id;
          const specificArt = await fetch(`https://www.rijksmuseum.nl/api/nl/collection?key=${API_KEY}&q=${artId}`);
          const artData = await specificArt.json();
          
      response.render('details.liquid', {
              art: artData.artObjects
      });
        } catch (error) {
          console.error("Something went wrong in the page check error:",error);
              response.status(500).render("error.liquid");
        }
      });

      app.post('/details', async (req, res) => {
        const objectNumber = req.body.objectNumber;
      
        try {
          const response = await fetch('https://fdnd.directus.app/items/messages', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              from: 'recep',
              text: objectNumber
            })
          });

          res.redirect(`/details/${objectNumber}`);
      
        } catch (error) {
          console.error("Something went wrong in the page check error:",error);
              res.status(500).render("error.liquid");
        }
      });

      app.get('/favorites', async (req, res) => {
        try {
          // 1. Alleen berichten van 'recep' ophalen (gefilterd via Directus)
          const response = await fetch('https://fdnd.directus.app/items/messages?filter[from][_eq]=recep');
          const data = await response.json();
      
          // 2. Verzamel unieke objectNumbers
          const objectNumbers = [...new Set(
            data.data
              .map(item => item.text)
              .filter(text => text) // voorkom lege waarden
          )];
      
          const fetchArtworks = objectNumbers.map(async (objectNumber) => {
            const res = await fetch(`https://www.rijksmuseum.nl/api/nl/collection/${objectNumber}?key=${API_KEY}`);
            const artData = await res.json();
            return artData.artObject;
          });
      
          const art = await Promise.all(fetchArtworks);
      
          res.render('favorites.liquid', { art });
      
        } catch (error) {
          console.error("Fout bij ophalen van favorites:", error);
          res.status(500).render("error.liquid");
        }
      });

app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), function () {
  console.log(`Project draait via http://localhost:${app.get('port')}/`)
})
