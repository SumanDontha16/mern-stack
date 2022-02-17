import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'

function GoalItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <div className="goal">
      <p>{new Date(goal.createdAt).toLocaleString('en-GB')}</p>
      <h2>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">close</button>
    </div>
  )
}

export default GoalItem