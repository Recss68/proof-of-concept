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
        const apiArt = await fetch(`https://www.rijksmuseum.nl/api/nl/collection?key=${API_KEY}&filter=10`);
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
          
      response.render('artwork.liquid', {
              art: artData.artObjects
      });
        } catch (error) {
          console.error("Something went wrong in the page check error:",error);
              response.status(500).render("error.liquid");
        }
      });

app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), function () {
  console.log(`Project draait via http://localhost:${app.get('port')}/`)
})
