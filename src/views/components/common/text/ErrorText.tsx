import React from 'react';
import { ruleMessage } from '@/constants/validator';
import css from './text.module.less';

type Props = {
  error: string;
};

const ErrorText: React.FC<Props> = ({ error }) => {
  return (
    <>
      {!!error && <span className={css.errorText}>{ruleMessage[error]}</span>}
    </>
  );
};

export default ErrorText;
