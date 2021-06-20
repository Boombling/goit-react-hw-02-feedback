import React from 'react';
import styles from './FeedbackOptions.module.css';
import shortid from "shortid";

const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <div>
        {options.map((option) => (
            <button
                className={styles.btn}
                key={shortid.generate()}
                type="button"
                name={option}
                onClick={onLeaveFeedback}
            >
                {option}
            </button>
        ))}
        {/* <button className={styles.btn} type='button' onClick={onClickGood}>Good</button>
        <button className={styles.btn} type='button' onClick={onClickNeutral}>Neutral</button>
        <button className={styles.btn} type='button' onClick={onClickBad}>Bad</button> */}
    </div>
);

export default FeedbackOptions;