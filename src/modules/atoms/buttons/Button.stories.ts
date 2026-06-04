import type { Meta, StoryObj } from "@storybook-astro/framework";
import Button from "./Button.astro";

const meta: Meta<typeof Button> = {
  title: "Atoms/Buttons/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: "primary", size: "md", children: "Primary Button" },
};

export const Secondary: Story = {
  args: { variant: "secondary", size: "md", children: "Secondary Button" },
};

export const Outline: Story = {
  args: { variant: "outline", size: "md", children: "Outline Button" },
};

export const CTA: Story = {
  args: { variant: "cta", size: "lg", children: "Call to Action", class: "bg-[#C05621]" },
};

export const Small: Story = {
  args: { variant: "primary", size: "sm", children: "Small" },
};

export const Large: Story = {
  args: { variant: "primary", size: "lg", children: "Large Button" },
};

export const Link: Story = {
  args: { variant: "primary", size: "md", href: "#", children: "Link Button" },
};
