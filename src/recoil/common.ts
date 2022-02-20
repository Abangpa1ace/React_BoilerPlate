import { atom } from 'recoil';

export const atomToast = atom<ToastType>({
  key: 'atomToast',
  default: { message: '', error: false },
})