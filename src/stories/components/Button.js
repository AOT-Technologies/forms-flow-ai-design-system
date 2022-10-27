
export const createButton = ({
  size = 'formsflow-btn-md',
  type = 'formsflow-btn-primary',
  label,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.className = ['formsflow-btn',size, type].join(' ');
  return btn;
};
