import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SupaClient } from "../utils/supabase"; // Assuming you have a SupaClient instance


interface notes {
  id: string;
  title: string;
  unit_no: string;
  unit_name: string;
  uploaded_date: string;
  file_pdf: string;
  Sub_code: string;
  studentId: string;
  staffId: string;
  checked_notesId: string;
  Branch_name: string;
}

interface NotesState {
  notes: notes[];
  loading: boolean;
  error: string | null;
}

const initialState: NotesState = {
  notes: [],
  loading: false,
  error: null,
};

export const fetchNotes = createAsyncThunk<notes[], void, { rejectValue: Error }>(
  "notes/fetchNotes",
  async (_Payload ,{fulfillWithValue}) => {
    try {
      const response = await SupaClient.from("notes").select(
        "*").eq('Sub_code ','r99ui')
      ;
      return fulfillWithValue(response.data as notes[]);
    } catch (error) {
      throw new Error("Failed to fetch notes");
    }
  }
);


export const addNote = createAsyncThunk<notes[], void, { rejectValue: Error }>(
  "notes/addNote",
  async (_Payload ,{fulfillWithValue}) => {
    try {
      const response = await SupaClient.from("notes").select(
        "*,title,unit_no,unit_name,uploaded_date,file_pdf")
      ;
      return fulfillWithValue(response.data as notes[]);
    } catch (error) {
      throw new Error("Failed to add notes");
    }
  }
);

export const deleteNote = createAsyncThunk(
  "notes/deleteNote",
  async (notesId: string) => {
    try {
      const { error } = await SupaClient.from("notes")
        .delete()
        .eq("id", notesId);
      if (error) {
        throw new Error("Failed to delete notes");
      }
      return notesId;
    } catch (error) {
      throw new Error("Failed to delete notes");
    }
  }
);


export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = action.payload;
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch notes";
      })
      .addCase(addNote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNote.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = action.payload;
      })
      .addCase(addNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to add note";
      })
      .addCase(deleteNote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteNote.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = state.notes.filter((note) => note.id !== action.payload);
      })
      .addCase(deleteNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ??

 "Failed to delete note";
      });
  },
});

export default notesSlice.reducer;