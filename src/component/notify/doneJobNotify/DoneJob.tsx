
import style from './doneJob.module.css'
import { Coffee } from 'iconsax-react'

const DoneJobNotify = () => {
  return (
    <div className={`${style.doneJob_notify_wrap}`}>
        <p className='mb-0 text-success fs-6 fw-bold d-flex align-items-center'>Great <Coffee className='ms-1' size="24" color="green"/></p>
        <div className={`${style.coudown}`}></div>
    </div>
  )
}

export default DoneJobNotify