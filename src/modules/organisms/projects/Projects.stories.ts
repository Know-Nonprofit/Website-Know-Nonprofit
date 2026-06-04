import type { Meta, StoryObj } from "@storybook-astro/framework";
import Projects from "./Projects.astro";

const meta: Meta<typeof Projects> = {
  title: "Organisms/Projects/Projects",
  component: Projects,
};

export default meta;
type Story = StoryObj<typeof Projects>;

export const Default: Story = {
  args: {
    title: "Featured Projects",
    items: [
      {
        country: "Spain",
        title: "Water Access Platform",
        desc: "Connecting communities to clean water resources through digital mapping.",
        image: "https://images.unsplash.com/photo-1541544537156-21c5299224d9?w=600&h=400&fit=crop",
        link: "View project",
      },
      {
        country: "Kenya",
        title: "Education Tracker",
        desc: "Monitoring student attendance and progress in rural schools.",
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop",
        link: "View project",
      },
    ],
  },
};
