import express from 'express'
import { Liquid } from 'liquidjs';

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

const engine = new Liquid()
app.engine('liquid', engine.express())

app.set('views', './views')


app.get('/', async function (request, response) {
    try {
    
    
        response.render('liquid.liquid', {
  
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
