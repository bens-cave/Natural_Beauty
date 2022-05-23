const parksRec = [
  {
    code: 'SDNP',
    name: 'South Downs National Park',
    location: [50.931637, -0.524218, 8],
    postcode: 'GU29 9DH',
    description: 'Not only have the centuries of human habitation shaped the National Park but the landscape has and still does, dictate where people have chosen to live and work the land. This is a landscape rich in folklore and legend that has inspired generations of writers, artists and storytellers who have flocked to witness the beauty of the rolling chalk downland and the wooded heaths of the National Park.',
    parkImg: ['../../assets/parkImgs/SDNP/SDNP1.png', '../../assets/parkImgs/SDNP/SDNP2.jpeg', '../../assets/parkImgs/SDNP/SDNP3.jpeg'],
    website: 'https://www.southdowns.gov.uk/',
    iconicWildlife: ['burnt orchid', 'round-headed rampion', 'otter', 'skylark', 'barn owl', 'brown trout', 'barbastelle bat', 'chalk carpet moth', 'sundew (carnivorous plant)'],
    keyWildlife: 'butterflies',
    trails: [{
      name: 'South Downs Way',
      link: 'https://www.nationaltrail.co.uk/en_GB/trails/south-downs-way/'
    },
    {
      name: 'Kingley Vale Trail',
      link: 'https://www.thegreatsussexway.org/things-to-do/kingley-vale-trail/'
    },
    {
      name: 'The Serpent Trail',
      link: 'https://www.southdowns.gov.uk/get-active/on-foot/serpent-trail/'
    }
    ],
    activities: ['Walking', 'Hiking', 'Cycling', 'Kayaking', 'Paddleboarding', 'Foraging', 'Stargazing'],
    reviews: {
      beauty: 5,
      wildlife: 3,
      trails: 5,
      camping: 2,
      // foodDrink: 4,
    },
    // usersSay: [SELECT],
    attractions: [
      {
        name: 'Stargazing at SDNP International Dark Skies Reserve',
        code: 'IDSR',
        location: [50.977683, -0.980305],
        category: 'Wild adventure',
        description: 'As one of 10 Dark Skies Discovery Sites within the National Park, Seven Sisters Country Park is one of the best places to view the night sky. On a clear night from October through to March, it\'s possible to catch glimpses of the Milky Way as it rises above the famous chalk cliffs.',
        keyFeature: 'Stargazing',
        localImg: ['../../assets/parkImgs/SDNP/IDSR1.jpeg', '../../assets/parkImgs/SDNP/IDSR2.jpeg', '../../assets/parkImgs/SDNP/IDSR3.jpeg'],
        moreInfo: 'https://www.southdowns.gov.uk/dark-night-skies/where-to-stargaze/',
        // usersSay: [SELECT]
      },
      {
        name: 'Seven Sisters Experience',
        code: 'SSE',
        location: [50.776146, 0.152066],
        category: 'Spectacular scenery',
        description: 'Globally-important habitats, unique wildlife and heritage secrets make Seven Sisters a truly special place. Your route will take you through an area popular with smugglers, folklore and a diverse natural wildlife habitat ranging from forest, chalk downland and the seashore.',
        keyFeature: 'Spectacular coastal views',
        localImg: ['../../assets/parkImgs/SDNP/SSE1.jpeg', '../../assets/parkImgs/SDNP/SSE2.jpeg', '../../assets/parkImgs/SDNP/SSE3.jpeg'],
        moreInfo: 'https://www.sevensisters.org.uk/',
        // usersSay: [SELECT]
      },
      {
        name: 'Arundel Wetland Centre',
        code: 'AWC',
        location: [50.864231, -0.550414],
        category: 'Hidden gem',
        description: 'A gorgeous nature reserve, home to incredible wetland birds. With wide-open spaces and wetlands full of the sights and sounds of nature, there\'s plenty to see and do at Arundel Wetland Centre.',
        keyFeature: 'Bird-watching',
        localImg: ['../../assets/parkImgs/SDNP/AWC1.jpeg', '../../assets/parkImgs/SDNP/AWC2.jpeg', '../../assets/parkImgs/SDNP/AWC4.jpeg'],
        moreInfo: 'https://www.visitarundel.co.uk/listing/arundel-wetland-centre/',
        // usersSay: [SELECT]
      }
    ]
  },
  {
    code: 'EXNP',
    name: 'Exmoor National Park',
    location: [51.14, -3.666344, 9.1],
    postcode: 'TA22 9HL',
    description: 'Famous for its wild deer and ponies, dramatic coastline and rugged heather moorland, there\'s plenty to see and do at Exmoor NP.  Large areas of open moorland provide a sense of remoteness and tranquillity rare in southern Britain. Spectacular coastal views, deep wooded valleys, high sea cliffs and fast flowing streams all combine to form a rich and distinct mosaic.',
    parkImg: ['../../assets/parkImgs/EMNP/EMNP1.jpeg', '../../assets/parkImgs/EMNP/EMNP2.jpeg', '../../assets/parkImgs/EMNP/EMNP3.png'],
    website: 'https://www.exmoor-nationalpark.gov.uk/',
    iconicWildlife: ['wild red deer', 'Exmoor ponies', 'otters', 'butterflies',],
    keyWildlife: 'wild red deer',
    trails: [{
      name: 'The South West Coastal Path',
      link: 'https://www.southwestcoastpath.org.uk/walk-coast-path/south-west-coast-path-national-trail/day-walks/#'
    },
    {
      name: 'The Tarr Steps',
      link: 'https://www.thebestofexmoor.co.uk/blog/tarr-steps/'
    },
    {
      name: 'Valley of the Rocks',
      link: 'https://www.alltrails.com/trail/england/devon/valley-of-the-rocks-and-lynton-outer-loop'
    }
    ],
    activities: ['Walking', 'Hiking', 'Cycling', 'Horse-riding', 'Wild Swmming', 'Sea-Kayaking', 'Stargazing'],
    reviews: {
      beauty: 5,
      wildlife: 3,
      trails: 5,
      camping: 2,
      // foodDrink: 4,
    },
    // usersSay: [SELECT],
    attractions: [
      {
        name: 'Lynton & Lynmouth Cliff Railway',
        code: 'LCR',
        location: [51.1353, -3.5004],
        category: 'Hidden gem',
        description: 'The Lynton and Lynmouth Cliff Railway is the highest and steepest water powered railway in the world. Who would have thought it, quiet little Exmoor has it\'s very own World Number 1. If you\'re after a great spot for a view of the coast with a cream tea to finish, this will be hard to beat',
        keyFeature: 'Spectacular views',
        localImg: ['../../assets/parkImgs/EMNP/LCR1.jpeg', '../../assets/parkImgs/EMNP/LCR2.jpeg', '../../assets/parkImgs/EMNP/LCR3.jpeg'],
        moreInfo: 'https://www.thebestofexmoor.co.uk/blog/lynton-lynmouth-cliff-railway/',
        // usersSay: [SELECT]
      },
      {
        name: 'Visit Dunster Castle',
        code: 'DC',
        location: [51.1859, -3.4389],
        category: 'Spectacular scenery',
        description: 'Dunster Castle is steeped in history, well yes, it\'s a castle, but this building is so wonderfully preserved with the efforts of the National Trust, keeping this castle authentic and true to history. Great views of castle on approach, sitting majestically high, with Fabulous gardens, fascinating house and relaxed atmosphere.',
        keyFeature: 'Historically preserved castle',
        localImg: ['../../assets/parkImgs/EMNP/DC1.jpeg', '../../assets/parkImgs/EMNP/DC2.jpeg', '../../assets/parkImgs/EMNP/DC3.jpeg'],
        moreInfo: 'https://www.thebestofexmoor.co.uk/blog/dunster-castle/',
        // usersSay: [SELECT]
      },
      {
        name: 'Wild-swimming at Watersmeet',
        code: 'WSW',
        location: [50.864231, -0.550414],
        category: 'Wild adventure',
        description: 'The East Lyn River and Hoar Oak Water come together at Watersmeet to create a glorious waterfall. It\'s a fantastic spot for wild swimming, with small plunge pools by the waterfall, or, a little further along the river from there, you will find Long Pool which stretches further and goes deeper…',
        keyFeature: 'Wild-swmming',
        localImg: ['../../assets/parkImgs/EMNP/WSW1.jpeg', '../../assets/parkImgs/EMNP/WSW2.jpeg', '../../assets/parkImgs/EMNP/WSW3.jpeg'],
        moreInfo: 'https://www.visitarundel.co.uk/listing/arundel-wetland-centre/',
        // usersSay: [SELECT]
      }
    ]
  },
  {
    code: 'YDNP',
    name: 'Yorkshire Dales National Park',
    location: [54.213555, -2.087339, 8.6],
    postcode: 'DL8 3EL',
    description: 'The Yorkshire Dales has many moods; it can be wild and windswept or quietly tranquil with valleys full of hay meadows, drystone walls and barns. Spectacular waterfalls and ancient woodlands contrast with the scattered remains of rural industries.',
    parkImg: ['../../assets/parkImgs/YDNP/YDNP1.jpeg', '../../assets/parkImgs/YDNP/YDNP2.jpeg', '../../assets/parkImgs/YDNP/YDNP3.png'],
    website: 'https://www.yorkshiredales.org.uk/',
    iconicWildlife: ['curlews', 'lapwings', 'black grouse', 'skylarks', 'peregrine falcons', 'red squirrels'],
    keyWildlife: 'peregrine falcons',
    trails: [{
      name: 'Yorkshire Three Peak Challenge',
      link: 'https://www.threepeakschallenge.uk/yorkshire-three-peaks-challenge/'
    },
    {
      name: 'Janet\'s Foss, Gordale Scar & Malham Cove',
      link: 'https://www.alltrails.com/trail/england/north-yorkshire/janet-s-foss-gordale-scar-and-malham-cove?ref=result-card'
    },
    {
      name: 'Aysgarth Falls & Freeholder\'s Wood',
      link: 'https://www.alltrails.com/trail/england/north-yorkshire/aysgarth-woods-and-waterfalls-circular'
    }
    ],
    activities: ['Walking', 'Hiking', 'Cycling', 'Horse-riding', 'Bird-watching', 'Wild Swmming', 'Waterfalls', 'Stargazing'],
    reviews: {
      beauty: 5,
      wildlife: 2,
      trails: 5,
      camping: 2,
      // foodDrink: 4,
    },
    // usersSay: [SELECT],
    attractions: [
      {
        name: 'The 3 Peaks Challenge',
        code: '3PC',
        location: [54.227730, -2.402498],
        category: 'Wild adventure',
        description: 'The Yorkshire Dales has some of the most spectacular peaks in England, and the famous Yorkshire Three Peaks of Whernside, Ingleborough and Pen-y-Ghent are amongst the highest in the county, providing an inspiring challenge to walkers from around the world.',
        keyFeature: 'Hiking',
        localImg: ['../../assets/parkImgs/YDNP/3PC1.jpeg', '../../assets/parkImgs/YDNP/3PC2.jpeg', '../../assets/parkImgs/YDNP/3PC3.png'],
        moreInfo: 'https://www.threepeakschallenge.uk/yorkshire-three-peaks-challenge/',
        // usersSay: [SELECT]
      },
      {
        name: 'Stump Cross Caverns',
        code: 'SCC',
        location: [54.067506, -2.0054333],
        category: 'Spectacular scenery',
        description: 'An ancient natural cave formation deep underneath the Yorkshire Dales',
        keyFeature: 'Underground caves',
        localImg: ['../../assets/parkImgs/YDNP/SCC1.jpeg', '../../assets/parkImgs/YDNP/SCC2.jpeg', '../../assets/parkImgs/YDNP/SCC3.jpeg'],
        moreInfo: 'https://www.stumpcrosscaverns.co.uk/',
        // usersSay: [SELECT]
      },
      {
        name: 'Jump in at Loup Scar',
        code: 'JLC',
        location: [54.3695, -1.572196],
        category: 'Hidden gem',
        description: 'A fantastic stretch of grassy riverside incorporating river, meadow and beaches, with the limestone cliffs and the gorges of Loup Scar. There\'s a terrifying jump at Loup Scar, from the path on river R, into a small very deep plunge pool.',
        keyFeature: 'Wild-swmming',
        localImg: ['../../assets/parkImgs/YDNP/JLC1.jpeg', '../../assets/parkImgs/YDNP/JLC2.jpeg', '../../assets/parkImgs/YDNP/JLC3.jpeg'],
        moreInfo: 'https://www.wildswimming.co.uk/adventures-yorkshire-dales/',
        // usersSay: [SELECT]
      }
    ]
  },
  {
    code: 'PDNP',
    name: 'Peak District National Park',
    location: [53.308887, -1.812726, 8.7],
    postcode: 'S33 8WS',
    description: 'Known as a land of two halves, the Peak District is divided into the White Peak with steep limestone valleys in the North, and dramatic gritstone ridges and stark moorland plateaus making up the Dark Peak in the South.',
    parkImg: ['../../assets/parkImgs/PDNP/PDNP1.jpeg', '../../assets/parkImgs/PDNP/PDNP2.jpeg', '../../assets/parkImgs/PDNP/PDNP3.jpeg'],
    website: 'https://www.peakdistrict.gov.uk/',
    iconicWildlife: ['wild red deer', 'owls', 'curlews', 'sparrowhawks', 'buzzards'],
    keyWildlife: 'wild red deer',
    trails: [{
      name: 'The Kinder moorland walk',
      link: 'https://www.nationaltrust.org.uk/kinder-edale-and-the-dark-peak/trails/kinder-moorland-walk---a-glimpse-into-the-future'
    },
    {
      name: 'Flash and Three Shires Head Circular',
      link: 'https://www.alltrails.com/trail/england/staffordshire/flash-and-three-shires-head-circular'
    },
    {
      name: 'Dovestone Reservoir and Chew Reservoir Circular',
      link: 'https://www.alltrails.com/trail/england/greater-manchester/dovestone-reservoir-and-chew-reservoir-circular'
    }
    ],
    activities: ['Walking', 'Hiking', 'Cycling', 'Boating', 'Sailing', 'Rock climbing', 'Bird-watching', 'Stargazing'],
    reviews: {
      beauty: 5,
      wildlife: 3,
      trails: 5,
      camping: 3,
      // foodDrink: 4,
    },
    // usersSay: [SELECT],
    attractions: [
      {
        name: 'Ridge Walk Mam Tor to Losehill',
        code: 'RW',
        location: [53.3492, -1.8096],
        category: 'Spectacular scenery',
        description: 'As one of 10 Dark Skies Discovery Sites within the National Park, Seven Sisters Country Park is one of the best places to view the night sky. On a clear night from October through to March, it\'s possible to catch glimpses of the Milky Way as it rises above the famous chalk cliffs.',
        keyFeature: 'Breath-taking views',
        localImg: ['../../assets/parkImgs/PDNP/RW1.jpeg', '../../assets/parkImgs/PDNP/RW2.jpeg', '../../assets/parkImgs/PDNP/RW3.jpeg'],
        moreInfo: 'https://www.tripadvisor.co.uk/Attraction_Review-g499576-d3474329-Reviews-Ridge_Walk_Mam_Tor_to_Losehill-Castleton_Hope_Valley_Peak_District_National_Park_.html',
        // usersSay: [SELECT]
      },
      {
        name: 'Stay under the stars in a wooden pod',
        code: 'WP',
        location: [53.344846, -1.646877],
        category: 'Wild adventure',
        description: 'Enjoy your wilderness with a little bit of luxury, stay under the stars in your very own wooden camping pod',
        keyFeature: '(Almost) wild camping',
        localImg: ['../../assets/parkImgs/PDNP/WP1.jpeg', '../../assets/parkImgs/PDNP/WP2.jpeg', '../../assets/parkImgs/PDNP/WP3.jpeg'],
        moreInfo: 'https://www.peakdistrict.gov.uk/visiting/things-to-do/camping/camping-northlees/camping-pods',
        // usersSay: [SELECT]
      },
      {
        name: 'Admire the Ice Age cave art at Creswell Crags',
        code: 'IACA',
        location: [53.263863, -1.193336],
        category: 'Hidden gem',
        description: 'You\'ve probably heard of the Peak District and Derbyshire\'s famous show caverns at Castleton, but did you know that the caves at Creswell Crags, near Bolsover, are home to Britain\'s only Ice Age rock art? Nestled in a limestone gorge of caves and fissures, this site of international importance is a peaceful place to explore, with stunning lakeside walks.',
        keyFeature: 'Cave art',
        localImg: ['../../assets/parkImgs/PDNP/IACA1.jpeg', '../../assets/parkImgs/PDNP/IACA2.jpeg', '../../assets/parkImgs/PDNP/IACA3.jpeg'],
        moreInfo: 'https://www.creswell-crags.org.uk/',
        // usersSay: [SELECT]
      }
    ]
  },
  {
    code: 'DMNP',
    name: 'Dartmoor National Park',
    location: [50.564841, -3.898735, 9.4],
    postcode: 'TQ13 9JQ',
    description: 'Wild, open moorlands and deep river valleys, with a rich history and rare wildlife, the story of Dartmoor\'s cherished and protected landscape and wildlife is one of powerful geological forces, relentless weather and more than 10,000 years of human activity.',
    parkImg: ['../../assets/parkImgs/DMNP/DMNP1.jpeg', '../../assets/parkImgs/DMNP/DMNP2.jpeg', '../../assets/parkImgs/DMNP/DMNP3.jpeg'],
    website: 'https://www.dartmoor.gov.uk/',
    iconicWildlife: ['blue ground beetle', 'cuckoo', 'marsh fritillary butterfly', 'otter', 'ash black slug', 'hazel dormouse', 'rare bats'],
    keyWildlife: 'butterflies',
    trails: [{
      name: 'Buckfastleigh Walk',
      link: 'https://www.dartmoor.gov.uk/enjoy-dartmoor/outdoor-activities/walking/walking-routes/welcome-to-dartmoor-buckfastleigh-walk'
    },
    {
      name: 'Meldon Reservoir and Black Tor',
      link: 'https://www.alltrails.com/trail/england/devon/meldon-reservoir-and-black-tor'
    },
    {
      name: 'Becky Falls Ancient Woodland park',
      link: 'https://www.beckyfalls.com/info/walking-at-becky-falls/'
    }
    ],
    activities: ['Walking', 'Hiking', 'Cycling', 'Wild camping', 'Canoeing', 'Rock climbing', 'Bird-watching', 'Letterboxing'],
    reviews: {
      beauty: 5,
      wildlife: 4,
      trails: 5,
      camping: 3,
      // foodDrink: 4,
    },
    // usersSay: [SELECT],
    attractions: [
      {
        name: 'Berry Pomeror Castle ruins',
        code: 'BP',
        location: [50.4492, -3.6365],
        category: 'Spectacular scenery',
        description: 'Tucked away in a deep wooded valley, Berry Pomeroy Castle is the perfect romantic ruin with a colourful history of intrigue.',
        keyFeature: 'Castle ruins',
        localImg: ['../../assets/parkImgs/DMNP/BP1.jpeg', '../../assets/parkImgs/DMNP/BP2.jpeg', '../../assets/parkImgs/DMNP/BP3.jpeg'],
        moreInfo: '',
        // usersSay: [SELECT]
      },
      {
        name: 'Wild camping',
        code: 'WC',
        location: [50.445178, -3.910793],
        category: 'Wild adventure',
        description: 'As the only place in England that wild camping is legal, at Dartmoor it is also actively encouraged. Piles Copse is an idyllic place to wild camp, with a pretty stream setting',
        keyFeature: 'Wild camping',
        localImg: ['../../assets/parkImgs/DMNP/WC1.jpeg', '../../assets/parkImgs/DMNP/WC2.jpeg', '../../assets/parkImgs/DMNP/WC3.jpeg'],
        moreInfo: 'https://pilescopse.org.uk/camping/',
        // usersSay: [SELECT]
      },
      {
        name: 'Letterboxing',
        code: 'LB',
        location: [50.6553, -3.9774],
        category: 'Hidden gem',
        description: 'In 1854, James Perrott set up a small cairn at Cranmere Pool, inside he put a glass jar where visitors who had ventured to the lonely, bleak spot could leave their visiting cards. To this day, hikers leave a letter or postcard inside a box along the trail, for the next person to discover.',
        keyFeature: 'Letterboxing',
        localImg: ['../../assets/parkImgs/DMNP/LB1.jpeg', '../../assets/parkImgs/DMNP/LB2.jpeg', '../../assets/parkImgs/DMNP/LB3.jpeg'],
        moreInfo: 'https://www.dartmoor.gov.uk/enjoy-dartmoor/outdoor-activities/letterboxing-and-geocaching',
        // usersSay: [SELECT]
      }
    ]
  },
  {
    code: 'NYNP',
    name: 'North York Moors National Park',
    location: [54.317068, -0.877769, 8.7],
    postcode: 'YO62 5BP',
    description: 'The North York Moors is a special place, forged by nature, shaped over generations – where peace and beauty rub shoulders with a rich history and a warm welcome.',
    parkImg: ['../../assets/parkImgs/NYNP/NYNP1.jpeg', '../../assets/parkImgs/NYNP/NYNP2.jpeg', '../../assets/parkImgs/NYNP/NYNP3.jpeg'],
    website: 'https://www.northyorkmoors.org.uk/',
    iconicWildlife: ['minke whales', 'porpoise', 'dolphins', 'badger', 'stout', 'weasel', 'merlin', 'honey buzzards'],
    keyWildlife: 'Minke whales',
    trails: [{
      name: 'Whitby to Robin Hood\'s Bay',
      link: 'https://www.alltrails.com/explore/trail/england/north-yorkshire/whitby-to-robin-hood-s-bay?ref=result-card'
    },
    {
      name: 'Helmsley and Rievaulx Abbey',
      link: 'https://www.alltrails.com/explore/trail/england/north-yorkshire/helmsley-and-rievaulx-abbey?ref=result-card'
    },
    {
      name: 'Grosmont to Beck Hole',
      link: 'https://www.northyorkmoors.org.uk/visiting/enjoy-outdoors/walking/our-walks/walking-routes/grosmont-to-beck-hole'
    }
    ],
    activities: ['Walking', 'Cycling', 'Fell-running', 'Sailing', 'Rock climbing', 'Bird-watching', 'Stargazing'],
    reviews: {
      beauty: 5,
      wildlife: 4,
      trails: 4,
      camping: 2,
      // foodDrink: 4,
    },
    // usersSay: [SELECT],
    attractions: [
      {
        name: 'Cleveland Way National Trail',
        code: 'CW',
        location: [54.4043, -1.2398],
        category: 'Spectacular scenery',
        description: 'Not for the faint hearted, this is a walk through 109 miles of beautiful and ever-changing North Yorkshire landscapes and scenery. Starting from the attractive market town of Helmsley, the Cleveland Way heads across the inspirational, and breathtaking heather moorland and from here it\'s a visual feast along the North Yorkshire coastline to Filey, passing old fishing villages and lively coastal towns.',
        keyFeature: 'Breathtaking views',
        localImg: ['../../assets/parkImgs/NYNP/CW1.jpeg', '../../assets/parkImgs/NYNP/CW2.jpeg', '../../assets/parkImgs/NYNP/CW3.jpeg'],
        moreInfo: 'https://www.nationaltrail.co.uk/en_GB/trails/cleveland-way/',
        // usersSay: [SELECT]
      },
      {
        name: 'Whitby Whale Watching',
        code: 'WW',
        location: [54.4872, -0.6143],
        category: 'Wild adventures',
        description: 'Every year late in summer whales arrive in the North Sea just off the coast of Whitby to feast on the migrating herring which come to the Yorkshire coast to spawn.This also attracts cetaceans, sharks, birds and seals to feed.',
        keyFeature: 'Whale watching',
        localImg: ['../../assets/parkImgs/NYNP/WW1.jpeg', '../../assets/parkImgs/NYNP/WW2.jpeg', '../../assets/parkImgs/NYNP/WW3.jpeg'],
        moreInfo: 'https://www.thewhitbyguide.co.uk/whitby-whale-watching/',
        // usersSay: [SELECT]
      },
      {
        name: 'Hostelling at Boggle Hole',
        code: 'BH',
        location: [54.4228, -0.5314],
        category: 'Hidden gem',
        description: 'Tucked away in an old smuggler\'s cove, the lovely Old Mill will delight and inspire you, with its treasure trails, stunning sea views and wooded grounds. The cave has a sharp dark energy, with rumours of the poltergeist, Nawty Bogle',
        keyFeature: 'Hostelling',
        localImg: ['../../assets/parkImgs/NYNP/WW1.jpeg', '../../assets/parkImgs/NYNP/WW2.jpeg', '../../assets/parkImgs/NYNP/WW3.jpeg'],
        moreInfo: 'https://www.yha.org.uk/hostel/yha-boggle-hole',
        // usersSay: [SELECT]
      }
    ]
  },
  {
    code: 'NFNP',
    name: 'New Forest National Park',
    location: [50.869155, -1.556062, 9.6],
    postcode: 'SO41 9ZG',
    description: 'A world capital for wildlife. New Forest National Parkhas ancient woodlands, wild open heathlands and stretches of beautiful coastline.',
    parkImg: ['../../assets/parkImgs/NFNP/NFNP1.jpeg', '../../assets/parkImgs/NFNP/NFNP2.jpeg', '../../assets/parkImgs/NFNP/NFNP3.jpeg'],
    website: 'https://www.newforestnpa.gov.uk/',
    iconicWildlife: ['new forest ponies', 'bats', 'dragonflies', 'butterflies', 'adders', 'sand lizards', 'deer', 'noble chafer beetle'],
    keyWildlife: 'new forest ponies',
    trails: [{
      name: 'Bolderwood: Radnor trail',
      link: 'https://www.newforestnpa.gov.uk/things-to-do/walking/new-forest-walks/radnor-trail-bolderwood/'
    },
    {
      name: 'Knightswood Oak Stroll',
      link: 'https://www.newforestnpa.gov.uk/things-to-do/walking/new-forest-walks/knightwood-oak-stroll/'
    },
    {
      name: 'Stuckton Iron works',
      link: 'https://www.newforestnpa.gov.uk/things-to-do/walking/new-forest-walks/stuckton-iron-works/'
    }
    ],
    activities: ['Walking', 'Hiking', 'Cycling', 'Boating', 'Sailing', 'Kayaking', 'Bird-watching', 'Stargazing'],
    reviews: {
      beauty: 5,
      wildlife: 3,
      trails: 5,
      camping: 3,
      // foodDrink: 4,
    },
    // usersSay: [SELECT],
    attractions: [
      {
        name: 'Visit Exbury Gardens',
        code: 'EG',
        location: [50.8030, -1.3998],
        category: 'Spectacular scenery',
        description: 'Exbury Gardens is a stunning 200-acre informal woodland garden in Hampshire, world-famous for the Rothschild collections of rhododendrons and azaleas, and often considered the finest garden of its type in the United Kingdom. There\' even a kitsch steam train that runs through it!',
        keyFeature: '',
        localImg: ['../../assets/parkImgs/NFNP/EG1.jpeg', '../../assets/parkImgs/NFNP/EG2.jpeg', '../../assets/parkImgs/NFNP/EG3.jpeg'],
        moreInfo: 'https://www.exbury.co.uk/gardens',
        // usersSay: [SELECT]
      },
      {
        name: 'Get electric',
        code: 'EB',
        location: [50.7238, -1.5730],
        category: 'Wild adventures',
        description: 'Best known for its heathland, forest trails and native ponies, New Forest National Park is paradise for nature lovers. Why not hire an electric bike to ride your way round hundreds of kilometres of glorious land.',
        keyFeature: 'Water Sports',
        localImg: ['../../assets/parkImgs/NFNP/EG1.jpeg', '../../assets/parkImgs/NFNP/EB2.jpeg', '../../assets/parkImgs/NFNP/EB3.jpeg'],
        moreInfo: 'https://www.thenewforest.co.uk/things-to-do/jaunt-e-bikes-p1421231',
        // usersSay: [SELECT]
      },
      {
        name: 'Take to the Water',
        code: 'WS',
        location: [50.9016, -1.7801],
        category: 'Hidden gem',
        description: 'One of the New Forest\'s many hidden gems is that it has 43 miles of glorious coastline. From luxury sunset cruises to adrenalin-rush Rib rides plus the south coast\'s first water-skiing and wakeboarding cable system, there\'s plenty to keep you entertained',
        keyFeature: 'Water Sports',
        localImg: ['../../assets/parkImgs/NFNP/WS1.jpeg', '../../assets/parkImgs/NFNP/WS2.jpeg', '../../assets/parkImgs/NFNP/WS3.jpeg'],
        moreInfo: 'https://www.thenewforest.co.uk/things-to-do/activities/watersports',
        // usersSay: [SELECT]
      }
    ]
  },
  {
    code: 'TBNP',
    name: 'The Broads',
    location: [52.6250, 1.5458, 9.3],
    postcode: 'NR1 1RY',
    description: 'The Broads National Park is made up of over 60 open areas of water known as Broads and seven rivers, the Ant, Bure, Chet, Thurne, Waveney, Wensum and Yare. It is also home to a huge variety of the rarest wildlife - greater than any other national park in Britain - and has become a \'must-see\' for nature lovers.',
    parkImg: ['../../assets/parkImgs/TBNP/TBNP1.jpeg', '../../assets/parkImgs/TBNP/TBNP2.jpeg', '../../assets/parkImgs/TBNP/TBNP3.jpeg'],
    website: 'https://www.visitthebroads.co.uk/', 
    iconicWildlife: ['water vole', 'cuckoo', 'european eel', 'chinese water deer', 'norfolk hawker dragonfly'],
    keyWildlife: 'bittern',
    trails: [{
      name: 'Barton Board Walk',
      link: 'https://www.visitthebroads.co.uk/things-to-do/walking-and-cycling/walking/product-detail?listing=3&key=705501'
      }, 
      {
        name: 'Beccles Marsh Trail Walk',
        link: 'https://www.visitthebroads.co.uk/things-to-do/walking-and-cycling/walking/product-detail?listing=3&key=700931'
      },
      {
        name: 'Loddon Marshes Walk',
        link: 'https://www.visitthebroads.co.uk/search/product-detail?listing=3&key=710701'
      }
    ],
    activities: ['Walking', 'Hiking', 'Cycling', 'Boating', 'Sailing', 'Rock climbing', 'Bird-watching', 'Stargazing'],
    reviews: {
      beauty: 2,
      wildlife: 3,
      trails: 4,
      camping: 2,
      // foodDrink: 4,
    },
    // usersSay: [SELECT],
    attractions: [
      {
        name: 'BeWILDerwood',
        code: 'B',
        location: [52.7088, 1.4502],
        category: 'adventure park',
        description: 'BeWILDerwood is an award winning wild and imaginative outdoor adventure park. With magical treehouses and hints of intriguing characters, BeWILDerwood brings a curious difference to The Broads. The concept, put quite simply, is one of child’s play. The vision: to enhance an already striking natural playground and encourage children and their families to enjoy traditional, imaginative and healthy outdoor play together.',
        keyFeature: 'family oriented',
        localImg: ['../../assets/parkImgs/TBNP/B1.jpeg', '../../assets/parkImgs/TBNP/B2.jpeg', '../../assets/parkImgs/TBNP/B3.jpeg'],
        moreInfo: 'http://www.bewilderwood.co.uk/',
        // usersSay: [SELECT]
      },
      {
        name: 'Redwings Horse Sanctuary Visitor Centre Caldecott',
        code: 'RHSVCC',
        location: [52.551497, 1.647606],
        category: 'horse-riding',
        description: 'Redwings Caldecott, a Visit England Quality Assured Visitor Attraction, is a must-see for all donkey and mule lovers with a herd of over 30 of the adorable, long-eared creatures! Among the gorgeous rescued residents, you can enjoy cuddles with cute little donkey Esther who was rescued from the horrific conditions of Spindle Farm in Amersham, Buckinghamshire, in 2008.',
        keyFeature: 'horse-riding',
        localImg: ['../../assets/parkImgs/TBNP/RHSVCC1.jpeg', '../../assets/parkImgs/TBNP/RHSVCC2.jpeg', '../../assets/parkImgs/TBNP/RHSVCC3.jpeg'],
        moreInfo: 'https://www.redwings.org.uk/get-involved/visit/caldecott-visitor-centre',
        // usersSay: [SELECT]
      },
      {
        name: 'Thrigby Hall Wildlife Gardens',
        code: 'THWG',
        location: [52.6525, 1.6361],
        category: 'wildlife park',
        description: 'Thrigby Hall Wildlife Gardens, near Great Yarmouth have 250-year-old landscaped gardens, a play area and superb willow pattern garden. Renowned for its collection of Asian Mammals, birds and reptiles in the pleasantly landscaped grounds and gardens of Thrigby Hall.',
        keyFeature: 'rare animals',
        localImg: ['../../assets/parkImgs/TBNP/THWG1.jpeg', '../../assets/parkImgs/TBNP/THWG2.jpeg', '../../assets/parkImgs/TBNP/THWG3.jpeg'],
        moreInfo: 'https://www.thrigbyhall.com/',
        // usersSay: [SELECT]
      }
    ]
  },
  {
    code: 'LDNP',
    name: 'Lake District National Park',
    location: [54.475, -3.078942, 8.7],
    postcode: 'LA23 1LJ',
    description: 'England\'s largest National Park and a World Heritage Site, home to Scafell Pike - its highest mountain, Wastwater - its deepest lake and thriving communities like Keswick and Bowness-on-Windermere.',
    parkImg: ['../../assets/parkImgs/LDNP/LDNP1.jpeg', '../../assets/parkImgs/LDNP/LDNP2.webp', '../../assets/parkImgs/LDNP/LDNP3.webp'],
    website: 'https://www.lakedistrict.gov.uk/', 
    iconicWildlife: ['red and roe deer', 'otter', 'herdwick sheep', 'osprey', 'peregrine falcon'],
    keyWildlife: 'red squirrel',
    trails: [{
      name: 'Coniston Ride',
      link: 'https://www.lakedistrict.gov.uk/visiting/things-to-do/walking/routes-and-maps/routes-and-maps2/map-2'
      }, 
      {
        name: 'Monk Coniston',
        link: 'https://www.lakedistrict.gov.uk/visiting/things-to-do/walking/mileswithoutstiles/mws16'
      },
      {
        name: 'Friar\'s Crag',
        link: 'https://www.lakedistrict.gov.uk/visiting/things-to-do/walking/mileswithoutstiles/mws36'
      }
    ],
    activities: ['Walking', 'Hiking', 'Cycling', 'Boating', 'Sailing', 'Rock climbing', 'Bird-watching', 'Stargazing'],
    reviews: {
      beauty: 5,
      wildlife: 3,
      trails: 5,
      camping: 2,
      // foodDrink: 4,
    },
    // usersSay: [SELECT],
    attractions: [
      {
        name: 'Ennerdale Valley',
        code: 'EV',
        location: [54.52, -3.376111],
        category: 'Stargazing',
        description: 'A remote valley in the North West of the Lake District, Ennerdale is managed to increase wildlife and limit human intervention. There are two car parks at the Western end of the valley and a number of places you can stay. With some of the darkest skies in Cumbria, and real natural wilderness feel, Ennerdale is the perfect place for some serious star gazing.',
        keyFeature: 'Stargazing',
        localImg: ['../../assets/parkImgs/LDNP/EV1.jpeg', '../../assets/parkImgs/LDNP/EV2.jpeg'],
        moreInfo: 'https://www.wildennerdale.co.uk/',
        // usersSay: [SELECT]
      },
      {
        name: 'Hardknott Roman Fort',
        code: 'HRF',
        location: [54.4032, -3.2053],
        category: 'historical',
        description: 'This far-flung outpost of the Roman Empire guarded the pass on the road from Ravenglass to Ambleside. It was built in the second century during Hadrian\'s reign and garrisoned by troops from the eastern Adriatic, who policed the area and defended the frontier. Thanks to its remote setting, the ruins are well preserved.',
        keyFeature: 'roman remains',
        localImg: ['../../assets/parkImgs/LDNP/HRF1.jpeg', '../../assets/parkImgs/LDNP/HRF2.jpeg', '../../assets/parkImgs/LDNP/HRF3.jpeg'],
        moreInfo: 'https://www.english-heritage.org.uk/visit/places/hardknott-roman-fort',
        // usersSay: [SELECT]
      },
      {
        name: 'Coniston Boating Centre',
        code: 'CBC',
        location: [54.3648, -3.0667],
        category: 'water activities',
        description: 'Not-for-profit attraction run by the Lake District National Park Authority. Perfect for the family - hire electric motor boats, take the helm of a traditional wooden rowing boat, try out sit on top kayaks, open Canadian canoes or have fun splashing about on paddleboards.',
        keyFeature: 'Boats',
        localImg: ['../../assets/parkImgs/LDNP/CBC1.jpeg', '../../assets/parkImgs/LDNP/CBC2.jpeg', '../../assets/parkImgs/LDNP/CBC3.jpeg'],
        moreInfo: 'https://www.conistonboatingcentre.co.uk/',
        // usersSay: [SELECT]
      }
    ]
  },
]

export default parksRec