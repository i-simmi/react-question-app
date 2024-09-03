import React from 'react'
import { AiOutlineMinus, AiOutlinePlus }   from 'react-icons/ai';

const SingleQuestion = ({id, title, info, activeId, toggleQuestion} ) => {
    console.log('!!!!!!',activeId)
    const isActive = id == activeId
    console.log('IsActive',isActive)
  return (
    <article className='questions'>
      <header>
        <h5 className='title'>{title}</h5>
        <button className='btn-question' onClick={ () => toggleQuestion(id)}>{ isActive ? <AiOutlineMinus /> : <AiOutlinePlus />} </button>
      </header>
      { isActive && <p>{info}</p>} 
    </article>
  );
}

export default SingleQuestion
