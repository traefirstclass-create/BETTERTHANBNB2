export type VideoSource =
  | { provider: "placeholder"; title: string }
  | { provider: "youtube"; videoId: string }
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
    title: "The Partnership Model, Not a Lease",
    description:
      "Why Rasheen structures deals as a partnership with a monthly return to the property owner instead of signing a traditional lease, and why that framing changes how owners respond.",
    duration: "15 min",
    videoSource: { provider: "placeholder", title: "The Partnership Model, Not a Lease" },
  },
  {
    id: 2,
    title: "Running the Numbers Before You Commit",
    description:
      "The exact math Rasheen runs on a property before agreeing to anything: what the owner needs, what cash rentals can realistically bring in, and how to know a deal covers itself.",
    duration: "18 min",
    videoSource: { provider: "placeholder", title: "Running the Numbers Before You Commit" },
  },
  {
    id: 3,
    title: "Finding and Approaching Property Owners",
    description:
      "Where to find owners open to a partnership, the pitch Rasheen uses, and how to structure the split so both sides want the deal to work.",
    duration: "20 min",
    videoSource: { provider: "placeholder", title: "Finding and Approaching Property Owners" },
  },
  {
    id: 4,
    title: "Furnishing for Almost Nothing",
    description:
      "How Rasheen furnishes a full unit for a fraction of retail, using free and deeply discounted furniture sources, without it looking cheap to guests.",
    duration: "16 min",
    videoSource: { provider: "placeholder", title: "Furnishing for Almost Nothing" },
  },
  {
    id: 5,
    title: "Cash Rentals Without Airbnb",
    description:
      "Why Rasheen runs direct cash rentals instead of listing on Airbnb: no platform fees, no platform restrictions, and how weekly, daily, and nightly pricing works in this model.",
    duration: "17 min",
    videoSource: { provider: "placeholder", title: "Cash Rentals Without Airbnb" },
  },
  {
    id: 6,
    title: "Marketing Through Local Pages and Direct Posts",
    description:
      "How Rasheen fills units by posting directly to local community and social pages and DMs, targeting people already paying for extended-stay hotels, before spending a dollar on ads.",
    duration: "19 min",
    videoSource: { provider: "placeholder", title: "Marketing Through Local Pages and Direct Posts" },
  },
  {
    id: 7,
    title: "Testing Demand Before You Spend",
    description:
      "How to post a coming-soon offer and build a waiting list before committing any money, so you know a unit will fill before you take on the partnership.",
    duration: "14 min",
    videoSource: { provider: "placeholder", title: "Testing Demand Before You Spend" },
  },
  {
    id: 8,
    title: "Scaling to Your Second Unit and Beyond",
    description:
      "How Rasheen splits a property into multiple units so one side covers the return and the other is profit, plus what changes operationally once you're running more than one property.",
    duration: "21 min",
    videoSource: { provider: "placeholder", title: "Scaling to Your Second Unit and Beyond" },
  },
];

export function getModuleById(id: number): CourseModule | undefined {
  return MODULES.find((courseModule) => courseModule.id === id);
}
