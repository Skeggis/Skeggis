import React from 'react'

export default function Page(props){
  return (
    <div className="section" style={{overflow: 'hidden'}}>
      {props.children}
    </div>
  )
}