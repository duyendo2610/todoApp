import { ArchiveTick, ArrangeHorizontalSquare, Sort, TickCircle } from 'iconsax-react'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { doneAllJobAction, doneJobAction } from '../../redux/action/ListJobAction';
import { jobUpdateAction } from '../../redux/action/jobUpdateAction';
import RelexTime from '../notify/RelexDay/RelexTimeNotify';
import DoneJobNotify from '../notify/doneJobNotify/DoneJob';
import { RootState } from '../../redux/reducer';

const ListJob = () => {
    const listJob = useSelector((state: RootState) => state.addListJobReducer);
    // const jobUpdate = useSelector((state: RootState) => state.jobUpdateReducer);
    const dispatch = useDispatch();
    const [searchData,setSearchData] = useState("");
    const [jobDo,setJobDo] = useState([]);
    const [searchDataList,setSearchDataList] = useState([]);
    const [relexNotify,setRelexNotify] = useState(false);
    const [doneJobNotify,setDoneJobNotify] = useState(false);
    
    
    const getSearchData = (e: { target: { value: React.SetStateAction<string>; }; })=>{
        setSearchData(e.target.value)
    }
    const doneJob =(job: { id: React.Key | null | undefined; timeAdd: string | number | boolean | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; name: string | number | boolean | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; deadline: string | number | boolean | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; })=>{
        dispatch(doneJobAction(job))
        setDoneJobNotify(true)
        setTimeout(() => {
            setDoneJobNotify(false);
          }, 3000);
    }
    const doneAll =()=>{
        dispatch(doneAllJobAction({
            name: '',
            completed: false,
            id: '',
            timeAdd: '',
            deadline: ''
        }))
        setRelexNotify(true)
    }
    const sendJobUpdate =(job: { id: React.Key | null | undefined; timeAdd: string | number | boolean | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; name: string | number | boolean | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; deadline: string | number | boolean | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; })=>{
        dispatch(jobUpdateAction(job))
    }
    const sortDeadline = ()=>{
        const newListJob = JSON.parse(JSON.stringify(jobDo));
        newListJob.sort((a: { deadline: string | number | Date; }, b: { deadline: string | number | Date; }) => {
            if(newListJob){
                return (new Date(a.deadline) - new Date(b.deadline) )
            }
        });
        setJobDo(newListJob);
      }
    const hiddenRelexTimeNotify = ()=>{
        setRelexNotify(false)
    }
    

    
    useEffect(()=>{
        setJobDo(listJob.filter((item: { completed: boolean; }) => item.completed === false))
    },[listJob])
    useEffect(()=>{
        setSearchDataList(jobDo)
    },[jobDo])
    useEffect(()=>{
        if (jobDo.length > 0) {
            const results = jobDo.filter((job: { name: string; }) => {
              return job.name.toLowerCase().includes(searchData.toLowerCase());
            });
            setSearchDataList(results);
        }
    },[searchData])
    
  return (
    <div>
        {doneJobNotify && <DoneJobNotify/>}
        {relexNotify && <RelexTime hiddenRelexTimeNotify={hiddenRelexTimeNotify}/>}
    <div className='container bg-primary bg-gradient py-3 px-4 bg-opacity-25 rounded-top-3'>
        <div className="row">
            <div className="col-2 mb-2 bg-opacity-75 fs-sm bg-primary text-center text-light rounded-2  ">Search</div>
        </div>
        <div className="row">
            <div className="col-12 p-0">
                <input onChange={getSearchData} type="text" placeholder="🔍 Search your todo..." className='form-control p-1 ps-2 width100 bg-success bg-opacity-10 border border-dark rounded-2' />
            </div>
        </div>
        <div className="row mb-3 mt-2">
            <Button onClick={doneAll} variant='success' className='w-25 d-flex align-items-center'><ArchiveTick style={{marginRight:"10px"}} size="20" color="#fff"/> Done All</Button>
            <Button onClick={sortDeadline} className='w-25 ms-3 d-flex align-items-center'><Sort style={{marginRight:"10px"}} size="20" color="#fff"/> Sort by</Button>
        </div>
        {searchDataList.map((job: { id: React.Key | null | undefined; timeAdd: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; deadline: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; })=>{
                return(
                    <div key={job.id} className="container job_Wrap border border-warning-subtle rounded-2 py-2 mt-1">
                        <div className="row align-items-center justify-content-between ">
                            <div className="col-8 text-dark">Time Add: {job.timeAdd}</div>
                            <div className="col-4 text-end"><ArrangeHorizontalSquare onClick={()=>sendJobUpdate(job)}  size="26" className='iconAction'/></div>
                        </div>
                        <div className="row">
                            <b className="col ms-3 text-success">{job.name}</b>
                        </div>
                        <div className="row align-items-center justify-content-between ">
                            <div className="col-6 text-danger">deadline: {job.deadline}</div>
                            <div className="col-6 text-end"><TickCircle onClick={()=>doneJob(job)} size="26" className='iconAction'/></div>
                        </div>
                    </div>
                )
            })}
            
    </div>
    <div className='bg-success text-light rounded-bottom-3 px-3 py-2'>{searchDataList.length} item left</div>
    </div>
  )
}

export default ListJob