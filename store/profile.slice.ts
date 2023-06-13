import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SupaClient } from "../utils/supabase";

interface InitialStateProps {
  data: any [];
  isLoading: boolean;
  error: string | null | undefined;
}

interface Profile {
    userid: string,
    
    // MNETION YOUR ACTOR ATTRIBUTES / PROPERTIES HERE
    
}

const initialState: InitialStateProps = {
  data: [],
  isLoading: false,
  error: null,
};

export const Profile = createSlice({
    name: 'Profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      
        builder.addCase(retrieveFilter.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        builder.addCase(retrieveFilter.fulfilled, (state, {payload}) => {
          state.isLoading = false;
          state.data = payload;
        })
        builder.addCase(retrieveFilter.rejected, (state, {payload}) => {
          state.isLoading = false;
          state.error = payload?.msg;
        });

        builder.addCase(updateProfile.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          builder.addCase(updateProfile.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.data = payload;
          })
          builder.addCase(updateProfile.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload?.msg;
          });
    },
  });

  export const retrieveFilter = createAsyncThunk<
  any,
  { id:string,
  },
  {
    rejectValue: {
      msg: string;
    };
  }
>("/Profile/retrieveFilter",
    async ( payload, { fulfillWithValue, rejectWithValue } ) => {
      try {
        const response = await SupaClient.from('user_profile')//INSTEAD OF "user_profile" entity mention your user entity name
        .select("*")
        .eq("id", payload.userid)
        
        const data = response.data;
        return fulfillWithValue(data);
      } catch (e) {
        return rejectWithValue({ msg: "No records found in Books History !" });
      }          
      }
  );

  export const updateProfile = createAsyncThunk<
  any,
  {
    id: string,
},
  {
    rejectValue: {
      msg: string;
    };
  }
>("/Profile/updateProfile",
    async ( payload, { fulfillWithValue, rejectWithValue } ) => {
      try {
        const response = await SupaClient.from('books')
        .update({ name:payload.name, phone_no: payload.phone}) //LIST ALL THE ATTRIBUTES TO BE UPDATED HERE
        .eq('id', payload.id)
        .select() 

        const data = response.data;
        return fulfillWithValue({ msg: "Book Deleted Successfully!" });

      } catch (e) {
        return rejectWithValue({ msg: "Something went wrong!" });
      }          
      }
  );