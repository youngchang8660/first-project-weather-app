const express = require("express");
const cors = require("cors");
const displayCtrl = require("./controllers/displayController");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/api/weather/", displayCtrl.getWeather);
app.get("/api/weather/:city", displayCtrl.getWeather);
app.put("/api/weather/:id", displayCtrl.editWeather);
app.post('/api/weather/:city', displayCtrl.addNewWeather)
app.delete("/api/weather/:city", displayCtrl.deleteWeather);

app.listen(port, () => console.log(`Server running on ${port}`));
