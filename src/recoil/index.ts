import { atom, selector } from 'recoil';

export const atomExample = atom<string>({
  key: 'atomExample',
  default: '',
});

export const selectorExample = selector<number>({
  key: 'selectorExample',
  get: ({ get }) => {
    const atom = get(atomExample);
    return +atom;
  },
});
