import React from 'react'
import style from './Loading.module.css'
const Loading = () => {
  return (
    <div className={`${style.wrap} `}>
        <div className={`${style.loading}`}></div>
    </div>
  )
}

export default Loading