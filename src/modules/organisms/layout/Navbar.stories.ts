import type { Meta, StoryObj } from "@storybook-astro/framework";
import Navbar from "./Navbar.astro";

const meta: Meta<typeof Navbar> = {
  title: "Organisms/Layout/Navbar",
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    logo: "Sebastián Tamayo",
    links: [
      { label: "Services", href: "#servicios" },
      { label: "Projects", href: "#proyectos" },
      { label: "Process", href: "#proceso" },
      { label: "Contact", href: "#contacto" },
    ],
    cta: "Get Started",
    ctaHref: "#contacto",
  },
};
