
import { createButton } from './components/Button';

export default {
  title: 'Components/Button',
  argTypes: {
    label: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['formsflow-btn-sm', 'formsflow-btn-md', 'formsflow-btn-lg'],
    },
  },
}

const Template= (args) => {
  return createButton(args);
};

export const Primary = Template.bind({});
Primary.args = {
  type: "formsflow-btn-primary ",
  label: 'Primary Button',
};

export const  PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  type: "formsflow-btn-primary-outline",
  label: 'Button',
};


export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  type: 'formsflow-btn-secondary'
};

export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
  label: 'Button',
  type: 'formsflow-btn-secondary-outline'
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'formsflow-btn-danger',
  label: 'Button',
};

export const DangerOutline = Template.bind({});
DangerOutline.args = {
  type: 'formsflow-btn-danger-outline',
  label: 'Button',
};
