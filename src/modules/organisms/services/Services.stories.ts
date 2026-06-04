import type { Meta, StoryObj } from "@storybook-astro/framework";
import Services from "./Services.astro";

const meta: Meta<typeof Services> = {
  title: "Organisms/Services/Services",
  component: Services,
};

export default meta;
type Story = StoryObj<typeof Services>;

export const Default: Story = {
  args: {
    title: "Our Services",
    items: [
      { icon: "Code", title: "Web Development", desc: "Custom websites and apps" },
      { icon: "Zap", title: "Automation", desc: "Streamline your operations" },
      { icon: "Database", title: "Data Solutions", desc: "Manage and visualize data" },
      { icon: "Smartphone", title: "Mobile Apps", desc: "Reach users on any device" },
    ],
    cta: "Discuss your needs",
  },
};
