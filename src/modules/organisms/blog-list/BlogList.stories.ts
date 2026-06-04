import type { Meta, StoryObj } from "@storybook-astro/framework";
import BlogList from "./BlogList.astro";

const meta: Meta<typeof BlogList> = {
  title: "Organisms/Blog/BlogList",
  component: BlogList,
};

export default meta;
type Story = StoryObj<typeof BlogList>;

export const Default: Story = {
  args: {
    title: "Engineering for Social Impact: Thoughts & Insights",
    subtitle: "Exploring the intersection of software engineering, automation, and social sector reliability. A journey through building systems that matter.",
    items: [
      {
        category: "Engineering",
        date: "Oct 12, 2023",
        title: "The Reliability Gap in Social Tech",
        excerpt: "Investigating why mission-critical tools in the social sector often lag behind enterprise standards in uptime and how to bridge that divide.",
      },
      {
        category: "Social Impact",
        date: "Sep 28, 2023",
        title: "Data Ethics in Public Service Apps",
        excerpt: "A deep dive into balancing user privacy with the data requirements of large-scale social welfare programs.",
      },
      {
        category: "Automation",
        date: "Sep 15, 2023",
        title: "Workflow Optimization for Volunteers",
        excerpt: "Using simple low-code triggers to save field workers hundreds of hours in manual data entry.",
      },
      {
        category: "Engineering",
        date: "Aug 30, 2023",
        title: "Legacy Systems: The Silent Barrier",
        excerpt: "Techniques for modernizing 20-year-old government databases without interrupting frontline services.",
      },
      {
        category: "Automation",
        date: "Oct 24, 2023",
        title: "Scaling NGO Infrastructure with Automated Cloud Governance",
        excerpt: "How we implemented lean automation strategies to help local non-profits manage cloud costs while maintaining compliance.",
      },
    ],
    newsletter: {
      title: "Subscribe to the newsletter",
      subtitle: "Get the latest insights on social engineering delivered directly to your inbox.",
      cta: "Join Now",
      placeholder: "email@example.com",
    },
    pagination: {
      currentPage: 1,
      totalPages: 3,
    },
  },
};
