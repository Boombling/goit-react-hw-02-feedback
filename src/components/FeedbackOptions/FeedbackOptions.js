import React from 'react';
import styles from './FeedbackOptions.module.css'

const FeedbackOptions = ({onClickGood, onClickNeutral, onClickBad}) => (
    <div>
        <button className={styles.btn} type='button' onClick={onClickGood}>Good</button>
        <button className={styles.btn} type='button' onClick={onClickNeutral}>Neutral</button>
        <button className={styles.btn} type='button' onClick={onClickBad}>Bad</button>
    </div>
);

export default FeedbackOptions;