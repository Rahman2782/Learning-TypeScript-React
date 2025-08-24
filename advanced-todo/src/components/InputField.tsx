import React from 'react'
import './styles.css'

const InputField = () => {
  return (
    <form className='input'>
      <input type='input' placeholder='Enter a Task: ' className='inputBar'/>
      <button className='inputSubmit' type='submit'>Add</button>
    </form>
  )
}

export default InputField
