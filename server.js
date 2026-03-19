const express = require('express');

const app = express();
const PORT = 3000;

// simple route
app.get('/',(req, res) => {
	res.send('My API is working!');
});

// another route
app.get('/about', (req, res) => {
	res.json({
		message: "This is your first backend API",
		status: "success"
	});
});
// my own route
app.get('/shalom', (req, res) => {
	res.send('This is my own route i have created 😎😎👌');
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT})`);
});
