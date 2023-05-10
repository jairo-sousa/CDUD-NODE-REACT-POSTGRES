import express from "express";
import cors from "cors";

const PORT = 8800;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("HOME");
});

app.listen(PORT);
console.log(`listening on port: ${PORT}`);
