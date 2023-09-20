import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addJobAction,
  updateListJobAction,
} from "../../redux/action/ListJobAction";
import { randomId } from "../../untility/getUnqID";
import AddSusccess from "../notify/addSuccess/AddSusccess";
import NoDataNotify from "../notify/noDataNotify/NoDataNotify";
import UpdateJob from "../notify/updateJob/UpdateJob";
import { RootState } from "../../redux/reducer";

const date = new Date();
const month = `0${date.getMonth()}`;
const day = `0${date.getDate()}`;
const now = `${date.getFullYear()}-${month.slice(-2, 3)}-${day.slice(-2, 3)}`;

const Task = () => {
  // const listJob = useSelector(state => state.addListJobReducer);
  const jobUpdate = useSelector((state: RootState) => state.jobUpdateReducer);
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const [deadline, setDeadline] = useState(now);
  const [addBtn, setAddBtn] = useState("+ Add");
  const [addSuccess, setAddSuccess] = useState(false);
  const [noDataNotify, setNoDataNotify] = useState(false);
  const [updateNotify, setUpdateNotify] = useState(false);

  const getData = (e: { target: { value: React.SetStateAction<string> } }) => {
    setData(e.target.value);
  };

  const addJob = () => {
    if (data.trim() === "") {
      setNoDataNotify(true);
    }
    if (addBtn === "+ Add" && data.trim() != "") {
      const date = new Date();
      const hours = `0${date.getHours()}`;
      const min = `0${date.getMinutes()}`;
      const second = `0${date.getSeconds()}`;
      const day = `0${date.getDate()}`;
      const month = `0${date.getMonth()}`;
      const year = date.getFullYear();
      dispatch(
        addJobAction({
          id: randomId(20),
          name: data,
          timeAdd: `${hours.slice(-2, 3)}:${min.slice(-2, 3)}:${second.slice(
            -2,
            3
          )}, ${day.slice(-2, 3)}/${month.slice(-2, 3)}/${year}`,
          deadline: deadline,
          completed: false,
        })
      );
      setAddSuccess(true);
    }
    if (addBtn === "Update" && data.trim() != "") {
      dispatch(
        updateListJobAction({
          name: data,
          completed: jobUpdate.completed,
          id: jobUpdate.id,
          timeAdd: jobUpdate.timeAdd,
          deadline: deadline,
        })
      );
      setAddBtn("+ Add");
      setUpdateNotify(true);
      setTimeout(() => {
        setUpdateNotify(false);
      }, 3000);
    }
    setData("");
  };

  const getDeadline = (e: any) => {
    setDeadline(e.target.value);
  };
  const offSuccessBox = () => {
    setAddSuccess(false);
  };
  const offNoDataNotify = () => {
    setNoDataNotify(false);
  };

  useEffect(() => {
    if (jobUpdate.name) {
      setData(jobUpdate.name);
      setDeadline(jobUpdate.deadline);
      setAddBtn("Update");
    }
  }, [jobUpdate]);

  return (
    <div className="container bg-primary bg-gradient py-3 px-4 bg-opacity-25 rounded-3">
      {addSuccess && <AddSusccess offSuccessBox={offSuccessBox} />}
      {noDataNotify && <NoDataNotify offNoDataNotify={offNoDataNotify} />}
      {updateNotify && <UpdateJob />}
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center ">
          <img
            width={70}
            className="custum-hover-logo"
            src="https://nosleepguy.github.io/TodoList2/static/media/tick.0a36836f.svg"
            alt=""
          />
          <span className="fs-1 ms-3 fw-bolder">Todo Task</span>
        </div>
      </div>
      <div className="row">
        <span className="col-2 fs-sm bg-primary text-light rounded mt-3">
          Add Todo
        </span>
      </div>
      <div className="row">
        <textarea
          onChange={getData}
          value={data}
          className="form-control mt-2"
          placeholder="📝 Add todo"
        />
      </div>

      <div className="row">
        <span className="col-2 fs-sm bg-warning text-dark rounded mt-3">
          Deadline
        </span>
      </div>
      <div className="row">
        <input
          onChange={getDeadline}
          value={deadline}
          type="date"
          className="form-control mt-1"
          placeholder="📝 Add todo"
        />
      </div>

      <div className="row">
        <Button onClick={addJob} variant="success" className="mt-3">
          {addBtn}
        </Button>
      </div>
    </div>
  );
};

export default Task;
