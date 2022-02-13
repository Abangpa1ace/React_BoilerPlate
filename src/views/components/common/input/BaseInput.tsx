import React from 'react';
import useInput from '@/hooks/useInput';
import css from './input.module.less';
import ErrorText from '@/views/components/common/text/ErrorText';

type Props = {
  type?: InputType;
  placeholder?: string;
  updateValue: (text: string) => void;
};

const defaultProps = {
  type: 'text',
  placeholder: '내용을 입력해주세요.',
};

const BaseInput: React.FC<Props> = (props: Props) => {
  const { value, onChange, isValid } = useInput();

  const handleChange = (e) => {
    onChange(e);
    props.updateValue(value);
  };

  return (
    <div className={css.baseInput}>
      <input
        {...{ ...props, ...defaultProps }}
        value={value}
        onChange={handleChange}
        onFocus={handleChange}
        className={isValid.error && 'error'}
      />
      <ErrorText error={isValid.error} />
    </div>
  );
};

export default BaseInput;
