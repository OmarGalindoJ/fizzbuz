const Reader = require("./../fizzbuz/lib/utils/Reader")


const explorers = Reader.readJsonFile("explorers.json")
//console.log(explorers)

// Aplicación del ExplorerService sobre la lista de explorers
console.log(ExplorerService.filterByMission(explorers, "node"));
//ExplorerService.getAmountOfExplorersByMission(explorers, "node");
//ExplorerService.getExplorersUsernamesByMission(explorers, "node");