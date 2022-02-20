import { useResetRecoilState, useRecoilState } from 'recoil';
import { atomToast } from '@/recoil/common';
import { useCallback } from 'react';

interface returnType {
  mutateToast: (message: string, error?: boolean) => void;
}

const useToast = (): returnType => {
  const [toast, setToast] = useRecoilState(atomToast);
  const resetToast = useResetRecoilState(atomToast);

  const mutateToast = useCallback(async (message, error = false) => {
    await setToast({ message, error })
    await setTimeout(() => resetToast(), 2000)
  }, [toast])

  return  { mutateToast }
}

export default useToast;