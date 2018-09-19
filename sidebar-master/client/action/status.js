const changeTodaysHours = hours => ({
  type: 'CHANGE_TODAYS_HOURS',
  hours,
});

const changePriceRange = priceRange => ({
  type: 'CHANGE_PRICE_RANGE',
  priceRange,
});

const changeHealthScore = healthScore => ({
  type: 'CHANGE_HEALTH_SCORE',
  healthScore,
});

const changeIsOpen = bool => ({
  type: 'CHANGE_IS_OPEN',
  isOpen: bool,
});

export {
  changeTodaysHours,
  changePriceRange,
  changeHealthScore,
  changeIsOpen,
};
