import type { Meta, StoryObj } from "@storybook-astro/framework";
import Input from "./Input.astro";

const meta: Meta<typeof Input> = {
  title: "Atoms/Inputs/Input",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: { type: "text", name: "name", placeholder: "Your name", required: true },
};

export const Email: Story = {
  args: { type: "email", name: "email", placeholder: "your@email.com", required: true },
};

export const URL: Story = {
  args: { type: "url", name: "website", placeholder: "https://example.com", required: false },
};
