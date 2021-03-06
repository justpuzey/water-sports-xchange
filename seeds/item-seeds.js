const { Item } = require('../models');

const Itemdata = [
  {
    pointval: 300,
    make: 'Back Cove',
    model: '340',
    name: 'Back Cove 340',
    year: 2015,
    capacity: 8,
    users_id: 1,
    description: 'Back Cove Yachts award-winning 34O is powered by a pair of Yamaha 300’s, with optional 350 hp Yamaha or Suzuki’s. The entirely new hull features Trailing Edge Lifting Surface (TRELIS) *D* design technology and is fitted with standard bow thruster. The 34O offers cruise and top end speeds approximately 10 knots faster than the traditional single diesel Back Cove. This cockpit is meant for entertaining with an aft facing seat that converts into a helm deck U-shaped dinette or second berth. The standard 5kw diesel generator and cabin A/C below deck coupled with the spacious island berth, separate head and shower remind us that this Back Cove is still intended for cruising.',
    img_url: 'https://backcoveyachts.s3.amazonaws.com/backcove/wp-content/uploads/2018/11/25194638/BC34O-2852-corrected-1024x683.jpg',
    category: 'yacht',
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
    category: 'yacht',
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
    category: 'yacht',
  },
  {
    pointval: 1500,
    make: 'Prestige',
    model: 'X70',
    name: 'Prestige X70',
    year: 2021,
    capacity: 25,
    users_id: 1,
    description: `Created in the spirit of a superyacht, the X70 offers infinite possibilities, blurring the line between the exterior and the interior. Baled on volume, circulation and light, the all-new concept for this luxury crossover enables you to benefit from the full beam of the yacht, reinventing space on board for an incredible experience! Live aboard the X70 combines the comforts of a luxurious villa and the pleasures of life at sea in a radically new and different way!`,
    img_url: 'https://app.prestige-yachts.com/static/media/document/SD/188d4d9c46db392350b1ab32a2e1a91a.jpeg',
    category: 'yacht',
  },
  {
    pointval: 2000,
    make: 'Fleming',
    model: '85',
    name: 'Fleming 85',
    year: 2021,
    capacity: 30,
    users_id: 1,
    description: `After hundreds of years of combined experience in designing, building and cruising yachts on the open ocean, Fleming Yachts are bringing to you what will be the ultimate of cruising yachts. A brand new design from the keel up. The Fleming 85.`,
    img_url: 'https://app.prestige-yachts.com/static/media/document/SD/d946602d9c1e24cdd7894ea55d7c444a.jpeg',
    category: 'yacht',
  },
  {
    pointval: 200,
    make: 'Malibu',
    model: '20 VTX',
    name: 'Malibu 20VTX',
    year: 2021,
    capacity: 6,
    users_id: 1,
    description: `The 20 VTX is Malibu's ultimate triple threat. VTX stands for versatility and it truly is the boat that makes everyone happy whether you want to ski, wakesurf, or wakeboard. Its unique Malibu Cut Diamond Hull™ is tournament approved—so you get pro-level slalom wakes—or you can fill the ballast, drop the Power Wedge III and deploy Surf Gate for a wave you’re not going to believe came off a 20-foot boat. Fun to drive, easy to store and simple to trailer, the 20 VTX is just what your multisport family has been looking for.`,
    img_url: 'https://nautique.com/assets/img/models/2021/g25/gallery/2021_Super_Air_Nautique_G25_E_Gallery_05.jpg',
    category: 'Ski Boat',
  },
  {
    pointval: 230,
    make: 'Malibu',
    model: 'M240',
    name: 'Malibu M240',
    year: 2021,
    capacity: 6,
    users_id: 1,
    description: `The M240 has solidly planted its flag at the top of the Malibu line. A luxury wake boat like no other, every detail of the M240 has upscale, M-Series style and functionality. The standard features read like a wish list for the perfect towboat: The premium slide-out cooler, powered Gx Tower, Multi View Bench Seat, wireless chargers—we could go on and on. With new exclusive features such as ultra-fast-filling Malibu Launch System 6 Ballast™ that fills in under three minutes and Surf Gate® Fusion which is integrated into the exclusive new M-Line Hull for the greatest and cleanest surf swells in the wake boat industry, the M240 brings you something the water has never seen before. If you are looking for unsurpassed luxury, unyielding performance, and unrivaled innovation, the M240 is for you.`,
    img_url: 'https://www.mastercraft.com/media/rkpeojya/xstar_gallery_lifestyle_10.jpg',
    category: 'Ski Boat',
  },
  {
    pointval: 250,
    make: 'Nautique',
    model: 'G23',
    name: 'SUPER AIR NAUTIQUE G23',
    year: 2021,
    capacity: 6,
    users_id: 1,
    description: `The M240 has solidly planted its flag at the top of the Malibu line. A luxury wake boat like no other, every detail of the M240 has upscale, M-Series style and functionality. The standard features read like a wish list for the perfect towboat: The premium slide-out cooler, powered Gx Tower, Multi View Bench Seat, wireless chargers—we could go on and on. With new exclusive features such as ultra-fast-filling Malibu Launch System 6 Ballast™ that fills in under three minutes and Surf Gate® Fusion which is integrated into the exclusive new M-Line Hull for the greatest and cleanest surf swells in the wake boat industry, the M240 brings you something the water has never seen before. If you are looking for unsurpassed luxury, unyielding performance, and unrivaled innovation, the M240 is for you.`,
    img_url: 'https://nautique.com/assets/img/models/2021/g23/gallery/2021_Super_Air_Nautique_G23_E_Gallery_01.jpg',
    category: 'Ski Boat',
  },
  {
    pointval: 250,
    make: 'Nautique',
    model: '230',
    name: 'SUPER AIR NAUTIQUE 230',
    year: 2021,
    capacity: 6,
    users_id: 1,
    description: `With sharp lines and an astonishing set of standard features, the Super Air Nautique 230 is a well-equipped wakesurf and wakeboard boat capable of producing great waves and wakes for any level rider. High-end finishes, handmade craftsmanship and top-of-the-line performance, the 230 bring world-class quality and innovation to a traditional bow aesthetic. If your family wants the proven excellence of a Nautique in a well-appointed package, the 230 finds the sweet spot.`,
    img_url: 'https://nautique.com/assets/img/models/2021/230/gallery/2021_Super_Air_Nautique_230_E_Gallery_02.jpg',
    category: 'Ski Boat',
  },
  {
    pointval: 250,
    make: 'MasterCraft',
    model: 'Prostar',
    name: 'MasterCraft ProStar',
    year: 2021,
    capacity: 6,
    users_id: 1,
    description: `The original world-class MasterCraft ski boat was designed to thrill skiers with precise control and impeccable wakes. For 2021, we’ve taken everything you’ve come to love and expect from the ProStar and made it even better for the skier, driver and crew. New hull rails and added tracking fins make this the easiest driving ProStar ever. Enjoy the redesigned helm experience with a standard 10.6-inch touchscreen and enjoy a number of thoughtful onboard additions. From first-timers to slalom veterans and world champions alike – the ProStar delivers.`,
    img_url: 'https://www.mastercraft.com/media/vixhafn3/x24_gallery_lifestyle_03.jpg?center=0.46858568852128524,0.4685848374664453&mode=crop&width=650&height=417&rnd=132500080376330000',
    category: 'Ski Boat',
  },
  {
    pointval: 250,
    make: 'Lund',
    model: '1800 Sport Angler',
    name: 'Lund 1800 Sport Angler',
    year: 2021,
    capacity: 2,
    users_id: 1,
    description: `The 1800 Sport Angler was designed as a trolling walleye, lake trout or salmon fishing boat. The spacious cockpit is perfect for a trolling fishing boat and designed for ease of mobility and fishability. This 18’ walleye, lake trout or salmon fishing boat targets big water where trolling is desired.`,
    img_url: 'https://www.starcraftmarine.com/sites/starcraftmarine.com/files/styles/gallery/public/exterior/tmp19033_2901.jpg?itok=YrhcsyxX',
    category: 'Fishing Boat',
  },
  {
    pointval: 250,
    make: 'Starcraft',
    model: 'Starcraft STX',
    name: 'Starcraft STX',
    year: 2021,
    capacity: 2,
    users_id: 1,
    description: `The 1800 Sport Angler was designed as a trolling walleye, lake trout or salmon fishing boat. The spacious cockpit is perfect for a trolling fishing boat and designed for ease of mobility and fishability. This 18’ walleye, lake trout or salmon fishing boat targets big water where trolling is desired.`,
    img_url: 'https://www.starcraftmarine.com/sites/starcraftmarine.com/files/styles/gallery/public/exterior/tmp19077_1589.jpg?itok=XJu8sIMG',
    category: 'Fishing Boat',
  },
  {
    pointval: 250,
    make: 'Lund',
    model: '1800 Sport Angler',
    name: 'Lund 1800 Sport Angler',
    year: 2021,
    capacity: 2,
    users_id: 1,
    description: `The 1800 Sport Angler was designed as a trolling walleye, lake trout or salmon fishing boat. The spacious cockpit is perfect for a trolling fishing boat and designed for ease of mobility and fishability. This 18’ walleye, lake trout or salmon fishing boat targets big water where trolling is desired.`,
    img_url: 'https://www.starcraftmarine.com/sites/starcraftmarine.com/files/styles/gallery/public/exterior/tmp19077_0745.jpg?itok=iKlrDS0T',
    category: 'Fishing Boat',
  },
  {
    pointval: 250,
    make: 'Lund',
    model: '1800 Sport Angler',
    name: 'Lund 1800 Sport Angler',
    year: 2021,
    capacity: 2,
    users_id: 1,
    description: `The 1800 Sport Angler was designed as a trolling walleye, lake trout or salmon fishing boat. The spacious cockpit is perfect for a trolling fishing boat and designed for ease of mobility and fishability. This 18’ walleye, lake trout or salmon fishing boat targets big water where trolling is desired.`,
    img_url: 'https://www.starcraftmarine.com/sites/starcraftmarine.com/files/styles/gallery/public/exterior/tmp19033_1411.jpg?itok=-XuD2247',
    category: 'Fishing Boat',
  },
  {
    pointval: 250,
    make: 'Lund',
    model: '1800 Sport Angler',
    name: 'Lund 1800 Sport Angler',
    year: 2021,
    capacity: 2,
    users_id: 1,
    description: `The 1800 Sport Angler was designed as a trolling walleye, lake trout or salmon fishing boat. The spacious cockpit is perfect for a trolling fishing boat and designed for ease of mobility and fishability. This 18’ walleye, lake trout or salmon fishing boat targets big water where trolling is desired.`,
    img_url: 'https://www.starcraftmarine.com/sites/starcraftmarine.com/files/styles/gallery/public/exterior/tmp19033_8865.jpg?itok=fS7CQwo-',
    category: 'Fishing Boat',
  },
  {
    pointval: 250,
    make: 'Taiga Motors',
    model: 'Orca',
    name: 'Taiga Motors Orca',
    year: 2021,
    capacity: 2,
    users_id: 1,
    description: `The 1800 Sport Angler was designed as a trolling walleye, lake trout or salmon fishing boat. The spacious cockpit is perfect for a trolling fishing boat and designed for ease of mobility and fishability. This 18’ walleye, lake trout or salmon fishing boat targets big water where trolling is desired.`,
    img_url: 'https://cdn.vox-cdn.com/thumbor/b4qsoFAyaAsAucCdvyyXfK-pfp4=/800x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19209417/Orca_ride_10.jpg',
    category: 'Personal Watercraft',
  },
  {
    pointval: 250,
    make: 'Yamaha',
    model: 'WaveRunner',
    name: 'Yamaha WaveRunner',
    year: 2021,
    capacity: 2,
    users_id: 1,
    description: `The 1800 Sport Angler was designed as a trolling walleye, lake trout or salmon fishing boat. The spacious cockpit is perfect for a trolling fishing boat and designed for ease of mobility and fishability. This 18’ walleye, lake trout or salmon fishing boat targets big water where trolling is desired.`,
    img_url: 'https://getmyboat-user-images1.imgix.net/images/5f80bc33109cc/boat-rentals-marina-del-rey-california-yamaha-ex-deluxe-processed.jpg?auto=format%2Ccompress&fit=clip&h=None&ixlib=react-9.0.3&q=80&w=None&q=50&lossless=true&w=716&h=448',
    category: 'Personal Watercraft',
  },
  {
    pointval: 250,
    make: 'Yamaha',
    model: 'WaveRunner',
    name: 'Yamaha WaveRunner',
    year: 2021,
    capacity: 2,
    users_id: 1,
    description: `The 1800 Sport Angler was designed as a trolling walleye, lake trout or salmon fishing boat. The spacious cockpit is perfect for a trolling fishing boat and designed for ease of mobility and fishability. This 18’ walleye, lake trout or salmon fishing boat targets big water where trolling is desired.`,
    img_url: 'https://www.yamahawaverunners.com/globalassets/_waverunners/homepage/scurve/ride/yamaha-boats-2021-fx-ho-red-ride.jpg',
    category: 'Personal Watercraft',
  },
  {
    pointval: 250,
    make: 'See Doo',
    model: 'GTI 130',
    name: 'See Doo GTI 130',
    year: 2021,
    capacity: 2,
    users_id: 1,
    description: `The 1800 Sport Angler was designed as a trolling walleye, lake trout or salmon fishing boat. The spacious cockpit is perfect for a trolling fishing boat and designed for ease of mobility and fishability. This 18’ walleye, lake trout or salmon fishing boat targets big water where trolling is desired.`,
    img_url: 'https://cdn.getyourguide.com/img/tour/5e26716feb0df.jpeg/146.jpg',
    category: 'Personal Watercraft',
  },
  {
    pointval: 250,
    make: 'Kawasaki',
    model: 'JetSki',
    name: 'Kawasaki JetSki',
    year: 2021,
    capacity: 2,
    users_id: 1,
    description: `The 1800 Sport Angler was designed as a trolling walleye, lake trout or salmon fishing boat. The spacious cockpit is perfect for a trolling fishing boat and designed for ease of mobility and fishability. This 18’ walleye, lake trout or salmon fishing boat targets big water where trolling is desired.`,
    img_url: 'https://hawaiiwatersportscenter.com/wp-content/uploads/2015/02/HWS_Jetski_H-.jpg',
    category: 'Personal Watercraft',
  }
];

const seedItem = () => Item.bulkCreate(Itemdata);

module.exports = seedItem;