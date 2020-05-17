import React, {useState} from "react";
import ReactDOM from "react-dom";
const Statistic = ({text, value}) => (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
);
const Statistics = (props) => {
    const {good, neutral, bad, total, average, positive} = props.stats;
    return (
        <>
            <h2>Statistic</h2>
            {total !== 0 ? (
                <table>
                    <tbody>
                        <Statistic text="Good" value={good}></Statistic>
                        <Statistic text="Neutral" value={neutral}></Statistic>
                        <Statistic text="Bad" value={bad}></Statistic>
                        <Statistic text="Total" value={total}></Statistic>
                        <Statistic text="Average" value={average}></Statistic>
                        <Statistic text="Positive" value={`${positive}%`}></Statistic>
                    </tbody>
                </table>
            ) : (
                <p>No feedback given</p>
            )}
        </>
    );
};
const Button = ({value, action, title}) => {
    return <button onClick={() => action(value + 1)}>{title}</button>;
};
const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const total = good + neutral + bad;
    const average = (good - bad) / total;
    const positive = (good / total) * 100;
    return (
        <>
            <h1>Give feedback</h1>
            <Button value={good} action={setGood} title="Good"></Button>
            <Button value={neutral} action={setNeutral} title="Neutral"></Button>
            <Button value={bad} action={setBad} title="Bad"></Button>
            <Statistics stats={{good, neutral, bad, total, average, positive}}></Statistics>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
