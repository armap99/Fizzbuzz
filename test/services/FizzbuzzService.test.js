const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Prueba de unidad de para FizzbuzzService", () => {
    test("Score 3", () => {
        let explorer = {name: "Explorer3", score: 3};
        explorer = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorer.trick).toBe("FIZZ");
    });
    test("Score 1", () => {
        let explorer = {name:"Explorer1", score: 1};
        explorer = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorer.trick).toBe(1);
    });
});