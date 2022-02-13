import { useState, useRef, useCallback } from 'react';
import validator from '@/plugins/validator';
interface Options {
  initialValue?: string;
  validate?: string[];
}

interface returnType {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>
  ) => void;
  // onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  isValid: ValidatorStatus;
}

const useInput = (options?: Options): returnType => {
  const { initialValue, validate = ['required'] } = options || {};
  const [value, setValue] = useState<string>(initialValue || undefined);
  const isValid = useRef<ValidatorStatus>({
    valid: false,
  });

  const onChange = useCallback((e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
    isValid.current = validator(value, validate);
  }, []);

  return { value, onChange, isValid: isValid.current };
};

export default useInput;
