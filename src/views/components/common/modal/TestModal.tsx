import React from 'react';
import ModalFrame from './ModalFrame';

type Props = {
  setOnModal: (state: boolean) => void;
};

const TestModal: React.FC<Props> = ({ setOnModal }) => {
  return <ModalFrame setOnModal={setOnModal}>테스트 모달!</ModalFrame>;
};
export default TestModal;
