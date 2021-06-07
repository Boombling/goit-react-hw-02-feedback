import React from 'react';
import styles from './Notification.module.css'

const Notification = ({ message }) => (
    <h2 className={styles.Message}>{message}</h2>
);

export default Notification
