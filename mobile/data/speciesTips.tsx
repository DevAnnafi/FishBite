import { Species } from "./species";

export type SpeciesTip = {
  bait: string;
  technique: string;
};

// Curated bait/technique tips for species with well-documented,
// distinctive fishing approaches - the FishBite equivalent of FishBrain
// Pro's "top baits for each species" intel, made free and front-and-center
// instead of paywalled. Matched by substring against the lowercased
// species name, checked in order, so more specific entries (e.g. "black
// sea bass") should come before broader ones (e.g. "bass").
//
// This mirrors backend/app/services.py's SPECIES_NAME_OVERRIDES so the
// bait tip and the bite-activity curve agree about how each species
// actually behaves.
const SPECIES_TIP_OVERRIDES: [string, SpeciesTip][] = [
  ["striped bass", { bait: "Bunker chunks, live eels, or bucktails", technique: "Work structure and current seams around dawn/dusk; drift live bait or swim a bucktail along the bottom." }],
  ["bluefish", { bait: "Metal spoons, poppers, or cut bunker", technique: "Fish moving water and diving birds; retrieve fast - bluefish chase aggressively." }],
  ["weakfish", { bait: "Bucktails tipped with squid, or soft plastics", technique: "Fish deep holes and channel edges with a slow, bouncing retrieve." }],
  ["black sea bass", { bait: "Squid strips or clam on a bottom rig", technique: "Fish tight to structure (wrecks, reefs, pilings) with short vertical lifts near bottom." }],
  ["sea bass", { bait: "Squid strips or clam on a bottom rig", technique: "Fish tight to structure with short vertical lifts near bottom." }],
  ["tautog", { bait: "Green crab or Asian shore crab", technique: "Fish directly on structure with a stout rod; feel for the subtle tap-tap bite and set fast." }],
  ["scup", { bait: "Squid or sandworm on a high-low rig", technique: "Bottom fish over structure or sandy patches near structure with light tackle." }],
  ["porgy", { bait: "Squid or sandworm on a high-low rig", technique: "Bottom fish near structure with light tackle." }],
  ["fluke", { bait: "Live minnow or squid strip on a bucktail", technique: "Drift slowly along bottom contours and channel edges, keeping the bait moving just off bottom." }],
  ["flounder", { bait: "Live minnow, squid strip, or bloodworm", technique: "Drift slowly over sandy bottom near channel edges, keeping the bait moving just off bottom." }],
  ["halibut", { bait: "Large cut bait or jigs", technique: "Fish deep structure and drop-offs; work jigs vertically near bottom." }],
  ["sole", { bait: "Sandworm or small cut bait", technique: "Fish sandy or muddy bottom with a light bottom rig." }],
  ["grouper", { bait: "Live pinfish or cut bait", technique: "Fish hard structure/wrecks; be ready to pull fish away from cover immediately on the bite." }],
  ["mackerel", { bait: "Small metal jigs or Sabiki rigs", technique: "Look for surface activity or diving birds and jig fast through the school." }],
  ["mahi-mahi", { bait: "Trolled ballyhoo or skirted lures", technique: "Troll weed lines and floating debris in open water." }],
  ["wahoo", { bait: "Trolled cedar plugs or diving lures", technique: "Troll fast near temperature breaks and current edges." }],
  ["tuna", { bait: "Trolled ballyhoo or cedar plugs", technique: "Troll near temperature breaks and current edges in open water." }],
  ["bonito", { bait: "Small metal jigs or trolled feathers", technique: "Look for surface-feeding schools and cast or troll ahead of them." }],
  ["little tunny", { bait: "Small metal jigs or trolled feathers", technique: "Look for surface-feeding schools and cast or troll ahead of them." }],
  ["marlin", { bait: "Rigged ballyhoo or large trolling lures", technique: "Troll offshore temperature breaks and current edges at trolling speed." }],
  ["sailfish", { bait: "Rigged ballyhoo or skirted lures", technique: "Troll offshore current edges; sailfish often travel in loose packs." }],
  ["swordfish", { bait: "Rigged squid, deep-dropped", technique: "Deep-drop during the day or fish after dark when they rise toward the surface." }],
  ["walleye", { bait: "Jig and minnow, or a nightcrawler harness", technique: "Fish after dusk and through the night with a slow bottom-bouncing presentation." }],
  ["catfish", { bait: "Cut bait, chicken liver, or stink bait", technique: "Fish still, deep water after dark on the bottom - let it sit rather than working it." }],
  ["bullhead", { bait: "Worms or cut bait", technique: "Fish still water on the bottom after dark." }],
  ["eel", { bait: "Cut fish or worms", technique: "Fish on the bottom at night - eels feed almost entirely after dark." }],
  ["burbot", { bait: "Cut bait or minnow", technique: "Fish deep, cold water at night, especially in early winter." }],
  ["trout", { bait: "Small spinners, spoons, or worms", technique: "Fish cold, clear moving water at dawn/dusk; cast upstream and drift naturally." }],
  ["char", { bait: "Small spoons or egg patterns", technique: "Fish cold water at dawn/dusk with a natural drift." }],
  ["northern pike", { bait: "Large spoons, spinnerbaits, or live suckers", technique: "Fish weed edges and structure with a steady-to-erratic retrieve; use a wire leader." }],
  ["muskellunge", { bait: "Large bucktails or glide baits", technique: "Fish weed edges and structure; expect long hours between strikes and always figure-8 at the boat." }],
  ["pickerel", { bait: "Small spinnerbaits or minnows", technique: "Fish weedy shallows with a fast, erratic retrieve." }],
  ["crappie", { bait: "Small jigs or live minnows", technique: "Fish suspended near brush or structure at dawn/dusk with a slow, subtle presentation." }],
  ["bass", { bait: "Soft plastics, spinnerbaits, or topwater lures", technique: "Fish structure and cover early/late in the day; vary retrieve speed until something triggers strikes." }],
  ["carp", { bait: "Corn, dough bait, or boilies", technique: "Chum an area and fish it still on the bottom - patience over movement." }],
  ["tarpon", { bait: "Live mullet or crabs, or large swimbaits", technique: "Fish channels and passes on the tide change; be ready for long, powerful runs." }],
  ["bonefish", { bait: "Live shrimp or crab imitations", technique: "Sight-fish skinny flats with light, accurate casts." }],
  ["permit", { bait: "Live crab", technique: "Sight-fish flats and present the crab well ahead of a cruising fish." }],
  ["jack crevalle", { bait: "Cut bait or topwater plugs", technique: "Fish current edges and bait schools with a fast retrieve." }],
];

