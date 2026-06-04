import type { Meta, StoryObj } from "@storybook-astro/framework";
import CookieConsent from "./CookieConsent.astro";

const meta: Meta<typeof CookieConsent> = {
  title: "Organisms/Layout/CookieConsent",
  component: CookieConsent,
};

export default meta;
type Story = StoryObj<typeof CookieConsent>;

export const Default: Story = {
  args: {},
};
