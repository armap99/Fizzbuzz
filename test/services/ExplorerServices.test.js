const JSONReader = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Prueba de unidad de para ExplorerService", () => {
    test("1) Leer la lista completa de Explorers", () => {
        const explorers = JSONReader.readJsonFile("./explorers.json");
        expect(ExplorerService.filterByMission(explorers,"node").length).toBeGreaterThanOrEqual(0);
    });
    test("2) Obtener explorers que sean parte de Node", () => {
        const explorers = JSONReader.readJsonFile("./explorers.json");
        expect(ExplorerService.getAmountOfExplorersByMission(explorers,"node")).toBe(10);
    });
});