const ExplorerService = require ("./../../lib/services/ExplorerService")

describe("Test para explorer service", () => {
    test("Requerimiento 1: calcular todos los explorers en una misión", () => {
        const explorers = [{ mission: "node" }];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node"); 
        expect (explorersInNode.length).toBe(1);
    });
});   