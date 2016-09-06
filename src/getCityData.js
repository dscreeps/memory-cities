function getCityData(room) {
  const cityData = {
    exits: Game.map.describeExits(room.name),
    name: room.name
  };
  return cityData;
}
