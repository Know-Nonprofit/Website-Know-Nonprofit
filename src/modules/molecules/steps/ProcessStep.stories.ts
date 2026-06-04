import type { Meta, StoryObj } from "@storybook-astro/framework";
import ProcessStep from "./ProcessStep.astro";

const meta: Meta<typeof ProcessStep> = {
  title: "Molecules/Steps/ProcessStep",
  component: ProcessStep,
};

export default meta;
type Story = StoryObj<typeof ProcessStep>;

export const Default: Story = {
  args: { number: 1, title: "Discovery", desc: "We learn about your mission and challenges" },
};
