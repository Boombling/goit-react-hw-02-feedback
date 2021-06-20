import React, { Component } from 'react';
import Statistics from '../Statistic/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Message/Notification';
import styles from './FeedBack.module.css';


class FeetBack extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        // visible: false
    };

    // onClickGood = () => {
    //     this.setState({ visible: true })
    //     this.setState(prevState => ({
    //         good: prevState.good + 1
    //     }));
    // };
    // onClickNeutral = () => {
    //     this.setState({ visible: true })
    //     this.setState(prevState => ({
    //         neutral: prevState.neutral + 1
    //     }));
    // };
    // onClickBad = () => {
    //     this.setState({ visible: true })
    //     this.setState(prevState => ({
    //         bad: prevState.bad + 1
    //     }));
    // };

    onLeaveFeedback = (e) => {
        const name = e.target.name;
        this.setState((prevState) => ({
            [name]: prevState[name] + 1,
        }))
    }

    countTotalFeedback = () => {
        const sum = this.state.good + this.state.neutral + this.state.bad;
        return sum;
    };
    countPositiveFeedbackPercentage = () => {
        const feedBackProcent = Math.round(100 / this.countTotalFeedback() * this.state.good);
        return feedBackProcent;
    };

    render() {
        const total = this.countTotalFeedback();
        const percentage = this.countPositiveFeedbackPercentage();
        const objKey = Object.keys(this.state);
        return (
            <div className={styles.section}>
                <h1 className={styles.title}>Pleas leave feedback</h1>
                <FeedbackOptions
                    // onClickGood={this.onClickGood}
                    // onClickNeutral={this.onClickNeutral}
                    // onClickBad={this.onClickBad}
                    options={objKey}
                    onLeaveFeedback={this.onLeaveFeedback}
                />

                {this.countTotalFeedback() === 0 ?
                    <Notification message="No feedback given" /> :
                    <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={total}
                    percentage={percentage}
                />
                }
            </div>
        );
    }
}
export default FeetBack;