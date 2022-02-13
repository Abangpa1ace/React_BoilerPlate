import React from 'react';
import css from './MainPage.module.less';
import Example from '@/views/components/Example';

const MainPage: React.FC = () => {
  return (
    <div className={css.mainPage}>
      <Example />
    </div>
  );
};

export default MainPage;
