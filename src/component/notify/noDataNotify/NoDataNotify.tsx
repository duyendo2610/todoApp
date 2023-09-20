import React from 'react'
import style from './NoDataNotify.module.css'
import { Button } from 'react-bootstrap'

const NoDataNotify = ({offNoDataNotify}) => {
  return (
    <div className={`${style.noDataNoti_wrap}`}>
        <div className={`${style.noDataNoti_box} rounded-3`}>
            <p className='fw-bold fs-2 mt-2 '>Please enter your Todo</p>
            <Button onClick={offNoDataNotify} className='mt-3 py-2 px-4'>OK</Button>
        </div>
    </div>
  )
}

export default NoDataNotify