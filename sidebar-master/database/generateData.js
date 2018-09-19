const { db, Restaurant } = require('./index.js');

const businessNames = [
  'Minhas Micro Brewery',
  'CK\'S BBQ & Catering',
  'La Bastringue',
  'The Coffee Bean & Tea Leaf',
  'Bnc Cake House',
  'Thai One On',
  'Filiberto\'s Mexican Food',
  'Sushi 8',
  'Southern Accent Restaurant',
  'Original Hamburger Works',
  'Mysore Indian Cuisine',
  'Safeway Food & Drug',
  'Harlow',
  'CakesbyToi',
  'Rally\'s Hamburgers',
  'Rib Shop',
  'Mabel\'s Bakery',
  'Salsitas',
  'Los Toros Numero 2',
  'The Coffee Mill Restaurant',
  'Teresas Pizzeria',
  'Chicken Lips',
  'Subway',
  'Omelet House Summerlin',
  'Crossroads Country Cafe\'',
  'Strickland\'s Ice Cream',
  'John John\'s Seafood',
  'Little Caesars Pizza',
  'Dunkin Donuts',
  'Kim Phat Inc',
  'Manuel\'s Mexican Restaurant & Cantina - Bell Rd',
  'La Rosa Chilena',
  'Junior\'s Pizzeria',
  'Subway',
  'Baja Fresh Mexican Grill',
  'China Palace',
  'Allwyn\'s Bakery',
  'Fornetti',
  'Provence Bakery',
  'Ice Cream Patio',
  'Hub Coffee House & Locavorium',
  'Pizza Bellagio',
  'Regino\'s Pizza',
  'Avenue Deli',
  'More Than Pies Baking',
  'Indian Street Food Company',
  'Jack\'s Liquor',
  'Tipsy Ryde',
  'Wendy\'s',
  'McDonalds',
  'Fat Ox',
  'Tang Dynasty Restaurant And Bar',
  'Sammy\'s Beach Bar & Grill',
  'Harvey\'s Restaurants',
  'Honey\'s Beestro',
  'The Nest',
  'Applebee\'s Grill + Bar',
  'Anchor Bar',
  'I Wings',
  'Frite Alors',
  'Vocé Ristorante and Lounge',
  'Whiskey Rose Bar & Grill',
  'Popeyes Louisiana Kitchen',
  'Wing\'s Express',
  'Pizza Hut',
  'Sansei Japan',
  'Burrito Boyz',
  'L2 Lounge',
  'Chan Yang',
  'Long John Silver\'s',
  'Sunny Foodmart',
  'Weinkontor',
  'Loblaws',
  'Seasonal Adventures Pumpkin Patch',
  'Carte Blanche',
  'Schlotzsky\'s',
  'A & A International Food',
  'Arby\'s',
  'Higley Hot Dog Hut',
  'Pho 198',
  'Sweet Mahal',
  'La Cabana',
  'Hooters',
  'Boston Market',
  'Sauter\'s Inn Restaurant',
  'El Pollo Loco',
  'Ave Maria Latin Café',
  'Dave\'s Surf & Turf',
  'Popeyes Louisiana Kitchen',
  'Chicago Deep Dish Pizza',
  'Quesada Mexican Grill',
  'Great Wall',
  'Ten Feet Tall',
  'Velvet Sunrise Coffee Roasters',
  'Caspian Cafe & Catering',
  'Giulietta',
  'Sea Hut',
  'Chicago Brewing Company',
  'Port of Subs',
  'Chef\'s Cafe'
].map(name => name.toLowerCase());

module.exports = businessNames;

const generateRandomInt = (max, min = 0) => {
  return min + Math.floor(Math.random() * Math.floor(max - min));
};

const generateRandomBoolean = (offset = 0.5) => {
  return Math.floor(offset + Math.random()) > 0;
};

const data = [];

const open = ['7:00 am', '7:30 am', '8:00 am', '8:30 am', '9:00 am', '9:30 am', '10:00 am'];
const midDayClose = ['1:30 pm', '2:00 pm', '2:30 pm'];
const midDayOpen = ['4:00 pm', '4:30 pm', '5:30 pm', '6:00 pm'];
const close = ['10:00 pm', '10:30 pm', '11:00 pm', '11:30 pm', '12:00 am'];

for (let i = 0; i < 100; i++) {
  let weekday;
  let weekend;
  if (generateRandomBoolean()) {
    weekday = `${open[generateRandomInt(open.length)]} - ${close[generateRandomInt(close.length)]}`;
  } else {
    weekday = `${open[generateRandomInt(open.length)]} - ${midDayClose[generateRandomInt(midDayClose.length)]}, ` +
              `${midDayOpen[generateRandomInt(midDayOpen.length)]} - ${close[generateRandomInt(close.length)]}`;
  }
  if (generateRandomBoolean()) {
    weekend = weekday;
  } else {
    weekend = `${open[generateRandomInt(open.length)]} - ${close[generateRandomInt(close.length)]}`;
  }
  data.push({
    name: businessNames[i],
    priceRange: generateRandomInt(4),
    healthScore: generateRandomInt(101, 50),
    hasCertificate: generateRandomBoolean(0.15),
    takesReservation: generateRandomBoolean(),
    hasTakeout: generateRandomBoolean(),
    hasDelivery: generateRandomBoolean(),
    Monday: weekday,
    Tuesday: weekday,
    Wednesday: weekday,
    Thursday: weekday,
    Friday: weekday,
    Saturday: weekend,
    Sunday: weekend
  });
}

db.sync()
  .then(() => Restaurant.bulkCreate(data))
  .catch(err => console.log(err));