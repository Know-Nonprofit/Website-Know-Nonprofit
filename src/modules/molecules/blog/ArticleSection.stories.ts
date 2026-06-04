import type { Meta, StoryObj } from "@storybook-astro/framework";
import ArticleSection from "./ArticleSection.astro";

const meta: Meta<typeof ArticleSection> = {
  title: "Molecules/Blog/ArticleSection",
  component: ArticleSection,
};

export default meta;
type Story = StoryObj<typeof ArticleSection>;

export const Default: Story = {
  args: {
    heading: "The Lean Automation Mandate",
    body: "Traditional cloud governance models often involve manual gatekeeping or expensive third-party compliance tools. For an NGO scaling its impact across borders, these barriers can stall critical humanitarian missions. Lean automation strategies prioritize open-source tooling and cloud-native services to enforce policy as code.",
    listItems: [
      "Policy as Code (PaC) to prevent resource drift and unauthorized spend.",
      "Automated cleanup of ephemeral development environments using serverless functions.",
      "Tagging mandates that ensure every dollar spent is attributed to a specific project or mission.",
    ],
  },
};

export const NoList: Story = {
  args: {
    heading: "A Simple Section",
    body: "This section has a heading and body text but no bullet list.",
  },
};
