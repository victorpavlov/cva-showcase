import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/ui/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  children: 'Button Text',
  className: 'my-class',
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  }
};

export const Primary: Story = {
  args: {
    ...defaultArgs,
    variant: "primary",
  }
};

export const Destructive: Story = {
  args: {
    ...defaultArgs,
    variant: "destructive",
  }
};

export const Monochrome: Story = {
  args: {
    ...defaultArgs,
    variant: "monochrome",
  }
};

export const Large: Story = {
  args: {
    ...defaultArgs,
    size: "large",
  }
};

export const Slim: Story = {
  args: {
    ...defaultArgs,
    size: "slim",
  }
};

export const Outline: Story = {
  args: {
    ...defaultArgs,
    modifier: "outline",
  }
};

export const Plain: Story = {
  args: {
    ...defaultArgs,
    modifier: "plain",
  }
};

export const FullWidth: Story = {
  args: {
    ...defaultArgs,
    fullWidth: true,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'full',
  },
};
