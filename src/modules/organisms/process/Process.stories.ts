import type { Meta, StoryObj } from "@storybook-astro/framework";
import Process from "./Process.astro";

const meta: Meta<typeof Process> = {
  title: "Organisms/Process/Process",
  component: Process,
};

export default meta;
type Story = StoryObj<typeof Process>;

export const Default: Story = {
  args: {
    title: "Our Process",
    subtitle: "From idea to impact in four steps",
    steps: [
      { number: 1, title: "Discovery", desc: "We learn about your mission and challenges" },
      { number: 2, title: "Strategy", desc: "We design a tailored technical roadmap" },
      { number: 3, title: "Build", desc: "We develop with agile methodologies" },
      { number: 4, title: "Launch", desc: "We deploy and support your solution" },
    ],
  },
};
