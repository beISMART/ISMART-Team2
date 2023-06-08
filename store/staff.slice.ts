import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { RootState } from "./index";
import { SupaClient } from "../utils/supabase";

export const fetchActiveStaffList = createAsyncThunk<
    staff[],
    void,
    {
        rejectValue: {
            msg: string;
        };
    }
>(
    "/staffs/fetchActiveList",
    async (payload, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response = await SupaClient.from('staff')
                .select('*')
                .eq('status', `ACTIVE`);

            const data = response.data;
            data = response.data;
            return fulfillWithValue(data);
        } catch (error: any) {
            return rejectWithValue({ msg: "No student list" });
        }
    }
);

export const fetchInActiveStaffList = createAsyncThunk<
    inactiveStaff[],
    void,
    {
        rejectValue: {
            msg: string;
        };
    }
>(
    "/staffs/fetchInActiveList",
    async (payload, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response = await SupaClient.from('staff')
                .select('*')
                .eq('status', `INACTIVE`);

            const data = response.data;
            return fulfillWithValue(data);
        } catch (error: any) {
            return rejectWithValue({ msg: "No student list" });
        }
    }
);

export const searchStaff = createAsyncThunk<
    staffprofile[],
    { staffid: string; },
    {
        rejectValue: {
            msg: string;
        };
    }
>(
    "/staffs/searchStaff",
    async (payload, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response = await SupaClient.from('staff')
                .select('*').eq('id', '{payload.searchid}');

            const data = response.data;
            data = response.data;
            return fulfillWithValue(data);
        } catch (error: any) {
            return rejectWithValue({ msg: "Invalid Staff ID" });
        }
    }
);

//THIS PORTION IS NOT YET DONE
export const updateStaffDetials = createAsyncThunk<
    { msg: string },
    { staffid: string; },
    {
        rejectValue: {
            msg: string;
        };
    }
>(
    "/staffs/updateStaffDetails",
    async (staff, { fulfillWithValue, rejectWithValue, dispatch }) => {
        try {
            const formData = new FormData();
            formData.append("staffid", staff.staffid);
            formData.append("name", staff.name);
            formData.append("branch", staff.branch);
            formData.append("dob", staff.dob);
            formData.append("doj", staff.doj);
            formData.append("qualification", staff.qualification);
            formData.append("designation", staff.designation);
            formData.append("phno", staff.phno);
            formData.append("email", staff.email);
            formData.append("gender", staff.gender);
            formData.append("experience", staff.experience);
            const response = await axios({
                url: process.env.NEXT_PUBLIC_ADMIN_URL + "staffedit.php",
                method: "POST",
                data: formData,
            });
            data = response.data;
            dispatch(fetchActiveStaffList());
            return fulfillWithValue(data);
        } catch (error: any) {
            return rejectWithValue({
                msg: "Something went wrong !",
            });
        }
    }
);

//THIS PORTION IS NOT YET DONE
export const addStaffDetials = createAsyncThunk<
    { msg: string },
    AddStaffProps,
    {
        rejectValue: {
            msg: string;
        };
    }
>(
    "/staffs/addStaffDetails",
    async (staff, { fulfillWithValue, rejectWithValue, dispatch }) => {
        try {
            const formData = new FormData();
            formData.append("name", staff.name);
            formData.append("branch", staff.branch);
            formData.append("dob", staff.dob);
            formData.append("doj", staff.doj);
            formData.append("qualification", staff.qualification);
            formData.append("designation", staff.designation);
            formData.append("phno", staff.phno);
            formData.append("email", staff.email);
            formData.append("gender", staff.gender);
            formData.append("experience", staff.experience);
            const response = await axios({
                url: process.env.NEXT_PUBLIC_ADMIN_URL + "staffadd.php",
                method: "POST",
                data: formData,
            });
            data = response.data;
            dispatch(fetchActiveStaffList());
            return fulfillWithValue(data);
        } catch (error: any) {
            return rejectWithValue({ msg: error.response.data?.msg });
        }
    }
);

//STILL CONTAINS BUGS, CHECK FOR THE BUGS
export const deleteStaff = createAsyncThunk<
    void,
    { staffid: string; },
    {
        rejectValue: {
            msg: string;
        };
        state: RootState;
    }
>(
    "/staffs/removeStaffDetails",
    async (payload,
        { fulfillWithValue, rejectWithValue, dispatch, getState }
    ) => {
        try {
            const selectedRows = getState().staffs.selectedRows.data;

            const response = await SupaClient.from('staff')
                .update({ status: 'INACTIVE' }).eq('id', '{payload.staffid}');

            const data = response.data;

            await toast.promise(response, {
                loading: "Marking as inactive to Staff Id " + staff.staffid,
                error: "Something went wrong !",
                success: "Marked successfuly to Staff Id " + staff.staffid
            })
            dispatch(fetchActiveStaffList());
        }//dispatch(setIds())
return fulfillWithValue(data);
        } catch (error: any) {
    return rejectWithValue({ msg: error.response.data?.msg });
}
    
);

