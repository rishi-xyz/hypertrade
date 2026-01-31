import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../components/ui/input';

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url', 'search', 'file', 'date', 'time', 'datetime-local'],
      description: 'The type of input element',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the input is read-only',
    },
    value: {
      control: 'text',
      description: 'The value of the input',
    },
  },
  args: {
    type: 'text',
    placeholder: 'Enter text...',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your name...',
  },
};

export const WithValue: Story = {
  args: {
    value: 'John Doe',
    placeholder: 'Enter your name...',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password...',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter your email...',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Enter a number...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: 'Read-only value',
  },
};

export const Required: Story = {
  args: {
    required: true,
    placeholder: 'Required field *',
  },
};

export const File: Story = {
  args: {
    type: 'file',
  },
};

export const Date: Story = {
  args: {
    type: 'date',
  },
};

export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
  },
};

export const AllTypes: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-sm">
      <Input type="text" placeholder="Text input" />
      <Input type="password" placeholder="Password input" />
      <Input type="email" placeholder="Email input" />
      <Input type="number" placeholder="Number input" />
      <Input type="tel" placeholder="Phone input" />
      <Input type="url" placeholder="URL input" />
      <Input type="search" placeholder="Search input" />
      <Input type="date" />
      <Input type="time" />
      <Input type="file" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-sm">
      <Input placeholder="Normal input" />
      <Input placeholder="Disabled input" disabled />
      <Input placeholder="Read-only input" readOnly value="Cannot edit this" />
      <Input placeholder="Required input" required />
      <Input placeholder="With value" value="Default value" />
    </div>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-sm">
      <div>
        <label className="text-sm font-medium mb-2 block">Name</label>
        <Input placeholder="Enter your name" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Email</label>
        <Input type="email" placeholder="Enter your email" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Password</label>
        <Input type="password" placeholder="Enter your password" />
      </div>
    </div>
  ),
};

export const WithErrors: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-sm">
      <div>
        <label className="text-sm font-medium mb-2 block">Email</label>
        <Input 
          placeholder="Enter your email" 
          className="border-red-500 focus-visible:ring-red-500/20"
          aria-invalid="true"
        />
        <p className="text-sm text-red-500 mt-1">Please enter a valid email address</p>
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Password</label>
        <Input 
          type="password" 
          placeholder="Enter your password"
          className="border-red-500 focus-visible:ring-red-500/20"
          aria-invalid="true"
        />
        <p className="text-sm text-red-500 mt-1">Password must be at least 8 characters</p>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-sm">
      <div className="relative">
        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <Input className="pl-9" placeholder="Search..." />
      </div>
      <div className="relative">
        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <Input className="pl-9" type="email" placeholder="Email address" />
      </div>
      <div className="relative">
        <Input className="pr-9" type="password" placeholder="Password" />
        <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-sm">
      <Input placeholder="Default size" className="h-9" />
      <Input placeholder="Small size" className="h-8 text-sm" />
      <Input placeholder="Large size" className="h-10 text-lg" />
      <Input placeholder="Extra large size" className="h-12 text-xl" />
    </div>
  ),
};

export const CustomStyles: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-sm">
      <Input placeholder="Rounded input" className="rounded-full" />
      <Input placeholder="No border" className="border-0 border-b-2 rounded-none" />
      <Input placeholder="Thick border" className="border-2" />
      <Input placeholder="Custom background" className="bg-gray-100" />
      <Input placeholder="Custom text color" className="text-blue-600" />
    </div>
  ),
};
