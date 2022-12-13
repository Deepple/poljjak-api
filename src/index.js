const path =
	process.env.NODE_ENV === "development"
		? "/../.env.development"
		: "/../.env.production";
require("dotenv").config({path: __dirname + `${path}`});
const port = process.env.PORT || 3000;
const app = require("./app.js");

app.listen(port, () => console.log(`API running on port ${port}`));
