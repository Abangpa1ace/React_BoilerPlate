import React from 'react'
import { useRecoilValue } from 'recoil';
import { atomToast } from '@/recoil/common';
import css from './toast.module.less';

const Toast = () => {
  const { message, error } = useRecoilValue(atomToast);

  return (
    <>
      {message && <div className={css.toast}>
          <div className={error ? 'error' : ''}>
            <p>{message}</p>
          </div>
      </div>}
    </>
  )
}

export default Toast
