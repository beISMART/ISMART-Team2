import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SupaClient } from "../utils/supabase";

interface exam_schedule {
  id: string;
  type_of_exam: string;
  exam_date_time: Date;
  branchBranch_name: string;
  subjectsSub_code: string;
  semestersSem_no: string;
}

interface ExamScheduleState {
  exams: exam_schedule[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: ExamScheduleState = {
  exams: [],
  loading: false,
  error: null,
};

export const fetchExams = createAsyncThunk<exam_schedule[], void, { rejectValue: Error }>(
  "examSchedule/fetchExams",
  async (_Payload ,{fulfillWithValue}) => {
    try {
      const response = await SupaClient.from("exam_schedule").select(
        "*").eq('subjectsSub_code','r99ui')
      ;
      return fulfillWithValue(response.data as exam_schedule[]);
    } catch (error) {
      console.log(error)
      throw new Error("Failed to fetch exams");
    }
  }
);

export const addExam = createAsyncThunk<exam_schedule[], void, { rejectValue: Error }>(
  "examSchedule/addExam", async (_Payload ,{fulfillWithValue}) => {
  try {
    const response = await SupaClient.from("exam_schedule").select(
      "*,type_of_exam,exam_date_time"
    );
    return fulfillWithValue(response.data as exam_schedule[]);
  } catch (error) {
    throw new Error("Failed to add exam");
  }
});

export const deleteExam = createAsyncThunk("notes/deleteExam", async (examid: string) => {
  try {
    const { data, error } = await SupaClient.from("exam_schedule").delete().eq("id", '*');
    if (error) {
      throw new Error(error.message);
    }
    return examid;
  } catch (error) {
    throw new Error("Failed to delete note");
  }
});

export const examScheduleSlice = createSlice({
  name: "examSchedule",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExams.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExams.fulfilled, (state, action) => {
        state.loading = false;
        state.exams = action.payload;
      })
      .addCase(fetchExams.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch exams";
      })
      .addCase(addExam.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addExam.fulfilled, (state, action) => {
        state.loading = false;
        state.exams = action.payload;
      })
      .addCase(addExam.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to add exam";
      })
      .addCase(deleteExam.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteExam.fulfilled, (state, action) => {
        state.loading = false;
        if (state.exams)
          state.exams = state.exams.filter(
            (exams) => exams.id !== action.payload
          );
      })
      .addCase(deleteExam.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to delete exam";
      });
  },
});
