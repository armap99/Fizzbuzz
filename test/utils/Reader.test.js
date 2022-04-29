const Reader = require("./../../lib/utils/Reader");

describe("Prueba de unidad de para JSONReader", () => {
    test("Leyendo archivo", () => {
        const explorer = Reader.readJsonFile("./explorers.json");
        expect(explorer.length).not.toBe(0);
    });
});