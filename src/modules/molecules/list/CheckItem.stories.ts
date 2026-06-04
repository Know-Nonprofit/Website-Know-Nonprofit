import type { Meta, StoryObj } from "@storybook-astro/framework";
import CheckItem from "./CheckItem.astro";

const meta: Meta<typeof CheckItem> = {
  title: "Molecules/List/CheckItem",
  component: CheckItem,
};

export default meta;
type Story = StoryObj<typeof CheckItem>;

export const Default: Story = {
  args: { text: "Transparent pricing model" },
};
