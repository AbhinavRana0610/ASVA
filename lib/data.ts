// All content on this site is sourced from the three ASVA documents:
// ASVA-PDF1.pptx (company introduction), ASVA-PRICES-PDF2.pdf (price list & specs)
// and ASVA-CATALOGUE.pdf (product catalogue).

export const company = {
  name: "ASVA India LLP",
  short: "ASVA",
  tagline: "Elevating Every Kitchen Experience",
  intro:
    "Kitchen chimneys and home appliances, manufactured in Barhi, Sonipat.",
  address: [
    "Flat No. 13, Phase-3, HSIIDC Industrial Area",
    "Barhi Industrial Area, Sonipat",
    "Haryana – 131101, India",
  ],
  phones: ["+91 98119 37730", "+91 83684 74702"],
  whatsapp: "919811937730",
  // TODO: add ASVA's email. While empty, the floating email button opens the contact page instead.
  email: "",
  website: "www.asvaindia.co.in",
  mapQuery: "HSIIDC Industrial Area Barhi Sonipat Haryana 131101",
};

export const aboutLong = [
  "At ASVA INDIA LLP, we are committed to transforming modern kitchens through innovative technology, elegant design, and reliable performance. As a trusted manufacturer of premium kitchen appliances, we specialize in delivering high-quality Kitchen Chimneys engineered to provide superior smoke extraction, enhanced air quality, and a seamless cooking experience.",
  "Our kitchen chimneys are thoughtfully designed to combine powerful suction performance, energy efficiency, low-noise operation, and contemporary aesthetics. Built with precision engineering and stringent quality standards, every ASVA chimney is crafted to meet the evolving needs of modern households.",
  "Whether you seek a sleek designer chimney for a contemporary kitchen or a robust solution for intensive cooking environments, ASVA offers a range of products that blend functionality, durability, and style.",
  "Driven by innovation and customer satisfaction, ASVA INDIA LLP continues to set new benchmarks in kitchen ventilation solutions, helping families create cleaner, healthier, and more comfortable cooking spaces.",
];

export const mission = [
  "Deliver Superior Quality",
  "Drive Continuous Innovation",
  "Enhance Customer Experience",
  "Promote Healthier Living",
  "Build Sustainable Growth",
];

export const features = [
  { title: "Advanced suction", text: "Powerful extraction up to 2,500 m³/h", icon: "wind" },
  { title: "Modern design", text: "Curve, T-type, pyramid and slim profiles", icon: "shape" },
  { title: "Energy efficient", text: "BLDC motors from 130 W", icon: "bolt" },
  { title: "Durable build", text: "0.5 mm GPSP body, powder-coated finish", icon: "shield" },
  { title: "Low noise", text: "Rated below 54–57 dB", icon: "wave" },
  { title: "After-sales support", text: "User-friendly controls, reliable service", icon: "support" },
] as const;

export const facility = {
  location: "Barhi Industrial Area, Sonipat, Haryana",
  summary:
    "Automatic powder coating line, spot welding (4), drum manufacturing set, NPT/BIS/QC lab and sound testing room.",
  stats: [
    { value: 60000, suffix: "", label: "sq ft production area", format: true },
    { value: 2, suffix: "", label: "3 kW double-pallet lasers" },
    { value: 5, suffix: "", label: "CNC hydraulic bending presses" },
    { value: 15, suffix: "", label: "power presses" },
  ],
  capabilities: [
    "Automatic powder coating line",
    "Spot welding (4 stations)",
    "Drum manufacturing set",
    "NPT / BIS / QC lab",
    "Sound testing room",
    "3 kW double-pallet laser cutting",
  ],
};

