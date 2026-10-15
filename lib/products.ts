export type Product = {
  slug: string;
  name: string;
  category: "Isolation" | "Regulation" | "Non-Return";
  summary: string;
  description: string;
  sizes: string;
  pressure: string;
  materials: string[];
  endConnections: string[];
  applications: string[];
};

export const products: Product[] = [
  {
    slug: "ball-valves",
    name: "Ball Valves",
    category: "Isolation",
    summary: "Quarter-turn valves with tight shut-off for fast, reliable on/off control.",
    description:
      "Floating and trunnion-mounted ball valves with full or reduced bore. Fire-safe and anti-static designs are available, along with soft or metal seats for demanding services.",
    sizes: '½" – 24" (DN15 – DN600)',
    pressure: "ANSI Class 150 – 2500",
    materials: ["Carbon Steel (WCB)", "Stainless Steel (CF8M)", "Duplex", "Alloy 20"],
    endConnections: ["Flanged", "Butt Weld", "Socket Weld", "Screwed"],
    applications: ["Oil & Gas pipelines", "Chemical processing", "Water distribution"],
  },
  {
    slug: "gate-valves",
    name: "Gate Valves",
    category: "Isolation",
    summary: "Linear-motion valves for full-flow isolation with minimal pressure drop.",
    description:
      "Wedge and parallel-slide gate valves with rising stem, bolted or pressure-seal bonnets. Built for long service life in high-temperature and high-pressure lines.",
    sizes: '2" – 36" (DN50 – DN900)',
    pressure: "ANSI Class 150 – 1500",
    materials: ["Carbon Steel (WCB)", "Alloy Steel (WC6, WC9)", "Stainless Steel (CF8)"],
    endConnections: ["Flanged", "Butt Weld"],
    applications: ["Power plants", "Refineries", "Steam lines"],
  },
  {
    slug: "globe-valves",
    name: "Globe Valves",
    category: "Regulation",
    summary: "Precise throttling and flow regulation with excellent seat tightness.",
    description:
      "T-pattern, Y-pattern and angle globe valves with plug or needle discs. Bellows-sealed versions are available for zero-emission and hazardous services.",
    sizes: '½" – 16" (DN15 – DN400)',
    pressure: "ANSI Class 150 – 2500",
    materials: ["Carbon Steel (WCB)", "Stainless Steel (CF8M)", "Alloy Steel (WC6)"],
    endConnections: ["Flanged", "Butt Weld", "Socket Weld"],
    applications: ["Steam & condensate", "Feedwater control", "Fuel oil systems"],
  },
  {
    slug: "butterfly-valves",
    name: "Butterfly Valves",
    category: "Regulation",
    summary: "Compact, lightweight valves for large-diameter flow control.",
    description:
      "Concentric, double-offset and triple-offset butterfly valves in wafer, lug and double-flanged patterns. Lever, gear or actuated operation.",
    sizes: '2" – 72" (DN50 – DN1800)',
    pressure: "PN10 – PN40 / ANSI Class 150 – 600",
    materials: ["Ductile Iron", "Carbon Steel", "Stainless Steel", "Aluminium Bronze"],
    endConnections: ["Wafer", "Lug", "Double Flanged"],
    applications: ["Water treatment", "HVAC", "Cooling water", "Desalination"],
  },
  {
    slug: "check-valves",
    name: "Check Valves",
    category: "Non-Return",
    summary: "Automatic backflow prevention to protect pumps and compressors.",
    description:
      "Swing, lift, dual-plate and piston check valves. Low cracking pressure and non-slam designs reduce water hammer in pumping systems.",
    sizes: '½" – 48" (DN15 – DN1200)',
    pressure: "ANSI Class 150 – 2500",
    materials: ["Carbon Steel (WCB)", "Stainless Steel (CF8M)", "Ductile Iron"],
    endConnections: ["Flanged", "Wafer", "Butt Weld", "Socket Weld"],
    applications: ["Pump discharge", "Compressor outlets", "Fire-fighting systems"],
  },
  {
    slug: "control-valves",
    name: "Control Valves",
    category: "Regulation",
    summary: "Pneumatic and electric actuated valves for automated process control.",
    description:
      "Globe and rotary control valves paired with pneumatic or electric actuators, positioners and limit switches. Supplied calibrated and tested to your process data sheet.",
    sizes: '1" – 16" (DN25 – DN400)',
    pressure: "ANSI Class 150 – 1500",
    materials: ["Carbon Steel (WCB)", "Stainless Steel (CF8M)", "Hastelloy"],
    endConnections: ["Flanged", "Butt Weld"],
    applications: ["Process automation", "Pressure reduction", "Temperature control"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
