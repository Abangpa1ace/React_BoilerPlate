import React from 'react';
import css from './input.module.less';

type Props = {
  type?: InputType;
  placeholder?: string;
};

const BaseInput: React.FC<Props> = (props) => {
  return <input {...props} className={css.baseInput} />;
};

BaseInput.defaultProps = {
  type: 'text',
  placeholder: '내용을 입력해주세요.',
};

export default BaseInput;
