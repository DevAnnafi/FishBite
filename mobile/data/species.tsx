export type Species = {
  id: string;
  name: string;
  aliases: string[];
  categories: string[];
  description: string;
  icon: string;
};

export const SPECIES_CATEGORIES = [
  "Freshwater",
  "Saltwater / Marine",
  "Game Fish",
  "Panfish",
  "Bottom Fish",
  "Reef Fish",
  "Sharks & Rays",
  "Brackish / Estuary",
  "Migratory Fish",
  "Deep Sea"
] as const;

export const SPECIES: Species[] = [
  {
    "id": "rohu",
    "name": "Rohu",
    "aliases": [
      "Rui",
      "Rohu"
    ],
    "categories": [
      "Freshwater",
      "Bottom Fish"
    ],
    "description": "Rohu available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "common-carp",
    "name": "Common Carp",
    "aliases": [
      "Karp",
      "Carp"
    ],
    "categories": [
      "Freshwater",
      "Bottom Fish",
      "Brackish / Estuary"
    ],
    "description": "Common Carp available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "grass-carp",
    "name": "Grass Carp",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Bottom Fish",
      "Brackish / Estuary"
    ],
    "description": "Grass Carp available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "silver-carp",
    "name": "Silver Carp",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Bottom Fish"
    ],
    "description": "Silver Carp available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bighead-carp",
    "name": "Bighead Carp",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Bottom Fish"
    ],
    "description": "Bighead Carp available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "black-carp",
    "name": "Black Carp",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Bottom Fish"
    ],
    "description": "Black Carp available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "crucian-carp",
    "name": "Crucian Carp",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Bottom Fish"
    ],
    "description": "Crucian Carp available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "mirror-carp",
    "name": "Mirror Carp",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Bottom Fish"
    ],
    "description": "Mirror Carp available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "leather-carp",
    "name": "Leather Carp",
    "aliases": [],
    "categories": [
      "Freshwater"
    ],
    "description": "Leather Carp available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "koi",
    "name": "Koi",
    "aliases": [],
    "categories": [
      "Freshwater"
    ],
    "description": "Koi available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "goldfish",
    "name": "Goldfish",
    "aliases": [],
    "categories": [
      "Freshwater"
    ],
    "description": "Goldfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "channel-catfish",
    "name": "Channel Catfish",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Game Fish",
      "Bottom Fish",
      "Brackish / Estuary"
    ],
    "description": "Channel Catfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "blue-catfish",
    "name": "Blue Catfish",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Game Fish",
      "Bottom Fish"
    ],
    "description": "Blue Catfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "flathead-catfish",
    "name": "Flathead Catfish",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Game Fish",
      "Bottom Fish"
    ],
    "description": "Flathead Catfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "white-catfish",
    "name": "White Catfish",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Bottom Fish",
      "Brackish / Estuary"
    ],
    "description": "White Catfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "brown-bullhead",
    "name": "Brown Bullhead",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Bottom Fish"
    ],
    "description": "Brown Bullhead available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "yellow-bullhead",
    "name": "Yellow Bullhead",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Bottom Fish"
    ],
    "description": "Yellow Bullhead available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "black-bullhead",
    "name": "Black Bullhead",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Bottom Fish"
    ],
    "description": "Black Bullhead available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "stonecat",
    "name": "Stonecat",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Bottom Fish"
    ],
    "description": "Stonecat available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "tadpole-madtom",
    "name": "Tadpole Madtom",
    "aliases": [],
    "categories": [
      "Freshwater"
    ],
    "description": "Tadpole Madtom available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "largemouth-bass",
    "name": "Largemouth Bass",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Game Fish",
      "Brackish / Estuary"
    ],
    "description": "Largemouth Bass available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "smallmouth-bass",
    "name": "Smallmouth Bass",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Game Fish",
      "Brackish / Estuary"
    ],
    "description": "Smallmouth Bass available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "spotted-bass",
    "name": "Spotted Bass",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Game Fish",
      "Brackish / Estuary"
    ],
    "description": "Spotted Bass available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "guadalupe-bass",
    "name": "Guadalupe Bass",
    "aliases": [],
    "categories": [
      "Freshwater"
    ],
    "description": "Guadalupe Bass available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "shoal-bass",
    "name": "Shoal Bass",
    "aliases": [],
    "categories": [
      "Freshwater"
    ],
    "description": "Shoal Bass available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "striped-bass",
    "name": "Striped Bass",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Saltwater / Marine",
      "Game Fish",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Striped Bass available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "white-bass",
    "name": "White Bass",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Game Fish",
      "Panfish",
      "Migratory Fish"
    ],
    "description": "White Bass available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "yellow-perch",
    "name": "Yellow Perch",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Panfish",
      "Brackish / Estuary"
    ],
    "description": "Yellow Perch available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "walleye",
    "name": "Walleye",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Game Fish"
    ],
    "description": "Walleye available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "sauger",
    "name": "Sauger",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Game Fish"
    ],
    "description": "Sauger available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "northern-pike",
    "name": "Northern Pike",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Game Fish"
    ],
    "description": "Northern Pike available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "muskellunge",
    "name": "Muskellunge",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Game Fish"
    ],
    "description": "Muskellunge available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "chain-pickerel",
    "name": "Chain Pickerel",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Game Fish"
    ],
    "description": "Chain Pickerel available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "redfin-pickerel",
    "name": "Redfin Pickerel",
    "aliases": [],
    "categories": [
      "Freshwater"
    ],
    "description": "Redfin Pickerel available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "black-crappie",
    "name": "Black Crappie",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Panfish",
      "Brackish / Estuary"
    ],
    "description": "Black Crappie available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "white-crappie",
    "name": "White Crappie",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Panfish",
      "Brackish / Estuary"
    ],
    "description": "White Crappie available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bluegill",
    "name": "Bluegill",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Panfish",
      "Brackish / Estuary"
    ],
    "description": "Bluegill available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "green-sunfish",
    "name": "Green Sunfish",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Panfish"
    ],
    "description": "Green Sunfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "pumpkinseed",
    "name": "Pumpkinseed",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Panfish"
    ],
    "description": "Pumpkinseed available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "redear-sunfish",
    "name": "Redear Sunfish",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Panfish"
    ],
    "description": "Redear Sunfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "warmouth",
    "name": "Warmouth",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Panfish"
    ],
    "description": "Warmouth available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "rock-bass",
    "name": "Rock Bass",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Panfish"
    ],
    "description": "Rock Bass available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "banded-killifish",
    "name": "Banded Killifish",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Panfish",
      "Brackish / Estuary"
    ],
    "description": "Banded Killifish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "golden-shiner",
    "name": "Golden Shiner",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Panfish"
    ],
    "description": "Golden Shiner available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "emerald-shiner",
    "name": "Emerald Shiner",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Panfish"
    ],
    "description": "Emerald Shiner available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "common-shiner",
    "name": "Common Shiner",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Panfish"
    ],
    "description": "Common Shiner available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "spotfin-shiner",
    "name": "Spotfin Shiner",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Panfish"
    ],
    "description": "Spotfin Shiner available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "creek-chub",
    "name": "Creek Chub",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Panfish"
    ],
    "description": "Creek Chub available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "fallfish",
    "name": "Fallfish",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Panfish"
    ],
    "description": "Fallfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "white-sucker",
    "name": "White Sucker",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Bottom Fish"
    ],
    "description": "White Sucker available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "longnose-sucker",
    "name": "Longnose Sucker",
    "aliases": [],
    "categories": [
      "Freshwater"
    ],
    "description": "Longnose Sucker available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "redhorse-sucker",
    "name": "Redhorse Sucker",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Bottom Fish"
    ],
    "description": "Redhorse Sucker available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "shorthead-redhorse",
    "name": "Shorthead Redhorse",
    "aliases": [],
    "categories": [
      "Freshwater"
    ],
    "description": "Shorthead Redhorse available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "northern-hog-sucker",
    "name": "Northern Hog Sucker",
    "aliases": [],
    "categories": [
      "Freshwater"
    ],
    "description": "Northern Hog Sucker available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "lake-whitefish",
    "name": "Lake Whitefish",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Game Fish",
      "Panfish"
    ],
    "description": "Lake Whitefish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "round-whitefish",
    "name": "Round Whitefish",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Panfish"
    ],
    "description": "Round Whitefish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "cisco",
    "name": "Cisco",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Panfish"
    ],
    "description": "Cisco available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "lake-trout",
    "name": "Lake Trout",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Game Fish",
      "Panfish",
      "Migratory Fish"
    ],
    "description": "Lake Trout available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "brook-trout",
    "name": "Brook Trout",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Game Fish",
      "Panfish"
    ],
    "description": "Brook Trout available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "brown-trout",
    "name": "Brown Trout",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Game Fish",
      "Panfish",
      "Migratory Fish"
    ],
    "description": "Brown Trout available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "rainbow-trout",
    "name": "Rainbow Trout",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Game Fish",
      "Panfish",
      "Migratory Fish"
    ],
    "description": "Rainbow Trout available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "cutthroat-trout",
    "name": "Cutthroat Trout",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Game Fish",
      "Panfish",
      "Migratory Fish"
    ],
    "description": "Cutthroat Trout available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bull-trout",
    "name": "Bull Trout",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Game Fish",
      "Migratory Fish"
    ],
    "description": "Bull Trout available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "arctic-char",
    "name": "Arctic Char",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Game Fish",
      "Migratory Fish"
    ],
    "description": "Arctic Char available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "burbot",
    "name": "Burbot",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Game Fish",
      "Bottom Fish"
    ],
    "description": "Burbot available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "freshwater-drum",
    "name": "Freshwater Drum",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Game Fish",
      "Bottom Fish"
    ],
    "description": "Freshwater Drum available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bowfin",
    "name": "Bowfin",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Bottom Fish",
      "Brackish / Estuary"
    ],
    "description": "Bowfin available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "american-eel",
    "name": "American Eel",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Bottom Fish",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "American Eel available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "lamprey",
    "name": "Lamprey",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Bottom Fish",
      "Deep Sea"
    ],
    "description": "Lamprey available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "gar",
    "name": "Gar",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Bottom Fish",
      "Brackish / Estuary"
    ],
    "description": "Gar available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "longnose-gar",
    "name": "Longnose Gar",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Bottom Fish",
      "Brackish / Estuary"
    ],
    "description": "Longnose Gar available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "shortnose-gar",
    "name": "Shortnose Gar",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Bottom Fish",
      "Brackish / Estuary"
    ],
    "description": "Shortnose Gar available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "alligator-gar",
    "name": "Alligator Gar",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Bottom Fish",
      "Brackish / Estuary"
    ],
    "description": "Alligator Gar available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "paddlefish",
    "name": "Paddlefish",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Migratory Fish"
    ],
    "description": "Paddlefish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "american-shad",
    "name": "American Shad",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "American Shad available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "hickory-shad",
    "name": "Hickory Shad",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Hickory Shad available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "gizzard-shad",
    "name": "Gizzard Shad",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Brackish / Estuary"
    ],
    "description": "Gizzard Shad available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "threadfin-shad",
    "name": "Threadfin Shad",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Brackish / Estuary"
    ],
    "description": "Threadfin Shad available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "skipjack-herring",
    "name": "Skipjack Herring",
    "aliases": [],
    "categories": [
      "Freshwater"
    ],
    "description": "Skipjack Herring available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "alewife",
    "name": "Alewife",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Alewife available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "blueback-herring",
    "name": "Blueback Herring",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Blueback Herring available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "white-perch",
    "name": "White Perch",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Panfish",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "White Perch available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "black-perch",
    "name": "Black Perch",
    "aliases": [],
    "categories": [
      "Freshwater"
    ],
    "description": "Black Perch available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "freshwater-goby",
    "name": "Freshwater Goby",
    "aliases": [],
    "categories": [
      "Freshwater"
    ],
    "description": "Freshwater Goby available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "rainbow-darter",
    "name": "Rainbow Darter",
    "aliases": [],
    "categories": [
      "Freshwater"
    ],
    "description": "Rainbow Darter available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "fantail-darter",
    "name": "Fantail Darter",
    "aliases": [],
    "categories": [
      "Freshwater"
    ],
    "description": "Fantail Darter available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "johnny-darter",
    "name": "Johnny Darter",
    "aliases": [],
    "categories": [
      "Freshwater"
    ],
    "description": "Johnny Darter available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "logperch",
    "name": "Logperch",
    "aliases": [],
    "categories": [
      "Freshwater"
    ],
    "description": "Logperch available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "mottled-sculpin",
    "name": "Mottled Sculpin",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Bottom Fish"
    ],
    "description": "Mottled Sculpin available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "slimy-sculpin",
    "name": "Slimy Sculpin",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Bottom Fish"
    ],
    "description": "Slimy Sculpin available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "brook-stickleback",
    "name": "Brook Stickleback",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Panfish"
    ],
    "description": "Brook Stickleback available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "fathead-minnow",
    "name": "Fathead Minnow",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Panfish"
    ],
    "description": "Fathead Minnow available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bluntnose-minnow",
    "name": "Bluntnose Minnow",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Panfish"
    ],
    "description": "Bluntnose Minnow available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "mosquitofish",
    "name": "Mosquitofish",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Panfish",
      "Brackish / Estuary"
    ],
    "description": "Mosquitofish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "guppy",
    "name": "Guppy",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Panfish"
    ],
    "description": "Guppy available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "tilapia",
    "name": "Tilapia",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Panfish",
      "Brackish / Estuary"
    ],
    "description": "Tilapia available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "oscar",
    "name": "Oscar",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Panfish"
    ],
    "description": "Oscar available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "pacu",
    "name": "Pacu",
    "aliases": [],
    "categories": [
      "Freshwater"
    ],
    "description": "Pacu available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "snakehead",
    "name": "Snakehead",
    "aliases": [],
    "categories": [
      "Freshwater",
      "Bottom Fish",
      "Brackish / Estuary"
    ],
    "description": "Snakehead available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "river-chub",
    "name": "River Chub",
    "aliases": [],
    "categories": [
      "Freshwater"
    ],
    "description": "River Chub available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "atlantic-cod",
    "name": "Atlantic Cod",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Migratory Fish"
    ],
    "description": "Atlantic Cod available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "pacific-cod",
    "name": "Pacific Cod",
    "aliases": [],
    "categories": [
      "Saltwater / Marine"
    ],
    "description": "Pacific Cod available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "haddock",
    "name": "Haddock",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Migratory Fish"
    ],
    "description": "Haddock available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "pollock",
    "name": "Pollock",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Migratory Fish"
    ],
    "description": "Pollock available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "hake",
    "name": "Hake",
    "aliases": [],
    "categories": [
      "Saltwater / Marine"
    ],
    "description": "Hake available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "whiting",
    "name": "Whiting",
    "aliases": [],
    "categories": [
      "Saltwater / Marine"
    ],
    "description": "Whiting available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "herring",
    "name": "Herring",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Brackish / Estuary"
    ],
    "description": "Herring available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "atlantic-mackerel",
    "name": "Atlantic Mackerel",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Migratory Fish"
    ],
    "description": "Atlantic Mackerel available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "spanish-mackerel",
    "name": "Spanish Mackerel",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Migratory Fish"
    ],
    "description": "Spanish Mackerel available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "king-mackerel",
    "name": "King Mackerel",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Migratory Fish"
    ],
    "description": "King Mackerel available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "cero-mackerel",
    "name": "Cero Mackerel",
    "aliases": [],
    "categories": [
      "Saltwater / Marine"
    ],
    "description": "Cero Mackerel available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bluefish",
    "name": "Bluefish",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Bluefish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "black-sea-bass",
    "name": "Black Sea Bass",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Bottom Fish",
      "Reef Fish",
      "Brackish / Estuary"
    ],
    "description": "Black Sea Bass available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "sea-bass",
    "name": "Sea Bass",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Bottom Fish",
      "Reef Fish",
      "Migratory Fish"
    ],
    "description": "Sea Bass available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "scup",
    "name": "Scup",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Bottom Fish",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Scup available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "porgy",
    "name": "Porgy",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Bottom Fish",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Porgy available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "red-porgy",
    "name": "Red Porgy",
    "aliases": [],
    "categories": [
      "Saltwater / Marine"
    ],
    "description": "Red Porgy available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "sheepshead-porgy",
    "name": "Sheepshead Porgy",
    "aliases": [],
    "categories": [
      "Saltwater / Marine"
    ],
    "description": "Sheepshead Porgy available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "spot",
    "name": "Spot",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Bottom Fish",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Spot available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "croaker",
    "name": "Croaker",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Bottom Fish",
      "Brackish / Estuary"
    ],
    "description": "Croaker available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "atlantic-croaker",
    "name": "Atlantic Croaker",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Bottom Fish",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Atlantic Croaker available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "weakfish",
    "name": "Weakfish",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Bottom Fish",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Weakfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "drum",
    "name": "Drum",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Brackish / Estuary"
    ],
    "description": "Drum available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "black-drum",
    "name": "Black Drum",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Bottom Fish",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Black Drum available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "red-drum",
    "name": "Red Drum",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Bottom Fish",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Red Drum available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "flounder",
    "name": "Flounder",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Brackish / Estuary"
    ],
    "description": "Flounder available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "summer-flounder",
    "name": "Summer Flounder",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Bottom Fish",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Summer Flounder available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "winter-flounder",
    "name": "Winter Flounder",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Bottom Fish",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Winter Flounder available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "southern-flounder",
    "name": "Southern Flounder",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Bottom Fish",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Southern Flounder available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "yellowtail-flounder",
    "name": "Yellowtail Flounder",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Bottom Fish"
    ],
    "description": "Yellowtail Flounder available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "american-plaice",
    "name": "American Plaice",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Bottom Fish",
      "Migratory Fish"
    ],
    "description": "American Plaice available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "halibut",
    "name": "Halibut",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Bottom Fish"
    ],
    "description": "Halibut available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "atlantic-halibut",
    "name": "Atlantic Halibut",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Bottom Fish"
    ],
    "description": "Atlantic Halibut available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "pacific-halibut",
    "name": "Pacific Halibut",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Bottom Fish"
    ],
    "description": "Pacific Halibut available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "turbot",
    "name": "Turbot",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Bottom Fish"
    ],
    "description": "Turbot available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "brill",
    "name": "Brill",
    "aliases": [],
    "categories": [
      "Saltwater / Marine"
    ],
    "description": "Brill available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "sole",
    "name": "Sole",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Brackish / Estuary"
    ],
    "description": "Sole available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "dover-sole",
    "name": "Dover Sole",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Bottom Fish"
    ],
    "description": "Dover Sole available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "lemon-sole",
    "name": "Lemon Sole",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Bottom Fish"
    ],
    "description": "Lemon Sole available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "hogfish",
    "name": "Hogfish",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Bottom Fish",
      "Reef Fish",
      "Brackish / Estuary"
    ],
    "description": "Hogfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "tautog",
    "name": "Tautog",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Bottom Fish",
      "Reef Fish",
      "Brackish / Estuary"
    ],
    "description": "Tautog available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "cunner",
    "name": "Cunner",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Bottom Fish",
      "Brackish / Estuary"
    ],
    "description": "Cunner available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "wrasse",
    "name": "Wrasse",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Reef Fish"
    ],
    "description": "Wrasse available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bluehead-wrasse",
    "name": "Bluehead Wrasse",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Reef Fish"
    ],
    "description": "Bluehead Wrasse available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "sheepshead",
    "name": "Sheepshead",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Bottom Fish",
      "Brackish / Estuary"
    ],
    "description": "Sheepshead available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "black-grouper",
    "name": "Black Grouper",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Bottom Fish",
      "Reef Fish"
    ],
    "description": "Black Grouper available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "gag-grouper",
    "name": "Gag Grouper",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Bottom Fish",
      "Reef Fish"
    ],
    "description": "Gag Grouper available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "red-grouper",
    "name": "Red Grouper",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Bottom Fish",
      "Reef Fish"
    ],
    "description": "Red Grouper available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "nassau-grouper",
    "name": "Nassau Grouper",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Bottom Fish",
      "Reef Fish"
    ],
    "description": "Nassau Grouper available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "snowy-grouper",
    "name": "Snowy Grouper",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Bottom Fish"
    ],
    "description": "Snowy Grouper available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "yellowfin-grouper",
    "name": "Yellowfin Grouper",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Bottom Fish"
    ],
    "description": "Yellowfin Grouper available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "mahi-mahi",
    "name": "Mahi-Mahi",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Migratory Fish"
    ],
    "description": "Mahi-Mahi available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "wahoo",
    "name": "Wahoo",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Migratory Fish"
    ],
    "description": "Wahoo available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "yellowfin-tuna",
    "name": "Yellowfin Tuna",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Migratory Fish"
    ],
    "description": "Yellowfin Tuna available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bluefin-tuna",
    "name": "Bluefin Tuna",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Migratory Fish"
    ],
    "description": "Bluefin Tuna available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "albacore-tuna",
    "name": "Albacore Tuna",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Migratory Fish"
    ],
    "description": "Albacore Tuna available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bigeye-tuna",
    "name": "Bigeye Tuna",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Migratory Fish"
    ],
    "description": "Bigeye Tuna available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "skipjack-tuna",
    "name": "Skipjack Tuna",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish"
    ],
    "description": "Skipjack Tuna available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bonito",
    "name": "Bonito",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish"
    ],
    "description": "Bonito available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "little-tunny",
    "name": "Little Tunny",
    "aliases": [],
    "categories": [
      "Saltwater / Marine"
    ],
    "description": "Little Tunny available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "swordfish",
    "name": "Swordfish",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish"
    ],
    "description": "Swordfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "sailfish",
    "name": "Sailfish",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish"
    ],
    "description": "Sailfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "marlin",
    "name": "Marlin",
    "aliases": [],
    "categories": [
      "Saltwater / Marine"
    ],
    "description": "Marlin available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "blue-marlin",
    "name": "Blue Marlin",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish"
    ],
    "description": "Blue Marlin available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "white-marlin",
    "name": "White Marlin",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish"
    ],
    "description": "White Marlin available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "spearfish",
    "name": "Spearfish",
    "aliases": [],
    "categories": [
      "Saltwater / Marine"
    ],
    "description": "Spearfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "tarpon",
    "name": "Tarpon",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Tarpon available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bonefish",
    "name": "Bonefish",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Bonefish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "permit",
    "name": "Permit",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Brackish / Estuary"
    ],
    "description": "Permit available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "jack-crevalle",
    "name": "Jack Crevalle",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish"
    ],
    "description": "Jack Crevalle available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "amberjack",
    "name": "Amberjack",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish"
    ],
    "description": "Amberjack available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "greater-amberjack",
    "name": "Greater Amberjack",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Migratory Fish"
    ],
    "description": "Greater Amberjack available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "almaco-jack",
    "name": "Almaco Jack",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Migratory Fish"
    ],
    "description": "Almaco Jack available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "blue-runner",
    "name": "Blue Runner",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Blue Runner available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "ladyfish",
    "name": "Ladyfish",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Ladyfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "snook",
    "name": "Snook",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Snook available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "common-snook",
    "name": "Common Snook",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Common Snook available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "red-snapper",
    "name": "Red Snapper",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Bottom Fish",
      "Reef Fish",
      "Brackish / Estuary"
    ],
    "description": "Red Snapper available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "vermilion-snapper",
    "name": "Vermilion Snapper",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Bottom Fish"
    ],
    "description": "Vermilion Snapper available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "lane-snapper",
    "name": "Lane Snapper",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Bottom Fish",
      "Reef Fish"
    ],
    "description": "Lane Snapper available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "mangrove-snapper",
    "name": "Mangrove Snapper",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Bottom Fish",
      "Reef Fish",
      "Brackish / Estuary"
    ],
    "description": "Mangrove Snapper available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "mutton-snapper",
    "name": "Mutton Snapper",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Bottom Fish",
      "Reef Fish"
    ],
    "description": "Mutton Snapper available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "yellowtail-snapper",
    "name": "Yellowtail Snapper",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Reef Fish"
    ],
    "description": "Yellowtail Snapper available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "gray-snapper",
    "name": "Gray Snapper",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Bottom Fish"
    ],
    "description": "Gray Snapper available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "cubera-snapper",
    "name": "Cubera Snapper",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Bottom Fish",
      "Reef Fish"
    ],
    "description": "Cubera Snapper available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "triggerfish",
    "name": "Triggerfish",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Bottom Fish",
      "Reef Fish"
    ],
    "description": "Triggerfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "gray-triggerfish",
    "name": "Gray Triggerfish",
    "aliases": [],
    "categories": [
      "Saltwater / Marine"
    ],
    "description": "Gray Triggerfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "queen-triggerfish",
    "name": "Queen Triggerfish",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Reef Fish"
    ],
    "description": "Queen Triggerfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "filefish",
    "name": "Filefish",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Reef Fish"
    ],
    "description": "Filefish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "pufferfish",
    "name": "Pufferfish",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Reef Fish",
      "Brackish / Estuary"
    ],
    "description": "Pufferfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "porcupinefish",
    "name": "Porcupinefish",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Reef Fish"
    ],
    "description": "Porcupinefish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "boxfish",
    "name": "Boxfish",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Reef Fish"
    ],
    "description": "Boxfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "cowfish",
    "name": "Cowfish",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Reef Fish"
    ],
    "description": "Cowfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "barracuda",
    "name": "Barracuda",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Brackish / Estuary"
    ],
    "description": "Barracuda available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "great-barracuda",
    "name": "Great Barracuda",
    "aliases": [],
    "categories": [
      "Saltwater / Marine"
    ],
    "description": "Great Barracuda available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "cobia",
    "name": "Cobia",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Cobia available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "sablefish",
    "name": "Sablefish",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Deep Sea"
    ],
    "description": "Sablefish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "lingcod",
    "name": "Lingcod",
    "aliases": [],
    "categories": [
      "Saltwater / Marine",
      "Game Fish"
    ],
    "description": "Lingcod available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "herring-scad",
    "name": "Herring Scad",
    "aliases": [],
    "categories": [
      "Saltwater / Marine"
    ],
    "description": "Herring Scad available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "hybrid-striped-bass",
    "name": "Hybrid Striped Bass",
    "aliases": [],
    "categories": [
      "Game Fish"
    ],
    "description": "Hybrid Striped Bass available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "steelhead",
    "name": "Steelhead",
    "aliases": [],
    "categories": [
      "Game Fish",
      "Migratory Fish"
    ],
    "description": "Steelhead available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "chinook-salmon",
    "name": "Chinook Salmon",
    "aliases": [],
    "categories": [
      "Game Fish",
      "Migratory Fish"
    ],
    "description": "Chinook Salmon available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "coho-salmon",
    "name": "Coho Salmon",
    "aliases": [],
    "categories": [
      "Game Fish",
      "Migratory Fish"
    ],
    "description": "Coho Salmon available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "sockeye-salmon",
    "name": "Sockeye Salmon",
    "aliases": [],
    "categories": [
      "Game Fish",
      "Migratory Fish"
    ],
    "description": "Sockeye Salmon available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "pink-salmon",
    "name": "Pink Salmon",
    "aliases": [],
    "categories": [
      "Game Fish",
      "Migratory Fish"
    ],
    "description": "Pink Salmon available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "chum-salmon",
    "name": "Chum Salmon",
    "aliases": [],
    "categories": [
      "Game Fish",
      "Migratory Fish"
    ],
    "description": "Chum Salmon available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "atlantic-salmon",
    "name": "Atlantic Salmon",
    "aliases": [],
    "categories": [
      "Game Fish",
      "Migratory Fish"
    ],
    "description": "Atlantic Salmon available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "kokanee",
    "name": "Kokanee",
    "aliases": [],
    "categories": [
      "Game Fish",
      "Panfish"
    ],
    "description": "Kokanee available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "landlocked-salmon",
    "name": "Landlocked Salmon",
    "aliases": [],
    "categories": [
      "Game Fish"
    ],
    "description": "Landlocked Salmon available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "golden-trout",
    "name": "Golden Trout",
    "aliases": [],
    "categories": [
      "Game Fish",
      "Panfish"
    ],
    "description": "Golden Trout available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "tiger-trout",
    "name": "Tiger Trout",
    "aliases": [],
    "categories": [
      "Game Fish"
    ],
    "description": "Tiger Trout available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "palomino-trout",
    "name": "Palomino Trout",
    "aliases": [],
    "categories": [
      "Game Fish"
    ],
    "description": "Palomino Trout available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "grayling",
    "name": "Grayling",
    "aliases": [],
    "categories": [
      "Game Fish"
    ],
    "description": "Grayling available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "taimen",
    "name": "Taimen",
    "aliases": [],
    "categories": [
      "Game Fish"
    ],
    "description": "Taimen available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "huchen",
    "name": "Huchen",
    "aliases": [],
    "categories": [
      "Game Fish"
    ],
    "description": "Huchen available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "tigerfish",
    "name": "Tigerfish",
    "aliases": [],
    "categories": [
      "Game Fish"
    ],
    "description": "Tigerfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "peacock-bass",
    "name": "Peacock Bass",
    "aliases": [],
    "categories": [
      "Game Fish"
    ],
    "description": "Peacock Bass available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "butterfly-peacock-bass",
    "name": "Butterfly Peacock Bass",
    "aliases": [],
    "categories": [
      "Game Fish"
    ],
    "description": "Butterfly Peacock Bass available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "payara",
    "name": "Payara",
    "aliases": [],
    "categories": [
      "Game Fish"
    ],
    "description": "Payara available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "arapaima",
    "name": "Arapaima",
    "aliases": [],
    "categories": [
      "Game Fish"
    ],
    "description": "Arapaima available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "pirarucu",
    "name": "Pirarucu",
    "aliases": [],
    "categories": [
      "Game Fish"
    ],
    "description": "Pirarucu available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "giant-trevally",
    "name": "Giant Trevally",
    "aliases": [],
    "categories": [
      "Game Fish",
      "Migratory Fish"
    ],
    "description": "Giant Trevally available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bluefin-trevally",
    "name": "Bluefin Trevally",
    "aliases": [],
    "categories": [
      "Game Fish"
    ],
    "description": "Bluefin Trevally available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "golden-trevally",
    "name": "Golden Trevally",
    "aliases": [],
    "categories": [
      "Game Fish",
      "Migratory Fish"
    ],
    "description": "Golden Trevally available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "rainbow-runner",
    "name": "Rainbow Runner",
    "aliases": [],
    "categories": [
      "Game Fish",
      "Migratory Fish"
    ],
    "description": "Rainbow Runner available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "redfish",
    "name": "Redfish",
    "aliases": [],
    "categories": [
      "Game Fish"
    ],
    "description": "Redfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "black-marlin",
    "name": "Black Marlin",
    "aliases": [],
    "categories": [
      "Game Fish"
    ],
    "description": "Black Marlin available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "striped-marlin",
    "name": "Striped Marlin",
    "aliases": [],
    "categories": [
      "Game Fish"
    ],
    "description": "Striped Marlin available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "roosterfish",
    "name": "Roosterfish",
    "aliases": [],
    "categories": [
      "Game Fish"
    ],
    "description": "Roosterfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "grouper",
    "name": "Grouper",
    "aliases": [],
    "categories": [
      "Game Fish",
      "Bottom Fish",
      "Reef Fish",
      "Brackish / Estuary"
    ],
    "description": "Grouper available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "rockfish",
    "name": "Rockfish",
    "aliases": [],
    "categories": [
      "Game Fish",
      "Deep Sea"
    ],
    "description": "Rockfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "yellowtail",
    "name": "Yellowtail",
    "aliases": [],
    "categories": [
      "Game Fish",
      "Migratory Fish"
    ],
    "description": "Yellowtail available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "pacific-salmon",
    "name": "Pacific Salmon",
    "aliases": [],
    "categories": [
      "Game Fish"
    ],
    "description": "Pacific Salmon available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "steelhead-trout",
    "name": "Steelhead Trout",
    "aliases": [],
    "categories": [
      "Game Fish"
    ],
    "description": "Steelhead Trout available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "sea-trout",
    "name": "Sea Trout",
    "aliases": [],
    "categories": [
      "Game Fish",
      "Migratory Fish"
    ],
    "description": "Sea Trout available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "catfish",
    "name": "Catfish",
    "aliases": [],
    "categories": [
      "Game Fish",
      "Brackish / Estuary"
    ],
    "description": "Catfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "carp",
    "name": "Carp",
    "aliases": [],
    "categories": [
      "Game Fish",
      "Brackish / Estuary"
    ],
    "description": "Carp available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "redbreast-sunfish",
    "name": "Redbreast Sunfish",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Redbreast Sunfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "longear-sunfish",
    "name": "Longear Sunfish",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Longear Sunfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "dollar-sunfish",
    "name": "Dollar Sunfish",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Dollar Sunfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "spotted-sunfish",
    "name": "Spotted Sunfish",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Spotted Sunfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "flier",
    "name": "Flier",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Flier available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "sacramento-perch",
    "name": "Sacramento Perch",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Sacramento Perch available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "smelt",
    "name": "Smelt",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Smelt available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "rainbow-smelt",
    "name": "Rainbow Smelt",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Rainbow Smelt available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "threespine-stickleback",
    "name": "Threespine Stickleback",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Threespine Stickleback available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "ninespine-stickleback",
    "name": "Ninespine Stickleback",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Ninespine Stickleback available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "mummichog",
    "name": "Mummichog",
    "aliases": [],
    "categories": [
      "Panfish",
      "Brackish / Estuary"
    ],
    "description": "Mummichog available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "killifish",
    "name": "Killifish",
    "aliases": [],
    "categories": [
      "Panfish",
      "Brackish / Estuary"
    ],
    "description": "Killifish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "swordtail",
    "name": "Swordtail",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Swordtail available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "molly",
    "name": "Molly",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Molly available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "platy",
    "name": "Platy",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Platy available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "tetra",
    "name": "Tetra",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Tetra available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "neon-tetra",
    "name": "Neon Tetra",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Neon Tetra available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "cardinal-tetra",
    "name": "Cardinal Tetra",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Cardinal Tetra available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "black-tetra",
    "name": "Black Tetra",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Black Tetra available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "serpae-tetra",
    "name": "Serpae Tetra",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Serpae Tetra available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "hatchetfish",
    "name": "Hatchetfish",
    "aliases": [],
    "categories": [
      "Panfish",
      "Deep Sea"
    ],
    "description": "Hatchetfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "danio",
    "name": "Danio",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Danio available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "zebrafish",
    "name": "Zebrafish",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Zebrafish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "rasbora",
    "name": "Rasbora",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Rasbora available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "barb",
    "name": "Barb",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Barb available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "cherry-barb",
    "name": "Cherry Barb",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Cherry Barb available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "tiger-barb",
    "name": "Tiger Barb",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Tiger Barb available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "rosy-barb",
    "name": "Rosy Barb",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Rosy Barb available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "gold-barb",
    "name": "Gold Barb",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Gold Barb available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "tinfoil-barb",
    "name": "Tinfoil Barb",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Tinfoil Barb available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "kuhli-loach",
    "name": "Kuhli Loach",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Kuhli Loach available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "weather-loach",
    "name": "Weather Loach",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Weather Loach available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "clown-loach",
    "name": "Clown Loach",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Clown Loach available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "dojo-loach",
    "name": "Dojo Loach",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Dojo Loach available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "corydoras",
    "name": "Corydoras",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Corydoras available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bronze-cory",
    "name": "Bronze Cory",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Bronze Cory available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "peppered-cory",
    "name": "Peppered Cory",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Peppered Cory available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "panda-cory",
    "name": "Panda Cory",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Panda Cory available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "pleco",
    "name": "Pleco",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Pleco available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bristlenose-pleco",
    "name": "Bristlenose Pleco",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Bristlenose Pleco available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "common-pleco",
    "name": "Common Pleco",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Common Pleco available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "otocinclus",
    "name": "Otocinclus",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Otocinclus available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "rainbowfish",
    "name": "Rainbowfish",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Rainbowfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "boesemani-rainbowfish",
    "name": "Boesemani Rainbowfish",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Boesemani Rainbowfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "gourami",
    "name": "Gourami",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Gourami available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "pearl-gourami",
    "name": "Pearl Gourami",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Pearl Gourami available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "dwarf-gourami",
    "name": "Dwarf Gourami",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Dwarf Gourami available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "honey-gourami",
    "name": "Honey Gourami",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Honey Gourami available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "betta",
    "name": "Betta",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Betta available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "angelfish",
    "name": "Angelfish",
    "aliases": [],
    "categories": [
      "Panfish",
      "Reef Fish"
    ],
    "description": "Angelfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "discus",
    "name": "Discus",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Discus available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "convict-cichlid",
    "name": "Convict Cichlid",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Convict Cichlid available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "jack-dempsey",
    "name": "Jack Dempsey",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Jack Dempsey available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "firemouth-cichlid",
    "name": "Firemouth Cichlid",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Firemouth Cichlid available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "blue-acara",
    "name": "Blue Acara",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Blue Acara available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "green-terror",
    "name": "Green Terror",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Green Terror available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "texas-cichlid",
    "name": "Texas Cichlid",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Texas Cichlid available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "yellow-bass",
    "name": "Yellow Bass",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Yellow Bass available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "mud-sunfish",
    "name": "Mud Sunfish",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Mud Sunfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bluespotted-sunfish",
    "name": "Bluespotted Sunfish",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Bluespotted Sunfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "redspotted-sunfish",
    "name": "Redspotted Sunfish",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Redspotted Sunfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "northern-sunfish",
    "name": "Northern Sunfish",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Northern Sunfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "orangespotted-sunfish",
    "name": "Orangespotted Sunfish",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Orangespotted Sunfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "blackbanded-sunfish",
    "name": "Blackbanded Sunfish",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Blackbanded Sunfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "pumpkinseed-sunfish",
    "name": "Pumpkinseed Sunfish",
    "aliases": [],
    "categories": [
      "Panfish"
    ],
    "description": "Pumpkinseed Sunfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "rui",
    "name": "Rui",
    "aliases": [],
    "categories": [
      "Bottom Fish"
    ],
    "description": "Rui available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "madtom",
    "name": "Madtom",
    "aliases": [],
    "categories": [
      "Bottom Fish"
    ],
    "description": "Madtom available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "lake-sturgeon",
    "name": "Lake Sturgeon",
    "aliases": [],
    "categories": [
      "Bottom Fish",
      "Migratory Fish"
    ],
    "description": "Lake Sturgeon available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "atlantic-sturgeon",
    "name": "Atlantic Sturgeon",
    "aliases": [],
    "categories": [
      "Bottom Fish",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Atlantic Sturgeon available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "shortnose-sturgeon",
    "name": "Shortnose Sturgeon",
    "aliases": [],
    "categories": [
      "Bottom Fish",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Shortnose Sturgeon available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "pallid-sturgeon",
    "name": "Pallid Sturgeon",
    "aliases": [],
    "categories": [
      "Bottom Fish"
    ],
    "description": "Pallid Sturgeon available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "shovelnose-sturgeon",
    "name": "Shovelnose Sturgeon",
    "aliases": [],
    "categories": [
      "Bottom Fish"
    ],
    "description": "Shovelnose Sturgeon available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "white-sturgeon",
    "name": "White Sturgeon",
    "aliases": [],
    "categories": [
      "Bottom Fish",
      "Migratory Fish"
    ],
    "description": "White Sturgeon available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "green-sturgeon",
    "name": "Green Sturgeon",
    "aliases": [],
    "categories": [
      "Bottom Fish",
      "Migratory Fish"
    ],
    "description": "Green Sturgeon available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "gulf-sturgeon",
    "name": "Gulf Sturgeon",
    "aliases": [],
    "categories": [
      "Bottom Fish",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Gulf Sturgeon available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "blackfish",
    "name": "Blackfish",
    "aliases": [],
    "categories": [
      "Bottom Fish"
    ],
    "description": "Blackfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "scamp",
    "name": "Scamp",
    "aliases": [],
    "categories": [
      "Bottom Fish"
    ],
    "description": "Scamp available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "warsaw-grouper",
    "name": "Warsaw Grouper",
    "aliases": [],
    "categories": [
      "Bottom Fish"
    ],
    "description": "Warsaw Grouper available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "dab",
    "name": "Dab",
    "aliases": [],
    "categories": [
      "Bottom Fish"
    ],
    "description": "Dab available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "plaice",
    "name": "Plaice",
    "aliases": [],
    "categories": [
      "Bottom Fish"
    ],
    "description": "Plaice available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "skate",
    "name": "Skate",
    "aliases": [],
    "categories": [
      "Bottom Fish",
      "Sharks & Rays"
    ],
    "description": "Skate available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "cownose-ray",
    "name": "Cownose Ray",
    "aliases": [],
    "categories": [
      "Bottom Fish",
      "Sharks & Rays"
    ],
    "description": "Cownose Ray available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "stingray",
    "name": "Stingray",
    "aliases": [],
    "categories": [
      "Bottom Fish",
      "Sharks & Rays"
    ],
    "description": "Stingray available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "manta-ray",
    "name": "Manta Ray",
    "aliases": [],
    "categories": [
      "Bottom Fish",
      "Sharks & Rays"
    ],
    "description": "Manta Ray available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "guitarfish",
    "name": "Guitarfish",
    "aliases": [],
    "categories": [
      "Bottom Fish",
      "Sharks & Rays"
    ],
    "description": "Guitarfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "sturgeon",
    "name": "Sturgeon",
    "aliases": [],
    "categories": [
      "Bottom Fish"
    ],
    "description": "Sturgeon available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "eel",
    "name": "Eel",
    "aliases": [],
    "categories": [
      "Bottom Fish"
    ],
    "description": "Eel available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "conger-eel",
    "name": "Conger Eel",
    "aliases": [],
    "categories": [
      "Bottom Fish",
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Conger Eel available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "moray-eel",
    "name": "Moray Eel",
    "aliases": [],
    "categories": [
      "Bottom Fish",
      "Reef Fish",
      "Brackish / Estuary"
    ],
    "description": "Moray Eel available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "garden-eel",
    "name": "Garden Eel",
    "aliases": [],
    "categories": [
      "Bottom Fish"
    ],
    "description": "Garden Eel available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "hagfish",
    "name": "Hagfish",
    "aliases": [],
    "categories": [
      "Bottom Fish",
      "Deep Sea"
    ],
    "description": "Hagfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "sculpin",
    "name": "Sculpin",
    "aliases": [],
    "categories": [
      "Bottom Fish"
    ],
    "description": "Sculpin available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "sucker",
    "name": "Sucker",
    "aliases": [],
    "categories": [
      "Bottom Fish"
    ],
    "description": "Sucker available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "carp-sucker",
    "name": "Carp Sucker",
    "aliases": [],
    "categories": [
      "Bottom Fish"
    ],
    "description": "Carp Sucker available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "buffalo-fish",
    "name": "Buffalo Fish",
    "aliases": [],
    "categories": [
      "Bottom Fish"
    ],
    "description": "Buffalo Fish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "blue-tang",
    "name": "Blue Tang",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Blue Tang available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "yellow-tang",
    "name": "Yellow Tang",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Yellow Tang available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "sailfin-tang",
    "name": "Sailfin Tang",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Sailfin Tang available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "surgeonfish",
    "name": "Surgeonfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Surgeonfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "naso-tang",
    "name": "Naso Tang",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Naso Tang available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "clownfish",
    "name": "Clownfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Clownfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "ocellaris-clownfish",
    "name": "Ocellaris Clownfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Ocellaris Clownfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "percula-clownfish",
    "name": "Percula Clownfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Percula Clownfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "maroon-clownfish",
    "name": "Maroon Clownfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Maroon Clownfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "damselfish",
    "name": "Damselfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Damselfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "blue-damsel",
    "name": "Blue Damsel",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Blue Damsel available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "sergeant-major",
    "name": "Sergeant Major",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Sergeant Major available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "chromis",
    "name": "Chromis",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Chromis available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "royal-gramma",
    "name": "Royal Gramma",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Royal Gramma available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "firefish",
    "name": "Firefish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Firefish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "gobies",
    "name": "Gobies",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Gobies available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "cleaner-goby",
    "name": "Cleaner Goby",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Cleaner Goby available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "neon-goby",
    "name": "Neon Goby",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Neon Goby available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "watchman-goby",
    "name": "Watchman Goby",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Watchman Goby available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "blenny",
    "name": "Blenny",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Blenny available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "lawnmower-blenny",
    "name": "Lawnmower Blenny",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Lawnmower Blenny available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bicolor-blenny",
    "name": "Bicolor Blenny",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Bicolor Blenny available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "sixbar-wrasse",
    "name": "Sixbar Wrasse",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Sixbar Wrasse available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "cleaner-wrasse",
    "name": "Cleaner Wrasse",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Cleaner Wrasse available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "spanish-hogfish",
    "name": "Spanish Hogfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Spanish Hogfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "parrotfish",
    "name": "Parrotfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Parrotfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "stoplight-parrotfish",
    "name": "Stoplight Parrotfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Stoplight Parrotfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "queen-parrotfish",
    "name": "Queen Parrotfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Queen Parrotfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bumphead-parrotfish",
    "name": "Bumphead Parrotfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Bumphead Parrotfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "picasso-triggerfish",
    "name": "Picasso Triggerfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Picasso Triggerfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "clown-triggerfish",
    "name": "Clown Triggerfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Clown Triggerfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "butterflyfish",
    "name": "Butterflyfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Butterflyfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "threadfin-butterflyfish",
    "name": "Threadfin Butterflyfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Threadfin Butterflyfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "raccoon-butterflyfish",
    "name": "Raccoon Butterflyfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Raccoon Butterflyfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "copperband-butterflyfish",
    "name": "Copperband Butterflyfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Copperband Butterflyfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "queen-angelfish",
    "name": "Queen Angelfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Queen Angelfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "french-angelfish",
    "name": "French Angelfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "French Angelfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "gray-angelfish",
    "name": "Gray Angelfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Gray Angelfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "emperor-angelfish",
    "name": "Emperor Angelfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Emperor Angelfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "flame-angelfish",
    "name": "Flame Angelfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Flame Angelfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "coral-beauty",
    "name": "Coral Beauty",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Coral Beauty available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "cardinalfish",
    "name": "Cardinalfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Cardinalfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "banggai-cardinalfish",
    "name": "Banggai Cardinalfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Banggai Cardinalfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "longspine-cardinalfish",
    "name": "Longspine Cardinalfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Longspine Cardinalfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "squirrelfish",
    "name": "Squirrelfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Squirrelfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "soldierfish",
    "name": "Soldierfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Soldierfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "grunt",
    "name": "Grunt",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Grunt available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "french-grunt",
    "name": "French Grunt",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "French Grunt available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bluestriped-grunt",
    "name": "Bluestriped Grunt",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Bluestriped Grunt available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "snapper",
    "name": "Snapper",
    "aliases": [],
    "categories": [
      "Reef Fish",
      "Brackish / Estuary"
    ],
    "description": "Snapper available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "tiger-grouper",
    "name": "Tiger Grouper",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Tiger Grouper available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "panther-grouper",
    "name": "Panther Grouper",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Panther Grouper available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "coral-grouper",
    "name": "Coral Grouper",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Coral Grouper available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "potato-grouper",
    "name": "Potato Grouper",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Potato Grouper available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "giant-grouper",
    "name": "Giant Grouper",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Giant Grouper available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "barramundi-cod",
    "name": "Barramundi Cod",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Barramundi Cod available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "anthias",
    "name": "Anthias",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Anthias available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "lyretail-anthias",
    "name": "Lyretail Anthias",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Lyretail Anthias available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bartlett-anthias",
    "name": "Bartlett Anthias",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Bartlett Anthias available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "basslet",
    "name": "Basslet",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Basslet available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "royal-basslet",
    "name": "Royal Basslet",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Royal Basslet available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "jawfish",
    "name": "Jawfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Jawfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "yellowhead-jawfish",
    "name": "Yellowhead Jawfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Yellowhead Jawfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "hawkfish",
    "name": "Hawkfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Hawkfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "longnose-hawkfish",
    "name": "Longnose Hawkfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Longnose Hawkfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "flame-hawkfish",
    "name": "Flame Hawkfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Flame Hawkfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "snowflake-moray",
    "name": "Snowflake Moray",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Snowflake Moray available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "green-moray",
    "name": "Green Moray",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Green Moray available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "lionfish",
    "name": "Lionfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Lionfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "volitan-lionfish",
    "name": "Volitan Lionfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Volitan Lionfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "frogfish",
    "name": "Frogfish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Frogfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "scorpionfish",
    "name": "Scorpionfish",
    "aliases": [],
    "categories": [
      "Reef Fish",
      "Deep Sea"
    ],
    "description": "Scorpionfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "stonefish",
    "name": "Stonefish",
    "aliases": [],
    "categories": [
      "Reef Fish"
    ],
    "description": "Stonefish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "needlefish",
    "name": "Needlefish",
    "aliases": [],
    "categories": [
      "Reef Fish",
      "Brackish / Estuary"
    ],
    "description": "Needlefish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "great-white-shark",
    "name": "Great White Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Great White Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "tiger-shark",
    "name": "Tiger Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Tiger Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bull-shark",
    "name": "Bull Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Bull Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "lemon-shark",
    "name": "Lemon Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Lemon Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "blacktip-shark",
    "name": "Blacktip Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Blacktip Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "spinner-shark",
    "name": "Spinner Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Spinner Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "nurse-shark",
    "name": "Nurse Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Nurse Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "whale-shark",
    "name": "Whale Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Whale Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "basking-shark",
    "name": "Basking Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Basking Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "mako-shark",
    "name": "Mako Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Mako Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "shortfin-mako",
    "name": "Shortfin Mako",
    "aliases": [],
    "categories": [
      "Sharks & Rays",
      "Migratory Fish"
    ],
    "description": "Shortfin Mako available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "longfin-mako",
    "name": "Longfin Mako",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Longfin Mako available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "hammerhead-shark",
    "name": "Hammerhead Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Hammerhead Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "great-hammerhead",
    "name": "Great Hammerhead",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Great Hammerhead available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "scalloped-hammerhead",
    "name": "Scalloped Hammerhead",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Scalloped Hammerhead available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "smooth-hammerhead",
    "name": "Smooth Hammerhead",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Smooth Hammerhead available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bonnethead",
    "name": "Bonnethead",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Bonnethead available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "thresher-shark",
    "name": "Thresher Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Thresher Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bigeye-thresher",
    "name": "Bigeye Thresher",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Bigeye Thresher available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "blue-shark",
    "name": "Blue Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Blue Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "oceanic-whitetip",
    "name": "Oceanic Whitetip",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Oceanic Whitetip available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "silky-shark",
    "name": "Silky Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Silky Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "dusky-shark",
    "name": "Dusky Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Dusky Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "sandbar-shark",
    "name": "Sandbar Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Sandbar Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "sand-tiger-shark",
    "name": "Sand Tiger Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Sand Tiger Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "cookiecutter-shark",
    "name": "Cookiecutter Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays",
      "Deep Sea"
    ],
    "description": "Cookiecutter Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "goblin-shark",
    "name": "Goblin Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays",
      "Deep Sea"
    ],
    "description": "Goblin Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "frilled-shark",
    "name": "Frilled Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays",
      "Deep Sea"
    ],
    "description": "Frilled Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "sixgill-shark",
    "name": "Sixgill Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays",
      "Deep Sea"
    ],
    "description": "Sixgill Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "seven-gill-shark",
    "name": "Seven Gill Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays",
      "Deep Sea"
    ],
    "description": "Seven Gill Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "angel-shark",
    "name": "Angel Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Angel Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "wobbegong",
    "name": "Wobbegong",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Wobbegong available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "zebra-shark",
    "name": "Zebra Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Zebra Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "leopard-shark",
    "name": "Leopard Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Leopard Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bamboo-shark",
    "name": "Bamboo Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Bamboo Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "epaulette-shark",
    "name": "Epaulette Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Epaulette Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "horn-shark",
    "name": "Horn Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Horn Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "port-jackson-shark",
    "name": "Port Jackson Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Port Jackson Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "dogfish",
    "name": "Dogfish",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Dogfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "spiny-dogfish",
    "name": "Spiny Dogfish",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Spiny Dogfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "smooth-dogfish",
    "name": "Smooth Dogfish",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Smooth Dogfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "nursehound",
    "name": "Nursehound",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Nursehound available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "little-skate",
    "name": "Little Skate",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Little Skate available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "winter-skate",
    "name": "Winter Skate",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Winter Skate available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "clearnose-skate",
    "name": "Clearnose Skate",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Clearnose Skate available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "barndoor-skate",
    "name": "Barndoor Skate",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Barndoor Skate available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "thorny-skate",
    "name": "Thorny Skate",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Thorny Skate available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "roughtail-skate",
    "name": "Roughtail Skate",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Roughtail Skate available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "giant-manta-ray",
    "name": "Giant Manta Ray",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Giant Manta Ray available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "reef-manta-ray",
    "name": "Reef Manta Ray",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Reef Manta Ray available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "mobula-ray",
    "name": "Mobula Ray",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Mobula Ray available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "devil-ray",
    "name": "Devil Ray",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Devil Ray available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "southern-stingray",
    "name": "Southern Stingray",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Southern Stingray available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "atlantic-stingray",
    "name": "Atlantic Stingray",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Atlantic Stingray available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bluespotted-ribbontail-ray",
    "name": "Bluespotted Ribbontail Ray",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Bluespotted Ribbontail Ray available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "round-stingray",
    "name": "Round Stingray",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Round Stingray available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "yellow-stingray",
    "name": "Yellow Stingray",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Yellow Stingray available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "butterfly-ray",
    "name": "Butterfly Ray",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Butterfly Ray available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bat-ray",
    "name": "Bat Ray",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Bat Ray available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "eagle-ray",
    "name": "Eagle Ray",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Eagle Ray available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "spotted-eagle-ray",
    "name": "Spotted Eagle Ray",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Spotted Eagle Ray available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bull-ray",
    "name": "Bull Ray",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Bull Ray available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "electric-ray",
    "name": "Electric Ray",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Electric Ray available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "atlantic-torpedo",
    "name": "Atlantic Torpedo",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Atlantic Torpedo available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "shovelnose-guitarfish",
    "name": "Shovelnose Guitarfish",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Shovelnose Guitarfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bowmouth-guitarfish",
    "name": "Bowmouth Guitarfish",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Bowmouth Guitarfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "sawfish",
    "name": "Sawfish",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Sawfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "largetooth-sawfish",
    "name": "Largetooth Sawfish",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Largetooth Sawfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "smalltooth-sawfish",
    "name": "Smalltooth Sawfish",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Smalltooth Sawfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "narrow-sawfish",
    "name": "Narrow Sawfish",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Narrow Sawfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "sicklefin-lemon-shark",
    "name": "Sicklefin Lemon Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Sicklefin Lemon Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "whitetip-reef-shark",
    "name": "Whitetip Reef Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Whitetip Reef Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "blacktip-reef-shark",
    "name": "Blacktip Reef Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Blacktip Reef Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "grey-reef-shark",
    "name": "Grey Reef Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Grey Reef Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "caribbean-reef-shark",
    "name": "Caribbean Reef Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Caribbean Reef Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "galapagos-shark",
    "name": "Galapagos Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Galapagos Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "silvertip-shark",
    "name": "Silvertip Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Silvertip Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bronze-whaler",
    "name": "Bronze Whaler",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Bronze Whaler available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "copper-shark",
    "name": "Copper Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Copper Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "night-shark",
    "name": "Night Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Night Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "caribbean-sharpnose-shark",
    "name": "Caribbean Sharpnose Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Caribbean Sharpnose Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "atlantic-sharpnose-shark",
    "name": "Atlantic Sharpnose Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Atlantic Sharpnose Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "blacknose-shark",
    "name": "Blacknose Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Blacknose Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "finetooth-shark",
    "name": "Finetooth Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Finetooth Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "milk-shark",
    "name": "Milk Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Milk Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "hardnose-shark",
    "name": "Hardnose Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Hardnose Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bonnethead-shark",
    "name": "Bonnethead Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Bonnethead Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "hammerhead",
    "name": "Hammerhead",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Hammerhead available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "thresher",
    "name": "Thresher",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Thresher available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "mako",
    "name": "Mako",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Mako available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "ray",
    "name": "Ray",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Ray available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "broadnose-sevengill-shark",
    "name": "Broadnose Sevengill Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Broadnose Sevengill Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bluntnose-sixgill-shark",
    "name": "Bluntnose Sixgill Shark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Bluntnose Sixgill Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "australian-ghostshark",
    "name": "Australian Ghostshark",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Australian Ghostshark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "eastern-fiddler-ray",
    "name": "Eastern Fiddler Ray",
    "aliases": [],
    "categories": [
      "Sharks & Rays"
    ],
    "description": "Eastern Fiddler Ray available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "crevalle-jack",
    "name": "Crevalle Jack",
    "aliases": [],
    "categories": [
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Crevalle Jack available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "fundulus",
    "name": "Fundulus",
    "aliases": [],
    "categories": [
      "Brackish / Estuary"
    ],
    "description": "Fundulus available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "goby",
    "name": "Goby",
    "aliases": [],
    "categories": [
      "Brackish / Estuary"
    ],
    "description": "Goby available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "round-goby",
    "name": "Round Goby",
    "aliases": [],
    "categories": [
      "Brackish / Estuary"
    ],
    "description": "Round Goby available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "naked-goby",
    "name": "Naked Goby",
    "aliases": [],
    "categories": [
      "Brackish / Estuary"
    ],
    "description": "Naked Goby available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "longnose-killifish",
    "name": "Longnose Killifish",
    "aliases": [],
    "categories": [
      "Brackish / Estuary"
    ],
    "description": "Longnose Killifish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "silverside",
    "name": "Silverside",
    "aliases": [],
    "categories": [
      "Brackish / Estuary"
    ],
    "description": "Silverside available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "atlantic-silverside",
    "name": "Atlantic Silverside",
    "aliases": [],
    "categories": [
      "Brackish / Estuary"
    ],
    "description": "Atlantic Silverside available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "menhaden",
    "name": "Menhaden",
    "aliases": [],
    "categories": [
      "Brackish / Estuary"
    ],
    "description": "Menhaden available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "atlantic-menhaden",
    "name": "Atlantic Menhaden",
    "aliases": [],
    "categories": [
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Atlantic Menhaden available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bay-anchovy",
    "name": "Bay Anchovy",
    "aliases": [],
    "categories": [
      "Brackish / Estuary"
    ],
    "description": "Bay Anchovy available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "anchovy",
    "name": "Anchovy",
    "aliases": [],
    "categories": [
      "Brackish / Estuary"
    ],
    "description": "Anchovy available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bullhead",
    "name": "Bullhead",
    "aliases": [],
    "categories": [
      "Brackish / Estuary"
    ],
    "description": "Bullhead available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "sunfish",
    "name": "Sunfish",
    "aliases": [],
    "categories": [
      "Brackish / Estuary"
    ],
    "description": "Sunfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "crappie",
    "name": "Crappie",
    "aliases": [],
    "categories": [
      "Brackish / Estuary"
    ],
    "description": "Crappie available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "tilapia-hybrid",
    "name": "Tilapia Hybrid",
    "aliases": [],
    "categories": [
      "Brackish / Estuary"
    ],
    "description": "Tilapia Hybrid available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "atlantic-needlefish",
    "name": "Atlantic Needlefish",
    "aliases": [],
    "categories": [
      "Brackish / Estuary"
    ],
    "description": "Atlantic Needlefish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "jack",
    "name": "Jack",
    "aliases": [],
    "categories": [
      "Brackish / Estuary"
    ],
    "description": "Jack available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "pompano",
    "name": "Pompano",
    "aliases": [],
    "categories": [
      "Brackish / Estuary"
    ],
    "description": "Pompano available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "garfish",
    "name": "Garfish",
    "aliases": [],
    "categories": [
      "Brackish / Estuary"
    ],
    "description": "Garfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "mullet",
    "name": "Mullet",
    "aliases": [],
    "categories": [
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Mullet available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "striped-mullet",
    "name": "Striped Mullet",
    "aliases": [],
    "categories": [
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Striped Mullet available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "white-mullet",
    "name": "White Mullet",
    "aliases": [],
    "categories": [
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "White Mullet available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "red-mullet",
    "name": "Red Mullet",
    "aliases": [],
    "categories": [
      "Brackish / Estuary",
      "Migratory Fish"
    ],
    "description": "Red Mullet available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "rainwater-killifish",
    "name": "Rainwater Killifish",
    "aliases": [],
    "categories": [
      "Brackish / Estuary"
    ],
    "description": "Rainwater Killifish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "tidewater-silverside",
    "name": "Tidewater Silverside",
    "aliases": [],
    "categories": [
      "Brackish / Estuary"
    ],
    "description": "Tidewater Silverside available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "european-eel",
    "name": "European Eel",
    "aliases": [],
    "categories": [
      "Migratory Fish"
    ],
    "description": "European Eel available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "japanese-eel",
    "name": "Japanese Eel",
    "aliases": [],
    "categories": [
      "Migratory Fish"
    ],
    "description": "Japanese Eel available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "pacific-lamprey",
    "name": "Pacific Lamprey",
    "aliases": [],
    "categories": [
      "Migratory Fish"
    ],
    "description": "Pacific Lamprey available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "sea-lamprey",
    "name": "Sea Lamprey",
    "aliases": [],
    "categories": [
      "Migratory Fish"
    ],
    "description": "Sea Lamprey available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "river-lamprey",
    "name": "River Lamprey",
    "aliases": [],
    "categories": [
      "Migratory Fish"
    ],
    "description": "River Lamprey available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "atlantic-lamprey",
    "name": "Atlantic Lamprey",
    "aliases": [],
    "categories": [
      "Migratory Fish"
    ],
    "description": "Atlantic Lamprey available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "american-lamprey",
    "name": "American Lamprey",
    "aliases": [],
    "categories": [
      "Migratory Fish"
    ],
    "description": "American Lamprey available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "longfin-eel",
    "name": "Longfin Eel",
    "aliases": [],
    "categories": [
      "Migratory Fish"
    ],
    "description": "Longfin Eel available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "shortfin-eel",
    "name": "Shortfin Eel",
    "aliases": [],
    "categories": [
      "Migratory Fish"
    ],
    "description": "Shortfin Eel available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "freshwater-eel",
    "name": "Freshwater Eel",
    "aliases": [],
    "categories": [
      "Migratory Fish"
    ],
    "description": "Freshwater Eel available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "milkfish",
    "name": "Milkfish",
    "aliases": [],
    "categories": [
      "Migratory Fish"
    ],
    "description": "Milkfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "flathead-mullet",
    "name": "Flathead Mullet",
    "aliases": [],
    "categories": [
      "Migratory Fish"
    ],
    "description": "Flathead Mullet available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "grey-mullet",
    "name": "Grey Mullet",
    "aliases": [],
    "categories": [
      "Migratory Fish"
    ],
    "description": "Grey Mullet available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "golden-mullet",
    "name": "Golden Mullet",
    "aliases": [],
    "categories": [
      "Migratory Fish"
    ],
    "description": "Golden Mullet available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "barramundi",
    "name": "Barramundi",
    "aliases": [],
    "categories": [
      "Migratory Fish"
    ],
    "description": "Barramundi available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "australian-bass",
    "name": "Australian Bass",
    "aliases": [],
    "categories": [
      "Migratory Fish"
    ],
    "description": "Australian Bass available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "australian-salmon",
    "name": "Australian Salmon",
    "aliases": [],
    "categories": [
      "Migratory Fish"
    ],
    "description": "Australian Salmon available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "yellowtail-amberjack",
    "name": "Yellowtail Amberjack",
    "aliases": [],
    "categories": [
      "Migratory Fish"
    ],
    "description": "Yellowtail Amberjack available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "yellowtail-kingfish",
    "name": "Yellowtail Kingfish",
    "aliases": [],
    "categories": [
      "Migratory Fish"
    ],
    "description": "Yellowtail Kingfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "kingfish",
    "name": "Kingfish",
    "aliases": [],
    "categories": [
      "Migratory Fish"
    ],
    "description": "Kingfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "atlantic-herring",
    "name": "Atlantic Herring",
    "aliases": [],
    "categories": [
      "Migratory Fish"
    ],
    "description": "Atlantic Herring available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "tuna",
    "name": "Tuna",
    "aliases": [],
    "categories": [
      "Migratory Fish"
    ],
    "description": "Tuna available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "european-river-lamprey",
    "name": "European River Lamprey",
    "aliases": [],
    "categories": [
      "Migratory Fish"
    ],
    "description": "European River Lamprey available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "pacific-herring",
    "name": "Pacific Herring",
    "aliases": [],
    "categories": [
      "Migratory Fish"
    ],
    "description": "Pacific Herring available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "american-smelt",
    "name": "American Smelt",
    "aliases": [],
    "categories": [
      "Migratory Fish"
    ],
    "description": "American Smelt available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "anglerfish",
    "name": "Anglerfish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Anglerfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "deep-sea-anglerfish",
    "name": "Deep-Sea Anglerfish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Deep-Sea Anglerfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "gulper-eel",
    "name": "Gulper Eel",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Gulper Eel available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "snipe-eel",
    "name": "Snipe Eel",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Snipe Eel available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "giant-oarfish",
    "name": "Giant Oarfish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Giant Oarfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "oarfish",
    "name": "Oarfish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Oarfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "viperfish",
    "name": "Viperfish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Viperfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "fangtooth",
    "name": "Fangtooth",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Fangtooth available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "dragonfish",
    "name": "Dragonfish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Dragonfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "lanternfish",
    "name": "Lanternfish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Lanternfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "myctophid",
    "name": "Myctophid",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Myctophid available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "brisling",
    "name": "Brisling",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Brisling available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "blobfish",
    "name": "Blobfish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Blobfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "tripod-fish",
    "name": "Tripod Fish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Tripod Fish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "barreleye",
    "name": "Barreleye",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Barreleye available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "black-swallower",
    "name": "Black Swallower",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Black Swallower available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "deep-sea-smelt",
    "name": "Deep-Sea Smelt",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Deep-Sea Smelt available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "pacific-blackdragon",
    "name": "Pacific Blackdragon",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Pacific Blackdragon available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "stoplight-loosejaw",
    "name": "Stoplight Loosejaw",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Stoplight Loosejaw available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "loosejaw",
    "name": "Loosejaw",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Loosejaw available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "deep-sea-lizardfish",
    "name": "Deep-Sea Lizardfish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Deep-Sea Lizardfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "lizardfish",
    "name": "Lizardfish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Lizardfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "chimaera",
    "name": "Chimaera",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Chimaera available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "ghost-shark",
    "name": "Ghost Shark",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Ghost Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "ratfish",
    "name": "Ratfish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Ratfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "sleeper-shark",
    "name": "Sleeper Shark",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Sleeper Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "greenland-shark",
    "name": "Greenland Shark",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Greenland Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "deepwater-dogfish",
    "name": "Deepwater Dogfish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Deepwater Dogfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "portuguese-dogfish",
    "name": "Portuguese Dogfish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Portuguese Dogfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "cookiecutter",
    "name": "Cookiecutter",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Cookiecutter available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "kitefin-shark",
    "name": "Kitefin Shark",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Kitefin Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "velvet-belly-lanternshark",
    "name": "Velvet Belly Lanternshark",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Velvet Belly Lanternshark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "lanternshark",
    "name": "Lanternshark",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Lanternshark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "pygmy-shark",
    "name": "Pygmy Shark",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Pygmy Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "bramble-shark",
    "name": "Bramble Shark",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Bramble Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "gulper-shark",
    "name": "Gulper Shark",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Gulper Shark available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "deepwater-skate",
    "name": "Deepwater Skate",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Deepwater Skate available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "arctic-skate",
    "name": "Arctic Skate",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Arctic Skate available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "round-skate",
    "name": "Round Skate",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Round Skate available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "blue-antimora",
    "name": "Blue Antimora",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Blue Antimora available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "antimora",
    "name": "Antimora",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Antimora available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "rattail",
    "name": "Rattail",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Rattail available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "grenadier",
    "name": "Grenadier",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Grenadier available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "orange-roughy",
    "name": "Orange Roughy",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Orange Roughy available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "hoplostethus",
    "name": "Hoplostethus",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Hoplostethus available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "patagonian-toothfish",
    "name": "Patagonian Toothfish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Patagonian Toothfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "chilean-sea-bass",
    "name": "Chilean Sea Bass",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Chilean Sea Bass available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "black-scabbardfish",
    "name": "Black Scabbardfish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Black Scabbardfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "sabre-fish",
    "name": "Sabre Fish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Sabre Fish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "ribbonfish",
    "name": "Ribbonfish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Ribbonfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "cutlassfish",
    "name": "Cutlassfish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Cutlassfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "escolar",
    "name": "Escolar",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Escolar available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "oilfish",
    "name": "Oilfish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Oilfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "snake-mackerel",
    "name": "Snake Mackerel",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Snake Mackerel available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "dragonet",
    "name": "Dragonet",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Dragonet available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "deepwater-cardinalfish",
    "name": "Deepwater Cardinalfish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Deepwater Cardinalfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "deepwater-cardinal",
    "name": "Deepwater Cardinal",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Deepwater Cardinal available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "cusk",
    "name": "Cusk",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Cusk available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "brotula",
    "name": "Brotula",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Brotula available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "deepwater-brotula",
    "name": "Deepwater Brotula",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Deepwater Brotula available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "eelpout",
    "name": "Eelpout",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Eelpout available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "wolffish",
    "name": "Wolffish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Wolffish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "atlantic-wolffish",
    "name": "Atlantic Wolffish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Atlantic Wolffish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "blob-sculpin",
    "name": "Blob Sculpin",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Blob Sculpin available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "deepwater-sculpin",
    "name": "Deepwater Sculpin",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Deepwater Sculpin available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "pacific-ocean-perch",
    "name": "Pacific Ocean Perch",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Pacific Ocean Perch available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "rougheye-rockfish",
    "name": "Rougheye Rockfish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Rougheye Rockfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "shortraker-rockfish",
    "name": "Shortraker Rockfish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Shortraker Rockfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "yelloweye-rockfish",
    "name": "Yelloweye Rockfish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Yelloweye Rockfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "blackgill-rockfish",
    "name": "Blackgill Rockfish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Blackgill Rockfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "sebastolobus",
    "name": "Sebastolobus",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Sebastolobus available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "thornyhead",
    "name": "Thornyhead",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Thornyhead available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "longspine-thornyhead",
    "name": "Longspine Thornyhead",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Longspine Thornyhead available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "shortspine-thornyhead",
    "name": "Shortspine Thornyhead",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Shortspine Thornyhead available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "deep-sea-eel",
    "name": "Deep-Sea Eel",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Deep-Sea Eel available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "cutthroat-eel",
    "name": "Cutthroat Eel",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Cutthroat Eel available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "pelican-eel",
    "name": "Pelican Eel",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Pelican Eel available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "swallower-eel",
    "name": "Swallower Eel",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Swallower Eel available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "firefly-squidfish",
    "name": "Firefly Squidfish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Firefly Squidfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "black-cod",
    "name": "Black Cod",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Black Cod available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "blue-grenadier",
    "name": "Blue Grenadier",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Blue Grenadier available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "hoki",
    "name": "Hoki",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Hoki available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "boreogadus",
    "name": "Boreogadus",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Boreogadus available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "deepwater-hake",
    "name": "Deepwater Hake",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Deepwater Hake available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "cusk-eel",
    "name": "Cusk Eel",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Cusk Eel available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "pearlfish",
    "name": "Pearlfish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Pearlfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "barreleye-fish",
    "name": "Barreleye Fish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Barreleye Fish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "spookfish",
    "name": "Spookfish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Spookfish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  },
  {
    "id": "fangtooth-fish",
    "name": "Fangtooth Fish",
    "aliases": [],
    "categories": [
      "Deep Sea"
    ],
    "description": "Fangtooth Fish available in the FishBite species catalog.",
    "icon": "\ud83d\udc1f"
  }
];

export const SPECIES_BY_CATEGORY: Record<string, Species[]> = Object.fromEntries(
  SPECIES_CATEGORIES.map((category) => [
    category,
    SPECIES.filter((species) => species.categories.includes(category)),
  ])
);

export function searchSpecies(query: string, category?: string) {
  const q = query.trim().toLowerCase();

  return SPECIES.filter((species) => {
    const categoryMatch = !category || category === "All" || species.categories.includes(category);
    if (!categoryMatch) return false;
    if (!q) return true;

    return (
      species.name.toLowerCase().includes(q) ||
      species.aliases.some((alias) => alias.toLowerCase().includes(q)) ||
      species.id.includes(q)
    );
  });
}
