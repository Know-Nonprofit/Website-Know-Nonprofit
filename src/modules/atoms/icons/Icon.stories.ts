import type { Meta, StoryObj } from "@storybook-astro/framework";
import Icon from "./Icon.astro";

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icons/Icon",
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const CheckCircle: Story = {
  args: { name: "CheckCircle2", size: 24 },
};

export const Menu: Story = {
  args: { name: "Menu", size: 28 },
};

export const Home: Story = {
  args: { name: "Home", size: 18 },
};

export const Mail: Story = {
  args: { name: "Mail", size: 18 },
};

export const Unknown: Story = {
  args: { name: "NonExistentIcon", size: 24 },
};