// Fallback by category (species' own tags from species.tsx), for anything
// without a specific name match - same priority order used on the
// backend so the tip and the bite-activity model stay consistent.
const CATEGORY_TIPS: Record<string, SpeciesTip> = {
  "Sharks & Rays": { bait: "Oily cut bait (bunker, mackerel)", technique: "Chum the water and fish cut bait on the bottom or suspended, mainly at dawn/dusk or after dark." },
  "Deep Sea": { bait: "Cut bait or diamond jigs", technique: "Fish deep structure with jigging or bottom rigs; use heavier tackle for the depth and current." },
  "Reef Fish": { bait: "Cut bait or shrimp on a bottom rig", technique: "Fish tight to reef structure; be ready to keep fish from diving back into cover." },
  "Bottom Fish": { bait: "Squid, clam, or cut bait on a bottom rig", technique: "Fish it slow and close to the bottom near structure; wait for steady taps before setting the hook." },
  "Panfish": { bait: "Small jigs, worms, or crickets under a bobber", technique: "Fish near cover in shallow water with light tackle and patience." },
  "Migratory Fish": { bait: "Match the local baitfish with jigs or trolled lures", technique: "Time it around the run - check recent local reports for when this species is passing through." },
  "Game Fish": { bait: "Live or cut bait matched to local forage, or artificial lures", technique: "Fish active water - current, structure, or drop-offs - during low-light hours." },
  "Brackish / Estuary": { bait: "Live shrimp, mud minnows, or cut bait", technique: "Fish channel edges and creek mouths on a moving tide." },
  "Saltwater / Marine": { bait: "Cut bait or bucktails matched to local baitfish", technique: "Fish moving water around structure or visible bait activity." },
  "Freshwater": { bait: "Live bait (worms, minnows) or basic soft plastics", technique: "Fish near cover - weeds, docks, or drop-offs - during low-light hours." },
};

const CATEGORY_PRIORITY = [
  "Sharks & Rays",
  "Deep Sea",
  "Reef Fish",
  "Bottom Fish",
  "Panfish",
  "Migratory Fish",
  "Game Fish",
  "Brackish / Estuary",
  "Saltwater / Marine",
  "Freshwater",
];

const DEFAULT_TIP: SpeciesTip = {
  bait: "Live or cut bait matched to local forage",
  technique: "Fish near structure or current breaks during active feeding windows.",
};

export function getSpeciesTip(species: Species): SpeciesTip {
  const name = species.name.toLowerCase();

  for (const [key, tip] of SPECIES_TIP_OVERRIDES) {
    if (name.includes(key)) return tip;
  }

  for (const category of CATEGORY_PRIORITY) {
    if (species.categories.includes(category)) return CATEGORY_TIPS[category];
  }

  return DEFAULT_TIP;
}