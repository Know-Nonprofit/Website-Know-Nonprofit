import type { Meta, StoryObj } from "@storybook-astro/framework";
import PainCard from "./PainCard.astro";

const meta: Meta<typeof PainCard> = {
  title: "Molecules/Cards/PainCard",
  component: PainCard,
};

export default meta;
type Story = StoryObj<typeof PainCard>;

export const Default: Story = {
  args: { icon: "AlertTriangle", title: "Legacy Systems", desc: "Outdated software holding your mission back" },
};
