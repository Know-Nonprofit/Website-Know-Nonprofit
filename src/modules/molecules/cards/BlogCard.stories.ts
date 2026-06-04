import type { Meta, StoryObj } from "@storybook-astro/framework";
import BlogCard from "./BlogCard.astro";

const meta: Meta<typeof BlogCard> = {
  title: "Molecules/Cards/BlogCard",
  component: BlogCard,
};

export default meta;
type Story = StoryObj<typeof BlogCard>;

export const Default: Story = {
  args: {
    category: "Engineering",
    date: "Oct 12, 2023",
    title: "The Reliability Gap in Social Tech",
    excerpt: "Investigating why mission-critical tools in the social sector often lag behind enterprise standards in uptime and how to bridge that divide.",
  },
};

export const Automation: Story = {
  args: {
    category: "Automation",
    date: "Oct 24, 2023",
    title: "Scaling NGO Infrastructure with Automated Cloud Governance",
    excerpt: "How we implemented lean automation strategies to help local non-profits manage cloud costs while maintaining compliance.",
  },
};

export const SocialImpact: Story = {
  args: {
    category: "Social Impact",
    date: "Sep 28, 2023",
    title: "Data Ethics in Public Service Apps",
    excerpt: "A deep dive into balancing user privacy with the data requirements of large-scale social welfare programs.",
  },
};
