function removeOldCitiesData(memory) {
  memory.cities = _.filter(memory.cities, cityData => {
    const room = Game.rooms[cityData.name];
    return room && room.controller && room.controller.my;
  });
}
