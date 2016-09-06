function addNewCitiesData(memory) {
  const myRooms = _.filter(Game.rooms, room => room.controller && room.controller.my);
  _.each(myRooms, room => {
    if (memory.cities[room.name]) {
      return;
    }
    memory.cities[room.name] = getCityData(room);
  });
}
