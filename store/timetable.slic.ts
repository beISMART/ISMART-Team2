import { RootState } from ".";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SupaClient } from "../utils/supabase";
import toast from "react-hot-toast";

export const updateTimeTable = createAsyncThunk<
    any,
    UpdateProps,
    {
        rejectValue: {
            msg: string;
        };
    }
>(
    "/schedule/updateTimeTable",
    async (payload, { fulfillWithValue, rejectWithValue, dispatch }) => {
        try {
            const response = await SupaClient.from('timetable')
            .update({h1.'{payload.h1}'}, {h2.'{payload.h2}'}, {h3.'{payload.h3}'}, {h4.'{payload.h4}'}, {h5.'{payload.h5}'}, {h6.'{payload.h6}'}, {h7.'{payload.h7}'}).and('branch.eq.{payload.branch}', 'year.eq.{payload.year}', 'day.eq.{payload.day}');

            const data = response.data;
            data = response.data;
            toast.success("TimeTable updated successfully", { position: "top-right" });
            dispatch(getTimeTable({ branch: payload.branch, year: payload.year }));
            return fulfillWithValue(data);
        } catch (error: any) {
            return rejectWithValue({ msg: "Something went wrong !" });
        }
    }
);

export const getTimeTable = createAsyncThunk<
    any,
    {
        branch: string;
        year: string;
    },
    {
        rejectValue: {
            msg: string;
        };
    }
>(
    "/timetable/getTimetable",
    async (payload, { fulfillWithValue, rejectWithValue }) => {
        var data;
        try {
            const response = await SupaClient.from('timetable')
                .select('*').and('branch.eq.{payload.branch}', 'year.eq.{payload.year}'),);

const data = response.data;
data = response.data;
return fulfillWithValue(data);
    } catch (error: any) {
    return rejectWithValue({ msg: "Something went wrong !" });
}
  }
);

interface UpdateProps {
    branch: string;
    year: string;
    day: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    h7: string;
}

interface InitialState {
    pending: boolean;
    error: string | null;
    data: [];
    selected: {
        data: {}
    }
}

const initialState: InitialState = {
    pending: false,
    error: null,
    data: [],
    selected: {
        data: {
            day: "",
            branch: "",
            year: "",
            h1: "",
            h2: "",
            h3: "",
            h4: "",
            h5: "",
            h6: "",
            h7: "",
        }
    }
};

export const TimetableSlice = createSlice({
    name: "timetable",
    reducers: {
        setSelectedTimeTable(state, action) {
            state.selected.data = action.payload
        }
    },
    initialState,
    extraReducers: (builder) => {
        builder.addCase(updateTimeTable.pending, (state) => {
            state.pending = true;
        })
        builder.addCase(updateTimeTable.fulfilled, (state) => {
            state.error = null;
        })
        builder.addCase(updateTimeTable.rejected, (state, { payload }) => {
            state.error = payload?.msg;
            toast.error(payload?.msg, { position: "top-right" });
        });

        builder.addCase(getTimeTable.pending, (state) => {
            state.pending = true;
        })
        builder.addCase(getTimeTable.fulfilled, (state, { payload }) => {
            state.error = null;
            state.data = payload;
        })
        builder.addCase(getTimeTable.rejected, (state, { payload }) => {
            state.error = payload?.msg;
            toast.error(payload?.msg, { position: "top-right" });
        });
    },
});

export const { setSelectedTimeTable } = TimetableSlice.actions