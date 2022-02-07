import React from 'react';
import styles from './button.module.less';

type Props = {
  children?: string | React.ReactNode;
  theme?: ButtomTheme;
  disabled?: boolean;
  onClick?: () => void;
};

const PrimaryButton: React.FC<Props> = ({
  children,
  theme,
  disabled,
  onClick,
}) => {
  return (
    <button
      className={styles[theme || 'gray']}
      disabled={disabled}
      onClick={onClick}
    >
      {children || '확인'}
    </button>
  );
};

export default PrimaryButton;
