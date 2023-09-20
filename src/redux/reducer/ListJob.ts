
import {
  addListJob,
  delJob,
  dellAllJobDone,
  doneAllJob,
  doneJob,
  rePlaceJob,
  updateListJob,
} from "../constant";
export type TSateJob = {
  name: string;
  completed: boolean;
  id: string;
  timeAdd: string;
  deadline: string;
};

const data :Array<TSateJob> = JSON.parse(localStorage.getItem("data") as string) 

const inititalListJob = data ? data : [];

const addListJobReducer = (
  state = inititalListJob,
  action: { type: any; payload: TSateJob }
) => {
  switch (action.type) {
    case addListJob:
      const newState1 = JSON.parse(JSON.stringify(state));
      newState1.push(action.payload);
      localStorage.setItem("data",JSON.stringify(newState1))
      return [...newState1];
    case doneJob:
      const newState2 = JSON.parse(JSON.stringify(state));
      const indexJobDone = newState2.findIndex(
        (job: { id: string }) => job.id === action.payload.id
      );
      newState2[indexJobDone].completed = true;
      localStorage.setItem("data",JSON.stringify(newState2))
      return [...newState2];
    case rePlaceJob:
      const newState3 = JSON.parse(JSON.stringify(state));
      const indexJobrePlace = newState3.findIndex(
        (job: { id: string }) => job.id === action.payload.id
      );
      newState3[indexJobrePlace].completed = false;
      localStorage.setItem("data",JSON.stringify(newState3))
      return [...newState3];
    case delJob:
      const newState4 = JSON.parse(JSON.stringify(state));
      const indexJobDel = newState4.findIndex(
        (job: { id: string }) => job.id === action.payload.id
      );
      newState4.splice(indexJobDel, indexJobDel + 1);
      localStorage.setItem("data",JSON.stringify(newState4))
      return [...newState4];
    case dellAllJobDone:
      const newState5 = JSON.parse(JSON.stringify(state));
      const a = newState5.filter(
        (item: { completed: boolean }) => item.completed === false
      );
      localStorage.setItem("data",JSON.stringify(a))
      return a
    case doneAllJob:
      const newState6 = JSON.parse(JSON.stringify(state));
      newState6.map((job: { completed: boolean }) => {
        if (job.completed === false) {
          job.completed = true;
        }
        return job;
      });
      localStorage.setItem("data",JSON.stringify(a))
      return newState6;
      case updateListJob:
        
        const newState7 = JSON.parse(JSON.stringify(state));
        const index = newState7.findIndex((job: { id: string; })=> job.id === action.payload.id);
        newState7[index].name = action.payload.name;
        newState7[index].deadline = action.payload.deadline;
        localStorage.setItem("data",JSON.stringify(newState7))
        return [...newState7]
    default:
      return state;
  }
};

export default addListJobReducer
