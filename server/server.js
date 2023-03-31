const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tessshearerportfolio@gmail.com',
    pass: 'PortPass12'
  }
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Create the email
  const mailOptions = {
    from: email,
    to: 'tessshearerportfolio@gmail.com',
    subject: `New message from ${name}`,
    text: message
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('success');
    }
  });
});