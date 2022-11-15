import React, { FC } from 'react';
import styles from './upload.module.css';

interface UploadProps {}

const Upload: FC<UploadProps> = () => (
  <div className={styles.Upload} data-testid="Upload">
    Upload Component
  </div>
);

export default Upload;
