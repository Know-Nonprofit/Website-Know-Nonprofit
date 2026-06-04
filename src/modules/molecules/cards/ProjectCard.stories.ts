import type { Meta, StoryObj } from "@storybook-astro/framework";
import ProjectCard from "./ProjectCard.astro";

const meta: Meta<typeof ProjectCard> = {
  title: "Molecules/Cards/ProjectCard",
  component: ProjectCard,
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  args: {
    country: "Spain",
    title: "Water Access Platform",
    desc: "Connecting communities to clean water resources through digital mapping.",
    image: "https://images.unsplash.com/photo-1541544537156-21c5299224d9?w=600&h=400&fit=crop",
    link: "View project",
  },
};
