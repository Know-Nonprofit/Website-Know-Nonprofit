import type { Meta, StoryObj } from "@storybook-astro/framework";
import Hero from "./Hero.astro";

const meta: Meta<typeof Hero> = {
  title: "Organisms/Hero/Hero",
  component: Hero,
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    title: "Software for <span class=\"text-secondary\">Social Impact</span>",
    subtitle: "We build digital tools that amplify your nonprofit's mission.",
    cta: "Start your project",
    ctaSecondary: "See our work",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=600&fit=crop",
    badge: { icon: "Heart", text: "50+ NGOs served" },
  },
};
