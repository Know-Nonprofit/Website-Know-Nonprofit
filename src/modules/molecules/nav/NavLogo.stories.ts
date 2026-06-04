import type { Meta, StoryObj } from "@storybook-astro/framework";
import NavLogo from "./NavLogo.astro";

const meta: Meta<typeof NavLogo> = {
  title: "Molecules/Nav/NavLogo",
  component: NavLogo,
};

export default meta;
type Story = StoryObj<typeof NavLogo>;

export const Default: Story = {
  args: { icon: "🏗", text: "SustainSoft" },
};
