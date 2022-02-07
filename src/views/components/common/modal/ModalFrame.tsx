import React from 'react';
import ModalPortal from './ModalPortal';
import styles from './modal.module.less';

type Props = {
  children: string;
  setOnModal: (state: boolean) => void;
};

const ModalFrame: React.FC<Props> = ({ children, setOnModal }: Props) => {
  return (
    <ModalPortal>
      <div className={styles.modalDim} onClick={() => setOnModal(false)}>
        <div className={styles.modalBox}>
          {children}
          <button className="close" onClick={() => setOnModal(false)}>
            X
          </button>
        </div>
      </div>
    </ModalPortal>
  );
};

export default ModalFrame;
