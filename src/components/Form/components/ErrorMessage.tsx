import { useFormContext } from 'react-hook-form';

import { getErrorMessage } from '../../../utils/getErrorMessage';

interface iErrorMessageProps {
  field: string;
}

const ErrorMessage: React.FC<iErrorMessageProps> = ({ field }) => {
  const {
    formState: { errors },
  } = useFormContext();

  const fieldError = getErrorMessage(errors, field);

  if (!fieldError) {
    return null;
  }

  return (
    <span className="text-xs text-red-500 mt-1">
      {fieldError.message?.toString()}
    </span>
  );
};

export default ErrorMessage;
