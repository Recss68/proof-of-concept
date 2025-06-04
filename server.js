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
    const apiArt = await fetch(`https://www.rijksmuseum.nl/api/nl/collection?key=${API_KEY}&involvedMaker=Rembrandt+van+Rijn`);
    const apiArtData = await apiArt.json();
    
    response.render('index.liquid', {
        art: apiArtData.artObjects
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
