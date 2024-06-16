const app = require("./src/app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
	if (err) {
		console.log(err);
	}
	console.log(`Server is running on port ${PORT}`);
});
