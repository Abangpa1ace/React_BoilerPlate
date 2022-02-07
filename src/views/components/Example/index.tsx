import React, { useState } from 'react';
import PrimaryButton from '../common/button/PrimaryButton';
import ModalFrame from '../common/modal/ModalFrame';
import styles from './Example.module.less';

const Example = () => {
  const [onModal, setOnModal] = useState(false);

  return (
    <div className={styles.example}>
      <section className={styles.container}>
        <PrimaryButton theme="green" onClick={() => setOnModal(true)}>
          모달
        </PrimaryButton>
        {onModal && (
          <ModalFrame setOnModal={(bool) => setOnModal(bool)}>
            모달테스트
          </ModalFrame>
        )}
        <PrimaryButton>버튼2</PrimaryButton>
      </section>
      <section className={styles.container}></section>
    </div>
  );
};

export default Example;
