import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckIcon, UserIcon } from 'lucide-react';

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// Basic avatar with fallback
export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    </div>
  ),
};

// Avatar sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="sm">
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar size="default">
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
  ),
};

// Avatar with badge
export const WithBadge: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
        <AvatarBadge>
          <CheckIcon className="size-2" />
        </AvatarBadge>
      </Avatar>
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
        <AvatarBadge className="bg-green-500">
          <CheckIcon className="size-2" />
        </AvatarBadge>
      </Avatar>
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
        <AvatarBadge className="bg-red-500">3</AvatarBadge>
      </Avatar>
    </div>
  ),
};

// Avatar group
export const Group: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <AvatarGroup>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>XY</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </div>
      <div className="flex items-center gap-4">
        <AvatarGroup>
          <Avatar size="sm">
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <Avatar size="sm">
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <Avatar size="sm">
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>+5</AvatarGroupCount>
        </AvatarGroup>
      </div>
    </div>
  ),
};

// Avatar with different states
export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="text-sm font-medium">Online</div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
          <AvatarBadge className="bg-green-500" />
        </Avatar>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm font-medium">Away</div>
        <Avatar>
          <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
          <AvatarFallback>VC</AvatarFallback>
          <AvatarBadge className="bg-yellow-500" />
        </Avatar>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm font-medium">Offline</div>
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
          <AvatarBadge className="bg-gray-500" />
        </Avatar>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm font-medium">Busy</div>
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
          <AvatarBadge className="bg-red-500" />
        </Avatar>
      </div>
    </div>
  ),
};

// Avatar in user list
export const UserList: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center gap-3 p-3 rounded-lg border">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
          <AvatarBadge className="bg-green-500">
            <CheckIcon className="size-2" />
          </AvatarBadge>
        </Avatar>
        <div className="flex-1">
          <div className="font-medium">John Doe</div>
          <div className="text-sm text-muted-foreground">john.doe@example.com</div>
        </div>
        <Badge variant="outline">Active</Badge>
      </div>
      <div className="flex items-center gap-3 p-3 rounded-lg border">
        <Avatar>
          <AvatarFallback>JS</AvatarFallback>
          <AvatarBadge className="bg-yellow-500" />
        </Avatar>
        <div className="flex-1">
          <div className="font-medium">Jane Smith</div>
          <div className="text-sm text-muted-foreground">jane.smith@example.com</div>
        </div>
        <Badge variant="secondary">Away</Badge>
      </div>
      <div className="flex items-center gap-3 p-3 rounded-lg border">
        <Avatar>
          <AvatarFallback>BJ</AvatarFallback>
          <AvatarBadge className="bg-gray-500" />
        </Avatar>
        <div className="flex-1">
          <div className="font-medium">Bob Johnson</div>
          <div className="text-sm text-muted-foreground">bob.johnson@example.com</div>
        </div>
        <Badge variant="outline">Offline</Badge>
      </div>
    </div>
  ),
};

// Avatar with icons
export const WithIcons: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback>
          <UserIcon className="size-4" />
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-blue-100 text-blue-600">
          <UserIcon className="size-4" />
        </AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback className="bg-purple-100 text-purple-600">
          <UserIcon className="size-5" />
        </AvatarFallback>
      </Avatar>
      <Avatar size="sm">
        <AvatarFallback className="bg-green-100 text-green-600">
          <UserIcon className="size-3" />
        </AvatarFallback>
      </Avatar>
    </div>
  ),
};

// Avatar with loading state
export const Loading: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback className="animate-pulse bg-muted" />
      </Avatar>
      <Avatar>
        <AvatarImage src="" alt="Loading" />
        <AvatarFallback className="animate-pulse bg-muted">LD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://example.com/nonexistent.jpg" alt="Error" />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
    </div>
  ),
};

// Avatar in navigation
export const Navigation: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-4 rounded-lg border">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
        <AvatarBadge className="bg-green-500">
          <CheckIcon className="size-2" />
        </AvatarBadge>
      </Avatar>
      <div className="flex-1">
        <div className="font-medium">John Doe</div>
        <div className="text-sm text-muted-foreground">Premium Account</div>
      </div>
      <Badge variant="default">PRO</Badge>
    </div>
  ),
};

// Avatar team display
export const TeamDisplay: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Development Team</h3>
        <div className="flex items-center gap-4">
          <AvatarGroup>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
              <AvatarBadge className="bg-green-500" />
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
              <AvatarFallback>VC</AvatarFallback>
              <AvatarBadge className="bg-green-500" />
            </Avatar>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
              <AvatarBadge className="bg-yellow-500" />
            </Avatar>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
              <AvatarBadge className="bg-gray-500" />
            </Avatar>
            <AvatarGroupCount>+3</AvatarGroupCount>
          </AvatarGroup>
          <div className="text-sm text-muted-foreground">
            7 members • 4 online
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Design Team</h3>
        <div className="flex items-center gap-4">
          <AvatarGroup data-size="sm">
            <Avatar size="sm">
              <AvatarFallback>DS</AvatarFallback>
              <AvatarBadge className="bg-green-500" />
            </Avatar>
            <Avatar size="sm">
              <AvatarFallback>AL</AvatarFallback>
              <AvatarBadge className="bg-green-500" />
            </Avatar>
            <Avatar size="sm">
              <AvatarFallback>MK</AvatarFallback>
              <AvatarBadge className="bg-gray-500" />
            </Avatar>
          </AvatarGroup>
          <div className="text-sm text-muted-foreground">
            3 members • 2 online
          </div>
        </div>
      </div>
    </div>
  ),
};
