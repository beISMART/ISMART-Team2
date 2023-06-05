import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { MonthlyReportSlice } from "./Monthly_report.slice";
import {examScheduleSlice} from "./Exam_schedule.slice";
import {notesSlice} from "./Notes.slice"
export const store = configureStore({
  reducer: {
    monthly_report: MonthlyReportSlice.reducer,
    examSchedule: examScheduleSlice.reducer,
    notes: notesSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//@desc it selects state from store
export const useAppSelector = useSelector<RootState>;

//@desc it dispatch an action from a store
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;