Game.Memory.dscreeps = Game.Memory.dscreeps || {};

module.exports = () => {
  const memory = Game.Memory.dscreeps;

  removeOldCitiesData(memory);
  addNewCitiesData(memory);
};
