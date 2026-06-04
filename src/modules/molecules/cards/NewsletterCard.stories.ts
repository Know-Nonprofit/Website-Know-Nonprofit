import type { Meta, StoryObj } from "@storybook-astro/framework";
import NewsletterCard from "./NewsletterCard.astro";

const meta: Meta<typeof NewsletterCard> = {
  title: "Molecules/Cards/NewsletterCard",
  component: NewsletterCard,
};

export default meta;
type Story = StoryObj<typeof NewsletterCard>;

export const Default: Story = {
  args: {
    title: "Subscribe to the newsletter",
    subtitle: "Get the latest insights on social engineering delivered directly to your inbox.",
    cta: "Join Now",
    placeholder: "email@example.com",
  },
};
