import type { Meta, StoryObj } from '@storybook/react-vite';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '../components/ui/dialog';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

const meta = {
  title: 'UI/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the dialog is open',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Whether the dialog is open by default',
    },
    modal: {
      control: 'boolean',
      description: 'Whether the dialog should be modal',
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Profile Settings</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="John Doe" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@johndoe" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithoutCloseButton: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Important Notice</DialogTitle>
          <DialogDescription>
            This dialog cannot be closed with the X button. You must use one of the action buttons below.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>Please read this important information carefully before proceeding.</p>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>I understand</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Simple: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Simple Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Simple Dialog</DialogTitle>
        <DialogDescription>
          This is a simple dialog with minimal content.
        </DialogDescription>
        <div className="py-4">
          <p>Just some basic content to demonstrate the dialog component.</p>
        </div>
        <DialogFooter>
          <Button>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Confirmation: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-sm text-red-800">
              <strong>Warning:</strong> All your data will be permanently lost.
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete Account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const FormDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add New User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
          <DialogDescription>
            Create a new user account. Fill in all the required information.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="firstname" className="text-right">
              First Name
            </Label>
            <Input id="firstname" placeholder="John" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="lastname" className="text-right">
              Last Name
            </Label>
            <Input id="lastname" placeholder="Doe" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" type="email" placeholder="john@example.com" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="role" className="text-right">
              Role
            </Label>
            <Input id="role" placeholder="Admin" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Create User</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const ScrollableContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Terms and Conditions</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Terms and Conditions</DialogTitle>
          <DialogDescription>
            Please read our terms and conditions carefully.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[400px] overflow-y-auto py-4">
          <div className="space-y-4">
            <section>
              <h3 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h3>
              <p className="text-sm text-muted-foreground">
                By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-2">2. Use License</h3>
              <p className="text-sm text-muted-foreground">
                Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-2">3. Disclaimer</h3>
              <p className="text-sm text-muted-foreground">
                The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-2">4. Limitations</h3>
              <p className="text-sm text-muted-foreground">
                In no event shall our company or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-2">5. Privacy Policy</h3>
              <p className="text-sm text-muted-foreground">
                Your Privacy is protected at our website. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-2">6. Revisions and Errata</h3>
              <p className="text-sm text-muted-foreground">
                The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-2">7. Governing Law</h3>
              <p className="text-sm text-muted-foreground">
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which our company operates and you irrevocably submit to the exclusive jurisdiction of the courts in that state.
              </p>
            </section>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Decline</Button>
          <Button>Accept Terms</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const CustomStyles: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Custom Styled Dialog</Button>
      </DialogTrigger>
      <DialogContent className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
        <DialogHeader>
          <DialogTitle className="text-white">Custom Styled Dialog</DialogTitle>
          <DialogDescription className="text-blue-100">
            This dialog features custom styling with a gradient background.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-blue-50">
            Notice how the content adapts to the custom background colors for better readability.
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
            Cancel
          </Button>
          <Button className="bg-white text-blue-600 hover:bg-gray-100">
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Small Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[300px]">
          <DialogHeader>
            <DialogTitle>Small Dialog</DialogTitle>
            <DialogDescription>
              A compact dialog for simple interactions.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm">This is a smaller dialog with less content.</p>
          </div>
          <DialogFooter>
            <Button>OK</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Large Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>Large Dialog</DialogTitle>
            <DialogDescription>
              A spacious dialog for complex content and interactions.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Section 1</h4>
                <p className="text-sm text-muted-foreground">Content for the first section goes here.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Section 2</h4>
                <p className="text-sm text-muted-foreground">Content for the second section goes here.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Section 3</h4>
                <p className="text-sm text-muted-foreground">Content for the third section goes here.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Section 4</h4>
                <p className="text-sm text-muted-foreground">Content for the fourth section goes here.</p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
};
