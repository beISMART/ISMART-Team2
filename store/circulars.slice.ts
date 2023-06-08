import { RootState } from ".";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SupaClient } from "../utils/supabase";
import toast from "react-hot-toast";

export const uploadCircular = createAsyncThunk<
    any,
    thunkArg,
    {
        rejectValue: {
            msg: string;
        };
    }
>(
    "/circular/uploadCircular",
    async (payload, { fulfillWithValue, rejectWithValue, getState }) => {
        var data;
        try {
            const response = await SupaClient.from('circulars')
                .select('*')
                .insert({ id: 1, circular_for: '{payload.for}', branch: '{payload.branch}', year: '{payload.year}', category: '{payload.category}', url: '{payload.url}', info: '{payload.info}', })

            const data = response.data;
            data = response.data;
            return fulfillWithValue(data);
        } catch (error: any) {
            return rejectWithValue({ msg: "Something went wrong !" });
        }
    }
);

export const getCirculars = createAsyncThunk<
    any,
    void,
    {
        rejectValue: {
            msg: string;
        };
    }
>(
    "/circular/getCirculars",
    async (_payload, { fulfillWithValue, rejectWithValue }) => {
        var data;
        try {
            const response = await SupaClient.from('circulars')
                .select('*')
                .order('id', { ascending: false });

            const data = response.data;
            return fulfillWithValue(data);
        } catch (error: any) {
            return rejectWithValue({ msg: "Something went wrong !" });
        }
    }
);

export const getCircularsByStaff = createAsyncThunk<
    any,
    void,
    {
        rejectValue: {
            msg: string;
        };
    }
>(
    "/circular/getCircularsByStaff",
    async (_payload, { fulfillWithValue, rejectWithValue, getState }) => {
        var data;
        try {
            const response = await SupaClient.from('circulars')
                .select('*').eq('circular_for', 'STAFF');

            const data = response.data;
            data = response.data;
            return fulfillWithValue(data);
        } catch (error: any) {
            return rejectWithValue({ msg: "Something went wrong !" });
        }
    }
);

export const getCircularsByStudent = createAsyncThunk<
    any,
    {
        year: string;
        branch: string;
    },
    {
        rejectValue: {
            msg: string;
        };
    }
>(
    "/circular/getCircularsByStudent",
    async (_payload, { fulfillWithValue, rejectWithValue, getState }) => {
        var data;
        try {
            const response = await SupaClient.from('circulars')
                .select('*').and('circular_for.STUDENT', or('branch.eq.ALL, branch.eq.{payload.branch}'), or('year.eq.ALL, year.eq.{payload.year}'),);

            const data = response.data;
            data = response.data;
            return fulfillWithValue(data);
        } catch (error: any) {
            return rejectWithValue({ msg: "Something went wrong !" });
        }
    }
);

export const deleteCircular = createAsyncThunk<
    any,
    {
        id: string;
    },
    {
        rejectValue: {
            msg: string;
        };
    }
>(
    "/circular/deleteCircular",
    async (payload, { fulfillWithValue, rejectWithValue, dispatch }) => {
        var data;
        try {
            const response = await SupaClient.from('circulars')
                .delete().eq('circular_for', { payload.id });

            const data = response.data;
            data = response.data;
            dispatch(getCirculars());
            return fulfillWithValue(data);
        } catch (error: any) {
            return rejectWithValue({ msg: "Something went wrong !" });
        }
    }
);

interface InitialState {
    postProps: {
        props: UploadProps;
        pending: boolean;
        error: string | null;
    };
    circulars: {
        data: [];
        pending: boolean;
        error: string | null;
    };
}

interface UploadProps {
    for: string;
    branch: string;
    category: string;
    url: string;
    year: string;
    info: string;
}

interface thunkArg extends Pick<UploadProps, "info" | "url"> { }

const initialState: InitialState = {
    postProps: {
        props: {
            branch: "",
            category: "",
            for: "",
            url: "",
            year: "",
            info: "",
        },
        pending: false,
        error: null,
    },
    circulars: {
        data: [],
        pending: false,
        error: null,
    },
};

export const CircularsSlice = createSlice({
    name: "circulars",
    reducers: {
        setCircularProps(state, action) {
            state.postProps.props = { ...state.postProps.props, ...action.payload };
        },
    },
    initialState,
    extraReducers: (builder) => {
        builder.addCase(uploadCircular.pending, (state) => {
            state.postProps.pending = true;
        })
        builder.addCase(uploadCircular.fulfilled, (state, { payload }) => {
            state.postProps.pending = false;
            state = initialState;
            toast.success("Cicular posted successfully");
        })
        builder.addCase(uploadCircular.rejected, (state, { payload }) => {
            state.postProps.pending = false;
            state.error = payload?.msg;
        });

        builder.addCase(deleteCircular.pending, (state) => {
            state.postProps.pending = true;
        })
        builder.addCase(deleteCircular.fulfilled, (state) => {
            state.postProps.pending = false;
            toast.success("Cicular deleted successfully");
        })
        builder.addCase(deleteCircular.rejected, (state, { payload }) => {
            state.postProps.pending = false;
            state.error = payload?.msg;
        });

        builder.addCase(getCirculars.pending, (state) => {
            state.circulars.pending = true;
        })
        builder.addCase(getCirculars.fulfilled, (state, { payload }) => {
            state.circulars.pending = false;
            state.circulars.data = payload;
        })
        builder.addCase(getCirculars.rejected, (state, { payload }) => {
            state.circulars.pending = false;
            state.error = payload?.msg;
        });

        builder.addCase(getCircularsByStaff.pending, (state) => {
            state.circulars.pending = true;
        })
        builder.addCase(getCircularsByStaff.fulfilled, (state, { payload }) => {
            state.circulars.pending = false;
            state.circulars.data = payload;
        })
        builder.addCase(getCircularsByStaff.rejected, (state, { payload }) => {
            state.circulars.pending = false;
            state.error = payload?.msg;
        });

        builder.addCase(getCircularsByStudent.pending, (state) => {
            state.circulars.pending = true;
        })
        builder.addCase(getCircularsByStudent.fulfilled, (state, { payload }) => {
            state.circulars.pending = false;
            state.circulars.data = payload;
        })
        builder.addCase(getCircularsByStudent.rejected, (state, { payload }) => {
            state.circulars.pending = false;
            state.error = payload?.msg;
        });
    },
});

export const { setCircularProps } = CircularsSlice.actions;