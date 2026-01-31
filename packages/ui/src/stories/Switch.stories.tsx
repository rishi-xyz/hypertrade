import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from '../components/ui/switch';

const meta = {
  title: 'UI/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the switch is checked',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Whether the switch is checked by default',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the switch is required',
    },
    size: {
      control: 'select',
      options: ['default', 'sm'],
      description: 'The size of the switch',
    },
    id: {
      control: 'text',
      description: 'The id of the switch',
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'switch-default',
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch {...args} />
      <label htmlFor="switch-default" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Airplane mode
      </label>
    </div>
  ),
};

export const Checked: Story = {
  args: {
    id: 'switch-checked',
    defaultChecked: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch {...args} />
      <label htmlFor="switch-checked" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Wi-Fi enabled
      </label>
    </div>
  ),
};

export const Small: Story = {
  args: {
    id: 'switch-small',
    size: 'sm',
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch {...args} />
      <label htmlFor="switch-small" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Small switch
      </label>
    </div>
  ),
};

export const SmallChecked: Story = {
  args: {
    id: 'switch-small-checked',
    size: 'sm',
    defaultChecked: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch {...args} />
      <label htmlFor="switch-small-checked" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Small checked
      </label>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    id: 'switch-disabled',
    disabled: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch {...args} />
      <label htmlFor="switch-disabled" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Disabled switch
      </label>
    </div>
  ),
};

export const DisabledChecked: Story = {
  args: {
    id: 'switch-disabled-checked',
    disabled: true,
    defaultChecked: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch {...args} />
      <label htmlFor="switch-disabled-checked" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Disabled checked
      </label>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Switch id="switch1" defaultChecked />
        <label htmlFor="switch1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Notifications
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="switch2" />
        <label htmlFor="switch2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Location services
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="switch3" defaultChecked />
        <label htmlFor="switch3" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Auto-sync
        </label>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Default Size</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Switch id="default-off" />
            <label htmlFor="default-off" className="text-sm">Off</label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="default-on" defaultChecked />
            <label htmlFor="default-on" className="text-sm">On</label>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Small Size</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Switch id="small-off" size="sm" />
            <label htmlFor="small-off" className="text-sm">Off</label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="small-on" size="sm" defaultChecked />
            <label htmlFor="small-on" className="text-sm">On</label>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-start space-x-2">
        <Switch id="switch-desc1" defaultChecked />
        <div className="grid gap-1.5 leading-none">
          <label htmlFor="switch-desc1" className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Marketing emails
          </label>
          <p className="text-xs text-muted-foreground">
            Receive emails about new products, features, and more.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <Switch id="switch-desc2" />
        <div className="grid gap-1.5 leading-none">
          <label htmlFor="switch-desc2" className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
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

export const SettingsExample: Story = {
  render: () => (
    <div className="space-y-4 p-4 border rounded-lg max-w-sm">
      <h3 className="text-lg font-semibold">Settings</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <label htmlFor="airplane" className="text-sm font-medium">Airplane Mode</label>
            <p className="text-xs text-muted-foreground">Disable all wireless connections</p>
          </div>
          <Switch id="airplane" />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <label htmlFor="wifi" className="text-sm font-medium">Wi-Fi</label>
            <p className="text-xs text-muted-foreground">Connect to wireless networks</p>
          </div>
          <Switch id="wifi" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <label htmlFor="bluetooth" className="text-sm font-medium">Bluetooth</label>
            <p className="text-xs text-muted-foreground">Connect to Bluetooth devices</p>
          </div>
          <Switch id="bluetooth" />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <label htmlFor="location" className="text-sm font-medium">Location Services</label>
            <p className="text-xs text-muted-foreground">Allow apps to use your location</p>
          </div>
          <Switch id="location" defaultChecked />
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
          <Switch />
        </div>
        <div className="flex items-center space-x-2">
          <Switch defaultChecked />
        </div>
        <div className="flex items-center space-x-2">
          <Switch disabled />
        </div>
        <div className="flex items-center space-x-2">
          <Switch disabled defaultChecked />
        </div>
      </div>
    </div>
  ),
};

export const CustomStyles: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Switch className="data-[state=checked]:bg-blue-500" id="custom1" />
        <label htmlFor="custom1" className="text-sm font-medium">Blue switch</label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch className="data-[state=checked]:bg-green-500" id="custom2" defaultChecked />
        <label htmlFor="custom2" className="text-sm font-medium">Green switch</label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch className="data-[state=unchecked]:bg-gray-300" id="custom3" />
        <label htmlFor="custom3" className="text-sm font-medium">Custom unchecked</label>
      </div>
    </div>
  ),
};
