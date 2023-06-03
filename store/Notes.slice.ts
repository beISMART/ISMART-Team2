import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store/index";

interface Note {
  id: string;
  title: string;
  content: string;
}

interface NotesState {
  notes: Note[];
  loading: boolean;
  error: string | null;
}

const initialState: NotesState = {
  notes: [],
  loading: false,
  error: null,
};

export const fetchNotes = createAsyncThunk("notes/fetchNotes", async () => {
  try {
    const response = await axios.get("/api/notes");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch notes");
  }
});

export const addNote = createAsyncThunk("notes/addNote", async (note: Note) => {
  try {
    const response = await axios.post("/api/notes", note);
    return response.data;
  } catch (error) {
    throw new Error("Failed to add note");
  }
});

export const deleteNote = createAsyncThunk("notes/deleteNote", async (noteId: string) => {
  try {
    await axios.delete(`/api/notes/${noteId}`);
    return noteId;
  } catch (error) {
    throw new Error("Failed to delete note");
  }
});

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
        state.notes.push(action.payload);
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
        state.error = action.error.message ?? "Failed to delete note";
      });
  },
});
