import { Story, Meta } from '@storybook/html';
import { createButton, ButtonProps } from './components/Button';

export default {
  title: 'Components/Button',
  argTypes: {
    label: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['forms-flow-btn-sm', 'forms-flow-btn-md', 'forms-flow-btn-lg'],
    },
  },
}

const Template= (args) => {
  return createButton(args);
};

export const Primary = Template.bind({});
Primary.args = {
  type: "forms-flow-btn-primary ",
  label: 'Primary Button',
};

export const  PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  type: "forms-flow-btn-primary-outline",
  label: 'Button',
};


export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  type: 'forms-flow-btn-secondary'
};

export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
  label: 'Button',
  type: 'forms-flow-btn-secondary-outline'
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'forms-flow-btn-danger',
  label: 'Button',
};

export const DangerOutline = Template.bind({});
DangerOutline.args = {
  type: 'forms-flow-btn-danger-outline',
  label: 'Button',
};
