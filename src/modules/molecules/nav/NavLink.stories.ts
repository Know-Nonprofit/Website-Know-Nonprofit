import type { Meta, StoryObj } from "@storybook-astro/framework";
import NavLink from "./NavLink.astro";

const meta: Meta<typeof NavLink> = {
  title: "Molecules/Nav/NavLink",
  component: NavLink,
};

export default meta;
type Story = StoryObj<typeof NavLink>;

export const Default: Story = {
  args: { label: "Servicios", href: "#servicios" },
};
