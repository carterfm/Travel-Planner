const express = require('express');
const { sequelize } = require('./models/Traveler');
// Notes router
const apiRoutes = require('./routes/index.js');
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Middleware directing requests made to /api to notes.js 
app.use('/api', apiRoutes);

//Get wildcard route--will direct to the homepage at index.html
app.get('*', (req, res) =>
  res.status(404).json("404 error--no such page found")
);

//setting server to listen for requests
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
