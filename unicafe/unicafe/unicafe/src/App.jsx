import { useState } from 'react'

const Button = (props) => {
  return(<button onClick={props.handleClick}>{props.text}</button>)
}

const Statistics = (props) => {
  if (props.all === 0){
    return(
      <div>
        <h1>Statistics</h1>
        No feedback given
      </div>
    )
  }
  return(
  <div>
    <h1>Statistics</h1>
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.all} />
        <StatisticLine text="average" value={(props.good - props.bad) / props.all} />
        <StatisticLine text="positive" value={(props.good / props.all) * 100 + "%"} />
      </tbody>
    </table>
  </div>
  )
}

const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newGood => {
    setGood(newGood)
  }
  const setToNeutral = newNeutral => {
    setNeutral(newNeutral)
  }
  const setToBad = newBad => {
    setBad(newBad)
  }
  let all = good + neutral + bad

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

export default App
