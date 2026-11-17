const express = require('express');
const path = require('path');

const app = express();

// Parse HTML form data
app.use(express.urlencoded({ extended: true }));

// Display the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Receive email details
app.post('/subscribe', (req, res) => {
    console.log("Subscribed Email:", req.body.email);

    res.send("Newsletter subscription successful!");
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
