import React, { useState } from 'react';
import PrimaryButton from '@/views/components/common/button/PrimaryButton';
import TestModal from '@/views/components/common/modal/TestModal';
import css from './Example.module.less';
import BaseInput from '../common/input/BaseInput';

const Example = () => {
  const [onModal, setOnModal] = useState(false);

  return (
    <div className={css.example}>
      <section className={css.container}>
        <PrimaryButton theme="green" onClick={() => setOnModal(true)}>
          모달
        </PrimaryButton>
        {onModal && <TestModal setOnModal={(bool) => setOnModal(bool)} />}
        <PrimaryButton>버튼2</PrimaryButton>
      </section>
      <section className={css.container}>
        <BaseInput />
      </section>
    </div>
  );
};

export default Example;
