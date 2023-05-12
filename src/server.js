const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/register', (req, res) => {
  const { name, mobileNumber, email, password } = req.body;

  // Store the data in a file
  fs.appendFile('registrationData.txt', `${name}, ${mobileNumber}, ${email}, ${password}\n`, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error occurred while saving registration data.');
    } else {
      res.status(200).send('Registration data saved successfully.');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
