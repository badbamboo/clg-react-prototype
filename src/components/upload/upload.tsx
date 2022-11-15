import React, { FC } from 'react';
import styles from './upload.module.css';

interface UploadProps {}

const Upload: FC<UploadProps> = () => (
  <h1 className={styles.Upload} data-testid="Upload">
    Upload Component
  </h1>
);

export default Upload;
