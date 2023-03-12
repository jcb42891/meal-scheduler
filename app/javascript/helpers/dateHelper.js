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

export const getCurrentWeekRange = (anchorDate) => {
  const start = new Date(findNearestPrevMonday(anchorDate));
  const end = new Date(start);
  end.setDate(end.getDate() + 6);

  return [start.toDateString(), end.toDateString()];
};

export const enumerateWeekRange = (start) => {
  const startDate = new Date(start);
  let res = [];
  res.push(startDate.toDateString());

  for (let i = 1; i < 7; i++) {
    let nextDate = new Date(startDate);
    nextDate.setDate(startDate.getDate() + i);
    res.push(nextDate.toDateString());
  }

  return res;
};

export const ensureZonedDate = (date) => {
  return new Date(
    new Date(date).toUTCString().replace(" 00:00:00 GMT", "").replace(",", "")
  ).toDateString();
};
