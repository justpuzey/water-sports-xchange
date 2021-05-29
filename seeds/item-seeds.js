const { Item } = require('../models');

const Itemdata = [
  {
    pointval: 300,
    make: 'Back Cove',
    model: 'Back Cove 340',
    name: 'Back Cove 340',
    year: 2015,
    capacity: 8,
    users_id: 1,
    description: 'Back Cove Yachts award-winning 34O is powered by a pair of Yamaha 300’s, with optional 350 hp Yamaha or Suzuki’s. The entirely new hull features Trailing Edge Lifting Surface (TRELIS) *D* design technology and is fitted with standard bow thruster. The 34O offers cruise and top end speeds approximately 10 knots faster than the traditional single diesel Back Cove. This cockpit is meant for entertaining with an aft facing seat that converts into a helm deck U-shaped dinette or second berth. The standard 5kw diesel generator and cabin A/C below deck coupled with the spacious island berth, separate head and shower remind us that this Back Cove is still intended for cruising.',
    img_url: 'https://backcoveyachts.s3.amazonaws.com/backcove/wp-content/uploads/2018/11/25194638/BC34O-2852-corrected-1024x683.jpg',
    category_id: 1,
  },
  {
    pointval: 500,
    make: 'Carver',
    model: 'C36 Command Bridge',
    name: 'C36 Command Bridge',
    year: 2017,
    capacity: 10,
    users_id: 1,
    description: `The three-deck, two-stateroom C36 Command Bridge offers real versatility, from her outstanding maneuverability and handling to her elegant living spaces. Right away, you'll notice the aggressive, raised sheer and the hull's bold shape. This innovative design provides an exceptionally smooth, dry, stable ride, while the twin inboard engines ensure that the C36 will be a top performer with quiet, gentle manners at all speeds. The command bridge offers unbroken 360-degree views, and the extra-wide cockpit doors and side decks provide easy access to all areas of the yacht.`,
    img_url: 'https://carveryachts.blob.core.windows.net/media/2812/2015-c36-flybridge-running-0230-x2_1500.jpg',
    category_id: 1,
  },
  {
    pointval: 1500,
    make: 'Carver',
    model: 'C52 Command Bridge',
    name: 'C52 Command Bridge',
    year: 2020,
    capacity: 15,
    users_id: 1,
    description: `The new Carver 52 Command Bridge offers three staterooms and two heads in one of the most spacious layouts of any boat in its class. Owners will enjoy its large, open-concept cockpit with fully opening glass doors. The flush threshold leading to the spacious salon with wide side decks offers easy access to the large foredeck seating area. Unique design elements include, a full-beam master stateroom with private entrance and a master head with a large stall shower. Two additional staterooms, a second head with a stall shower, a large aft galley, and a host of well-thought-out amenities. From bridge to salon, make this one of the most exciting new model introductions in Carver history.`,
    img_url: 'https://carveryachts.blob.core.windows.net/media/2866/2016-carver-c-50-run-0621-x2_1500.jpg',
    category_id: 1,
  }
];

const seedItem = () => Item.bulkCreate(Itemdata);

module.exports = seedItem;