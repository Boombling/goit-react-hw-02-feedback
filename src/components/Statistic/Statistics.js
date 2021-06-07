import React from 'react';
import styles from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, percentage }) => (
    <div className={styles.Statistics}>
        <h2 className={styles.title}>Statistics</h2>
        <ul className={styles.list}>
            <li className={styles.item}>Good {good}</li>
            <li className={styles.item}>Neutral {neutral}</li>
            <li className={styles.item}>Bad {bad}</li>
            <li className={styles.item}>Total {total}</li>
            <li className={styles.item}>Positive feedback {percentage}%</li>
        </ul>
    </div>
);

export default Statistics;