export const promoters = [
  { name: "Saurabh Joshi", role: "Director", bio: "B.Tech Mechanical · 24 years in manufacturing", img: "/images/team/saurabh-joshi.avif" },
  { name: "Anurag Bansal", role: "Director", bio: "B.Tech Mechanical · 24 years in manufacturing", img: "/images/team/anurag-bansal.avif" },
  { name: "Punkaj Jain", role: "Director", bio: "B.Tech Mechanical · 24 years in manufacturing", img: "/images/team/punkaj-jain.avif" },
  { name: "Ankit Goyal", role: "Director", bio: "B.Tech Mechanical · 24 years in manufacturing", img: "/images/team/ankit-goyal.avif" },
  { name: "Pravin Sharma", role: "Promoter, IGNIQUE", bio: "B.E. Mechanical, MBA Operations · 23 years of global leadership", img: "/images/team/pravin-sharma.avif" },
];

export const ignique = {
  title: "Pravin Sharma, IGNIQUE",
  text: "Engineering and plant setup consultancy: operations and transformation leader, manufacturing strategist and Lean Six Sigma Black Belt with 23 years of global leadership experience.",
  stats: [
    { value: "₹2,800 Cr", label: "Turnover managed across 35+ sites" },
    { value: "₹1,500 Cr", label: "P&L responsibility" },
    { value: "USD 60M+", label: "Large-scale projects executed" },
    { value: "3 countries", label: "Global exposure: Korea, China, France" },
  ],
  expertise: [
    "Manufacturing operations",
    "Greenfield projects",
    "Lean transformation",
    "P&L management",
    "Industry 4.0 and automation",
    "Operational excellence",
  ],
  employers: "Air conditioners, consumer durables, smart cards and automotive assembly. Safran, LG Electronics, Havells-Lloyd, Orient Electric, Force Motors, Gabriel.",
};

export const fanair = {
  title: "FanAir: The Promoters' Core Business",
  text: "Manufacturing unit for HVAC equipment, built on 24+ years of promoter experience.",
  salesOffice: "C-80, Phase-I, Mangolpuri Industrial Area, New Delhi – 110083",
  factory: "A-09 RIICO Industrial Area, Ghiloth, Neemrana, Rajasthan",
  web: "www.fanair.in",
};

export const clients = ["Hindware", "Sunshine", "Inalsa", "Kaff", "Lifeguard", "Padmini"];

// Logos cropped from the client-brands slide in ASVA-PDF1.pptx. `h` = display height in px,
// tuned so square and wide marks look visually balanced.
export const clientLogos = [
  { name: "Hindware", src: "/images/clients/hindware.avif", w: 198, hgt: 199, h: 72 },
  { name: "Sunshine", src: "/images/clients/sunshine.avif", w: 397, hgt: 88, h: 40 },
  { name: "Inalsa", src: "/images/clients/inalsa.avif", w: 355, hgt: 127, h: 52 },
  { name: "Kaff", src: "/images/clients/kaff.avif", w: 214, hgt: 214, h: 66 },
  { name: "Lifeguard", src: "/images/clients/lifeguard.avif", w: 390, hgt: 155, h: 54 },
  { name: "Padmini", src: "/images/clients/padmini.avif", w: 197, hgt: 90, h: 48 },
];

export const newLaunches = [
  { name: "Curve Slim", text: "Slimmest in India. A curved slim profile in black powder-coated 0.5 mm GPSP, available in 60, 75 and 90 cm.", img: "/images/upcoming/curve-slim.avif" },
  { name: "Slim-20 mm", text: "Slimmest in India. A slim-profile chimney with LED lighting and motion-sensor or push-button control, available in 60, 75 and 90 cm.", img: "/images/upcoming/slim-20mm.avif" },
  { name: "Hexagonal Ductless", text: "Innovative hexagonal body design featuring advanced ductless operation for efficient and hassle-free kitchen ventilation.", img: "/images/upcoming/hexagonal-ductless.avif" },
  { name: "Curve Draw", text: "Compact curved draw design for a sleek and modern appearance.", img: "/images/upcoming/curve-draw.avif" },
];

