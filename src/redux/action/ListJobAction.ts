import { delJob, dellAllJobDone, doneAllJob, updateListJob } from './../constant/index';
import { addListJob, doneJob, rePlaceJob } from "../constant"

import { TSateJob } from "../reducer/ListJob"


export const addJobAction = (payload:TSateJob)=>({
    type:addListJob,
    payload:payload,
})

export const doneJobAction = (payload:TSateJob)=>({
    type:doneJob,
    payload:payload,
})

export const rePlaceJobAction = (payload:TSateJob)=>({
    type:rePlaceJob,
    payload:payload,
})

export const deleteJobAction = (payload:TSateJob)=>({
    type:delJob,
    payload:payload,
})


export const deleteAllJobDoneAction = (payload:TSateJob)=>({
    type:dellAllJobDone,
    payload:payload,
})

export const doneAllJobAction = (payload:TSateJob)=>({
    type:doneAllJob,
    payload:payload,
})

export const updateListJobAction = (payload:TSateJob)=>({
    type:updateListJob,
    payload:payload,
})