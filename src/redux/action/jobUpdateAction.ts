import { updateJob } from "../constant";
import { TSateJob } from "../reducer/ListJob";


export const jobUpdateAction = (payload:TSateJob)=>({
    type:updateJob,
    payload:payload,
})