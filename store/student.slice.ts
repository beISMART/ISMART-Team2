import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { RootState } from ".";

export const fetchAdminStudentList = createAsyncThunk<
  Student[],
  { year: string; branch: string },
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/students/fetchStudentList",
  async ({ branch, year }, { fulfillWithValue, rejectWithValue }) => {
    var data;
    try {
      const formData = new FormData();
      formData.append("branch", branch);
      formData.append("year", year);
      const response = await axios({
        url: process.env.NEXT_PUBLIC_ADMIN_URL + "studentretrieve.php",
        method: "POST",
        data: formData,
      });
      data = response.data;
      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue({ msg: "No student list" });
    }
  }
);


export const updateStudentDetials = createAsyncThunk<
  { msg: string },
  Student,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/students/updateStudentDetails",
  async (student, { fulfillWithValue, rejectWithValue, dispatch }) => {
    var data;
    try {
      const formData = new FormData();
      formData.append("reg_no", student.reg_no);
      formData.append("year", student.year);
      formData.append("name", student.name);
      formData.append("branch", student.branch);
      formData.append("dob", student.dob);
      formData.append("yoj", student.yoj);
      formData.append("phno", student.phno);
      formData.append("gender", student.gender);
      formData.append("fname", student.fname);
      formData.append("mname", student.mname);
      const response = await axios({
        url: process.env.NEXT_PUBLIC_ADMIN_URL + "studentedit.php",
        method: "POST",
        data: formData,
      });
      data = response.data;
      dispatch(
        fetchAdminStudentList({ branch: student.branch, year: student.year })
      );
      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue({
        msg: error.response.data?.msg,
      });
    }
  }
);

export const addStudentDetails = createAsyncThunk<
  { msg: string },
  AddStudentProps,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/students/addStudentDetails",
  async (student, { fulfillWithValue, rejectWithValue, dispatch }) => {
    var data;
    try {
      const formData = new FormData();
      formData.append("reg_no", student.reg_no);
      formData.append("name", student.name);
      formData.append("year", student.year);
      formData.append("branch", student.branch);
      formData.append("dob", student.dob);
      formData.append("yoj", student.yoj);
      formData.append("phno", student.phno);
      formData.append("gender", student.gender);
      formData.append("mname", student.mname);
      formData.append("fname", student.fname);
      const response = await axios({
        url: process.env.NEXT_PUBLIC_ADMIN_URL + "studentadd.php",
        method: "POST",
        data: formData,
      });
      data = response.data;
      dispatch(
        fetchAdminStudentList({ branch: student.branch, year: student.year })
      );
      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue({ msg: error.response.data?.msg });
    }
  }
);

export const deleteStudent = createAsyncThunk<
  void,
  void,
  {
    rejectValue: {
      msg: string;
    };
    state: RootState;
  }
>(
  "/students/removeStudentDetails",
  async (
    _payload,
    { fulfillWithValue, rejectWithValue, dispatch, getState }
  ) => {
    var data;
    try {
      const selectedRows = getState().students.selectedRows.data;

      selectedRows.map(async (student) => {
        const formData = new FormData();
        formData.append("year", student.year);
        formData.append("reg_no", student.reg_no);
        formData.append("branch", student.branch);
        const response = axios({
          url: process.env.NEXT_PUBLIC_ADMIN_URL + "studentdelete.php",
          method: "POST",
          data: formData,
        });

        await toast.promise(response,{
          loading:"Marking as inactive to Reg No. "+student.reg_no,
          error:"Something went wrong !",
          success:"Marked successfuly to Reg No."+student.reg_no
        })
        dispatch(fetchAdminStudentList({branch:student.branch,year:student.year}));
      });
      dispatch(setStudentIds());
      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue({ msg: error.response.data?.msg });
    }
  }
);

export interface Student {
  reg_no: string;
  name: string;
  branch: string;
  phno: string;
  dob: string;
  yoj: string;
  gender: string;
  mname: string;
  fname: string;
  year: string;
}

interface AddStudentProps extends Student {}

interface InitialState {
  acativeStudentList: {
    pending: boolean;
    error: null | string;
    data: Student[] | [];
  };
  selectedStudent: {
    data: Student | null;
    type: string | null;
  };
  selectedRows: {
    data: Student[] | [];
    error: string | null;
  };
  pending: boolean;
  error: string | null;
}

const initialState: InitialState = {
  acativeStudentList: {
    pending: false,
    error: null,
    data: [],
  },
  selectedRows: {
    data: [],
    error: null,
  },
  selectedStudent: { data: null, type: null },
  pending: false,
  error: null,
};

export const StudentsSlice = createSlice({
  name: "students",
  reducers: {
    intializeStudentSlice(state, action) {
      return initialState;
    },
    setSelectedStudent(state, action) {
      state.selectedStudent.data = action.payload;
    },
    updateStudent(state, action) {
      state.acativeStudentList.data = [
        ...state.acativeStudentList.data.filter(
          (value) => value.reg_no !== action.payload.reg_no
        ),
        action.payload,
      ];
    },
    setSelectedStudentId(state,action){
      state.selectedRows.data = [...state.selectedRows.data,action.payload]
    },
    removeStudentId(state,action){
      state.selectedRows.data = state.selectedRows.data.filter(
        (value) => value.reg_no !== action.payload.reg_no
      );
    },
    setStudentIds(state){
      state.selectedRows.data = []
    },
  },
  initialState,
  extraReducers: {
    [fetchAdminStudentList.pending.toString()]: (state, action) => {
      state.acativeStudentList.pending = true;
    },
    [fetchAdminStudentList.fulfilled.toString()]: (state, action) => {
      state.acativeStudentList.pending = false;
      state.acativeStudentList.data = action.payload;
    },
    [fetchAdminStudentList.rejected.toString()]: (state, action) => {
      state.acativeStudentList.pending = false;
      state.acativeStudentList.data = [];
    },
    [updateStudentDetials.pending.toString()]: (state, action) => {
      state.pending = true;
    },
    [updateStudentDetials.fulfilled.toString()]: (state, action) => {
      state.pending = false;
      toast.success(action.payload?.msg, { position: "top-right" });
    },
    [updateStudentDetials.rejected.toString()]: (state, action) => {
      state.pending = false;
      state.error = action.payload?.msg;
      toast.error(action.payload?.msg, { position: "top-right" });
    },
    [addStudentDetails.pending.toString()]: (state, action) => {
      state.pending = true;
    },
    [addStudentDetails.fulfilled.toString()]: (state, action) => {
      state.error = null;
      state.pending = false;
      toast.success(action.payload?.msg, { position: "top-right" });
    },
    [addStudentDetails.rejected.toString()]: (state, action) => {
      state.error = action.payload?.msg;
      state.pending = false;
      toast.error(action.payload?.msg, { position: "top-right" });
    },
  },
});

export const {
  intializeStudentSlice,
  setSelectedStudent,
  updateStudent,
  removeStudentId,
  setSelectedStudentId,
  setStudentIds
} = StudentsSlice.actions;