const express = require('express');
const path = require('path');
const db = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle form submission
app.post('/submit-form', async (req, res) => {
  try {
    const { patientID, input2, input3 } = req.body;
    const [result] = await db.execute(
      'INSERT INTO `FORM_TABLE` (PatientID, `Input 2`, `Input 3`) VALUES (?, ?, ?)',
      [patientID, input2, input3]
    );
    // result.insertId is the generated FormID
    res.status(201).json({ formID: result.insertId, message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to submit form' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});