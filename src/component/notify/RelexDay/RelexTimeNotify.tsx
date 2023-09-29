
import style from './RelexTime.module.css'
import { Button } from 'react-bootstrap'

const RelexTime = (props:any) => {
  return (
    <div className={`${style.relex_wrap}`}>
        <div className={`${style.relex_box} rounded-3`}>
            <img width={250} src="https://nosleepguy.github.io/TodoList2/static/media/dance.11841c7a.gif" alt="" />
            <p className='fs-2'>Relax timeee</p>
            <p>No task today!</p>
            <Button onClick={props.hiddenRelexTimeNotify} className='px-3 py-2 '>OK</Button>
        </div>
    </div>
  )
}

export default RelexTime