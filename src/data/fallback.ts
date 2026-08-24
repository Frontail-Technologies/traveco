export type VideoGuide = {
  _id: string;
  title: string;
  description: string;
  category: string;
  videoUrl: string;
  featured: boolean;
  publishedAt: string;
  thumbnail: { url: string };
};
export const fallbackGuides: VideoGuide[] = [
  {
    _id: "fallback-1",
    title: "How to Prepare Your Visa Documents",
    description:
      "A step-by-step walkthrough of the documents you need for a tourist visa application.",
    category: "Documents",
    videoUrl: "https://www.instagram.com/reels/DPlPJClDPl-/",
    featured: true,
    publishedAt: "2026-06-01",
    thumbnail: { url: "/images/blogs.png" },
  },
  {
    _id: "fallback-2",
    title: "Top 5 Visa Interview Questions",
    description:
      "Practice the most commonly asked questions in a visa interview.",
    category: "Interview Prep",
    videoUrl: "https://www.instagram.com/reel/example",
    featured: false,
    publishedAt: "2026-06-05",
    thumbnail: { url: "/images/generated/about-consultation.png" },
  },
  {
    _id: "fallback-3",
    title: "Tourist Visa Tips for First-Time Applicants",
    description:
      "Quick tips to avoid common mistakes when applying for a tourist visa.",
    category: "Tourist Visa",
    videoUrl: "https://www.instagram.com/reel/example",
    featured: false,
    publishedAt: "2026-06-10",
    thumbnail: { url: "/images/blogs.png" },
  },
  {
    _id: "fallback-4",
    title: "Understanding Your Visa Profile",
    description:
      "What officers look for in your profile and how to present it clearly.",
    category: "Visa Tips",
    videoUrl: "https://www.instagram.com/reel/example",
    featured: true,
    publishedAt: "2026-06-12",
    thumbnail: { url: "/images/generated/hero-travel-consultation.png" },
  },
  {
    _id: "fallback-5",
    title: "Student Visa Document Checklist",
    description:
      "Everything you need to prepare before your student visa appointment.",
    category: "Student Visa",
    videoUrl: "https://www.instagram.com/reel/example",
    featured: false,
    publishedAt: "2026-06-15",
    thumbnail: { url: "/images/blogs.png" },
  },
  {
    _id: "fallback-6",
    title: "How to Answer Travel Purpose Questions",
    description:
      "Clear, practical advice on explaining your travel purpose to an officer.",
    category: "Interview Prep",
    videoUrl: "https://www.instagram.com/reel/example",
    featured: false,
    publishedAt: "2026-06-18",
    thumbnail: { url: "/images/generated/cta-travel-documents.png" },
  },
  {
    _id: "fallback-7",
    title: "US Visa Approved After 2 Rejections",
    description:
      "A detailed breakdown of how we approached a complex student visa case.",
    category: "Case Studies",
    videoUrl: "https://www.youtube.com/watch?v=example",
    featured: true,
    publishedAt: "2026-06-20",
    thumbnail: { url: "/images/blogs.png" },
  },
];
