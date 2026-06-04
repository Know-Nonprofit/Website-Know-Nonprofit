import type { Meta, StoryObj } from "@storybook-astro/framework";
import TextBlock from "./TextBlock.astro";

const meta: Meta<typeof TextBlock> = {
  title: "Atoms/Text/TextBlock",
  component: TextBlock,
};

export default meta;
type Story = StoryObj<typeof TextBlock>;

export const Heading1: Story = {
  args: { as: "h1", text: "Engineering for Social Impact", class: "text-3xl font-bold text-primary" },
};

export const Heading2: Story = {
  args: { as: "h2", text: "Thoughts & Insights", class: "text-2xl font-semibold text-primary" },
};

export const Paragraph: Story = {
  args: { as: "p", text: "Exploring the intersection of software engineering, automation, and social sector reliability.", class: "text-lg text-on-surface-variant" },
};
