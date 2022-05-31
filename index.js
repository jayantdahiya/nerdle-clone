const express = require('express');
const dotenv = require('dotenv');
const nerdleRoutes = require('./routes/nerdle');
const { default: mongoose } = require('mongoose');
// const mongoose = require(mongoose);
const cors = require('cors');

const app = express();

app.use(cors({
  origin: '*'
}));

dotenv.config();
const PORT = process.env.PORT;
const DatabaseUrl = process.env.DatabaseUrl;

app.use(express.json());
app.get('/', (req,res) => res.json({'message': 'server is running'}));

app.use('/nerdle', nerdleRoutes);

mongoose.connect(DatabaseUrl, { useNewUrlParser: true})
  .then(()=> {
    console.log('Database Connected');
    app.listen(PORT, () => console.log('Server is running on port:' +PORT));
  })
  .catch((err) =>{
    console.log('Database connection failed');
    console.log(err);
  });
