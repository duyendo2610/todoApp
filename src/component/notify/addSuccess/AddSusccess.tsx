import React from 'react'
import style from './Task.module.css'
import { Button } from 'react-bootstrap'
const AddSusccess = ({offSuccessBox}) => {
  return (
    <div className={`${style.lotify__addSuccess}`}>
        <div className={`${style.lotify__addSuccess_box} rounded-3 d-flex align-items-center`}>
          <p className="fw-bold fs-2">Add todo Successfully</p>
          <Button onClick={offSuccessBox} className="py-2 px-4 border border-primary">OK</Button>
        </div>
      </div>
  )
}

export default AddSusccess