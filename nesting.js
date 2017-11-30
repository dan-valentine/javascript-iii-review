var starships = [
    {
        name: "Executor",
        model: "Executor-class star dreadnought",
        manufacturer: "Kuat Drive Yards, Fondor Shipyards",
        cost_in_credits: "1143350000",
        length: "19000",
        max_atmosphering_speed: "n/a",
        crew: "279144",
        passengers: "38000",
        cargo_capacity: "250000000",
        consumables: "6 years",
        hyperdrive_rating: "2.0",
        MGLT: "40",
        starship_class: "Star dreadnought"
    },
    {
        name: "Sentinel-class landing craft",
        model: "Sentinel-class landing craft",
        manufacturer: "Sienar Fleet Systems, Cyngus Spaceworks",
        cost_in_credits: "240000",
        length: "38",
        max_atmosphering_speed: "1000",
        crew: "5",
        passengers: "75",
        cargo_capacity: "180000",
        consumables: "1 month",
        hyperdrive_rating: "1.0",
        MGLT: "70",
        starship_class: "landing craft"
    },
    {
        name: "Death Star",
        model: "DS-1 Orbital Battle Station",
        manufacturer: "Imperial Department of Military Research, Sienar Fleet Systems",
        cost_in_credits: "1000000000000",
        length: "120000",
        max_atmosphering_speed: "n/a",
        crew: "342953",
        passengers: "843342",
        cargo_capacity: "1000000000000",
        consumables: "3 years",
        hyperdrive_rating: "4.0",
        MGLT: "10",
        starship_class: "Deep Space Mobile Battlestation"
    },
    {
        name: "Millennium Falcon",
        model: "YT-1300 light freighter",
        manufacturer: "Corellian Engineering Corporation",
        cost_in_credits: "100000",
        length: "34.37",
        max_atmosphering_speed: "1050",
        crew: "4",
        passengers: "6",
        cargo_capacity: "100000",
        consumables: "2 months",
        hyperdrive_rating: "0.5",
        MGLT: "75",
        starship_class: "Light freighter"
    },
    {
        name: "Y-wing",
        model: "BTL Y-wing",
        manufacturer: "Koensayr Manufacturing",
        cost_in_credits: "134999",
        length: "14",
        max_atmosphering_speed: "1000km",
        crew: "2",
        passengers: "0",
        cargo_capacity: "110",
        consumables: "1 week",
        hyperdrive_rating: "1.0",
        MGLT: "80",
        starship_class: "Starfighter"
    },
    {
        name: "X-wing",
        model: "T-65 X-wing",
        manufacturer: "Incom Corporation",
        cost_in_credits: "149999",
        length: "12.5",
        max_atmosphering_speed: "1050",
        crew: "1",
        passengers: "0",
        cargo_capacity: "110",
        consumables: "1 week",
        hyperdrive_rating: "1.0",
        MGLT: "100",
        starship_class: "Starfighter"
    },
    {
        name: "TIE Advanced x1",
        model: "Twin Ion Engine Advanced x1",
        manufacturer: "Sienar Fleet Systems",
        cost_in_credits: "unknown",
        length: "9.2",
        max_atmosphering_speed: "1200",
        crew: "1",
        passengers: "0",
        cargo_capacity: "150",
        consumables: "5 days",
        hyperdrive_rating: "1.0",
        MGLT: "105",
        starship_class: "Starfighter"
    },
    {
        name: "Slave 1",
        model: "Firespray-31-class patrol and attack",
        manufacturer: "Kuat Systems Engineering",
        cost_in_credits: "unknown",
        length: "21.5",
        max_atmosphering_speed: "1000",
        crew: "1",
        passengers: "6",
        cargo_capacity: "70000",
        consumables: "1 month",
        hyperdrive_rating: "3.0",
        MGLT: "70",
        starship_class: "Patrol craft"
    },
    {
        name: "Imperial shuttle",
        model: "Lambda-class T-4a shuttle",
        manufacturer: "Sienar Fleet Systems",
        cost_in_credits: "240000",
        length: "20",
        max_atmosphering_speed: "850",
        crew: "6",
        passengers: "20",
        cargo_capacity: "80000",
        consumables: "2 months",
        hyperdrive_rating: "1.0",
        MGLT: "50",
        starship_class: "Armed government transport"
    },
    {
        name: "EF76 Nebulon-B escort frigate",
        model: "EF76 Nebulon-B escort frigate",
        manufacturer: "Kuat Drive Yards",
        cost_in_credits: "8500000",
        length: "300",
        max_atmosphering_speed: "800",
        crew: "854",
        passengers: "75",
        cargo_capacity: "6000000",
        consumables: "2 years",
        hyperdrive_rating: "2.0",
        MGLT: "40",
        starship_class: "Escort ship"
    },
    {
        name: "Calamari Cruiser",
        model: "MC80 Liberty type Star Cruiser",
        manufacturer: "Mon Calamari shipyards",
        cost_in_credits: "104000000",
        length: "1200",
        max_atmosphering_speed: "n/a",
        crew: "5400",
        passengers: "1200",
        cargo_capacity: "unknown",
        consumables: "2 years",
        hyperdrive_rating: "1.0",
        MGLT: "60",
        starship_class: "Star Cruiser"
    },
    {
        name: "A-wing",
        model: "RZ-1 A-wing Interceptor",
        manufacturer: "Alliance Underground Engineering, Incom Corporation",
        cost_in_credits: "175000",
        length: "9.6",
        max_atmosphering_speed: "1300",
        crew: "1",
        passengers: "0",
        cargo_capacity: "40",
        consumables: "1 week",
        hyperdrive_rating: "1.0",
        MGLT: "120",
        starship_class: "Starfighter"
    },
    {
        name: "B-wing",
        model: "A/SF-01 B-wing starfighter",
        manufacturer: "Slayn & Korpil",
        cost_in_credits: "220000",
        length: "16.9",
        max_atmosphering_speed: "950",
        crew: "1",
        passengers: "0",
        cargo_capacity: "45",
        consumables: "1 week",
        hyperdrive_rating: "2.0",
        MGLT: "91",
        starship_class: "Starfighter"
    },
    {
        name: "Republic Cruiser",
        model: "Consular-class cruiser",
        manufacturer: "Corellian Engineering Corporation",
        cost_in_credits: "unknown",
        length: "115",
        max_atmosphering_speed: "900",
        crew: "9",
        passengers: "16",
        cargo_capacity: "unknown",
        consumables: "unknown",
        hyperdrive_rating: "2.0",
        MGLT: "unknown",
        starship_class: "Space cruiser"
    },
    {
        name: "Naboo fighter",
        model: "N-1 starfighter",
        manufacturer: "Theed Palace Space Vessel Engineering Corps",
        cost_in_credits: "200000",
        length: "11",
        max_atmosphering_speed: "1100",
        crew: "1",
        passengers: "0",
        cargo_capacity: "65",
        consumables: "7 days",
        hyperdrive_rating: "1.0",
        MGLT: "unknown",
        starship_class: "Starfighter"
    },
    {
        name: "Naboo Royal Starship",
        model: "J-type 327 Nubian royal starship",
        manufacturer: "Theed Palace Space Vessel Engineering Corps, Nubia Star Drives",
        cost_in_credits: "unknown",
        length: "76",
        max_atmosphering_speed: "920",
        crew: "8",
        passengers: "unknown",
        cargo_capacity: "unknown",
        consumables: "unknown",
        hyperdrive_rating: "1.8",
        MGLT: "unknown",
        starship_class: "yacht"
    },
    {
        name: "Scimitar",
        model: "Star Courier",
        manufacturer: "Republic Sienar Systems",
        cost_in_credits: "55000000",
        length: "26.5",
        max_atmosphering_speed: "1180",
        crew: "1",
        passengers: "6",
        cargo_capacity: "2500000",
        consumables: "30 days",
        hyperdrive_rating: "1.5",
        MGLT: "unknown",
        starship_class: "Space Transport"
    },
    {
        name: "J-type diplomatic barge",
        model: "J-type diplomatic barge",
        manufacturer: "Theed Palace Space Vessel Engineering Corps, Nubia Star Drives",
        cost_in_credits: "2000000",
        length: "39",
        max_atmosphering_speed: "2000",
        crew: "5",
        passengers: "10",
        cargo_capacity: "unknown",
        consumables: "1 year",
        hyperdrive_rating: "0.7",
        MGLT: "unknown",
        starship_class: "Diplomatic barge"
    },
    {
        name: "AA-9 Coruscant freighter",
        model: "Botajef AA-9 Freighter-Liner",
        manufacturer: "Botajef Shipyards",
        cost_in_credits: "unknown",
        length: "390",
        max_atmosphering_speed: "unknown",
        crew: "unknown",
        passengers: "30000",
        cargo_capacity: "unknown",
        consumables: "unknown",
        hyperdrive_rating: "unknown",
        MGLT: "unknown",
        starship_class: "freighter"
    },
    {
        name: "Jedi starfighter",
        model: "Delta-7 Aethersprite-class interceptor",
        manufacturer: "Kuat Systems Engineering",
        cost_in_credits: "180000",
        length: "8",
        max_atmosphering_speed: "1150",
        crew: "1",
        passengers: "0",
        cargo_capacity: "60",
        consumables: "7 days",
        hyperdrive_rating: "1.0",
        MGLT: "unknown",
        starship_class: "Starfighter"
    }
]

// access manufacturer of the millenium falcon (index 3)
var milleniumFalcon
milleniumFalcon;

var milleniumFalconManufacturer;
milleniumFalconManufacturer;

// access the cost_in_credits of the death star (index 2)
var deathStarCost;
deathStarCost;

// get the name of the starship in index 19
var ship19 = starships[19].name
ship19;

// make an array of all the names of the ships
var shipsNames //= starships.map()
shipsNames;

// make an array of all the manufacturers DO NOT WORRY ABOUT DUPLICATES
var manufacturers //= starships.map()
manufacturers;

// make an array of all the ships with a passengers > 10
var bigShips //= starships.filter()
bigShips;

// get an array of all the ships with a starship_class of Starfighter
var myArmy //= starships.filter()
myArmy;

// find the total cost of all the ships
var totalCost //= starships.reduce()
totalCost;