
export const createButton = ({
  size = 'forms-flow-btn-md',
  type = 'forms-flow-btn-primary',
  label,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.className = ['forms-flow-btn',size, type].join(' ');
  return btn;
};
