import React from 'react';
import ModalPortal from './ModalPortal';
import css from './modal.module.less';

type Props = {
  children: string;
  setOnModal: (state: boolean) => void;
};

const ModalFrame: React.FC<Props> = ({ children, setOnModal }: Props) => {
  return (
    <ModalPortal>
      <div className={css.modalDim} onClick={() => setOnModal(false)}>
        <div className={css.modalBox}>
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
