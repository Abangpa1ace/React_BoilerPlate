import React from 'react';
import styles from './button.module.less';

type Props = {
  children?: string | React.ReactNode;
  theme?: ButtomTheme;
  disabled?: boolean;
  handleClick?: () => void;
};

const PrimaryButton: React.FC<Props> = ({
  children,
  theme,
  disabled,
  handleClick,
}) => {
  return (
    <button
      className={(styles.primaryButton, theme)}
      disabled={disabled}
      onClick={handleClick}
    >
      {children || '확인'}
    </button>
  );
};

export default PrimaryButton;
