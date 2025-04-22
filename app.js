const express = require('express');
const app = express();
const PORT = 3000;


// Static Files
app.use(express.static('public'));

// setting layout 
const expressLayouts = require('express-ejs-layouts');
app.set ('view engine', 'ejs');
app.set('layout', 'layout/layout');
app.use(expressLayouts);

// setting routes

const router = require('./src/middleware/routerMiddleware');
router(app);


// App is listening port
app.listen(PORT, ()=>{
  console.log(`Listening port in ${PORT}`)
});
