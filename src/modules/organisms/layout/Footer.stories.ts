import type { Meta, StoryObj } from "@storybook-astro/framework";
import Footer from "./Footer.astro";

const meta: Meta<typeof Footer> = {
  title: "Organisms/Layout/Footer",
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    brand: "SustainSoft",
    tagline: "Software consulting for nonprofits and social enterprises.",
    links: [
      { label: "Privacy", href: "/privacidad" },
      { label: "Terms", href: "/terminos" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
};
