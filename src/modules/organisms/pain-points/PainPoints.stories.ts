import type { Meta, StoryObj } from "@storybook-astro/framework";
import PainPoints from "./PainPoints.astro";

const meta: Meta<typeof PainPoints> = {
  title: "Organisms/PainPoints/PainPoints",
  component: PainPoints,
};

export default meta;
type Story = StoryObj<typeof PainPoints>;

export const Default: Story = {
  args: {
    title: "Common Challenges",
    items: [
      { icon: "AlertTriangle", title: "Legacy Systems", desc: "Outdated software holding your mission back" },
      { icon: "DollarSign", title: "Limited Budget", desc: "Enterprise tools are too expensive for NGOs" },
      { icon: "Users", title: "Technical Gap", desc: "Lack of in-house technical expertise" },
    ],
    cta: "Let's solve this together",
  },
};
