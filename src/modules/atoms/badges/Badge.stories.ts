import type { Meta, StoryObj } from "@storybook-astro/framework";
import Badge from "./Badge.astro";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badges/Badge",
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { label: "Automation" },
};

export const Engineering: Story = {
  args: { label: "Engineering" },
};

export const SocialImpact: Story = {
  args: { label: "Social Impact" },
};
