const mongoose = require("mongoose");
require("dotenv").config();
const dbURI="mongodb+srv://jayasankarirr21it:jaya@cluster0.bc9sulx.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

