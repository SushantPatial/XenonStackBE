// Libraries
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

// Model
const Contact = mongoose.model("contact", contactSchema);

// Export model
module.exports = Contact;
