const express = require("express");

const app = express();

app.use(express.json());

const wilders = [
	{
		id: 1,
		name: "Yavuz",
	},
	{
		id: 2,
		name: "Ayoub",
	},
	{
		id: 3,
		name: "Benoît",
	},
	{
		id: 4,
		name: "Anthony",
	},
];

app.get("/api/wilders", (req, res) => {
	res.status(200).json(wilders);
});

module.exports = app;
