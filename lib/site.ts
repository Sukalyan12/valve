// Central company details — edit these to rebrand the whole site.
export const site = {
  name: "ValveTech",
  tagline: "Industrial Valves Engineered for Flow Control",
  description:
    "ValveTech designs and manufactures ball, gate, globe, butterfly, check and control valves for oil & gas, water, power and process industries.",
  email: "sales@valvetech.example",
  phone: "+91 98765 43210",
  address: "Plot 42, Industrial Estate, Phase II, Ahmedabad, Gujarat 380015, India",
  hours: "Mon – Sat, 9:00 AM – 6:00 PM",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/download", label: "Download" },
  { href: "/contact", label: "Contact" },
] as const;
