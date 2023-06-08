import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SupaClient } from "../utils/supabase";

export const addStaffRemarks = createAsyncThunk<
  any,
  {
    staffid : string;
    staff :string;
    branch: string;
    remarks_description: string;
    remarks_category: string;
  },
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/remarks/addStaffRemarks",
  async (payload, { fulfillWithValue, rejectWithValue }) => {
    var data;
    try {
        const response = await SupaClient.from('staff_remarks')
        .select('*')
        .eq('staffId', {payload.staffID});

      const data = response.data;
      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue({ msg: error.response.data.msg });
    }
  }
);

export const staffsearchRemark = createAsyncThunk<
  any,
  {staffID:string},
  {
    rejectValue: {
      msg: string;
    };
  }
>("/remarks/staffsearchRemark",
    async ( payload, { fulfillWithValue, rejectWithValue } ) => {
      try {
        const response = await SupaClient.from('staff_remarks')
        .select('*')
        .eq('staffId', {payload.staffID}); 

        const data = response.data;
        return fulfillWithValue(data);
      } catch (e) {
        return rejectWithValue({ msg: "No remarks yet for you!" });
      }          
      }
  );

export const addStudentRemarks = createAsyncThunk<
  any,
  {
    branch: string;
    year: string;
    category: string;
    id:string;
    desc:string;
  },
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/remarks/addStudentRemarks",
  async (payload, { fulfillWithValue, rejectWithValue }) => {
    var data;
    try {
      

      data = response.data;
      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue({ msg: error.response.data.msg });
    }
  }
);

export const studentsearchRemark = createAsyncThunk<
  any,
  {studentId:string},
  {
    rejectValue: {
      msg: string;
    };
  }
>("/remarks/studentsearchRemark",
    async ( payload, { fulfillWithValue, rejectWithValue } ) => {
      try {
        const response = await SupaClient.from('student_remarks')
        .select('*')
        .eq('studentId', {payload.studentId}); 

        const data = response.data;
        return fulfillWithValue(data);
      } catch (e) {
        return rejectWithValue({ msg: "No remarks yet for you!" });
      }          
      }
  );

interface InitialState {
  pending: boolean;
  error: string | null;
  data: [];
  selected:{
    data:{}
  }
}

const initialState: InitialState = {
  pending: false,
  error: null,
  data: [],
  selected:{
    data:{}
  }
};

export const RemarksSlice = createSlice({
  name: "remarks",
  reducers: {
    setSelectedSchedule(state,action){
        state.selected.data = action.payload
    }
  },
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addStaffRemarks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
    })
    builder.addCase(addStaffRemarks.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.searchResults = payload;
    })
    builder.addCase(addStaffRemarks.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.error = payload?.msg;
    });

    builder.addCase(staffsearchRemark.pending, (state) => {
        state.isLoading = true;
        state.error = null;
    })
    builder.addCase(staffsearchRemark.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.searchResults = payload;
    })
    builder.addCase(staffsearchRemark.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.error = payload?.msg;
    });

    builder.addCase(addStudentRemarks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
    })
    builder.addCase(addStudentRemarks.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.searchResults = payload;
    })
    builder.addCase(addStudentRemarks.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.error = payload?.msg;
    });

    builder.addCase(studentsearchRemark.pending, (state) => {
        state.isLoading = true;
        state.error = null;
    })
    builder.addCase(studentsearchRemark.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.searchResults = payload;
    })
    builder.addCase(studentsearchRemark.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.error = payload?.msg;
    });
  },
});

export const {setSelectedSchedule} = RemarksSlice.actions