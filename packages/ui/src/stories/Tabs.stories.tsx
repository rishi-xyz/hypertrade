import type { Meta, StoryObj } from '@storybook/react-vite';
import { BellIcon, HomeIcon, SettingsIcon, UserIcon } from 'lucide-react';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    defaultValue: 'horizontal',
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// Basic horizontal tabs
export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                defaultValue="John Doe"
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="username" className="text-sm font-medium">
                Username
              </label>
              <input
                id="username"
                defaultValue="@johndoe"
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <label htmlFor="current" className="text-sm font-medium">
                Current password
              </label>
              <input
                id="current"
                type="password"
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="new" className="text-sm font-medium">
                New password
              </label>
              <input
                id="new"
                type="password"
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="notifications">
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Manage your notification preferences here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <label htmlFor="marketing" className="text-sm font-medium">
                Marketing emails
              </label>
              <input id="marketing" type="checkbox" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="security" className="text-sm font-medium">
                Security emails
              </label>
              <input id="security" type="checkbox" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="newsletter" className="text-sm font-medium">
                Newsletter
              </label>
              <input id="newsletter" type="checkbox" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

// Line variant tabs
export const LineVariant: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList variant="line">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              A summary of your account and recent activity.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This is the overview tab content. It displays a summary of important information.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="analytics" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>
              Detailed analytics and insights about your usage.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Analytics data and charts would be displayed here.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reports" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Reports</CardTitle>
            <CardDescription>
              Generate and view various reports.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Report generation tools and historical reports.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>
              Configure your account settings.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Account settings and preferences.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

// Vertical tabs
export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="profile" orientation="vertical" className="flex min-h-[300px] w-[400px] gap-4">
      <TabsList className="grid w-full grid-cols-1">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="integrations">Integrations</TabsTrigger>
      </TabsList>
      <div className="flex-1">
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>
                Manage your profile information and preferences.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Profile settings and personal information.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="billing">
          <Card>
            <CardHeader>
              <CardTitle>Billing</CardTitle>
              <CardDescription>
                Manage your subscription and payment methods.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Billing information and payment history.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>
                Manage your security settings and authentication.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Security settings and two-factor authentication.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="integrations">
          <Card>
            <CardHeader>
              <CardTitle>Integrations</CardTitle>
              <CardDescription>
                Connect and manage third-party integrations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Connected services and API integrations.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </div>
    </Tabs>
  ),
};

// Tabs with icons
export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="home" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="home" className="flex items-center gap-2">
          <HomeIcon className="size-4" />
          Home
        </TabsTrigger>
        <TabsTrigger value="profile" className="flex items-center gap-2">
          <UserIcon className="size-4" />
          Profile
        </TabsTrigger>
        <TabsTrigger value="notifications" className="flex items-center gap-2">
          <BellIcon className="size-4" />
          Notifications
        </TabsTrigger>
        <TabsTrigger value="settings" className="flex items-center gap-2">
          <SettingsIcon className="size-4" />
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="home">
        <Card>
          <CardHeader>
            <CardTitle>Home</CardTitle>
            <CardDescription>
              Welcome to your dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This is your home dashboard with an overview of your activity.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="profile">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>
              Your personal profile information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Manage your personal information and preferences.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="notifications">
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Your notification center.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              View and manage your notifications.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>
              Application settings.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Configure application settings and preferences.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

// Disabled tabs
export const Disabled: Story = {
  render: () => (
    <Tabs defaultValue="active" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="active">Active Tab</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled Tab
        </TabsTrigger>
        <TabsTrigger value="another">Another Tab</TabsTrigger>
      </TabsList>
      <TabsContent value="active">
        <Card>
          <CardHeader>
            <CardTitle>Active Tab</CardTitle>
            <CardDescription>
              This tab is currently active and enabled.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Content for the active tab.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="disabled">
        <Card>
          <CardHeader>
            <CardTitle>Disabled Tab</CardTitle>
            <CardDescription>
              This tab is disabled and cannot be accessed.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This content is not accessible when the tab is disabled.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="another">
        <Card>
          <CardHeader>
            <CardTitle>Another Tab</CardTitle>
            <CardDescription>
              This is another enabled tab.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Content for another tab.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

// Complex tabs with forms
export const WithForms: Story = {
  render: () => (
    <Tabs defaultValue="personal" className="w-[500px]">
      <TabsList>
        <TabsTrigger value="personal">Personal Info</TabsTrigger>
        <TabsTrigger value="address">Address</TabsTrigger>
        <TabsTrigger value="preferences">Preferences</TabsTrigger>
      </TabsList>
      <TabsContent value="personal">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              Update your personal details.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="firstname" className="text-sm font-medium">
                  First Name
                </label>
                <input
                  id="firstname"
                  defaultValue="John"
                  className="w-full rounded-md border px-3 py-2 text-sm"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="lastname" className="text-sm font-medium">
                  Last Name
                </label>
                <input
                  id="lastname"
                  defaultValue="Doe"
                  className="w-full rounded-md border px-3 py-2 text-sm"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                defaultValue="john.doe@example.com"
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                defaultValue="+1 (555) 123-4567"
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
            <Button>Save Personal Info</Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="address">
        <Card>
          <CardHeader>
            <CardTitle>Address Information</CardTitle>
            <CardDescription>
              Update your address details.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="street" className="text-sm font-medium">
                Street Address
              </label>
              <input
                id="street"
                defaultValue="123 Main St"
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="city" className="text-sm font-medium">
                  City
                </label>
                <input
                  id="city"
                  defaultValue="New York"
                  className="w-full rounded-md border px-3 py-2 text-sm"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="state" className="text-sm font-medium">
                  State
                </label>
                <input
                  id="state"
                  defaultValue="NY"
                  className="w-full rounded-md border px-3 py-2 text-sm"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label htmlFor="zipcode" className="text-sm font-medium">
                Zip Code
              </label>
              <input
                id="zipcode"
                defaultValue="10001"
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
            <Button>Save Address</Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="preferences">
        <Card>
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
            <CardDescription>
              Manage your preferences and settings.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label htmlFor="newsletter" className="text-sm font-medium">
                  Email Newsletter
                </label>
                <p className="text-xs text-muted-foreground">
                  Receive updates and promotions via email.
                </p>
              </div>
              <input id="newsletter" type="checkbox" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <label htmlFor="sms" className="text-sm font-medium">
                  SMS Notifications
                </label>
                <p className="text-xs text-muted-foreground">
                  Receive important updates via SMS.
                </p>
              </div>
              <input id="sms" type="checkbox" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <label htmlFor="marketing" className="text-sm font-medium">
                  Marketing Communications
                </label>
                <p className="text-xs text-muted-foreground">
                  Allow marketing communications.
                </p>
              </div>
              <input id="marketing" type="checkbox" />
            </div>
            <Button>Save Preferences</Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

// Simple tabs without cards
export const Simple: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="mt-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Tab 1 Content</h3>
          <p className="text-sm text-muted-foreground">
            This is the content for tab 1. It's displayed without a card wrapper for a simpler look.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab2" className="mt-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Tab 2 Content</h3>
          <p className="text-sm text-muted-foreground">
            This is the content for tab 2. Simple and clean presentation.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab3" className="mt-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Tab 3 Content</h3>
          <p className="text-sm text-muted-foreground">
            This is the content for tab 3. Minimal styling for maximum flexibility.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};
