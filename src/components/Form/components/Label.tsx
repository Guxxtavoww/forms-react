import { LabelHTMLAttributes } from 'react';

type LabelProps = Omit<LabelHTMLAttributes<HTMLLabelElement>, 'className'>;

const Label: React.FC<LabelProps> = (props) => (
  <label
    className="text-sm text-zinc-600 flex items-center justify-between"
    {...props}
  />
);

export default Label;