interface InitialStateProps {
    searchResults: any[];
    isLoading: boolean;
    error: string | null | undefined;
}

export interface staff {
    staffid: string;
    name: string;
    branch: string;
    designation: string;
    phno: string;
    email: string;
    dob: string;
    doj: string;
    qualification: string;
    gender: string;
    experience: string;
}

interface AddStaffProps extends Omit<staff, "staffid"> { }

interface inactiveStaff extends Omit<staff, "designation"> { }

interface InitialState {
    acativeStaffList: {
        pending: boolean;
        error: null | string;
        data: staff[] | [];
    };
    selectedStaff: {
        data: staff | null;
        type: string | null;
    };
    selectedRows: {
        data: staff[] | [];
        error: string | null;
    };
    inactiveStaffList: {
        pending: boolean;
        error: null | string;
        data: inactiveStaff[] | [];
    };
    pending: boolean;
    error: string | null;
}

const initialState: InitialState = {
    acativeStaffList: {
        pending: false,
        error: null,
        data: [],
    },
    selectedRows: {
        data: [],
        error: null,
    },
    selectedStaff: { data: null, type: null },
    inactiveStaffList: {
        data: [],
        error: null,
        pending: false,
    },
    pending: false,
    error: null,
};

export const StaffsSlice = createSlice({
    name: "staffs",
    reducers: {
        intializeStaffSlice(state, action) {
            return initialState;
        },
        setSelectedStaff(state, action) {
            state.selectedStaff.data = action.payload;
        },
        setSelectedType(state, action) {
            state.selectedStaff.type = action.payload;
        },
        updateStaff(state, action) {
            state.acativeStaffList.data = [
                ...state.acativeStaffList.data.filter(
                    (value) => value.staffid !== action.payload.staffid
                ),
                action.payload,
            ];
        },
        setIds(state) {
            state.selectedRows.data = []
        },
        setSelectedId(state, action) {
            state.selectedRows.data = [...state.selectedRows.data, action.payload];
        },
        removeId(state, action) {
            state.selectedRows.data = state.selectedRows.data.filter(
                (value) => value.staffid !== action.payload.staffid
            );
        },
    },
    initialState,
    extraReducers: {
        builder.addCase(fetchActiveStaffList.pending, (state) => {
            state.acativeStaffList.pending = true;
        })
        builder.addCase(fetchActiveStaffList.fulfilled, (state, { payload }) => {
            state.acativeStaffList.pending = false;
            state.acativeStaffList.data = payload;
        })
        builder.addCase(fetchActiveStaffList.rejected, (state, { payload }) => {
            state.acativeStaffList.pending = false;
            state.acativeStaffList.data = [];
        });

        builder.addCase(fetchInActiveStaffList.pending, (state) => {
            state.inactiveStaffList.pending = true;
        })
        builder.addCase(fetchInActiveStaffList.fulfilled, (state, { payload }) => {
            state.inactiveStaffList.pending = false;
            state.inactiveStaffList.data = payload;
        })
        builder.addCase(fetchInActiveStaffList.rejected, (state, { payload }) => {
            state.inactiveStaffList.pending = false;
            state.inactiveStaffList.data = [];
        });

        builder.addCase(searchStaff.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(searchStaff.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.searchResults = payload;
        })
        builder.addCase(searchStaff.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload?.msg;
        });

        // STILL CONTAINS BUGS, CHECK THE THUNK
        builder.addCase(deleteStaff.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(deleteStaff.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.searchResults = payload;
        })
        builder.addCase(deleteStaff.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload?.msg;
        });


        [updateStaffDetials.pending.toString()]: (state, action) => {
            state.pending = true;
        },
        [updateStaffDetials.fulfilled.toString()]: (state, action) => {
            state.pending = false;
            toast.success(action.payload?.msg, { position: "top-right" });
        },
        [updateStaffDetials.rejected.toString()]: (state, action) => {
            state.pending = false;
            toast.error(action.payload?.msg, { position: "top-right" });
        },
        [addStaffDetials.pending.toString()]: (state, action) => {
            state.pending = true;
        },
        [addStaffDetials.fulfilled.toString()]: (state, action) => {
            state.pending = false;
            toast.success(action.payload?.msg, { position: "top-right" });
        },
        [addStaffDetials.rejected.toString()]: (state, action) => {
            state.pending = false;
            state.error = action.payload?.msg;
            toast.error(action.payload?.msg, { position: "top-right" });
        },
    },
});

export const {
    intializeStaffSlice,
    setSelectedId,
    removeId,
    setSelectedStaff,
    setSelectedType,
    updateStaff,
    setIds
} = StaffsSlice.actions;