export const upcomingCollection = [
  { name: "Android Chimney", text: "Built-in streaming display", img: "/images/upcoming/android-chimney.avif" },
  { name: "In-built Wi-Fi & Voice Control Chimney", text: "Connected control", img: "/images/upcoming/wifi-voice-chimney.avif" },
  { name: "Pyramid SS-Mirror", text: "Stainless steel mirror finish", img: "/images/upcoming/pyramid-ss-mirror.avif" },
];

export const upcomingProducts = [
  { name: "Stick-type Vacuum Cleaner", img: "/images/upcoming/stick-vacuum.avif" },
  { name: "Air Fryer with OTG", img: "/images/upcoming/airfryer-otg.avif" },
  { name: "Gas Hobs", img: "/images/upcoming/gas-hob.avif" },
  { name: "Infrared Cooktop", img: "/images/upcoming/infrared-cooktop.avif" },
];

// ---------------------------------------------------------------- products

export type SeriesId = "curve" | "t-type" | "pyramid" | "ductless" | "bldc" | "vacuum";

export const series: {
  id: SeriesId;
  code: string;
  name: string;
  blurb: string;
  cover: string;
}[] = [
  { id: "curve", code: "CRV", name: "Curve Series", blurb: "200 W · 230 V curved-glass chimneys with motion-sensor or push-button control and LED lighting.", cover: "/images/products/curve-4.avif" },
  { id: "t-type", code: "TT", name: "T-Type Series", blurb: "Clean T-profile hoods in 60, 75 and 90 cm with motion sensor control and baffle or filterless options.", cover: "/images/products/t-type-1.avif" },
  { id: "pyramid", code: "PYR", name: "Pyramid Series", blurb: "Classic pyramid hoods in 60, 75 and 90 cm, from 1,100 to 1,500 m³/h suction.", cover: "/images/products/pyramid-3.avif" },
  { id: "ductless", code: "DCT", name: "Ductless Series", blurb: "Hexagonal body with advanced ductless operation for hassle-free ventilation.", cover: "/images/products/hexagonal-ductless.avif" },
  { id: "bldc", code: "BLDC", name: "BLDC Motor Series", blurb: "Filterless, motion sensor control, noise below 57 dB, no capacitor — up to 2,500 m³/h.", cover: "/images/products/bldc-9.avif" },
  { id: "vacuum", code: "VAC", name: "Vacuum Cleaners", blurb: "Wet & dry stainless-steel tank vacuum cleaners from 12 to 42 litres.", cover: "/images/products/vacuum-12in.avif" },
];

export type Chimney = {
  kind: "chimney";
  slug: string;
  code: string;
  name: string;
  series: SeriesId;
  display: string;
  img: string;
  gallery?: string[];
  badge?: string;
  specs: {
    size: string;
    finish: string;
    material: string;
    voltage: string;
    motor: string;
    capacitor: string;
    control: string;
    noise: string;
    suction: number;
    hood: string;
    blower: string;
    filter: string;
    led: string;
    sizes: string;
  };
  priceUSD: [number | null, number | null, number | null]; // 60 / 75 / 90 cm
};

export type Vacuum = {
  kind: "vacuum";
  slug: string;
  code: string;
  name: string;
  series: "vacuum";
  display: string;
  img: string;
  capacities: string;
  points: string[];
};

export type Product = Chimney | Vacuum;

const base = {
  size: "60 CM",
  finish: "Black powder coated",
  material: "GPSP 0.50 mm (±0.05)",
  voltage: "230 V AC 50 Hz",
  hood: "0.5 mm GPSP",
  sizes: "60, 75, 90 cm",
};

type Row = [
  code: string, name: string, series: SeriesId, display: string, img: string,
  motor: string, capacitor: string, control: string, noise: string, suction: number,
  blower: string, filter: string, led: string, price: [number | null, number | null, number | null],
  extra?: Partial<Chimney["specs"]> & { badge?: string; gallery?: string[] },
];

