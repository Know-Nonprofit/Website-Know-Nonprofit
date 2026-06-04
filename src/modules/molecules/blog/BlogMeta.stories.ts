import type { Meta, StoryObj } from "@storybook-astro/framework";
import BlogMeta from "./BlogMeta.astro";

const meta: Meta<typeof BlogMeta> = {
  title: "Molecules/Blog/BlogMeta",
  component: BlogMeta,
};

export default meta;
type Story = StoryObj<typeof BlogMeta>;

export const Default: Story = {
  args: {
    category: "Engineering",
    title: "Scaling NGO Infrastructure with Automated Cloud Governance",
    date: "Oct 24, 2023",
    readTime: "5 min read",
  },
};

export const SocialImpact: Story = {
  args: {
    category: "Social Impact",
    title: "Data Ethics in Public Service Apps",
    date: "Sep 28, 2023",
    readTime: "7 min read",
  },
};
