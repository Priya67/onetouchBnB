export const asArray = ( spots ) => (
  Object.keys(spots).map(key => spots[key])
);

export const selectSpot = ({ spots }, id) => {
  const spot = spots[id] || {};
  return spot;
};
