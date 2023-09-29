import { BackSquare, CloseSquare, Trash } from "iconsax-react";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAllJobDoneAction,
  deleteJobAction,
  rePlaceJobAction,
} from "../../redux/action/ListJobAction";
import NoThingDeleteNotify from "../notify/noThingDeleteNotify/NoThingDeleteNotify";
import DeleteJob from "../notify/deleteJob/DeleteJob";
import { RootState } from "../../redux/reducer";
import { TSateJob } from "../../redux/reducer/ListJob";

function ListDone() {
  const listJob = useSelector((state: RootState) => state.addListJobReducer);
  const [jobDone, setJobDone] = useState([]);
  const dispatch = useDispatch();
  const [showNothingNotify, setShowNothingNotify] = useState(false);
  const [deleteJobNotify, setDeleteJobNotify] = useState(false);

  const rePlaceJob = (job: TSateJob) => {
    dispatch(
      rePlaceJobAction({
        name: job.name,
        completed: job.completed,
        id: job.id,
        timeAdd: job.timeAdd,
        deadline: job.deadline,
      })
    );
  };
  const deleteJob = (job: TSateJob) => {
    dispatch(
      deleteJobAction({
        name: job.name,
        completed: job.completed,
        id: job.id,
        timeAdd: job.timeAdd,
        deadline: job.deadline,
      })
    );
    setDeleteJobNotify(true);
    setTimeout(() => {
      setDeleteJobNotify(false);
    }, 3000);
  };
  const deleteAllJobDone = () => {
    if (jobDone.length > 0) {
      dispatch(
        deleteAllJobDoneAction({
          name: "",
          completed: false,
          id: "",
          timeAdd: "",
          deadline: "",
        })
      );
    } else {
      setShowNothingNotify(true);
    }
  };

  const offNotify = () => {
    setShowNothingNotify(false);
  };

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
      {showNothingNotify && <NoThingDeleteNotify offNotify={offNotify} />}
      {deleteJobNotify && <DeleteJob />}
      <div className="row">
        <div className="col-12 fs-2 fw-bold">Already Done</div>
      </div>
      {jobDone.map((job: TSateJob) => {
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
              <Button
                onClick={() => rePlaceJob(job)}
                className="col-1 rounded-2 justify-content-center d-flex align-items-center  ms-auto"
              >
                <BackSquare size="22" color="#fff" />
              </Button>
              <Button
                onClick={() => deleteJob(job)}
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
        <Button
          variant="danger"
          className="d-flex align-items-center justify-content-center"
          onClick={deleteAllJobDone}
        >
          <Trash className="me-2" size="30" color="#fff" />
          Delete All
        </Button>
      </div>
    </div>
  );
}

export default ListDone;
