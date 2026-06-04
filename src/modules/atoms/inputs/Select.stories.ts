import type { Meta, StoryObj } from "@storybook-astro/framework";
import Select from "./Select.astro";

const meta: Meta<typeof Select> = {
  title: "Atoms/Inputs/Select",
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: { name: "budget", options: ["< 5k", "5k - 10k", "> 10k"], required: true },
};
