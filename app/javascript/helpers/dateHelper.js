const dateOffsets = {
  0: 6,
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
};

export const findNearestPrevMonday = (today) => {
  const closestMonday = today.setDate(
    today.getDate() - dateOffsets[today.getDay()]
  );
  return closestMonday;
};
