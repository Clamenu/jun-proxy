const todaysHoursReducer = (state = '', action) => {
  if (action.type === 'CHANGE_TODAYS_HOURS') {
    return action.hours;
  }
  return state;
};

const priceRangeReducer = (state = null, action) => {
  if (action.type === 'CHANGE_PRICE_RANGE') {
    return action.priceRange;
  }
  return state;
};

const healthScoreReducer = (state = null, action) => {
  if (action.type === 'CHANGE_HEALTH_SCORE') {
    return action.healthScore;
  }
  return state;
};

const isOpenReducer = (state = false, action) => {
  if (action.type === 'CHANGE_IS_OPEN') {
    return action.isOpen;
  }
  return state;
};

export {
  todaysHoursReducer,
  priceRangeReducer,
  healthScoreReducer,
  isOpenReducer
};