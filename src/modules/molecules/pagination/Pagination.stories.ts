import type { Meta, StoryObj } from "@storybook-astro/framework";
import Pagination from "./Pagination.astro";

const meta: Meta<typeof Pagination> = {
  title: "Molecules/Pagination",
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Page1: Story = {
  args: { currentPage: 1, totalPages: 3 },
};

export const Page2: Story = {
  args: { currentPage: 2, totalPages: 3 },
};

export const Page3: Story = {
  args: { currentPage: 3, totalPages: 3 },
};

export const FivePages: Story = {
  args: { currentPage: 3, totalPages: 5 },
};
