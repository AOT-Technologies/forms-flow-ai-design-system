
import { createLogo } from './components/Logo';

export default{
  title: 'Components/Logo'
};

const Template = (args) =>
{
  return createLogo(args);
}

export const Primary = Template.bind({});
Primary.args = {
  type: "formsflow-logo",
  src: "https://149641023.v2.pressablecdn.com/wp-content/uploads/2022/05/Site_logo.png"
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "formsflow-logo",
  label: "formsflow.ai",
  src: "https://app2.aot-technologies.com/logo.svg"
};

