import type { Meta, StoryObj } from "@storybook-astro/framework";
import ValueProp from "./ValueProp.astro";

const meta: Meta<typeof ValueProp> = {
  title: "Organisms/ValueProp/ValueProp",
  component: ValueProp,
};

export default meta;
type Story = StoryObj<typeof ValueProp>;

export const Default: Story = {
  args: {
    title: "Why Nonprofits Choose Us",
    subtitle: "We understand the unique challenges social organizations face.",
    features: [
      "Transparent pricing model",
      "Mission-aligned development",
      "Ongoing support & training",
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=450&fit=crop",
    quote: { text: "They transformed our digital presence", author: "Maria G., Director" },
  },
};
