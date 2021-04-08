const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
];

function buildGraph(edges) {
  let graph = edges
    .map((edge) => edge.split("-"))
    .reduce((acc, [from, to]) => {
      acc[from] = acc[from] || [];
      acc[to] = acc[to] || [];
      acc[from].push(to);
      acc[to].push(from);
      return acc;
    }, {});

  return graph;
}

const graph = buildGraph(roads);
console.table(graph);

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!graph[this.place].includes(destination)) {
      return this;
    }

    let parcels = this.parcels
      .map((parcel) => {
        if (parcel.place !== this.place) return parcel;
        return {
          place: destination,
          address: parcel.address,
        };
      })
      .filter((parcel) => parcel.place !== parcel.address);

    return new VillageState(destination, parcels);
  }
}
function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return {
    direction: randomPick(graph[state.place]),
  };
}

VillageState.random = function (parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; ++i) {
    let address = randomPick(Object.keys(graph));

    let place;
    do {
      place = randomPick(Object.keys(graph));
    } while (place === address);

    parcels.push({ place, address });
  }
  return new VillageState("Post Office", parcels);
};

function runRobot(state, robot, memory) {
  for (let turn = 0; ; ++turn) {
    if (state.parcels.length === 0) {
      console.log(`Done in ${turn} turns.`);
      break;
    }

    let action = robot(state, memory);
    state = state.move(action.direction);

    memory = action.memory;
    console.log(`Moved to ${action.direction} direction. `);
  }
}

const mailRoute = [
  "Alice's House",
  "Cabin",
  "Alice's House",
  "Bob's House",
  "Town Hall",
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  "Shop",
  "Grete's House",
  "Farm",
  "Marketplace",
  "Post Office",
];

function routeRobot(state, memory) {
  if (memory.length === 0) memory = mailRoute;
  return {
    direction: memory[0],
    memory: memory.slice(1),
  };
}
let state = VillageState.random();
console.log(state);

runRobot(state, routeRobot, []);
