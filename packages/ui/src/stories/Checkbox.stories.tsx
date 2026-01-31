import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '../components/ui/checkbox';

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked by default',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the checkbox is required',
    },
    id: {
      control: 'text',
      description: 'The id of the checkbox',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'checkbox-default',
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} />
      <label htmlFor="checkbox-default" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Accept terms and conditions
      </label>
    </div>
  ),
};

export const Checked: Story = {
  args: {
    id: 'checkbox-checked',
    defaultChecked: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} />
      <label htmlFor="checkbox-checked" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Checked by default
      </label>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    id: 'checkbox-disabled',
    disabled: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} />
      <label htmlFor="checkbox-disabled" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Disabled checkbox
      </label>
    </div>
  ),
};

export const DisabledChecked: Story = {
  args: {
    id: 'checkbox-disabled-checked',
    disabled: true,
    defaultChecked: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} />
      <label htmlFor="checkbox-disabled-checked" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Disabled and checked
      </label>
    </div>
  ),
};

export const Required: Story = {
  args: {
    id: 'checkbox-required',
    required: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} />
      <label htmlFor="checkbox-required" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Required field *
      </label>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Checkbox id="checkbox1" defaultChecked />
        <label htmlFor="checkbox1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Option 1
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="checkbox2" />
        <label htmlFor="checkbox2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Option 2
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="checkbox3" defaultChecked />
        <label htmlFor="checkbox3" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Option 3
        </label>
      </div>
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-start space-x-2">
        <Checkbox id="checkbox-desc1" defaultChecked />
        <div className="grid gap-1.5 leading-none">
          <label htmlFor="checkbox-desc1" className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Marketing emails
          </label>
          <p className="text-xs text-muted-foreground">
            Receive emails about new products, features, and more.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <Checkbox id="checkbox-desc2" />
        <div className="grid gap-1.5 leading-none">
          <label htmlFor="checkbox-desc2" className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Security emails
          </label>
          <p className="text-xs text-muted-foreground">
            Receive emails about account security and login activity.
          </p>
        </div>
      </div>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4 p-4 border rounded-lg max-w-sm">
      <h3 className="text-lg font-semibold">Preferences</h3>
      <div className="space-y-3">
        <div className="flex items-start space-x-2">
          <Checkbox id="newsletter" defaultChecked />
          <div className="grid gap-1.5 leading-none">
            <label htmlFor="newsletter" className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Newsletter
            </label>
            <p className="text-xs text-muted-foreground">
              Subscribe to our weekly newsletter for updates and tips.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <Checkbox id="notifications" />
          <div className="grid gap-1.5 leading-none">
            <label htmlFor="notifications" className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Push Notifications
            </label>
            <p className="text-xs text-muted-foreground">
              Receive push notifications on your device.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <Checkbox id="analytics" defaultChecked />
          <div className="grid gap-1.5 leading-none">
            <label htmlFor="analytics" className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Analytics
            </label>
            <p className="text-xs text-muted-foreground">
              Help us improve by sharing anonymous usage data.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-4 text-xs font-medium">
        <div>Unchecked</div>
        <div>Checked</div>
        <div>Disabled</div>
        <div>Disabled + Checked</div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="flex items-center space-x-2">
          <Checkbox />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox defaultChecked />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox disabled />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox disabled defaultChecked />
        </div>
      </div>
    </div>
  ),
};

export const CustomStyles: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Checkbox className="border-blue-500 data-[state=checked]:bg-blue-500" id="custom1" />
        <label htmlFor="custom1" className="text-sm font-medium">Blue checkbox</label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox className="rounded-full" id="custom2" />
        <label htmlFor="custom2" className="text-sm font-medium">Rounded checkbox</label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox className="size-6" id="custom3" />
        <label htmlFor="custom3" className="text-sm font-medium">Large checkbox</label>
      </div>
    </div>
  ),
};
