import React from 'react';
import { useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { createGoal } from '../features/goal/goalSlice'

const GoalForm = () => {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();

  

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createGoal({input}));
    setInput('');
  }
    
  return (
    <section className='form'>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="text">Goal</label>
                <input type="text" name='text' id='input' value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
            <div className="form-group">
                <button type='submit' className="btn btn-block">
                    Add Goal
                </button>
            </div>
        </form>
    </section>
  )
}

export default GoalForm