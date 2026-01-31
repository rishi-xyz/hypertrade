import type { Meta, StoryObj } from '@storybook/react-vite';
import { AsteriskIcon, HelpCircleIcon } from 'lucide-react';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    htmlFor: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

// Basic label
export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <Label htmlFor="email">Email Address</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
      
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" placeholder="Enter your password" />
    </div>
  ),
};

// Label with required indicator
export const WithRequired: Story = {
  render: () => (
    <div className="space-y-4">
      <Label htmlFor="name">
        Full Name
        <AsteriskIcon className="size-3 text-destructive" />
      </Label>
      <Input id="name" placeholder="Enter your full name" />
      
      <Label htmlFor="email">
        Email Address
        <AsteriskIcon className="size-3 text-destructive" />
      </Label>
      <Input id="email" type="email" placeholder="Enter your email" />
      
      <Label htmlFor="phone">Phone Number (Optional)</Label>
      <Input id="phone" type="tel" placeholder="Enter your phone number" />
    </div>
  ),
};

// Label with help text
export const WithHelpText: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="username" className="flex items-center gap-2">
          Username
          <HelpCircleIcon className="size-4 text-muted-foreground" />
        </Label>
        <Input id="username" placeholder="Choose a username" />
        <p className="text-xs text-muted-foreground">
          Username must be at least 3 characters long and contain only letters, numbers, and underscores.
        </p>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="bio" className="flex items-center gap-2">
          Bio
          <HelpCircleIcon className="size-4 text-muted-foreground" />
        </Label>
        <Textarea id="bio" placeholder="Tell us about yourself" rows={3} />
        <p className="text-xs text-muted-foreground">
          Brief description about yourself. Maximum 200 characters.
        </p>
      </div>
    </div>
  ),
};

// Label with checkbox
export const WithCheckbox: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">I agree to the terms and conditions</Label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox id="newsletter" />
        <Label htmlFor="newsletter">Subscribe to newsletter</Label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox id="marketing" />
        <Label htmlFor="marketing">
          Allow marketing communications
          <HelpCircleIcon className="ml-1 size-3 text-muted-foreground" />
        </Label>
      </div>
    </div>
  ),
};

// Label with select
export const WithSelect: Story = {
  render: () => (
    <div className="space-y-4">
      <Label htmlFor="country">Country</Label>
      <Select>
        <SelectTrigger id="country">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="ca">Canada</SelectItem>
          <SelectItem value="au">Australia</SelectItem>
        </SelectContent>
      </Select>
      
      <Label htmlFor="language">Preferred Language</Label>
      <Select>
        <SelectTrigger id="language">
          <SelectValue placeholder="Select a language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="es">Spanish</SelectItem>
          <SelectItem value="fr">French</SelectItem>
          <SelectItem value="de">German</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

// Disabled label
export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="group" data-disabled="true">
        <Label htmlFor="disabled-input" className="text-muted-foreground">
          Disabled Field
        </Label>
        <Input id="disabled-input" disabled placeholder="This field is disabled" />
      </div>
      
      <div className="flex items-center space-x-2" data-disabled="true">
        <Checkbox id="disabled-checkbox" disabled />
        <Label htmlFor="disabled-checkbox" className="text-muted-foreground">
          Disabled checkbox option
        </Label>
      </div>
    </div>
  ),
};

// Label styling variations
export const StylingVariations: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Default Style</h3>
        <Label htmlFor="default">Default Label</Label>
        <Input id="default" placeholder="Default input" />
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Colors</h3>
        <Label htmlFor="success" className="text-green-600">
          Success Label
        </Label>
        <Input id="success" placeholder="Success input" className="border-green-600" />
        
        <Label htmlFor="warning" className="text-yellow-600">
          Warning Label
        </Label>
        <Input id="warning" placeholder="Warning input" className="border-yellow-600" />
        
        <Label htmlFor="error" className="text-red-600">
          Error Label
        </Label>
        <Input id="error" placeholder="Error input" className="border-red-600" />
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Sizes</h3>
        <Label htmlFor="small" className="text-xs">
          Small Label
        </Label>
        <Input id="small" placeholder="Small input" className="h-8 text-sm" />
        
        <Label htmlFor="large" className="text-lg">
          Large Label
        </Label>
        <Input id="large" placeholder="Large input" className="h-12 text-lg" />
      </div>
    </div>
  ),
};

// Form layout example
export const FormLayout: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-md">
      <div className="space-y-2">
        <Label htmlFor="first-name">
          First Name
          <AsteriskIcon className="size-3 text-destructive" />
        </Label>
        <Input id="first-name" placeholder="Enter your first name" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="last-name">
          Last Name
          <AsteriskIcon className="size-3 text-destructive" />
        </Label>
        <Input id="last-name" placeholder="Enter your last name" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">
          Email Address
          <AsteriskIcon className="size-3 text-destructive" />
        </Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input id="company" placeholder="Enter your company name" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="role">Role</Label>
        <Select>
          <SelectTrigger id="role">
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="developer">Developer</SelectItem>
            <SelectItem value="designer">Designer</SelectItem>
            <SelectItem value="manager">Manager</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="Enter your message" rows={4} />
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree" className="text-sm">
          I agree to the privacy policy and terms of service
        </Label>
      </div>
    </div>
  ),
};

// Label positioning
export const Positioning: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="top-label" className="block">Top Label</Label>
        <Input id="top-label" placeholder="Input with top label" />
      </div>
      
      <div className="flex items-center gap-4">
        <Label htmlFor="side-label" className="w-24">Side Label</Label>
        <Input id="side-label" placeholder="Input with side label" />
      </div>
      
      <div className="flex items-center gap-4">
        <Label htmlFor="icon-label" className="flex items-center gap-2">
          <HelpCircleIcon className="size-4" />
          Icon Label
        </Label>
        <Input id="icon-label" placeholder="Input with icon label" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="floating-label" className="absolute -top-2 left-2 bg-background px-1 text-xs">
          Floating Label
        </Label>
        <Input id="floating-label" placeholder=" " className="pt-6" />
      </div>
    </div>
  ),
};
