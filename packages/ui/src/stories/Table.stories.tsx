import type { Meta, StoryObj } from '@storybook/react-vite';
import { MoreHorizontalIcon, TrashIcon, UserIcon } from 'lucide-react';
import * as React from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const meta: Meta<typeof Table> = {
  title: 'UI/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

// Basic table
export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV003</TableCell>
          <TableCell>Failed</TableCell>
          <TableCell>Bank Transfer</TableCell>
          <TableCell className="text-right">$450.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

// Table with caption
export const WithCaption: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV003</TableCell>
          <TableCell>Failed</TableCell>
          <TableCell>Bank Transfer</TableCell>
          <TableCell className="text-right">$450.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

// Table with footer
export const WithFooter: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Widget A</TableCell>
          <TableCell>2</TableCell>
          <TableCell>$50.00</TableCell>
          <TableCell className="text-right">$100.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Widget B</TableCell>
          <TableCell>3</TableCell>
          <TableCell>$75.00</TableCell>
          <TableCell className="text-right">$225.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Widget C</TableCell>
          <TableCell>1</TableCell>
          <TableCell>$125.00</TableCell>
          <TableCell className="text-right">$125.00</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$450.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

// Table with badges
export const WithBadges: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Role</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">John Doe</TableCell>
          <TableCell>
            <Badge variant="default">Active</Badge>
          </TableCell>
          <TableCell>Developer</TableCell>
          <TableCell className="text-right">
            <Button variant="ghost" size="sm">
              View
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Jane Smith</TableCell>
          <TableCell>
            <Badge variant="secondary">Inactive</Badge>
          </TableCell>
          <TableCell>Designer</TableCell>
          <TableCell className="text-right">
            <Button variant="ghost" size="sm">
              View
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Bob Johnson</TableCell>
          <TableCell>
            <Badge variant="outline">Pending</Badge>
          </TableCell>
          <TableCell>Manager</TableCell>
          <TableCell className="text-right">
            <Button variant="ghost" size="sm">
              View
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

// Table with checkboxes
export const WithCheckboxes: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = React.useState<string[]>([]);

    const handleSelectAll = (checked: boolean) => {
      if (checked) {
        setSelectedRows(['inv001', 'inv002', 'inv003']);
      } else {
        setSelectedRows([]);
      }
    };

    const handleSelectRow = (id: string, checked: boolean) => {
      if (checked) {
        setSelectedRows([...selectedRows, id]);
      } else {
        setSelectedRows(selectedRows.filter(rowId => rowId !== id));
      }
    };

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox
                checked={selectedRows.length === 3}
                onCheckedChange={handleSelectAll}
              />
            </TableHead>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow data-state={selectedRows.includes('inv001') ? 'selected' : ''}>
            <TableCell>
              <Checkbox
                checked={selectedRows.includes('inv001')}
                onCheckedChange={(checked) => handleSelectRow('inv001', checked as boolean)}
              />
            </TableCell>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow data-state={selectedRows.includes('inv002') ? 'selected' : ''}>
            <TableCell>
              <Checkbox
                checked={selectedRows.includes('inv002')}
                onCheckedChange={(checked) => handleSelectRow('inv002', checked as boolean)}
              />
            </TableCell>
            <TableCell className="font-medium">INV002</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell>PayPal</TableCell>
            <TableCell className="text-right">$150.00</TableCell>
          </TableRow>
          <TableRow data-state={selectedRows.includes('inv003') ? 'selected' : ''}>
            <TableCell>
              <Checkbox
                checked={selectedRows.includes('inv003')}
                onCheckedChange={(checked) => handleSelectRow('inv003', checked as boolean)}
              />
            </TableCell>
            <TableCell className="font-medium">INV003</TableCell>
            <TableCell>Failed</TableCell>
            <TableCell>Bank Transfer</TableCell>
            <TableCell className="text-right">$450.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  },
};

// Table with actions
export const WithActions: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">John Doe</TableCell>
          <TableCell>john.doe@example.com</TableCell>
          <TableCell>Developer</TableCell>
          <TableCell>
            <Badge variant="default">Active</Badge>
          </TableCell>
          <TableCell className="text-right">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <MoreHorizontalIcon className="size-4" />
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Jane Smith</TableCell>
          <TableCell>jane.smith@example.com</TableCell>
          <TableCell>Designer</TableCell>
          <TableCell>
            <Badge variant="secondary">Inactive</Badge>
          </TableCell>
          <TableCell className="text-right">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <MoreHorizontalIcon className="size-4" />
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Bob Johnson</TableCell>
          <TableCell>bob.johnson@example.com</TableCell>
          <TableCell>Manager</TableCell>
          <TableCell>
            <Badge variant="outline">Pending</Badge>
          </TableCell>
          <TableCell className="text-right">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <MoreHorizontalIcon className="size-4" />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

