import { useState, useRef, useCallback } from 'react';

interface Options {
  initialValue?: string;
  maxLength?: number;
  minLength?: number;
}

interface returnType {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
}

const useInput = (options?: Options): returnType => {
  const { initialValue, maxLength, minLength = 0 } = options || {};
  const [value, setValue] = useState<string>(initialValue || '');
  const isValid = useRef<boolean>(true);

  const onChange = useCallback((e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  }, []);
  return { value, onChange, isValid: isValid.current };
};

export default useInput;
