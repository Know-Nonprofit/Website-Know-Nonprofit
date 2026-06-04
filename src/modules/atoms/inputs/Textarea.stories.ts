import type { Meta, StoryObj } from "@storybook-astro/framework";
import Textarea from "./Textarea.astro";

const meta: Meta<typeof Textarea> = {
  title: "Atoms/Inputs/Textarea",
  component: Textarea,
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: { name: "message", placeholder: "Describe your project...", required: true },
};
