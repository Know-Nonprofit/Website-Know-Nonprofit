import type { Meta, StoryObj } from "@storybook-astro/framework";
import FormField from "./FormField.astro";

const meta: Meta<typeof FormField> = {
  title: "Molecules/Form/FormField",
  component: FormField,
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Text: Story = {
  args: { label: "Name", name: "name", type: "text", placeholder: "Your name", required: true },
};

export const Email: Story = {
  args: { label: "Email", name: "email", type: "email", placeholder: "your@email.com", required: true },
};

export const Select: Story = {
  args: { label: "Budget", name: "budget", type: "select", options: ["< 5k", "5k - 10k", "> 10k"], required: true },
};

export const Textarea: Story = {
  args: { label: "Message", name: "message", type: "textarea", placeholder: "Describe your project...", required: true },
};

export const Optional: Story = {
  args: { label: "Website", name: "website", type: "url", placeholder: "https://example.com", required: false },
};
