import type { MetadataRoute } from "next";
import { getBlogSlugsForConfiguredSite } from "@/lib/blogs";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

type StaticEntry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

/** Public marketing URLs (canonical paths used in nav / footer). */
const STATIC_PAGES: StaticEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  {
    path: "/australian-curriculum/subjects/biology",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/subjects/chemistry",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/subjects/civics-and-citizenship",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/subjects/dance",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/subjects/design-and-technologies",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/subjects/economics-and-business",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/subjects/english",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/subjects/french",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/subjects/geography",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/subjects/media-arts",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/subjects/music",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/subjects/physics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/subjects/science",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/subjects/spanish",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/subjects/the-arts",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/subjects/visual-arts",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/subjects/health-and-physical-education-hpe",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/subjects/history",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/subjects/humanities-and-social-sciences-hass",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/subjects/mandarin",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/subjects/mathematics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.9 },
  { path: "/curriculum", changeFrequency: "monthly", priority: 0.85 },
  {
    path: "/australian-curriculum/act/senior-secondary/biology",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/act/senior-secondary/business-studies",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/act/senior-secondary/computer-science",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/act/senior-secondary/dance",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/act/senior-secondary/drama",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/act/senior-secondary/economics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/act/senior-secondary/english-literature",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/act/senior-secondary/english",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/act/senior-secondary/environmental-science",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/act/senior-secondary/french",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/act/senior-secondary/geography",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/act/senior-secondary/health",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/act/senior-secondary/history",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/act/senior-secondary/information-technology",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/act/senior-secondary/legal-studies",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/act/senior-secondary/mandarin",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/act/senior-secondary/mathematical-methods",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/act/senior-secondary/mathematics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/act/senior-secondary/media",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/act/senior-secondary/music",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/act/senior-secondary/physical-education",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/act/senior-secondary/physics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/act/senior-secondary/psychology",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/act/senior-secondary/sociology",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/act/senior-secondary/spanish",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/act/senior-secondary/specialist-mathematics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/act/senior-secondary/visual-arts",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/ancient-history",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/biology",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/business-studies",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/chemistry",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/dance",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/drama",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/earth-and-environmental-science",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/economics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/english-advanced",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/english-extension-1",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/english-extension-2",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/english-standard",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/french",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/geography",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/information-processes-and-technology",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/legal-studies",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/mandarin",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/mathematics-advanced",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/mathematics-extension-1",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/mathematics-extension-2",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/mathematics-standard",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/modern-history",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/music",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/pdhpe",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/physics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/society-and-culture",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/software-design-and-development",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/nsw/hsc/spanish",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/biology",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/business-innovation",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/chemistry",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/creative-arts",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/dance",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/digital-technologies",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/drama",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/economics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/english",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/english-literary-studies",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/environmental-science",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/french",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/geography",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/health",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/information-processing",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/legal-studies",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/mandarin",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/mathematical-methods",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/mathematics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/modern-history",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/music",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/physical-education",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/physics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/psychology",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/sociology",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/spanish",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/specialist-mathematics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/northern-territory/ntcet/visual-arts",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/ancient-history",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/biology",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/business",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/chemistry",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/dance",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/digital-solutions",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/drama",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/earth-and-environmental-science",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/economics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/english-literature",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/tasmania/tce/english-literature",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/tasmania/tce/biology",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/tasmania/tce/geography",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/tasmania/tce/business-studies",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/tasmania/tce/chemistry",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/tasmania/tce/computer-science",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/tasmania/tce/dance",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/tasmania/tce/drama",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/tasmania/tce/economics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/tasmania/tce/environmental-science",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/tasmania/tce/french",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/tasmania/tce/general-mathematics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/tasmania/tce/health",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/tasmania/tce/history",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/tasmania/tce/information-technology",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/tasmania/tce/legal-studies",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/tasmania/tce/mandarin",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/tasmania/tce/mathematics-methods",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/tasmania/tce/mathematics-specialised",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/tasmania/tce/media-production",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/tasmania/tce/music",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/tasmania/tce/physical-education",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/tasmania/tce/physics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/tasmania/tce/psychology",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/tasmania/tce/spanish",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/tasmania/tce/visual-art",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/english",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/french",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/general-mathematics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/geography",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/health",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/information-and-communication-technology",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/legal-studies",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/mandarin",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/mathematical-methods",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/media-arts",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/modern-history",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/music",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/physical-education",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/physics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/psychology",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/sociology",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/spanish",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/specialist-mathematics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/queensland/qce/visual-art",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/south-australia/sace/biology",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/south-australia/sace/business-innovation",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/south-australia/sace/creative-arts",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/south-australia/sace/dance",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/south-australia/sace/digital-technologies",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/south-australia/sace/drama",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/south-australia/sace/economics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/south-australia/sace/english",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/south-australia/sace/english-literary-studies",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/south-australia/sace/french",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/south-australia/sace/geography",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/south-australia/sace/health",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/south-australia/sace/information-processing-and-publishing",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/south-australia/sace/legal-studies",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/south-australia/sace/mandarin",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/south-australia/sace/mathematical-methods",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/south-australia/sace/mathematics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/south-australia/sace/modern-history",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/south-australia/sace/music",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/south-australia/sace/physical-education",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/south-australia/sace/physics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/south-australia/sace/psychology",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/south-australia/sace/scientific-studies",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/south-australia/sace/sociology",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/south-australia/sace/spanish",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/south-australia/sace/specialist-mathematics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/south-australia/sace/visual-arts",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/biology",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/business-management",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/chemistry",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/computing",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/dance",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/drama",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/economics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/english-language",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/english-literature",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/english",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/environmental-science",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/french",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/general-mathematics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/geography",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/health-and-human-development",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/history",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/legal-studies",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/mandarin",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/mathematical-methods",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/media",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/music",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/physical-education",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/physics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/psychology",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/sociology",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/software-development",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/spanish",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/specialist-mathematics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/victoria/vce/visual-communication-design",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/western-australia/wace/ancient-history",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/western-australia/wace/applied-information-technology",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/western-australia/wace/biology",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/western-australia/wace/business-management-and-enterprise",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/western-australia/wace/chemistry",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/western-australia/wace/computer-science",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/western-australia/wace/dance",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/western-australia/wace/drama",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/western-australia/wace/economics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/western-australia/wace/english",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/western-australia/wace/french",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/western-australia/wace/general-mathematics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/western-australia/wace/geography",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/western-australia/wace/literature",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/western-australia/wace/mathematical-methods",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/western-australia/wace/media-production-and-analysis",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/western-australia/wace/modern-history",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/western-australia/wace/music",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/western-australia/wace/physical-education-studies",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/western-australia/wace/physics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/western-australia/wace/politics-and-law",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/western-australia/wace/psychology",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/western-australia/wace/spanish",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/western-australia/wace/specialist-mathematics",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/australian-curriculum/western-australia/wace/visual-arts",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { path: "/faqs", changeFrequency: "monthly", priority: 0.85 },
  { path: "/blogs", changeFrequency: "daily", priority: 0.85 },
  { path: "/nyla", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy-policy", changeFrequency: "monthly", priority: 0.6 },
  {
    path: "/legal/privacy-policy",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  { path: "/terms-of-service", changeFrequency: "monthly", priority: 0.6 },
  { path: "/cookie-policy", changeFrequency: "monthly", priority: 0.5 },
  { path: "/acceptable-use", changeFrequency: "monthly", priority: 0.5 },
  { path: "/disclaimer", changeFrequency: "monthly", priority: 0.5 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = STATIC_PAGES.map((page) => ({
    url: page.path === "/" ? SITE_URL : `${SITE_URL}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const blogs = await getBlogSlugsForConfiguredSite();

  if (!blogs?.length) {
    return staticRoutes;
  }

  const blogEntries: MetadataRoute.Sitemap = blogs.map((b) => ({
    url: `${SITE_URL}/blogs/${b.slug}`,
    lastModified: b.date_modified
      ? new Date(b.date_modified)
      : b.date_published
        ? new Date(b.date_published)
        : now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...blogEntries];
}
