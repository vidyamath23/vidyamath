const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');  // Import path module
const app = express();
const port = 3000;

// Static Files
app.use(express.static('public'));

// Set Templating Engine
app.set('view engine', 'ejs');
app.set('layout', 'layout/layout');  // Use 'layout.ejs' as the main template
app.set('views', path.join(__dirname, 'views'));  // Set the views directory

app.use(expressLayouts);

const mainRouter = require('./src/routes/_mainRouter.js')
const aboutUs = require ('./src/routes/about-us.js');
app.use('/about-us', aboutUs);

app.use('/', mainRouter);

app.use('*', function(req, res){
  res.status(404).send('<h1>Page Not Found</h1>');
  res.status(404).redirect('/404');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