const rows: Row[] = [
  // Specs below follow the catalogue (each catalogue page pairs the photo, name and spec table).
  // The price list's spec columns are shifted by one row from Eco Curve 3 to Mini Pyramid 7,
  // so only names, codes and prices are taken from the price list.
  ["ASVA-CRV-01", "ASVA Curve 1", "curve", "With Display", "curve-1.jpg", "200 W", "6 MF", "Motion Sensor", "<54 dB", 1400, "Plastic blower & metal housing", "GPSP BLK (Filterless 290×390 mm)", "Rectangular mini LED (2 × 1.5 W)", [61.5, 64, 66.5]],
  ["ASVA-CRV-02", "ASVA Curve 2", "curve", "Without Display", "curve-2.jpg", "200 W", "6 MF", "Motion Sensor", "<54 dB", 1400, "Plastic blower & metal housing", "GPSP BLK (Filterless 290×390 mm)", "Rectangular mini LED (2 × 1.5 W)", [56.5, 59, 61.5]],
  ["ASVA-CRV-03E", "ASVA Eco Curve 3", "curve", "Without Display", "eco-curve-3.jpg", "200 W", "6 MF", "Motion Sensor", "<54 dB", 1400, "Plastic blower & metal housing", "GPSP BLK (Filterless 290×390 mm)", "Rectangular mini LED (2 × 1.5 W)", [56.5, 60, 65], { badge: "Eco" }],
  ["ASVA-CRV-04", "ASVA Curve 4", "curve", "With Display", "curve-4.jpg", "200 W", "6 MF", "Motion Sensor", "<54 dB", 1400, "Plastic blower & metal housing", "GPSP BLK (Filterless 390×280 mm)", "Round LED (2 × 1.5 W)", [61.5, 64, 66.5]],
  ["ASVA-CRV-05", "ASVA Curve 5", "curve", "Without Display", "curve-5.jpg", "200 W", "6 MF", "Motion Sensor", "<55 dB", 1400, "Plastic blower & metal housing", "GPSP BLK (Filterless 520×280 mm)", "Round LED (2 × 1.5 W)", [56.5, 60, 65]],
  ["ASVA-CRV-06DJ", "ASVA Curve 6 DJ", "curve", "DJ Display", "curve-6-dj.jpg", "200 W", "6 MF", "Push Button with Display", "<55 dB", 1400, "Plastic blower & metal housing", "GPSP BLK (Filterless 520×280 mm)", "Rectangular mini (1 × 1.5 W)", [46.5, 49, 51.5], { badge: "DJ Display" }],
  ["ASVA-CRV-07", "ASVA Curve 7", "curve", "With Display", "curve-7.jpg", "200 W", "6 MF", "Motion Sensor", "<55 dB", 1600, "Plastic blower & metal housing", "GPSP BLK (Filterless)", "Rectangular big (1 × 1.5 W)", [56.5, 60, 64]],
  ["ASVA-TT-01", "ASVA T-Type 1", "t-type", "With Display", "t-type-1.png", "200 W", "6 MF", "Motion Sensor", "<55 dB", 1400, "Plastic blower & metal housing", "GPSP BLK (Filterless 305×450 mm)", "Rectangular (2 × 1.5 W)", [56.5, 60, 64]],
  ["ASVA-TT-02", "ASVA T-Type 2", "t-type", "With Display", "t-type-2.png", "200 W", "6 MF", "Motion Sensor", "<56 dB", 1400, "Plastic blower & metal housing", "GPSP BLK (Baffle 470×280 mm)", "Rectangular (2 × 1.5 W)", [57.5, 61.5, 65]],
  ["ASVA-TT-03", "ASVA T-Type 3", "t-type", "With Display", "t-type-3.jpg", "130 W", "N/A", "Motion Sensor", "<56 dB", 1800, '9" metal housing & blower', "GPSP BLK (Baffle 530×290 mm)", "Rectangular (2 × 1.5 W)", [72.5, 76.5, 80], { voltage: "130 V AC 50 Hz" }],
  ["ASVA-DCT-HEX", "ASVA Hexagonal Ductless", "ductless", "—", "hexagonal-ductless.png", "130 W / 180 W", "N/A", "Motion Sensor", "<57 dB", 1000, '8" metal housing & blower', "GPSP BLK (Filterless/Baffle 230×430 mm)", "Rectangular mini LED (2 × 1.5 W)", [69, null, null], { voltage: "130 V AC 50 Hz", sizes: "60 cm", badge: "New Launch" }],
  ["ASVA-PYR-01", "ASVA Pyramid 1", "pyramid", "—", "pyramid-1.jpg", "90 W", "2.5 MF", "3 Speed Push Button", "<54 dB", 1100, "Plastic (blower & housing)", "2× Baffle filter 285×235 mm", "Round LED (2 × 1.5 W)", [36.5, 39, 41.5]],
  ["ASVA-PYR-02", "ASVA Pyramid 2", "pyramid", "—", "pyramid-2.jpg", "200 W", "6 MF", "3 Speed Push Button", "<54 dB", 1400, "Plastic blower & metal housing", "2× Baffle filter 285×235 mm", "Round LED (2 × 1.5 W)", [36.5, 39, 41.5]],
  ["ASVA-PYR-03", "ASVA Pyramid 3", "pyramid", "—", "pyramid-3.jpg", "90 W", "2.5 MF", "3 Speed Push Button", "<54 dB", 1100, "Plastic (blower & housing)", "Filterless (530×280 mm)", "Rectangular (2 × 1.5 W)", [36.5, 39, 41.5]],
  ["ASVA-PYR-04", "ASVA Pyramid 4", "pyramid", "—", "pyramid-4.jpg", "90 W", "2.5 MF", "3 Speed Push Button", "<54 dB", 1200, "Plastic (blower & housing)", "Filterless (510×280 mm)", "Rectangular (1 × 1.5 W)", [41.5, 45, 49]],
  ["ASVA-PYR-05X", "ASVA Pyramid 5", "pyramid", "—", "pyramid-5.jpg", "200 W", "6 MF", "Motion Sensor", "<56 dB", 1500, "Metal (blower & housing)", "Filterless (400×280 mm)", "Rectangular (2 × 1.5 W)", [37.75, 41.5, 45]],
  ["ASVA-PYR-06", "ASVA Pyramid 6", "pyramid", "—", "pyramid-6.jpg", "90 W", "2.5 MF", "3 Speed Push Button", "<55 dB", 1400, "Plastic (blower & housing)", "Filterless (510×355 mm)", "Rectangular (1 × 1.5 W)", [37.75, 40, 42.75], { badge: "Exclusive · Biggest Filter" }],
  ["ASVA-PYR-07M", "ASVA Mini Pyramid 7", "pyramid", "—", "mini-pyramid-7.jpg", "90 W", "2.5 MF", "3 Speed Push Button", "<54 dB", 1100, "Plastic (blower & housing)", "Filterless (530×290 mm)", "Rectangular (2 × 1.5 W)", [41.5, 44, 46.5], { badge: "Mini" }],
  ["ASVA-BLDC-CRV1", "BLDC Curve 1", "bldc", "—", "bldc-1.jpg", "130 W", "N/A", "Motion Sensor", "<57 dB", 1800, "Metal blower & metal housing", "Filterless (290×390 mm)", "Rectangular mini (2 × 1.5 W)", [56.5, 60, 64]],
  ["ASVA-BLDC-TM2", "BLDC 2 (T Mini)", "bldc", "—", "bldc-2.jpg", "130 W", "N/A", "Motion Sensor", "<57 dB", 1800, "Metal blower & metal housing", "Filterless (280×390 mm)", "Rectangular mini (2 × 1.5 W)", [56.5, 60, 64]],
  ["ASVA-BLDC-TT3", "BLDC 3 (T Tapper)", "bldc", "—", "bldc-3.jpg", "130 W", "N/A", "Motion Sensor", "<57 dB", 1800, "Metal blower & metal housing", "Filterless (290×390 mm)", "Rectangular mini (2 × 1.5 W)", [60, 62.5, 65]],
  ["ASVA-BLDC-SL25", "BLDC 4 Slim-25", "bldc", "—", "bldc-4.jpg", "180 W", "N/A", "Motion Sensor", "<57 dB", 2500, '8" metal blower & metal housing', "Filterless (550×320 mm)", "Rectangular (2 × 1.5 W)", [72.5, 75, 77.5], { badge: "2,500 m³/h" }],
  ["ASVA-BLDC-SL30", "BLDC 5 Slim-30", "bldc", "—", "bldc-5.jpg", "130 W", "N/A", "Motion Sensor", "<57 dB", 1800, '9" metal blower & metal housing', "Filterless (530×315 mm)", "Rectangular (2 × 1.5 W)", [70, 72.5, 75]],
  ["ASVA-BLDC-CRV6", "BLDC 6 Curve", "bldc", "—", "bldc-6.jpg", "130 W", "N/A", "Motion Sensor", "<57 dB", 1800, '9" metal blower & metal housing', "Filterless (390×280 mm)", "Rectangular (2 × 1.5 W)", [70, 72.5, 75]],
  ["ASVA-BLDC-CD7", "BLDC 7 Curve Draw", "bldc", "—", "bldc-7.jpg", "130 W", "N/A", "Motion Sensor", "<57 dB", 1800, '9" metal blower & metal housing', "Filterless (280×360 mm)", "Rectangular big (1 × 1.5 W)", [70, 72.5, 75]],
  ["ASVA-BLDC-TD8", "BLDC 8 (T Draw)", "bldc", "—", "bldc-8.jpg", "130 W", "N/A", "Motion Sensor", "<57 dB", 1800, '9" metal blower & metal housing', "Filterless (290×390 mm)", "Rectangular big (1 × 1.5 W)", [65, 69, 72.5]],
  ["ASVA-BLDC-CRV9", "BLDC 9 Curve", "bldc", "—", "bldc-9.jpg", "130 W", "N/A", "Motion Sensor", "<57 dB", 1800, '9" metal blower & metal housing', "Filterless (465×315 mm)", "Rectangular (2 × 1.5 W)", [69, 72.5, 76.5]],
  ["ASVA-BLDC-INC10", "BLDC 10 Inclined", "bldc", "—", "bldc-10.png", "130 W", "N/A", "Motion Sensor", "<57 dB", 1800, '9" metal blower & metal housing', "Filterless (465×315 mm)", "Rectangular mini (2 × 1.5 W)", [null, null, null], { gallery: ["/images/products/bldc-10-hydraulic.avif"], badge: "Hydraulic variant" }],
];