// Complex table with multiple data types
export const Complex: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-12">
            <Checkbox />
          </TableHead>
          <TableHead>Transaction</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell className="font-medium">
            <div className="flex items-center gap-2">
              <UserIcon className="size-4 text-muted-foreground" />
              Subscription Payment
            </div>
          </TableCell>
          <TableCell>2024-01-15</TableCell>
          <TableCell>
            <Badge variant="outline">Software</Badge>
          </TableCell>
          <TableCell>
            <Badge variant="default" className="bg-green-100 text-green-800">
              Completed
            </Badge>
          </TableCell>
          <TableCell className="text-right font-medium text-green-600">
            +$29.99
          </TableCell>
          <TableCell className="text-right">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                View
              </Button>
              <Button variant="ghost" size="sm">
                <TrashIcon className="size-4" />
              </Button>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell className="font-medium">
            <div className="flex items-center gap-2">
              <UserIcon className="size-4 text-muted-foreground" />
              Coffee Shop
            </div>
          </TableCell>
          <TableCell>2024-01-14</TableCell>
          <TableCell>
            <Badge variant="outline">Food</Badge>
          </TableCell>
          <TableCell>
            <Badge variant="default" className="bg-green-100 text-green-800">
              Completed
            </Badge>
          </TableCell>
          <TableCell className="text-right font-medium text-red-600">
            -$12.50
          </TableCell>
          <TableCell className="text-right">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                View
              </Button>
              <Button variant="ghost" size="sm">
                <TrashIcon className="size-4" />
              </Button>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell className="font-medium">
            <div className="flex items-center gap-2">
              <UserIcon className="size-4 text-muted-foreground" />
              Salary Deposit
            </div>
          </TableCell>
          <TableCell>2024-01-13</TableCell>
          <TableCell>
            <Badge variant="outline">Income</Badge>
          </TableCell>
          <TableCell>
            <Badge variant="default" className="bg-green-100 text-green-800">
              Completed
            </Badge>
          </TableCell>
          <TableCell className="text-right font-medium text-green-600">
            +$3,500.00
          </TableCell>
          <TableCell className="text-right">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                View
              </Button>
              <Button variant="ghost" size="sm">
                <TrashIcon className="size-4" />
              </Button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>Total Balance</TableCell>
          <TableCell className="text-right font-bold text-green-600">
            +$3,517.49
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

// Empty table
export const Empty: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
            No data available. Create your first entry to see it here.
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

// Table with custom styling
export const CustomStyled: Story = {
  render: () => (
    <Table className="border rounded-lg">
      <TableHeader>
        <TableRow className="bg-muted/50">
          <TableHead className="font-bold">Product</TableHead>
          <TableHead className="font-bold">Category</TableHead>
          <TableHead className="font-bold">Price</TableHead>
          <TableHead className="font-bold text-right">Stock</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="hover:bg-blue-50/50">
          <TableCell className="font-medium text-blue-600">Premium Widget</TableCell>
          <TableCell>
            <Badge className="bg-blue-100 text-blue-800">Electronics</Badge>
          </TableCell>
          <TableCell className="font-bold">$299.99</TableCell>
          <TableCell className="text-right">
            <Badge variant="outline" className="text-green-600 border-green-600">
              In Stock
            </Badge>
          </TableCell>
        </TableRow>
        <TableRow className="hover:bg-blue-50/50">
          <TableCell className="font-medium text-blue-600">Basic Widget</TableCell>
          <TableCell>
            <Badge className="bg-green-100 text-green-800">Home</Badge>
          </TableCell>
          <TableCell className="font-bold">$99.99</TableCell>
          <TableCell className="text-right">
            <Badge variant="outline" className="text-orange-600 border-orange-600">
              Low Stock
            </Badge>
          </TableCell>
        </TableRow>
        <TableRow className="hover:bg-blue-50/50">
          <TableCell className="font-medium text-blue-600">Pro Widget</TableCell>
          <TableCell>
            <Badge className="bg-purple-100 text-purple-800">Professional</Badge>
          </TableCell>
          <TableCell className="font-bold">$499.99</TableCell>
          <TableCell className="text-right">
            <Badge variant="outline" className="text-red-600 border-red-600">
              Out of Stock
            </Badge>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
