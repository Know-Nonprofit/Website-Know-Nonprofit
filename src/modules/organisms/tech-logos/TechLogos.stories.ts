import type { Meta, StoryObj } from "@storybook-astro/framework";
import TechLogos from "./TechLogos.astro";

const meta: Meta<typeof TechLogos> = {
  title: "Organisms/TechLogos/TechLogos",
  component: TechLogos,
};

export default meta;
type Story = StoryObj<typeof TechLogos>;

export const Default: Story = {
  args: {
    title: "Technologies we use",
    items: ["React", "Astro", "Node.js", "Python", "PostgreSQL", "AWS", "Docker", "Figma"],
  },
};