const slugify = (s: string) =>
  s.toLowerCase().replace(/[()]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const chimneys: Chimney[] = rows.map(
  ([code, name, s, display, img, motor, capacitor, control, noise, suction, blower, filter, led, price, extra]) => {
    const { badge, gallery, ...specExtra } = extra ?? {};
    return {
      kind: "chimney",
      slug: slugify(name.replace(/^ASVA /, "")),
      code,
      name,
      series: s,
      display,
      img: `/images/products/${img}`,
      badge,
      gallery,
      specs: { ...base, motor, capacitor, control, noise, suction, blower, filter, led, ...specExtra },
      priceUSD: price,
    };
  },
);

export const vacuums: Vacuum[] = [
  {
    kind: "vacuum",
    slug: "vacuum-tank-12",
    code: 'TANK 12" – 310 MM',
    name: 'Wet & Dry Vacuum — Tank 12"',
    series: "vacuum",
    display: "25 / 35 / 42 L",
    img: "/images/products/vacuum-12in.avif",
    capacities: "25, 35, 42 L",
    points: [
      "Power: 1,700 W",
      "Tank: 42 L, 35 L, 25 L stainless steel",
      "Function: wet & dry cleaning",
      "Airflow: 120–130 L/s",
      "Pressure: 220–250 mbar",
      "Hose: 40 mm · Cable: 10 m",
      "Noise: ≤78 dB",
      "Mobility: 4 swivel wheels",
      "Includes: floor & round brushes, crevice nozzle",
      "Size: 580 × 510 × 970 mm",
    ],
  },
  {
    kind: "vacuum",
    slug: "vacuum-tank-10-5",
    code: 'TANK 10.5" – 265 MM',
    name: 'Wet & Dry Vacuum — Tank 10.5"',
    series: "vacuum",
    display: "12 / 15 / 20 L",
    img: "/images/products/vacuum-10in.avif",
    capacities: "12, 15, 20 L",
    points: [
      "Power: 1,200 W",
      "Tank: 12, 15, 20 L stainless steel",
      "Function: wet & dry cleaning",
      "Suction: 200 mbar · Airflow: 65 L/s",
      "Hose: 35 mm · Cable: 5 m",
      "Noise: ≤75 dB",
      "Mobility: 360° swivel wheels",
      "Includes: floor, round & crevice brushes",
      "Weight: as per size",
    ],
  },
];

export const products: Product[] = [...chimneys, ...vacuums];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getSeries = (id: SeriesId) => series.find((s) => s.id === id)!;

export const specLabels: [keyof Chimney["specs"], string][] = [
  ["size", "Size"],
  ["finish", "Finish"],
  ["material", "Material"],
  ["voltage", "Voltage"],
  ["motor", "Motor"],
  ["capacitor", "Capacitor"],
  ["control", "Control"],
  ["noise", "Noise level"],
  ["suction", "Suction power"],
  ["hood", "Hood material"],
  ["blower", "Blower & housing"],
  ["filter", "Filter type & size"],
  ["led", "LED light"],
  ["sizes", "Sizes available"],
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Our Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/catalogue", label: "Catalogue" },
];

// ---------------------------------------------------------------- category & series pages

export const chimneySeries = series.filter((s) => s.id !== "vacuum");

export const seriesHref = (id: SeriesId) =>
  id === "vacuum" ? "/products/vacuum-cleaners" : `/products/kitchen-chimneys/${id}`;

export const formatUSD = (p: number) => `$${p.toFixed(2).replace(/\.00$/, "").replace(/(\.\d)0$/, "$1")}`;

const range = (nums: number[], unit = "") => {
  const lo = Math.min(...nums);
  const hi = Math.max(...nums);
  const f = (n: number) => n.toLocaleString("en-IN");
  return lo === hi ? `${f(lo)}${unit}` : `${f(lo)}–${f(hi)}${unit}`;
};

/** Summary figures for one chimney series, derived from its models. */
export const seriesStats = (id: SeriesId) => {
  const models = chimneys.filter((c) => c.series === id);
  const prices = models.flatMap((m) => m.priceUSD.filter((p): p is number => p !== null));
  const unique = (xs: string[]) => [...new Set(xs)];
  return {
    models,
    count: models.length,
    suction: range(models.map((m) => m.specs.suction), " m³/h"),
    maxSuction: Math.max(...models.map((m) => m.specs.suction)),
    motors: unique(models.flatMap((m) => m.specs.motor.split(" / ").map((x) => x.trim()))).join(" / "),
    noise: `<${range(models.map((m) => parseInt(m.specs.noise.replace(/\D/g, ""))), " dB")}`,
    controls: unique(models.map((m) => m.specs.control)),
    priceFrom: prices.length ? Math.min(...prices) : null,
  };
};
