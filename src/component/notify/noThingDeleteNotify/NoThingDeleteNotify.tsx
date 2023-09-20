import React from 'react'
import style from './NoThingDelete.module.css'
import { Button } from 'react-bootstrap'

const NoThingDeleteNotify = ({offNotify}) => {
  return (
    <div className={`${style.nothing_wrap}`}>
        <div className={`${style.nothing_box} rounded-3`}>
            <img width={250} src="https://nosleepguy.github.io/TodoList2/static/media/animationdelete.acda0393.gif" alt="" />
            <p className='fs-2'>Nothing to delete!</p>
            <p>Have a nice day!</p>
            <Button onClick={offNotify} className='px-3 py-2 '>OK</Button>
        </div>
    </div>
  )
}

export default NoThingDeleteNotify