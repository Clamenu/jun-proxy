const getTimeslots = (hoursOfOperation, date = new Date()) => {
  const timeslots = [];
  const openCloseTimes = hoursOfOperation[date.getDay()].split(/ - |, /g);
  for (let i = 0; i < openCloseTimes.length; i += 2) {
    let open = openCloseTimes[i];
    const close = openCloseTimes[i + 1];
    while (!close.includes(open)) {
      timeslots.push(open);
      open = open.split(':');
      if (open[1].match(/^30/)) {
        open[0] = (Number(open[0]) + 1).toString();
        open[1] = open[1].replace(/^30/, '00');
        if (open[0].match(/^12/)) {
          if (open[1].match(/am$/)) {
            open[1] = open[1].replace(/am$/, 'pm');
          } else {
            open[1] = open[1].replace(/pm$/, 'am');
          }
        }
        if (open[0].match(/^13/)) {
          open[0] = open[0].replace(/^13/, '1');
        }
        open = open.join(':');
      } else {
        open[1] = open[1].replace(/^00/, '30');
        open = open.join(':');
      }
    }
  }
  return timeslots;
};

export default getTimeslots;
