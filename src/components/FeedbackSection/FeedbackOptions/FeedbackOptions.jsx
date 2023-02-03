export const FeedbackOptions = ({ options, onLeaveFeedback }) =>
    <ul>
        <li><button type="button" data-feedback-name={options.good} onClick={onLeaveFeedback}>Good</button></li>
        <li><button type="button" data-feedback-name={options.neutral} onClick={onLeaveFeedback}>Neutral</button></li>
        <li><button type="button" data-feedback-name={options.bad} onClick={onLeaveFeedback}>Bad</button></li>
    </ul>
