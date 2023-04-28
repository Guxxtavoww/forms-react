import { HTMLAttributes } from 'react';

interface FieldProps extends HTMLAttributes<HTMLDivElement> {}

const Field: React.FC<FieldProps> = (props) => (
  <div className="flex flex-col gap-1" {...props} />
);

export default Field;
