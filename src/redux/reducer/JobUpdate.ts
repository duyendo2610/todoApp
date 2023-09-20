import { updateJob } from "../constant";
import { TSateJob } from "./ListJob";

const initialJobUpdate: TSateJob[] = [];

const jobUpdateReducer = (
  state = initialJobUpdate,
  action: { type: any; payload: String }
) => {
  switch (action.type) {
    case updateJob:
      return action.payload;
    default:
      return state;
  }
};

export default jobUpdateReducer;
