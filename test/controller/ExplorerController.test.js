const ExplorerController = require("./../../lib/controller/ExplorerController");

describe("Prueba de unidad de para ExplorerController", () => {
    test("Obtener explorers por misión", () => {
        const explorers = ExplorerController.getExplorersByMission("node");
        expect(explorers.length).toBeGreaterThanOrEqual(10);
    });
    test("Obtener explorers nombres de los explorers", () => {
        const explorers = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorers).toContain("ajolonauta11");
    });
    test("Obtener explorers el total de explorers", () => {
        const explorers = ExplorerController.getExplorersAmonutByMission("node");
        expect(explorers).toBe(10);
    });
});