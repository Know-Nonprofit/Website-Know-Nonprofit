import type { Meta, StoryObj } from "@storybook-astro/framework";
import TechLogo from "./TechLogo.astro";

const meta: Meta<typeof TechLogo> = {
  title: "Molecules/Logos/TechLogo",
  component: TechLogo,
};

export default meta;
type Story = StoryObj<typeof TechLogo>;

export const Default: Story = {
  args: { name: "React" },
};
