import React, { FC } from 'react';
import styles from './welcome.module.css';

interface WelcomeProps {}

const Welcome: FC<WelcomeProps> = () => (
  <div className={styles.Welcome} data-testid="Welcome">
    Welcome Component
  </div>
);

export default Welcome;
