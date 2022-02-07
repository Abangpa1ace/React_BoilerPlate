import React, { useState } from 'react';
import PrimaryButton from '@/views/components/common/button/PrimaryButton';
import TestModal from '@/views/components/common/modal/TestModal';
import styles from './Example.module.less';

const Example = () => {
  const [onModal, setOnModal] = useState(false);

  return (
    <div className={styles.example}>
      <section className={styles.container}>
        <PrimaryButton theme="green" onClick={() => setOnModal(true)}>
          모달
        </PrimaryButton>
        {onModal && <TestModal setOnModal={(bool) => setOnModal(bool)} />}
        <PrimaryButton>버튼2</PrimaryButton>
      </section>
      <section className={styles.container}></section>
    </div>
  );
};

export default Example;
