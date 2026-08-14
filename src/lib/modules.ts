export type VideoSource =
  | { provider: "placeholder"; title: string }
  | { provider: "mux"; playbackId: string }
  | { provider: "cloudflare-stream"; videoId: string; accountId: string }
  | { provider: "vimeo"; videoId: string };

export type CourseModule = {
  id: number;
  title: string;
  description: string;
  duration: string;
  videoSource: VideoSource;
};

export const MODULES: CourseModule[] = [
  {
    id: 1,
    title: "The Arbitrage Model, Demystified",
    description:
      "How rental arbitrage actually works, why it beats buying property to start, and the exact math Rasheen uses to know a deal is worth signing.",
    duration: "38 min",
    videoSource: { provider: "placeholder", title: "The Arbitrage Model, Demystified" },
  },
  {
    id: 2,
    title: "Finding Markets That Actually Cash Flow",
    description:
      "A repeatable process for scoring cities and neighborhoods on demand, regulation risk, and seasonality before you ever contact a landlord.",
    duration: "45 min",
    videoSource: { provider: "placeholder", title: "Finding Markets That Actually Cash Flow" },
  },
  {
    id: 3,
    title: "Landing Landlord Approval",
    description:
      "The pitch, paperwork, and objection-handling scripts Rasheen uses to get sublease approval, even in buildings that say no to short-term rentals.",
    duration: "41 min",
    videoSource: { provider: "placeholder", title: "Landing Landlord Approval" },
  },
  {
    id: 4,
    title: "Furnishing on a Budget That Still Books",
    description:
      "How to furnish a unit for a fraction of what most hosts spend, without it looking cheap in photos or reviews.",
    duration: "33 min",
    videoSource: { provider: "placeholder", title: "Furnishing on a Budget That Still Books" },
  },
  {
    id: 5,
    title: "Listings That Convert",
    description:
      "Photography, titles, descriptions, and pricing strategy that turn browsers into paying guests.",
    duration: "36 min",
    videoSource: { provider: "placeholder", title: "Listings That Convert" },
  },
  {
    id: 6,
    title: "Systems, Cleaners, and Guest Communication",
    description:
      "The operating system behind running a unit remotely: cleaning turnovers, guest messaging, and the tools that keep it hands-off.",
    duration: "40 min",
    videoSource: { provider: "placeholder", title: "Systems, Cleaners, and Guest Communication" },
  },
  {
    id: 7,
    title: "Scaling Past Your First Unit",
    description:
      "When and how to add a second, third, and tenth unit, plus the cash-flow discipline that keeps a growing portfolio from collapsing.",
    duration: "42 min",
    videoSource: { provider: "placeholder", title: "Scaling Past Your First Unit" },
  },
  {
    id: 8,
    title: "Protecting the Business",
    description:
      "Insurance, LLCs, local regulation changes, and the risk-management habits that keep your arbitrage business legal and durable.",
    duration: "35 min",
    videoSource: { provider: "placeholder", title: "Protecting the Business" },
  },
];

export function getModuleById(id: number): CourseModule | undefined {
  return MODULES.find((courseModule) => courseModule.id === id);
}
