import PropTypes from 'prop-types'

export const FeedbackOptions = ({ options: { good, neutral, bad }, onLeaveFeedback }) => {
    return (
        <ul>
            <li><button type="button" data-feedback-name={good} onClick={onLeaveFeedback}>Good</button></li>
            <li><button type="button" data-feedback-name={neutral} onClick={onLeaveFeedback}>Neutral</button></li>
            <li><button type="button" data-feedback-name={bad} onClick={onLeaveFeedback}>Bad</button></li>
        </ul>
    );
};


FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.string.isRequired,
        neutral: PropTypes.string.isRequired,
        bad: PropTypes.string.isRequired,
    }).isRequired,

    onLeaveFeedback: PropTypes.func.isRequired,
};