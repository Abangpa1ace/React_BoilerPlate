import React, { useState } from 'react';
import PrimaryButton from '@/views/components/common/button/PrimaryButton';
import TestModal from '@/views/components/common/modal/TestModal';
import BaseInput from '@/views/components/common/input/BaseInput';
import Toast from '@/views/components/common/toast/Toast';
import css from './Example.module.less';
import useToast from '@/hooks/useToast';

const Example = () => {
  const [onModal, setOnModal] = useState(false);
  const [text, setText] = useState('');
  const { mutateToast } = useToast();

  return (
    <div className={css.example}>
      <section className={css.container}>
        <PrimaryButton theme="green" onClick={() => setOnModal(true)}>
          모달
        </PrimaryButton>
        {onModal && <TestModal setOnModal={(bool) => setOnModal(bool)} />}
        <PrimaryButton onClick={() => mutateToast('정상 토스트 테스트입니다.')}>
          정상 토스트
        </PrimaryButton>
        <PrimaryButton theme="green" onClick={() => mutateToast('에러 토스트 테스트입니다.', true)}>
          에러 토스트
        </PrimaryButton>
      </section>
      <section className={css.container}>
        <BaseInput updateValue={setText} />
        <div>{text}</div>
      </section>
      <Toast />
    </div>
  );
};

export default Example;
