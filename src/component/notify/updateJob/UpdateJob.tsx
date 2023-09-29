
import style from './UpdateJob.module.css'
import { TickCircle } from 'iconsax-react'

const UpdateJob = () => {
  return (
    <div className={`${style.updateJob_notify_wrap}`}>
        <p className='mb-0 text-success fs-6 fw-bold d-flex align-items-center'>Update Success <TickCircle className='ms-1' size="24" color="green"/></p>
        <div className={`${style.coudown}`}></div>
    </div>
  )
}

export default UpdateJob