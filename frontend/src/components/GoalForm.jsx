import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'

function GoalForm() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const onSubmit = e => {
    e.preventDefault();

    dispatch(createGoal({ text }))
    setText('')
  }

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            className="form-control"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Please enter goal"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">Add Goal</button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm