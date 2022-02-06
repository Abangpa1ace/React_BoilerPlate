import React from 'react';
import styles from './MainPage.module.less';
import Example from '@/views/components/Example';

const MainPage: React.FC = () => {
  return (
    <div className={styles.mainPage}>
      <Example />
    </div>
  );
};

export default MainPage;
