import {
  ArrangeHorizontalSquare,
  BackSquare,
  CloseSquare,
  TickCircle,
  Trash,
} from "iconsax-react";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllJobDoneAction, deleteJobAction, rePlaceJobAction } from "../../redux/action/ListJobAction";
import NoThingDeleteNotify from "../notify/noThingDeleteNotify/NoThingDeleteNotify";
import DeleteJob from "../notify/deleteJob/DeleteJob";
import { RootState } from "../../redux/reducer";

function ListDone() {
  const listJob = useSelector((state: RootState) => state.addListJobReducer);
  const [jobDone, setJobDone] = useState([]);
  const dispatch = useDispatch();
  const [showNothingNotify,setShowNothingNotify] = useState(false)
  const [deleteJobNotify, setDeleteJobNotify] = useState(false);



  const rePlaceJob = (job: { id: React.Key | null | undefined; timeAdd: string | number | boolean | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; name: string | number | boolean | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; deadline: string | number | boolean | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; })=>{
    dispatch(rePlaceJobAction(job))
  }
  const deleteJob = (job: { id: React.Key | null | undefined; timeAdd: string | number | boolean | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; name: string | number | boolean | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; deadline: string | number | boolean | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; })=>{
    dispatch(deleteJobAction(job))
    setDeleteJobNotify(true);
      setTimeout(() => {
        setDeleteJobNotify(false);
      }, 3000);
  }
  const deleteAllJobDone = ()=>{
    if(jobDone.length >0){

      dispatch(deleteAllJobDoneAction({
        name: "",
        completed: false,
        id: "",
        timeAdd: "",
        deadline: ""
      }))
    }else{
      setShowNothingNotify(true)
    }
  }

  const offNotify = ()=>{
    setShowNothingNotify(false)
  }


  
  useEffect(() => {
    setJobDone(
      listJob.filter(
        (item: { completed: boolean; complited: boolean }) =>
          item.completed === true
      )
    );
  }, [listJob]);
  

  return (
    <div
      className="container bg-primary bg-gradient py-3 px-4 bg-opacity-25 rounded-top-3 "
      style={{ minHeight: "150px" }}
    >
      {showNothingNotify && <NoThingDeleteNotify offNotify={offNotify}/>}
      {deleteJobNotify && <DeleteJob/>}
      <div className="row">
        <div className="col-12 fs-2 fw-bold">Already Done</div>
      </div>
      {jobDone.map((job :{ id: React.Key | null | undefined; timeAdd: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; deadline: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
        return (
          <div
            key={job.id}
            className="container job_Wrap jobDoneWrap  border-bottom  border-danger-subtle pb-2 mb-2 h"
          >
            <div className="row jobDone text-decoration-line-through ">
              timeAdd: {job.timeAdd}
            </div>
            <div className="row ms-2 jobDone text-decoration-line-through ">
              {job.name}
            </div>
            <div className="row jobDone text-decoration-line-through ">
              Deadline: {job.deadline}
            </div>
            <div className="row">
              <Button onClick={()=>rePlaceJob(job)} className="col-1 rounded-2 justify-content-center d-flex align-items-center  ms-auto">
                <BackSquare size="22" color="#fff" />
              </Button>
              <Button
                onClick={()=>deleteJob(job)}
                variant="danger"
                className="col-1 rounded-2 ms-4 justify-content-center d-flex align-items-center  "
              >
                <CloseSquare size="22" color="#fff" />
              </Button>
            </div>
          </div>
        );
      })}
      <div className="row mt-4">
        <Button variant="danger" className="d-flex align-items-center justify-content-center" onClick={deleteAllJobDone}><Trash className="me-2" size="30" color="#fff"/>Delete All</Button>
      </div>
    </div>
  );
}

export default ListDone;
