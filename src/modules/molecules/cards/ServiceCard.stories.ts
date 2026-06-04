import type { Meta, StoryObj } from "@storybook-astro/framework";
import ServiceCard from "./ServiceCard.astro";

const meta: Meta<typeof ServiceCard> = {
  title: "Molecules/Cards/ServiceCard",
  component: ServiceCard,
};

export default meta;
type Story = StoryObj<typeof ServiceCard>;

export const Default: Story = {
  args: { icon: "Code", title: "Web Development", desc: "Custom websites and applications for nonprofits" },
};
