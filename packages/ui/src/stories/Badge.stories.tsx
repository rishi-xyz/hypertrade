import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../components/ui/badge';

const meta = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
      description: 'The visual style variant of the badge',
    },
    asChild: {
      control: 'boolean',
      description: 'Whether to render as a different element',
    },
    children: {
      control: 'text',
      description: 'The content inside the badge',
    },
  },
  args: {
    children: 'Badge',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Badge',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="link">Link</Badge>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge>
        <svg className="size-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Completed
      </Badge>
      <Badge variant="destructive">
        <svg className="size-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Error
      </Badge>
      <Badge variant="secondary">
        <svg className="size-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Pending
      </Badge>
    </div>
  ),
};

export const StatusBadges: Story = {
  render: () => (
    <div className="space-y-2">
      <div className="flex gap-2 flex-wrap">
        <Badge>Active</Badge>
        <Badge variant="secondary">Inactive</Badge>
        <Badge variant="destructive">Suspended</Badge>
      </div>
      <div className="flex gap-2 flex-wrap">
        <Badge variant="outline">Draft</Badge>
        <Badge variant="outline">Archived</Badge>
        <Badge variant="ghost">Hidden</Badge>
      </div>
    </div>
  ),
};

export const CountBadges: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge>1</Badge>
      <Badge variant="secondary">42</Badge>
      <Badge variant="destructive">99+</Badge>
      <Badge variant="outline">New</Badge>
    </div>
  ),
};

export const AsLink: Story = {
  args: {
    asChild: true,
    children: (
      <a href="#link">Link Badge</a>
    ),
  },
};

export const Interactive: Story = {
  render: () => (
    <div className="space-y-2">
      <div className="flex gap-2 flex-wrap">
        <Badge asChild>
          <button type="button">Clickable Badge</button>
        </Badge>
        <Badge variant="outline" asChild>
          <button type="button">Filter Tag</button>
        </Badge>
        <Badge variant="secondary" asChild>
          <button type="button">Remove ×</button>
        </Badge>
      </div>
    </div>
  ),
};

export const CustomStyles: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge className="bg-green-100 text-green-800 border-green-200">Success</Badge>
      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Warning</Badge>
      <Badge className="bg-blue-100 text-blue-800 border-blue-200">Info</Badge>
      <Badge className="bg-purple-100 text-purple-800 border-purple-200">New</Badge>
      <Badge className="rounded-md">Rounded</Badge>
      <Badge className="px-3 py-1 text-sm">Larger</Badge>
    </div>
  ),
};
