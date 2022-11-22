import React from 'react'


export default function Custom(props) {

  const number = {
    '--p': props.pie.number
  }

  if (props.pie.number == 100) {
    number["--c"] = "red"
  }
  
  return (
    <div className='pie--wrapper' style={number} >
      <div className="pie animate" >{props.pie.number}</div>
      <div className='title'>{props.pie.title}</div>
    </div>
  )
}
