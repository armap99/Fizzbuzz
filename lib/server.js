const ExplorerController = require("./controller/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMssion = ExplorerController.getExplorersByMission(mission);
    response.json({mission: mission, explorers: explorersInMssion});
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const amountInMssion = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({mission: mission, quantity: amountInMssion});
});
