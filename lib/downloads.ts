export type DownloadItem = {
  title: string;
  description: string;
  type: "Catalogue" | "Brochure" | "Certificate" | "Manual";
  file: string; // path under /public
};

// Files live in /public/downloads. Replace the placeholder PDFs with your real documents.
export const downloads: DownloadItem[] = [
  {
    title: "Product Catalogue 2026",
    description: "Complete range of ball, gate, globe, butterfly, check and control valves.",
    type: "Catalogue",
    file: "/downloads/product-catalogue-2026.pdf",
  },
  {
    title: "Company Profile",
    description: "Our facilities, capabilities, quality systems and key clients.",
    type: "Brochure",
    file: "/downloads/company-profile.pdf",
  },
  {
    title: "Ball Valve Technical Datasheet",
    description: "Dimensions, weights, pressure-temperature ratings and materials.",
    type: "Catalogue",
    file: "/downloads/ball-valve-datasheet.pdf",
  },
  {
    title: "Butterfly Valve Technical Datasheet",
    description: "Wafer, lug and double-flanged dimensions with torque data.",
    type: "Catalogue",
    file: "/downloads/butterfly-valve-datasheet.pdf",
  },
  {
    title: "ISO 9001:2015 Certificate",
    description: "Quality management system certification.",
    type: "Certificate",
    file: "/downloads/iso-9001-certificate.pdf",
  },
  {
    title: "API 6D Certificate",
    description: "Licence to apply the API monogram on pipeline valves.",
    type: "Certificate",
    file: "/downloads/api-6d-certificate.pdf",
  },
  {
    title: "Installation & Maintenance Manual",
    description: "Storage, installation, operation and maintenance guidelines.",
    type: "Manual",
    file: "/downloads/installation-maintenance-manual.pdf",
  },
];
