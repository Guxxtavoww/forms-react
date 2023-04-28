import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

type FormatedInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'name' | 'className'
>;

interface iInputProps extends FormatedInputProps {
  name: string;
}

const Input: React.FC<iInputProps> = (props) => {
  const { register } = useFormContext();

  return (
    <input
      id={props.name}
      className="flex-1 rounded border border-zinc-300 shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
      {...register(props.name)}
      {...props}
    />
  );
};

export default Input;
