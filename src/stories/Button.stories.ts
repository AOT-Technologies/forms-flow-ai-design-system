import { Story, Meta } from '@storybook/html';
import { createButton, ButtonProps } from './components/Button';

export default {
  title: 'Components/Button',
  argTypes: {
     
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    size: {
      control: { type: 'select' },
      options: ['fwf-btn-sm', 'fwf-btn-md', 'fwf-btn-lg'],
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  return createButton(args);
};

export const Primary = Template.bind({});
Primary.args = {
  type: "fwf-btn-primary ",
  label: 'Primary Button',
};

export const  PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  type: "fwf-btn-primary-outline",
  label: 'Button',
};


export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  type: 'fwf-btn-secondary'
};

export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
  label: 'Button',
  type: 'fwf-btn-secondary-outline'
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'fwf-btn-danger',
  label: 'Button',
};

export const DangerOutline = Template.bind({});
DangerOutline.args = {
  type: 'fwf-btn-danger-outline',
  label: 'Button',
};
